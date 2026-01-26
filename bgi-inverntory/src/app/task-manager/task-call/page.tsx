"use client";

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

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

function SuperCallsBoard() {
  const router = useRouter();
  const [selected, setSelected] = useState<Task | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "open" | "in_progress" | "completed">("all");
  const [assigneeFilter, setAssigneeFilter] = useState<string>("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Task>>({});

  const { data = [], isLoading, refetch } = useQuery<Task[]>({
    queryKey: ["all-tasks"],
    queryFn: async () => (await axios.get("/tasks/all")).data,
  });

  const { data: timeline = [] } = useQuery<Update[]>({
    queryKey: ["timeline", selected?.id],
    queryFn: () => axios.get(`/tasks/${selected?.id}/timeline`).then((r) => r.data),
    enabled: !!selected,
  });

  const assigneeOptions = useMemo(() => {
    const names = Array.from(new Set(data.map((d) => d.assigned_to_name).filter(Boolean)));
    return ["all", ...names];
  }, [data]);

  const filtered = useMemo(() => {
    let base = data
      .filter((t) => (filterStatus === "all" ? true : t.status === filterStatus))
      .filter((t) =>
        `${t.task_type} ${t.merchant_name || ''} ${t.address || ''} ${t.problem_type || ''} ${t.assigned_to_name || ''} ${t.tid || ''} ${t.mid || ''} ${t.bank}`
          .toLowerCase().includes(search.toLowerCase())
      );
    if (assigneeFilter !== "all") base = base.filter((t) => t.assigned_to_name === assigneeFilter);
    if (dateFrom) base = base.filter((t) => new Date(t.create_time) >= new Date(dateFrom));
    if (dateTo) base = base.filter((t) => new Date(t.create_time) <= new Date(dateTo));
    return base;
  }, [data, filterStatus, search, assigneeFilter, dateFrom, dateTo]);

  const completeMut = useMutation({
    mutationFn: (id: number) => axios.post(`/tasks/my/${id}/complete`, { note: "Task completed" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-tasks"] });
      setSelected(null); setIsEditing(false);
    },
  });

  const updateTaskMut = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => axios.put(`/tasks/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-tasks"] });
      setIsEditing(false);
    },
  });

  useEffect(() => {
    if (selected) {
      setFormData({
        merchant_name: selected.merchant_name || '', phone: selected.phone || '',
        address: selected.address || '', tid: selected.tid || '', mid: selected.mid || '',
        sim_serial: selected.sim_serial || '', operator: selected.operator || '',
        problem_type: selected.problem_type || '', comment: selected.comment || '',
        bank: selected.bank, task_type: selected.task_type, assigned_to: 1,
      });
      setIsEditing(false);
    }
  }, [selected]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!selected) return;
    if (formData.tid && formData.tid.length !== 8) { alert("TID must be 8 characters"); return; }
    if (formData.mid && formData.mid.length !== 15) { alert("MID must be 15 characters"); return; }
    updateTaskMut.mutate({ id: selected.id, data: { ...formData, assigned_to: 1 } });
  };

  const statusColor = (s: Task["status"]) => 
    s === "completed" ? "bg-green-300 text-green-900" : 
    s === "in_progress" ? "bg-blue-300 text-blue-900" : "bg-yellow-300 text-yellow-900";

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      {/* Header */}
      <div className="bg-[#f0f2f5] p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff]">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-bold text-gray-800">📞 Call Manager</h1>
          
          <div className="flex items-center gap-3 flex-wrap flex-1 max-w-4xl">
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 text-sm focus:outline-none" />
            
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm">
              <option value="all">All Status</option><option value="open">Open</option>
              <option value="in_progress">In Progress</option><option value="completed">Completed</option>
            </select>

            <select value={assigneeFilter} onChange={(e) => setAssigneeFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm">
              {assigneeOptions.map(name => <option key={name} value={name}>{name === "all" ? "All Assignees" : name}</option>)}
            </select>

            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-sm" />
            <span className="text-gray-500">to</span>
            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-sm" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-semibold">{filtered.length} calls</span>
            <button onClick={() => refetch()}
              className="p-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all">
              {isLoading ? <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin" /> : "🔄"}
            </button>
            <button onClick={() => router.push("/task-manager/create-task")}
              className="px-4 py-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-semibold text-gray-800 text-sm">
              ➕ Add Call
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Task Cards (280px width) */}
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
                {t.phone && <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Phone:</span> <span className="font-mono">{t.phone}</span></p>}
                {t.address && <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Address:</span> <span className="font-mono">{t.address}</span></p>}
                {t.assigned_to_name && <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Assigned To:</span> <span className="font-mono">{t.assigned_to_name}</span></p>}
                <p className="text-xs text-gray-500 mt-2">📅 {new Date(t.create_time).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#f0f2f5]">
          {selected ? (
            <div className="max-w-5xl mx-auto">
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Call #{selected.id} – {selected.task_type}</h1>
                <div className="flex gap-2">
                  {!isEditing ? (
                    <button onClick={() => setIsEditing(true)}
                      className="px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800">
                      ✏️ Edit
                    </button>
                  ) : (
                    <>
                      <button onClick={() => { setIsEditing(false); setFormData({ merchant_name: selected.merchant_name || '', phone: selected.phone || '', address: selected.address || '', tid: selected.tid || '', mid: selected.mid || '', sim_serial: selected.sim_serial || '', operator: selected.operator || '', problem_type: selected.problem_type || '', comment: selected.comment || '' }); }}
                        className="px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] font-bold text-gray-600">❌ Cancel</button>
                      <button onClick={handleSave} disabled={updateTaskMut.isPending}
                        className="px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800 disabled:opacity-50">
                        {updateTaskMut.isPending ? <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin mx-auto" /> : "💾 Save"}
                      </button>
                    </>
                  )}
                  {selected.status !== "completed" && (
                    <button onClick={() => completeMut.mutate(selected.id)} disabled={completeMut.isPending}
                      className="px-6 py-2 rounded-xl bg-green-300 text-green-900 shadow-[4px_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold disabled:opacity-50">
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
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">DBA Name</label>
                      <input type="text" value={formData.merchant_name || ''} onChange={(e) => handleInputChange('merchant_name', e.target.value)} disabled={!isEditing}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">TID (8 chars)</label>
                      <input type="text" value={formData.tid || ''} onChange={(e) => handleInputChange('tid', e.target.value)} disabled={!isEditing} maxLength={8}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">MID (15 chars)</label>
                      <input type="text" value={formData.mid || ''} onChange={(e) => handleInputChange('mid', e.target.value)} disabled={!isEditing} maxLength={15}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50" /></div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">ADDRESS</label>
                      <textarea value={formData.address || ''} onChange={(e) => handleInputChange('address', e.target.value)} disabled={!isEditing} rows={3}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none disabled:opacity-50" /></div>
                    <div className="space-y-3">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-1">PHONE</label>
                        <input type="text" value={formData.phone || ''} onChange={(e) => handleInputChange('phone', e.target.value)} disabled={!isEditing}
                          className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-1">OPERATOR</label>
                        <select value={formData.operator || ''} onChange={(e) => handleInputChange('operator', e.target.value)} disabled={!isEditing}
                          className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50">
                          <option value="">Select</option><option value="ROBI">ROBI</option>
                          <option value="GRAMEENPHONE">GRAMEENPHONE</option><option value="BANGLALINK">BANGLALINK</option>
                        </select></div>
                    </div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">SIM Serial</label>
                      <input type="text" value={formData.sim_serial || ''} onChange={(e) => handleInputChange('sim_serial', e.target.value)} disabled={!isEditing} maxLength={30}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">Problem Type</label>
                      <input type="text" value={formData.problem_type || ''} onChange={(e) => handleInputChange('problem_type', e.target.value)} disabled={!isEditing}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50" /></div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">COMMENT</label>
                  <textarea value={formData.comment || ''} onChange={(e) => handleInputChange('comment', e.target.value)} disabled={!isEditing} rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none disabled:opacity-50" />
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
              Select a call on the left to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SuperCallsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuperCallsBoard />
    </QueryClientProvider>
  );
}