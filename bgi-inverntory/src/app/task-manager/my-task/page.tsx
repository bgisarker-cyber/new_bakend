"use client";

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";

// Types
type Task = {
  id: number;
  task_type: string;
  merchant_name: string | null;
  phone: string | null;
  bank: string;
  address: string | null;
  problem_type: string | null;
  comment: string | null;
  status: "open" | "in_progress" | "completed";
  assigned_to: number | null;
  assigned_to_name: string | null;
  create_time: string;
  update_time: string;
  tid: string | null;
  mid: string | null;
  sim_serial?: string | null;
  operator?: string | null;
};

type Update = {
  id: number;
  task_id: number;
  updated_by: number;
  status: string;
  update_text: string | null;
  create_time: string;
  update_time: string;
  assigned_to_name: string | null;
};

type Bank = { id: number; name: string };
type ProblemType = { id: number; name: string };
type User = { id: number; username: string; role: string };

// Config
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
axios.interceptors.request.use((cfg) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem("access_token") : null;
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

const queryClient = new QueryClient();

function MyTasksBoard() {
  const [selected, setSelected] = useState<Task | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "open" | "in_progress" | "completed">("all");
  const [bankFilter, setBankFilter] = useState<string>("all");
  const [problemTypeFilter, setProblemTypeFilter] = useState<string>("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Task>>({});
  const [statusNote, setStatusNote] = useState("");

  // Queries
  const { data = [], isLoading, refetch } = useQuery<Task[]>({
    queryKey: ["my-tasks"],
    queryFn: async () => (await axios.get("/my-tasks")).data,
  });

  const { data: timeline = [] } = useQuery<Update[]>({
    queryKey: ["my-timeline", selected?.id],
    queryFn: () => axios.get(`/my-tasks/${selected?.id}/timeline`).then((r) => r.data),
    enabled: !!selected,
  });

  const { data: banks = [] } = useQuery<Bank[]>({
    queryKey: ["banks"],
    queryFn: async () => (await axios.get("/tasks/banks")).data,
    staleTime: 5 * 60 * 1000,
  });

  const { data: problemTypes = [] } = useQuery<ProblemType[]>({
    queryKey: ["problem-types"],
    queryFn: async () => (await axios.get("/tasks/problem-types")).data,
    staleTime: 5 * 60 * 1000,
  });

  // Filter options
  const bankOptions = useMemo(() => {
    const names = Array.from(new Set(banks.map((b) => b.name)));
    return ["all", ...names];
  }, [banks]);

  const problemTypeOptions = useMemo(() => {
    const names = Array.from(new Set(problemTypes.map((pt) => pt.name)));
    return ["all", ...names];
  }, [problemTypes]);

  // Filtered tasks
  const filtered = useMemo(() => {
    let base = data
      .filter((t) => (filterStatus === "all" ? true : t.status === filterStatus))
      .filter((t) => (bankFilter === "all" ? true : t.bank === bankFilter))
      .filter((t) => (problemTypeFilter === "all" ? true : t.problem_type === problemTypeFilter))
      .filter((t) =>
        `${t.task_type} ${t.merchant_name || ''} ${t.address || ''} ${t.problem_type || ''} ${t.tid || ''} ${t.mid || ''} ${t.bank} ${t.phone || ''}`
          .toLowerCase().includes(search.toLowerCase())
      );
    
    if (dateFrom) base = base.filter((t) => new Date(t.create_time) >= new Date(dateFrom));
    if (dateTo) base = base.filter((t) => new Date(t.create_time) <= new Date(dateTo));
    return base;
  }, [data, filterStatus, bankFilter, problemTypeFilter, search, dateFrom, dateTo]);

  // Mutations
  const updateTaskMut = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => axios.put(`/my-tasks/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-tasks"] });
      setIsEditing(false);
    },
  });

  const updateStatusMut = useMutation({
    mutationFn: ({ id, status, note }: { id: number; status: string; note: string }) =>
      axios.put(`/my-tasks/${id}/status`, { status_val: status, note }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["my-timeline", selected?.id] });
      setStatusNote("");
      setIsEditing(false); // Exit edit mode when status changes to completed
    },
  });

  // Effects
  useEffect(() => {
    if (selected) {
      setFormData({
        merchant_name: selected.merchant_name || '',
        phone: selected.phone || '',
        address: selected.address || '',
        tid: selected.tid || '',
        mid: selected.mid || '',
        sim_serial: selected.sim_serial || '',
        operator: selected.operator || '',
        problem_type: selected.problem_type || '',
        comment: selected.comment || '',
        bank: selected.bank,
        task_type: selected.task_type,
        // assigned_to is NOT included - it's managed separately
        status: selected.status,
      });
      setIsEditing(false);
      setStatusNote("");
    }
  }, [selected]);

  // Handlers
  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!selected) return;
    
    // Add validation
    if (formData.task_type === "Call" && !formData.problem_type) {
      alert("Problem type is required for Call tasks");
      return;
    }
    
    if (formData.tid && formData.tid.length !== 8) {
      alert("TID must be 8 characters");
      return;
    }
    
    if (formData.mid && formData.mid.length !== 15) {
      alert("MID must be 15 characters");
      return;
    }
    
    // Send update data WITHOUT assigned_to - it's not editable
    const updateData = {
      bank: formData.bank,
      merchant_name: formData.merchant_name || null,
      tid: formData.tid,
      mid: formData.mid,
      address: formData.address || null,
      task_type: formData.task_type,
      phone: formData.phone || null,
      operator: formData.operator || null,
      problem_type: formData.problem_type || null,
      comment: formData.comment || null,
      sim_serial: formData.sim_serial || null,
      assigned_to: selected.assigned_to, // Keep the original assignee
    };
    
    updateTaskMut.mutate({ id: selected.id, data: updateData });
  };

  const handleStatusChange = (newStatus: string) => {
    if (!selected) return;
    updateStatusMut.mutate({ 
      id: selected.id, 
      status: newStatus, 
      note: statusNote || `Status changed to ${newStatus}` 
    });
  };

  const statusColor = (s: Task["status"]) =>
    s === "completed" ? "bg-green-300 text-green-900" :
    s === "in_progress" ? "bg-blue-300 text-blue-900" : "bg-yellow-300 text-yellow-900";

  const statusButtonColor = (s: string) =>
    s === "completed" ? "bg-green-300 text-green-900" :
    s === "in_progress" ? "bg-blue-300 text-blue-900" : "bg-yellow-300 text-yellow-900";

  // Mobile back button
  const handleBackToList = () => {
    setSelected(null);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      {/* Header */}
      <div className="bg-[#f0f2f5] p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff]">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            {/* Mobile Back Button */}
            {selected && (
              <button
                onClick={handleBackToList}
                className="md:hidden p-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all"
              >
                ← Back
              </button>
            )}
            <h1 className="text-2xl font-bold text-gray-800">📋 My CallS</h1>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap flex-1 max-w-4xl">
            <input
              type="text"
              placeholder="Search my tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 text-sm focus:outline-none"
            />
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={bankFilter}
              onChange={(e) => setBankFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm"
            >
              <option value="all">All Banks</option>
              {bankOptions.slice(1).map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>

            <select
              value={problemTypeFilter}
              onChange={(e) => setProblemTypeFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm"
            >
              <option value="all">All Problem Types</option>
              {problemTypeOptions.slice(1).map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>

            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-semibold">{filtered.length} tasks</span>
            <button
              onClick={() => refetch()}
              className="p-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all"
            >
              {isLoading ? <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin" /> : "🔄"}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
        {/* Left Panel - Task Cards */}
        <div className={`w-full md:w-[280px] border-r-0 md:border-r border-gray-300 overflow-y-auto p-3 bg-[#f0f2f5] ${selected ? 'hidden md:block' : 'block'}`}>
          <div className="space-y-2">
            {filtered.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelected(t)}
                className={`group relative p-3 rounded-xl cursor-pointer transition-all duration-200 transform ${
                  selected?.id === t.id
                    ? "bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff]"
                    : "bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] hover:scale-[1.01]"
                }`}
              >
                {/* Hover Indicator - Desktop only */}
                <div className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor(t.status)}`}>
                    {t.status.replace("_", " ").toUpperCase()}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-300 text-blue-900">{t.bank}</span>
                  {t.problem_type && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-300 text-purple-900">
                      {t.problem_type}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-sm text-gray-800 mb-2">{t.task_type}</h3>
                {t.merchant_name && (
                  <p className="text-xs text-gray-600 mb-1 truncate"><span className="font-semibold">DBA:</span> {t.merchant_name}</p>
                )}
                {t.phone && (
                  <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Phone:</span> <span className="font-mono">{t.phone}</span></p>
                )}
                {t.address && (
                  <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Address:</span> <span className="font-mono">{t.address}</span></p>
                )}
                {t.assigned_to_name && (
                  <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Assigned To:</span> <span className="font-mono">{t.assigned_to_name}</span></p>
                )}
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

        {/* Right Panel - Details */}
        <div className={`w-full md:flex-1 overflow-y-auto p-4 bg-[#f0f2f5] ${selected ? 'block' : 'hidden md:block'}`}>
          {selected ? (
            <div className="max-w-5xl mx-auto">
              {/* Mobile Header with Back */}
              <div className="md:hidden mb-4 flex items-center justify-between">
                <button
                  onClick={handleBackToList}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-semibold text-gray-800 text-sm"
                >
                  ← Back to Tasks
                </button>
                <span className="text-sm text-gray-600 font-semibold">Task #{selected.id}</span>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Task #{selected.id} – {selected.task_type}</h1>
                <div className="flex gap-2">
                  {/* Edit button hidden when status is completed */}
                  {selected.status !== "completed" && !isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 md:px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800 text-sm md:text-base"
                    >
                      ✏️ Edit
                    </button>
                  )}
                  {isEditing && (
                    <>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setFormData({
                            merchant_name: selected.merchant_name || '',
                            phone: selected.phone || '',
                            address: selected.address || '',
                            tid: selected.tid || '',
                            mid: selected.mid || '',
                            sim_serial: selected.sim_serial || '',
                            operator: selected.operator || '',
                            problem_type: selected.problem_type || '',
                            comment: selected.comment || '',
                            bank: selected.bank,
                            task_type: selected.task_type,
                            status: selected.status,
                          });
                          setStatusNote("");
                        }}
                        className="px-4 md:px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] font-bold text-gray-600 text-sm md:text-base"
                      >
                        ❌ Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={updateTaskMut.isPending}
                        className="px-4 md:px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800 disabled:opacity-50 text-sm md:text-base"
                      >
                        {updateTaskMut.isPending ? (
                          <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin mx-auto" />
                        ) : "💾 Save"}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Status Change Section - Only visible when editing and not completed */}
              {isEditing && selected.status !== "completed" && (
                <div className="mb-4 bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm font-semibold text-gray-700">Status:</span>
                    <div className="flex gap-2">
                      {(["open", "in_progress", "completed"] as const).map((status) => (
                        <button
                          key={status}
                          onClick={() => handleStatusChange(status)}
                          disabled={updateStatusMut.isPending}
                          className={`px-3 py-1 rounded-lg font-bold text-xs shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all disabled:opacity-50 ${
                            selected.status === status ? statusButtonColor(status) : "bg-[#f0f2f5] text-gray-600"
                          }`}
                        >
                          {status.replace("_", " ").toUpperCase()}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Status change note (optional)"
                      value={statusNote}
                      onChange={(e) => setStatusNote(e.target.value)}
                      className="flex-1 min-w-[200px] px-3 py-1 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Form */}
              <div className="bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#fff] p-4 space-y-4">
                {/* Section 1 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#fff] p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Bank *</label>
                      <select
                        value={formData.bank || ''}
                        onChange={(e) => handleInputChange('bank', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#fff] border-0 text-gray-800 disabled:opacity-50"
                      >
                        <option value="">Select Bank</option>
                        {banks.map((bank) => (
                          <option key={bank.id} value={bank.name}>
                            {bank.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">DBA Name</label>
                      <input
                        type="text"
                        value={formData.merchant_name || ''}
                        onChange={(e) => handleInputChange('merchant_name', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">TID (8 chars)</label>
                      <input
                        type="text"
                        value={formData.tid || ''}
                        onChange={(e) => handleInputChange('tid', e.target.value)}
                        disabled={!isEditing}
                        maxLength={8}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">MID (15 chars)</label>
                      <input
                        type="text"
                        value={formData.mid || ''}
                        onChange={(e) => handleInputChange('mid', e.target.value)}
                        disabled={!isEditing}
                        maxLength={15}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#fff] p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">ADDRESS</label>
                      <textarea
                        value={formData.address || ''}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">PHONE</label>
                        <input
                          type="text"
                          value={formData.phone || ''}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">OPERATOR</label>
                        <select
                          value={formData.operator || ''}
                          onChange={(e) => handleInputChange('operator', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                        >
                          <option value="">Select</option>
                          <option value="ROBI">ROBI</option>
                          <option value="GRAMEENPHONE">GRAMEENPHONE</option>
                          <option value="BANGLALINK">BANGLALINK</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">SIM Serial</label>
                      <input
                        type="text"
                        value={formData.sim_serial || ''}
                        onChange={(e) => handleInputChange('sim_serial', e.target.value)}
                        disabled={!isEditing}
                        maxLength={30}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Problem Type</label>
                      <select
                        value={formData.problem_type || ''}
                        onChange={(e) => handleInputChange('problem_type', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                      >
                        <option value="">Select Problem Type</option>
                        {problemTypes.map((pt) => (
                          <option key={pt.id} value={pt.name}>
                            {pt.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#fff] p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">COMMENT</label>
                  <textarea
                    value={formData.comment || ''}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Timeline */}
                <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#fff] p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-3">Update Timeline</h2>
                  {timeline.length === 0 ? (
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-sm">ℹ️ No updates yet</div>
                  ) : (
                    <div className="space-y-3">
                      {timeline.map((u) => (
                        <div key={u.id} className="bg-[#f0f2f5] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#fff] p-3">
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
              <div className="text-center p-8">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-lg">Select a task to view details</p>
                <p className="text-sm text-gray-400 mt-2">Tap a card from the list</p>
              </div>
            </div>
          )}
        </div>
      </div>
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