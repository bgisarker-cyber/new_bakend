"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Loader2 } from "lucide-react";

// ========================== TypeScript Types ==========================
type Bank = {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
};

type ProblemType = {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
};

type TabKey = "banks" | "problem-types";

// ========================== Main Component ==========================
const TaskSettingsPage = () => {
  const API_BASE = "http://127.0.0.1:8000"; // ✅ FIXED: Removed trailing spaces

  // Tab state
  const [activeTab, setActiveTab] = useState<TabKey>("banks");

  // Auth & loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState<string | null>(null);

  // Banks state
  const [banks, setBanks] = useState<Bank[]>([]);
  const [showBankForm, setShowBankForm] = useState(false);
  const [editingBank, setEditingBank] = useState<Bank | null>(null);
  const [bankFormData, setBankFormData] = useState({ name: "" });

  // Problem Types state
  const [problemTypes, setProblemTypes] = useState<ProblemType[]>([]);
  const [showProblemTypeForm, setShowProblemTypeForm] = useState(false);
  const [editingProblemType, setEditingProblemType] = useState<ProblemType | null>(null);
  const [problemTypeFormData, setProblemTypeFormData] = useState({ name: "" });

  // ========================== Auth Headers ==========================
  const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  // ========================== Check Superadmin ==========================
  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
    if (role !== "superadmin") {
      setError("Access Denied: Superadmin privileges required");
      setLoading(false);
    } else {
      fetchAllData();
    }
  }, []);

  // ========================== Fetch Data ==========================
  const fetchAllData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Please log in first.");

      // Fetch banks
      const banksRes = await fetch(`${API_BASE}/banks/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!banksRes.ok) throw new Error("Failed to load banks");
      const banksData = await banksRes.json();
      setBanks(banksData);

      // Fetch problem types
      const typesRes = await fetch(`${API_BASE}/problem-types/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!typesRes.ok) throw new Error("Failed to load problem types");
      const typesData = await typesRes.json();
      setProblemTypes(typesData);

      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  // ========================== Bank CRUD ==========================
  const handleCreateBank = async () => {
    if (!bankFormData.name.trim()) {
      alert("❌ Bank name is required");
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/banks/`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ name: bankFormData.name }),
      });
      if (!res.ok) throw new Error((await res.json()).detail || "Failed to create bank");

      alert("✅ Bank created successfully!");
      setBankFormData({ name: "" });
      setShowBankForm(false);
      fetchAllData();
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const handleUpdateBank = async () => {
    if (!editingBank || !bankFormData.name.trim()) {
      alert("❌ Bank name is required");
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/banks/${editingBank.id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ name: bankFormData.name }),
      });
      if (!res.ok) throw new Error((await res.json()).detail || "Failed to update bank");

      alert("✅ Bank updated successfully!");
      setBankFormData({ name: "" });
      setEditingBank(null);
      setShowBankForm(false);
      fetchAllData();
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const handleDeleteBank = async (id: number) => {
    if (!confirm("Are you sure you want to delete this bank?")) return;
    try {
      const res = await fetch(`${API_BASE}/banks/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error((await res.json()).detail || "Failed to delete bank");

      alert("✅ Bank deleted!");
      fetchAllData();
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const startEditBank = (bank: Bank) => {
    setEditingBank(bank);
    setBankFormData({ name: bank.name });
    setShowBankForm(true);
  };

  const cancelBankEdit = () => {
    setEditingBank(null);
    setBankFormData({ name: "" });
    setShowBankForm(false);
  };

  // ========================== Problem Type CRUD ==========================
  const handleCreateProblemType = async () => {
    if (!problemTypeFormData.name.trim()) {
      alert("❌ Problem type name is required");
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/problem-types/`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ name: problemTypeFormData.name }),
      });
      if (!res.ok) throw new Error((await res.json()).detail || "Failed to create problem type");

      alert("✅ Problem type created successfully!");
      setProblemTypeFormData({ name: "" });
      setShowProblemTypeForm(false);
      fetchAllData();
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const handleUpdateProblemType = async () => {
    if (!editingProblemType || !problemTypeFormData.name.trim()) {
      alert("❌ Problem type name is required");
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/problem-types/${editingProblemType.id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ name: problemTypeFormData.name }),
      });
      if (!res.ok) throw new Error((await res.json()).detail || "Failed to update problem type");

      alert("✅ Problem type updated successfully!");
      setProblemTypeFormData({ name: "" });
      setEditingProblemType(null);
      setShowProblemTypeForm(false);
      fetchAllData();
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const handleDeleteProblemType = async (id: number) => {
    if (!confirm("Are you sure you want to delete this problem type?")) return;
    try {
      const res = await fetch(`${API_BASE}/problem-types/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error((await res.json()).detail || "Failed to delete problem type");

      alert("✅ Problem type deleted!");
      fetchAllData();
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const startEditProblemType = (pt: ProblemType) => {
    setEditingProblemType(pt);
    setProblemTypeFormData({ name: pt.name });
    setShowProblemTypeForm(true);
  };

  const cancelProblemTypeEdit = () => {
    setEditingProblemType(null);
    setProblemTypeFormData({ name: "" });
    setShowProblemTypeForm(false);
  };

  // ========================== Table Columns ==========================
  const bankColumns: TableColumn<Bank>[] = [
    {
      name: "SL",
      selector: (row) => row.id,
      width: "60px",
      style: { fontSize: "14px", fontWeight: "500" },
    },
    {
      name: "Bank Name",
      selector: (row) => row.name,
      grow: 2,
      style: { fontSize: "14px", fontWeight: "500" },
    },
    {
      name: "Created At",
      selector: (row) => (row.created_at ? new Date(row.created_at).toLocaleDateString() : ""),
      style: { fontSize: "14px" },
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => startEditBank(row)}
            className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.1),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.12),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteBank(row.id)}
            className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.1),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.12),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            Delete
          </button>
        </div>
      ),
      width: "160px",
    },
  ];

  const problemTypeColumns: TableColumn<ProblemType>[] = [
    {
      name: "SL",
      selector: (row) => row.id,
      width: "60px",
      style: { fontSize: "14px", fontWeight: "500" },
    },
    {
      name: "Problem Type",
      selector: (row) => row.name,
      grow: 2,
      style: { fontSize: "14px", fontWeight: "500" },
    },
    {
      name: "Created At",
      selector: (row) => (row.created_at ? new Date(row.created_at).toLocaleDateString() : ""),
      style: { fontSize: "14px" },
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => startEditProblemType(row)}
            className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.1),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.12),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteProblemType(row.id)}
            className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.1),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.12),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            Delete
          </button>
        </div>
      ),
      width: "160px",
    },
  ];

  // ========================== Render UI ==========================
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]"><Loader2 className="w-10 h-10 text-gray-700 animate-spin" /></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]"><div className="bg-[#f0f2f5] rounded-2xl p-8 shadow-[10px_10px_18px_rgba(0,0,0,0.08),-8px_-8px_16px_#ffffff] text-red-600 font-semibold">{error}</div></div>;
  if (userRole !== "superadmin") {
    return <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]"><div className="bg-[#f0f2f5] rounded-2xl p-8 shadow-[10px_10px_18px_rgba(0,0,0,0.08),-8px_-8px_16px_#ffffff] text-red-600 font-semibold">Access Denied: Superadmin privileges required</div></div>;
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Neumorphic Header */}
        <div className="text-center mb-8">
          <div className="bg-[#f0f2f5] rounded-3xl shadow-[10px_10px_18px_rgba(0,0,0,0.08),-8px_-8px_16px_#ffffff] p-6 sm:p-8 inline-block">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">Task Control</h1>
            
          </div>
        </div>

        {/* Neumorphic Tabs */}
        <div className="bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-1 sm:p-2 mb-8">
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("banks")}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                activeTab === "banks"
                  ? "bg-[#f0f2f5] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_#ffffff] text-gray-800"
                  : "bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] text-gray-600 hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff]"
              }`}
            >
              Banks
            </button>
            <button
              onClick={() => setActiveTab("problem-types")}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                activeTab === "problem-types"
                  ? "bg-[#f0f2f5] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_#ffffff] text-gray-800"
                  : "bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] text-gray-600 hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff]"
              }`}
            >
              Problem Types
            </button>
          </div>
        </div>

        {/* Banks Tab */}
        {activeTab === "banks" && (
          <div className="bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Bank Management</h2>
              <button
                onClick={() => {
                  setShowBankForm(true);
                  setEditingBank(null);
                  setBankFormData({ name: "" });
                }}
                className="bg-[#f0f2f5] text-gray-800 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap"
              >
                + Add New Bank
              </button>
            </div>

            {/* Create/Edit Form */}
            {(showBankForm || editingBank) && (
              <div className="bg-[#f0f2f5] rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_#ffffff] p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  {editingBank ? "Edit Bank" : "Create New Bank"}
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter bank name..."
                    value={bankFormData.name}
                    onChange={(e) => setBankFormData({ name: e.target.value })}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.07),inset_-2px_-2px_6px_#ffffff]"
                  />
                  <button
                    onClick={editingBank ? handleUpdateBank : handleCreateBank}
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-[#f0f2f5] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap"
                  >
                    {editingBank ? "Update" : "Create"}
                  </button>
                  <button
                    onClick={editingBank ? () => { cancelBankEdit(); setShowBankForm(false); } : () => setShowBankForm(false)}
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-[#f0f2f5] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* DataTable Container */}
            <div className="bg-[#f0f2f5] rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] overflow-x-auto">
              <div className="min-w-full">
                <DataTable 
                  columns={bankColumns} 
                  data={banks} 
                  pagination 
                  striped 
                  highlightOnHover 
                  dense
                  responsive
                />
              </div>
            </div>
          </div>
        )}

        {/* Problem Types Tab */}
        {activeTab === "problem-types" && (
          <div className="bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Problem Type Management</h2>
              <button
                onClick={() => {
                  setShowProblemTypeForm(true);
                  setEditingProblemType(null);
                  setProblemTypeFormData({ name: "" });
                }}
                className="bg-[#f0f2f5] text-gray-800 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap"
              >
                + Add New Problem Type
              </button>
            </div>

            {/* Create/Edit Form */}
            {(showProblemTypeForm || editingProblemType) && (
              <div className="bg-[#f0f2f5] rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_#ffffff] p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  {editingProblemType ? "Edit Problem Type" : "Create New Problem Type"}
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter problem type name..."
                    value={problemTypeFormData.name}
                    onChange={(e) => setProblemTypeFormData({ name: e.target.value })}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.07),inset_-2px_-2px_6px_#ffffff]"
                  />
                  <button
                    onClick={editingProblemType ? handleUpdateProblemType : handleCreateProblemType}
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-[#f0f2f5] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap"
                  >
                    {editingProblemType ? "Update" : "Create"}
                  </button>
                  <button
                    onClick={editingProblemType ? () => { cancelProblemTypeEdit(); setShowProblemTypeForm(false); } : () => setShowProblemTypeForm(false)}
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-[#f0f2f5] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* DataTable Container */}
            <div className="bg-[#f0f2f5] rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] overflow-x-auto">
              <div className="min-w-full">
                <DataTable 
                  columns={problemTypeColumns} 
                  data={problemTypes} 
                  pagination 
                  striped 
                  highlightOnHover 
                  dense
                  responsive
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSettingsPage;