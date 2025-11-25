"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { Plus, Download, RefreshCw, CheckCircle, MessageSquare, X } from "lucide-react";
import { format } from "date-fns";

/* ---------- axios ---------- */
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
axios.interceptors.request.use((cfg) => {
  const t = typeof window !== "undefined" ? window.localStorage.getItem("access_token") : "";
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

/* ---------- query client ---------- */
const queryClient = new QueryClient();

/* ---------- types ---------- */
type Task = {
  id: number;
  dept: string | null;
  bank: string | null;
  issue: string | null;
  responsible: string | null;
  status: string;
  remark: string | null;
  created_at: string;
  updated_at: string;
};

type Update = {
  id: number;
  status: string | null;
  update_text: string | null;
  created_at: string;
  updated_by_name: string;
};

/* ---------- role hook ---------- */
function useRole() {
  const [role, setRole] = useState<string>("");
  if (typeof window === "undefined") return role;
  const token = window.localStorage.getItem("access_token");
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.role && payload.role !== role) setRole(payload.role);
    } catch {}
  }
  return role;
}

/* ---------- main component ---------- */
function UitTaskBoard() {
  const [selected, setSelected] = useState<Task | null>(null);
  const [updateText, setUpdateText] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const role = useRole();

  /* ---------- queries ---------- */
  const { data = [], isLoading, refetch } = useQuery<Task[]>({
    queryKey: ["uit-tasks"],
    queryFn: () => axios.get("/uit-tasks").then((r) => r.data),
  });

  const { data: updates = [] } = useQuery<Update[]>({
    queryKey: ["uit-updates", selected?.id],
    queryFn: () => axios.get(`/uit-tasks/${selected?.id}/updates`).then((r) => r.data),
    enabled: !!selected,
  });

  /* ---------- mutations ---------- */
  const createMut = useMutation({
    mutationFn: (data: Partial<Task>) => axios.post("/uit-tasks", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uit-tasks"] });
      setShowCreate(false);
    },
  });

  const updateMut = useMutation({
    mutationFn: (data: { status?: string; update_text?: string }) =>
      axios.post(`/uit-tasks/${selected!.id}/updates`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uit-updates", selected?.id] });
      setUpdateText("");
      setUpdateStatus("");
    },
  });

  const completeMut = useMutation({
    mutationFn: (id: number) =>
      axios.post(`/uit-tasks/my/${id}/complete`, { note: "" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uit-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["uit-updates", selected?.id] });
    },
  });

  /* ---------- helpers ---------- */
  const badgeColor = (s: string) =>
    s === "Done"
      ? "bg-green-100 text-green-800"
      : s === "Pending"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-gray-100 text-gray-800";

  /* ---------- render ---------- */
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* LEFT – narrow card list */}
      <aside className="w-80 border-r bg-white flex flex-col gap-4 overflow-y-auto p-4 shadow-sm">
        {/* header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-800">UIT Tasks</h1>
          <div className="flex gap-2">
            {role === "superadmin" && (
              <>
                <button
                  onClick={() => setShowCreate((s) => !s)}
                  className="flex items-center gap-1 px-2 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  <Plus className="h-4 w-4" /> {showCreate ? "Hide" : "Add"}
                </button>
                <button
                  onClick={() => refetch()}
                  className="p-1 rounded border hover:bg-slate-100"
                  title="Refresh"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* inline create form */}
        {showCreate && (
          <div className="border rounded-lg p-3 bg-slate-50 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                createMut.mutate({
                  dept: fd.get("dept") as string,
                  bank: fd.get("bank") as string,
                  issue: fd.get("issue") as string,
                  responsible: fd.get("responsible") as string,
                  status: fd.get("status") as string,
                  remark: fd.get("remark") as string,
                });
              }}
            >
              <input name="dept" placeholder="Dept" required className="w-full px-2 py-1 border rounded" />
              <input name="bank" placeholder="Bank" required className="w-full px-2 py-1 border rounded" />
              <input name="responsible" placeholder="Responsible" required className="w-full px-2 py-1 border rounded" />
              <select name="status" className="w-full px-2 py-1 border rounded">
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
              </select>
              <textarea name="issue" placeholder="Issue" required rows={3} className="w-full px-2 py-1 border rounded" />
              <textarea name="remark" placeholder="Remark" rows={2} className="w-full px-2 py-1 border rounded" />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowCreate(false)} className="px-3 py-1 border rounded hover:bg-slate-100">Cancel</button>
                <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Save</button>
              </div>
            </form>
          </div>
        )}

        {/* cards */}
        {isLoading ? (
          <div className="text-center py-4 text-sm text-slate-500">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center py-4 text-sm text-slate-500">No tasks</div>
        ) : (
          <div className="space-y-3">
            {data.map((task) => (
              <div
                key={task.id}
                onClick={() => setSelected(task)}
                className={`border rounded-lg p-3 cursor-pointer transition ${
                  selected?.id === task.id ? "ring-2 ring-indigo-500" : "hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-slate-800">#{task.id}</span>
                      <span className={`px-2 py-0.5 text-xs rounded ${badgeColor(task.status)}`}>{task.status}</span>
                    </div>
                    <p className="text-sm text-slate-700">{task.issue?.slice(0, 60)}...</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {task.dept} · {task.bank} · {task.responsible}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{format(new Date(task.created_at), "dd/MM/yyyy HH:mm")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* RIGHT – detail pane */}
      <main className="flex-1 p-6 overflow-y-auto">
        {selected ? (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 ring-1 ring-slate-100">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Task #{selected.id}</h2>
              <span className={`px-3 py-1 rounded text-sm ${badgeColor(selected.status)}`}>{selected.status}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-slate-500">Dept</p>
                <p className="text-slate-800">{selected.dept ?? "-"}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Bank</p>
                <p className="text-slate-800">{selected.bank ?? "-"}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Responsible</p>
                <p className="text-slate-800">{selected.responsible ?? "-"}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Updated</p>
                <p className="text-slate-800">{format(new Date(selected.updated_at), "dd/MM/yyyy HH:mm")}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-slate-500">Issue</p>
                <p className="text-slate-800 whitespace-pre-wrap">{selected.issue ?? "-"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-slate-500">Remark</p>
                <p className="text-slate-800 whitespace-pre-wrap">{selected.remark ?? "-"}</p>
              </div>
            </div>

            {/* add update */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2 text-slate-800">Add Update</h3>
              <div className="flex gap-2">
                <select
                  className="border rounded px-3 py-2"
                  value={updateStatus}
                  onChange={(e) => setUpdateStatus(e.target.value)}
                >
                  <option value="">Choose status</option>
                  <option value="Open">Open</option>
                  <option value="Pending">Pending</option>
                  <option value="Done">Done</option>
                </select>
                <textarea
                  className="flex-1 border rounded px-3 py-2"
                  placeholder="Update text"
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                  rows={2}
                />
                <button
                  onClick={() => updateMut.mutate({ status: updateStatus, update_text: updateText })}
                  disabled={!updateText.trim()}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
                >
                  <CheckCircle className="mr-2 h-4 w-4" /> Add
                </button>
              </div>
            </div>

            {/* timeline */}
            <div className="mt-6 space-y-3">
              {updates.length === 0 ? (
                <p className="text-slate-500 text-sm">No updates yet</p>
              ) : (
                updates.map((u) => (
                  <div key={u.id} className="border-l-2 border-slate-200 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-slate-700">{u.updated_by_name}</span>
                      <span className={`px-2 py-0.5 text-xs rounded ${badgeColor(u.status ?? "")}`}>
                        {u.status ?? "—"}
                      </span>
                      <span className="text-xs text-slate-400">{format(new Date(u.created_at), "dd/MM/yyyy HH:mm")}</span>
                    </div>
                    <p className="text-sm text-slate-600">{u.update_text ?? "—"}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-500">Click a task on the left to see details</div>
        )}
      </main>

      {/* create modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">New UIT Task</h2>
              <button onClick={() => setShowCreate(false)} className="text-slate-500 hover:text-black"><X className="h-5 w-5" /></button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                createMut.mutate({
                  dept: fd.get("dept") as string,
                  bank: fd.get("bank") as string,
                  issue: fd.get("issue") as string,
                  responsible: fd.get("responsible") as string,
                  status: fd.get("status") as string,
                  remark: fd.get("remark") as string,
                });
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <input name="dept" placeholder="Dept" required className="border rounded px-3 py-2" />
                <input name="bank" placeholder="Bank" required className="border rounded px-3 py-2" />
                <input name="responsible" placeholder="Responsible" required className="border rounded px-3 py-2" />
                <select name="status" className="border rounded px-3 py-2">
                  <option value="Open">Open</option>
                  <option value="Pending">Pending</option>
                  <option value="Done">Done</option>
                </select>
                <textarea name="remark" placeholder="Remark" className="border rounded px-3 py-2" rows={3} />
              </div>
              <textarea name="issue" placeholder="Issue" required rows={4} className="border rounded px-3 py-2 w-full mt-4" />
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowCreate(false)} className="px-4 py-2 border rounded-lg hover:bg-slate-100">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function UitTaskPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <UitTaskBoard />
    </QueryClientProvider>
  );
}