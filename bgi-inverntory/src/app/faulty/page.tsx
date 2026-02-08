"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// ==========================
// TypeScript Type
// ==========================
type Faulty = {
  id: number;
  pos_serial: string;
  fault_type: string;
  fault_cause: string;
  approach: string;
  replaced_part: string | null;
  create_time: string;
  update_time: string;
};

// ==========================
// Component
// ==========================
const FaultyPage = () => {
  const [faultys, setFaultys] = useState<Faulty[]>([]);
  const [filteredFaultys, setFilteredFaultys] = useState<Faulty[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [counter_terminal, setCounter_terminal] = useState(0);

  // Filters
  const [serialFilter, setSerialFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [causeFilter, setCauseFilter] = useState("");
  const [approachFilter, setApproachFilter] = useState("");
  const [partFilter, setPartFilter] = useState("");

  // Modals and Form
  const [showForm, setShowForm] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    pos_serial: "",
    fault_type: "",
    fault_cause: "",
    approach: "",
    replaced_part: "",
  });

  const [editingFaulty, setEditingFaulty] = useState<Faulty | null>(null);
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");

  // ==========================
  // Helper: Auth Headers
  // ==========================
  const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  // ==========================
  // Fetch Faulty Records
  // ==========================
  useEffect(() => {
    const fetchFaulty = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Please log in first.");

        const response = await fetch("http://127.0.0.1:8000/faulty/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok)
          throw new Error(`Failed to fetch data (status: ${response.status})`);

        const data = await response.json();
        setCounter_terminal(data.data.length);
        setFaultys(data.data);
        setFilteredFaultys(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFaulty();
  }, []);

  // ==========================
  // Filter Logic
  // ==========================
  useEffect(() => {
    const filtered = faultys.filter((item) => {
      const matchSerial = item.pos_serial
        .toLowerCase()
        .includes(serialFilter.toLowerCase());
      const matchType = item.fault_type
        .toLowerCase()
        .includes(typeFilter.toLowerCase());
      const matchCause = item.fault_cause
        .toLowerCase()
        .includes(causeFilter.toLowerCase());
      const matchApproach = item.approach
        .toLowerCase()
        .includes(approachFilter.toLowerCase());
      const matchPart = (item.replaced_part || "")
        .toLowerCase()
        .includes(partFilter.toLowerCase());
      return matchSerial && matchType && matchCause && matchApproach && matchPart;
    });
    setFilteredFaultys(filtered);
  }, [serialFilter, typeFilter, causeFilter, approachFilter, partFilter, faultys]);

  // ==========================
  // Export Excel
  // ==========================
  const handleExport = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://127.0.0.1:8000/faulty/download", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "FaultyPOS_Export.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("❌ Download failed: " + err.message);
    }
  };

  // ==========================
  // Add / Edit Faulty Record
  // ==========================
  const handleAddFaulty = async () => {
    const emptyField = Object.entries(formData).find(([_, v]) => v.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0]}" field.`);
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const email = localStorage.getItem("email") || "unknown";
      const role = localStorage.getItem("role") || "user";

      const response = await fetch("http://127.0.0.1:8000/faulty/add", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          ...formData,
          log_user_email: email,
          log_user_role: role,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to add record");
      }

      alert("✅ Record added successfully!");
      setShowForm(false);
      setFormData({ pos_serial: "", fault_type: "", fault_cause: "", approach: "", replaced_part: "" });

      const updated = await fetch("http://127.0.0.1:8000/faulty/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      setCounter_terminal(newData.data.length);
      setFaultys(newData.data);
      setFilteredFaultys(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  const handleEditClick = (faulty: Faulty) => {
    setEditingFaulty(faulty);
    setShowForm(true);
    setFormData({
      pos_serial: faulty.pos_serial,
      fault_type: faulty.fault_type,
      fault_cause: faulty.fault_cause,
      approach: faulty.approach,
      replaced_part: faulty.replaced_part || "",
    });
  };

  const handleUpdateFaulty = async () => {
    if (!editingFaulty) return;
    const emptyField = Object.entries(formData).find(([_, v]) => v.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0]}" field.`);
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const email = localStorage.getItem("email") || "unknown";
      const role = localStorage.getItem("role") || "user";

      const response = await fetch(
        `http://127.0.0.1:8000/faulty/edit/${editingFaulty.id}`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            ...formData,
            log_user_email: email,
            log_user_role: role,
          }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to update record");
      }

      alert("✅ Record updated successfully!");
      setShowForm(false);
      setEditingFaulty(null);
      setFormData({ pos_serial: "", fault_type: "", fault_cause: "", approach: "", replaced_part: "" });

      const updated = await fetch("http://127.0.0.1:8000/faulty/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      setFaultys(newData.data);
      setFilteredFaultys(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Delete Faulty Record
  // ==========================
  const handleDelete = async (id: number, pos_serial: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete record: ${pos_serial}?`
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("access_token");
      const email = localStorage.getItem("email") || "unknown";
      const role = localStorage.getItem("role") || "user";

      const response = await fetch(`http://127.0.0.1:8000/faulty/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          log_user_email: email,
          log_user_role: role,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to delete record");
      }

      alert("✅ Record deleted!");
      setFaultys((prev) => prev.filter((d) => d.id !== id));
      setFilteredFaultys((prev) => prev.filter((d) => d.id !== id));
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Upload Excel
  // ==========================
  const handleUploadExcel = async () => {
    if (!excelFile) {
      alert("Please select an Excel file!");
      return;
    }

    const token = localStorage.getItem("access_token");
    const email = localStorage.getItem("email") || "unknown";
    const role = localStorage.getItem("role") || "user";

    const form = new FormData();
    form.append("file", excelFile);
    form.append("log_user_email", email);
    form.append("log_user_role", role);

    try {
      const response = await fetch("http://127.0.0.1:8000/faulty/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload complete!");
      setExcelFile(null);

      const updated = await fetch("http://127.0.0.1:8000/faulty/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      setCounter_terminal(newData.data.length);
      setFaultys(newData.data);
      setFilteredFaultys(newData.data);
    } catch (err: any) {
      setUploadMsg("❌ " + err.message);
    }
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<Faulty>[] = [
    { name: "SL", selector: (row) => row.id, width: "60px" },
    { name: "POS Serial", selector: (row) => row.pos_serial, style: { minWidth: "150px" } },
    { name: "Fault Type", selector: (row) => row.fault_type, style: { minWidth: "130px" } },
    { name: "Fault Cause", selector: (row) => row.fault_cause, style: { minWidth: "180px" } },
    { name: "Approach", selector: (row) => row.approach, style: { minWidth: "150px" } },
    { name: "Replaced Part", selector: (row) => row.replaced_part || "", style: { minWidth: "150px" } },
    {
      name: "Created",
      selector: (row) => new Date(row.create_time).toLocaleString("en-GB"),
      style: { minWidth: "180px" }
    },
    {
      name: "Updated",
      selector: (row) => new Date(row.update_time).toLocaleString("en-GB"),
      style: { minWidth: "180px" }
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEditClick(row)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.id, row.pos_serial)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  // ==========================
  // Render UI
  // ==========================
  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center">
      {/* Centered Title and Top Bar */}
      <div className="flex flex-col items-center mb-6 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Faulty POS Records</h1>
        <div className="flex justify-between items-center w-full px-4">
          {/* Left - Export Button */}
          <div className="flex-1">
            <button
              onClick={handleExport}
              className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
            >
              ⬇️ Export Excel
            </button>
          </div>
          
          {/* Center - Total Count */}
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold">Total Records: {counter_terminal}</h2>
          </div>
          
          {/* Right - Add & Upload Buttons */}
          <div className="flex-1 flex justify-end gap-4">
            <button
              onClick={() => {
                setShowForm(true);
                setEditingFaulty(null);
                setFormData({ pos_serial: "", fault_type: "", fault_cause: "", approach: "", replaced_part: "" });
              }}
              className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
            >
              ➕ Add Record
            </button>
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
            >
              📂 Upload Excel
            </button>
          </div>
        </div>
      </div>

      {/* Inline Add/Edit Form */}
      {showForm && (
        <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-2xl mb-6 shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {editingFaulty ? "Edit Record" : "Add New Record"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="POS Serial"
              value={formData.pos_serial}
              onChange={(e) => setFormData({ ...formData, pos_serial: e.target.value })}
              disabled={!!editingFaulty}
              className={`border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                editingFaulty ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Fault Type"
              value={formData.fault_type}
              onChange={(e) => setFormData({ ...formData, fault_type: e.target.value })}
              disabled={!!editingFaulty}
              className={`border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                editingFaulty ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Fault Cause"
              value={formData.fault_cause}
              onChange={(e) => setFormData({ ...formData, fault_cause: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Approach"
              value={formData.approach}
              onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Replaced Part"
              value={formData.replaced_part}
              onChange={(e) => setFormData({ ...formData, replaced_part: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-2"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => {
                setShowForm(false);
                setEditingFaulty(null);
                setFormData({ pos_serial: "", fault_type: "", fault_cause: "", approach: "", replaced_part: "" });
              }}
              className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-400 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={editingFaulty ? handleUpdateFaulty : handleAddFaulty}
              className={`${
                editingFaulty
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-green-600 hover:bg-green-700"
              } text-white px-4 py-2 rounded-2xl font-semibold`}
            >
              {editingFaulty ? "Update" : "Save"}
            </button>
          </div>
        </div>
      )}

      {/* Filters - Neumorphic styled */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6 max-w-7xl w-full px-4">
        <input
          type="text"
          placeholder="Filter by POS Serial"
          value={serialFilter}
          onChange={(e) => setSerialFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Fault Type"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Fault Cause"
          value={causeFilter}
          onChange={(e) => setCauseFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Approach"
          value={approachFilter}
          onChange={(e) => setApproachFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Replaced Part"
          value={partFilter}
          onChange={(e) => setPartFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            setSerialFilter("");
            setTypeFilter("");
            setCauseFilter("");
            setApproachFilter("");
            setPartFilter("");
          }}
          className="px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Clear
        </button>
      </div>

      {/* Data Table - Neumorphic container */}
      <div className="bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl px-4">
        <DataTable
          columns={columns}
          data={filteredFaultys}
          pagination
          striped
          highlightOnHover
          dense
        />
      </div>

      {/* UPLOAD MODAL - Neumorphic styled */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
            <h2 className="text-xl font-semibold mb-4 text-center">📤 Upload Excel</h2>
            <button
              onClick={async () => {
                const token = localStorage.getItem("access_token");
                const res = await fetch("http://127.0.0.1:8000/faulty/template", {
                  headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) {
                  alert("❌ Unauthorized or failed to download template");
                  return;
                }
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "Faculty_upload_template.xlsx";
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
              className="text-blue-600 underline mb-3 block font-semibold"
            >
              📥 Download Excel Template
            </button>

            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => setExcelFile(e.target.files?.[0] || null)}
              className="border rounded-2xl w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={handleUploadExcel}
              className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2"
            >
              Upload
            </button>

            {uploadMsg && (
              <pre className="bg-gray-100 p-2 mt-3 rounded text-sm">
                {uploadMsg}
              </pre>
            )}

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowUploadModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-2xl font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaultyPage;