"use client";

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
axios.interceptors.request.use((cfg) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem("access_token") : null;
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

type Task = {
  id: number; task_type: string; merchant_name: string | null; phone: string | null;
  bank: string; address: string | null; problem_type: string | null; comment: string | null;
  status: "open" | "in_progress" | "completed"; assigned_to_name: string | null;
  create_time: string; update_time: string; tid: string | null; mid: string | null;
  sim_serial?: string | null; operator?: string | null;
};

type Update = {
  id: number; task_id: number; updated_by: number; status: string;
  update_text: string | null; create_time: string; update_time: string; assigned_to_name: string | null;
};

const queryClient = new QueryClient();

function MyTasksBoard() {
  const [selected, setSelected] = useState<Task | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "open" | "in_progress" | "completed">("all");
  const [formData, setFormData] = useState<Partial<Task>>({});
  const [statusUpdate, setStatusUpdate] = useState<"open" | "in_progress" | "completed">("open");
  const [updateNote, setUpdateNote] = useState("");
  const [showStatusDialog, setShowStatusDialog] = useState(false);

  // FIXED: Changed endpoint from /tasks/my to /my-tasks
  const { data = [], isLoading, refetch } = useQuery<Task[]>({
    queryKey: ["my-tasks"],
    queryFn: async () => (await axios.get("/my-tasks")).data,
  });

  const { data: timeline = [] } = useQuery<Update[]>({
    queryKey: ["my-timeline", selected?.id],
    queryFn: () => axios.get(`/my-tasks/${selected?.id}/timeline`).then((r) => r.data),
    enabled: !!selected,
  });

  const filtered = useMemo(() => {
    let base = data.filter((t) => (filterStatus === "all" ? true : t.status === filterStatus))
      .filter((t) => `${t.task_type} ${t.merchant_name || ''} ${t.address || ''} ${t.problem_type || ''} ${t.tid || ''} ${t.mid || ''} ${t.bank}`
        .toLowerCase().includes(search.toLowerCase()));
    return base;
  }, [data, filterStatus, search]);

  const updateStatusMut = useMutation({
    mutationFn: ({ id, status, note }: { id: number; status: string; note: string }) =>
      axios.put(`/my-tasks/${id}/status`, { status_val: status, note }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["my-timeline", selected?.id] });
      setShowStatusDialog(false);
      setUpdateNote("");
    },
  });

  const completeMut = useMutation({
    mutationFn: (id: number) => axios.post(`/my-tasks/${id}/complete`, { note: updateNote || "Task completed" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["my-timeline", selected?.id] });
      setSelected(null);
      setShowStatusDialog(false);
    },
  });

  useEffect(() => {
    if (selected) {
      setFormData({
        merchant_name: selected.merchant_name || '', phone: selected.phone || '',
        address: selected.address || '', tid: selected.tid || '', mid: selected.mid || '',
        sim_serial: selected.sim_serial || '', operator: selected.operator || '',
        problem_type: selected.problem_type || '', comment: selected.comment || '',
      });
      setStatusUpdate(selected.status);
    }
  }, [selected]);

  const statusColor = (s: Task["status"]) => 
    s === "completed" ? "bg-green-300 text-green-900" : 
    s === "in_progress" ? "bg-blue-300 text-blue-900" : "bg-yellow-300 text-yellow-900";

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      {/* Header */}
      <div className="bg-[#f0f2f5] p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff]">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-bold text-gray-800">📋 My Tasks</h1>
          
          <div className="flex items-center gap-3 flex-wrap">
            <input type="text" placeholder="Search my tasks..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 text-sm focus:outline-none min-w-[250px]" />
            
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm">
              <option value="all">All Status</option><option value="open">Open</option>
              <option value="in_progress">In Progress</option><option value="completed">Completed</option>
            </select>

            <span className="text-sm text-gray-600 font-semibold">{filtered.length} tasks</span>
            <button onClick={() => refetch()}
              className="p-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all">
              {isLoading ? <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin" /> : "🔄"}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        <div className="w-[280px] border-r border-gray-300 overflow-y-auto p-3 bg-[#f0f2f5]">
          <div className="space-y-2">
            {filtered.map((t) => (
              <div key={t.id} onClick={() => setSelected(t)}
                className={`p-3 rounded-xl cursor-pointer transition-all ${
                  selected?.id === t.id
                    ? "bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff]"
                    : "bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)]"
                }`}>
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor(t.status)}`}>
                    {t.status.replace("_", " ").toUpperCase()}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-300 text-blue-900">{t.bank}</span>
                </div>
                <h3 className="font-bold text-sm text-gray-800 mb-2">{t.task_type}</h3>
                {t.merchant_name && <p className="text-xs text-gray-600 mb-1 truncate"><span className="font-semibold">DBA:</span> {t.merchant_name}</p>}
                {t.tid && <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">TID:</span> <span className="font-mono">{t.tid}</span></p>}
                <p className="text-xs text-gray-500 mt-2">📅 {new Date(t.create_time).toLocaleDateString()}</p>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                <p className="text-lg">🎉</p>
                <p className="text-sm mt-2">No tasks found</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#f0f2f5]">
          {selected ? (
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Task #{selected.id} – {selected.task_type}</h1>
                <div className="flex gap-2">
                  <button onClick={() => setShowStatusDialog(true)}
                    className="px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800">
                    📝 Update Status
                  </button>
                  {selected.status !== "completed" && (
                    <button onClick={() => { setShowStatusDialog(true); setStatusUpdate("completed"); }}
                      className="px-6 py-2 rounded-xl bg-green-300 text-green-900 shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold">
                      ✅ Complete
                    </button>
                  )}
                </div>
              </div>

              {/* Form */}
              <div className="bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-4 space-y-4">
                {/* Section 1 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                 
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Bank</label>
                      <input type="text" value={selected.bank} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                      <input type="text" value={selected.status.replace("_", " ").toUpperCase()} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">DBA Name</label>
                      <input type="text" value={formData.merchant_name || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Task Type</label>
                      <input type="text" value={selected.task_type} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">TID</label>
                      <input type="text" value={formData.tid || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">MID</label>
                      <input type="text" value={formData.mid || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono opacity-50" /></div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">ADDRESS</label>
                      <textarea value={formData.address || ''} disabled rows={3} className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none opacity-50" /></div>
                    <div className="space-y-3">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-1">PHONE</label>
                        <input type="text" value={formData.phone || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-1">OPERATOR</label>
                        <input type="text" value={formData.operator || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                    </div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">SIM Serial</label>
                      <input type="text" value={formData.sim_serial || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Problem Type</label>
                      <input type="text" value={formData.problem_type || ''} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                  
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">COMMENT</label>
                    <textarea value={formData.comment || ''} disabled rows={4} className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none opacity-50" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Created</label>
                      <input type="text" value={new Date(selected.create_time).toLocaleString()} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Last Updated</label>
                      <input type="text" value={new Date(selected.update_time).toLocaleString()} disabled className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50" /></div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-3">Update Timeline</h2>
                  {timeline.length === 0 ? (
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-sm">ℹ️ No updates yet</div>
                  ) : (
                    <div className="space-y-3">
                      {timeline.map((u) => (
                        <div key={u.id} className="bg-[#f0f2f5] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColor(u.status as any)}`}>{u.status.toUpperCase()}</span>
                            <span className="text-xs text-gray-500">📅 {new Date(u.update_time).toLocaleString([], { dateStyle: "short", timeStyle: "short" })}</span>
                          </div>
                          <p className="text-sm text-gray-700 mb-1">{u.update_text || "—"}</p>
                          {u.assigned_to_name && <p className="text-xs text-gray-500">by <span className="font-semibold">{u.assigned_to_name}</span></p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-xl font-medium">
              Select a task on the left to view details
            </div>
          )}
        </div>
      </div>

      {/* Status Dialog */}
      {showStatusDialog && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#f0f2f5] rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_#ffffff] w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Update Task Status</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                <select value={statusUpdate} onChange={(e) => setStatusUpdate(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none">
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Note (optional)</label>
                <textarea value={updateNote} onChange={(e) => setUpdateNote(e.target.value)} rows={3}
                  placeholder="Add a note about this update..."
                  className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none resize-none" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => { setShowStatusDialog(false); setUpdateNote(""); }}
                className="flex-1 px-4 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-600">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (statusUpdate === "completed") {
                    completeMut.mutate(selected.id);
                  } else {
                    updateStatusMut.mutate({ id: selected.id, status: statusUpdate, note: updateNote });
                  }
                }}
                disabled={updateStatusMut.isPending || completeMut.isPending}
                className="flex-1 px-4 py-2 rounded-xl bg-blue-300 text-blue-900 shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12)] transition-all font-bold disabled:opacity-50">
                {(updateStatusMut.isPending || completeMut.isPending) ? (
                  <div className="w-5 h-5 border-2 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto" />
                ) : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MyTasksPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyTasksBoard />
    </QueryClientProvider>
  );
}