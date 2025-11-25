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

  // Filters
  const [serialFilter, setSerialFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [causeFilter, setCauseFilter] = useState("");
  const [approachFilter, setApproachFilter] = useState("");
  const [partFilter, setPartFilter] = useState("");

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
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
      setShowAddModal(false);
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

  const handleEditClick = (faulty: Faulty) => {
    setEditingFaulty(faulty);
    setShowAddModal(true);
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
      setShowAddModal(false);
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
    { name: "POS Serial", selector: (row) => row.pos_serial },
    { name: "Fault Type", selector: (row) => row.fault_type },
    { name: "Fault Cause", selector: (row) => row.fault_cause },
    { name: "Approach", selector: (row) => row.approach },
    { name: "Replaced Part", selector: (row) => row.replaced_part || "" },
    {
      name: "Created",
      selector: (row) => new Date(row.create_time).toLocaleString("en-GB"),
    },
    {
      name: "Updated",
      selector: (row) => new Date(row.update_time).toLocaleString("en-GB"),
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">Faulty POS Records</h1>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={() => {
            setShowAddModal(true);
            setEditingFaulty(null);
            setFormData({ pos_serial: "", fault_type: "", fault_cause: "", approach: "", replaced_part: "" });
          }}
          className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100"
        >
          ➕ Add Record
        </button>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100"
        >
          📂 Upload Excel
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by POS Serial"
          value={serialFilter}
          onChange={(e) => setSerialFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Fault Type"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Fault Cause"
          value={causeFilter}
          onChange={(e) => setCauseFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Approach"
          value={approachFilter}
          onChange={(e) => setApproachFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Replaced Part"
          value={partFilter}
          onChange={(e) => setPartFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={() => {
            setSerialFilter("");
            setTypeFilter("");
            setCauseFilter("");
            setApproachFilter("");
            setPartFilter("");
          }}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded shadow-md p-2">
        <DataTable
          columns={columns}
          data={filteredFaultys}
          pagination
          striped
          highlightOnHover
          dense
        />
      </div>

      {/* ADD / EDIT MODAL */}
      {showAddModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">
              {editingFaulty ? "Edit Record" : "Add New Record"}
            </h2>

            <input
              type="text"
              placeholder="POS SERIAL"
              value={formData.pos_serial}
              onChange={(e) =>
                setFormData({ ...formData, pos_serial: e.target.value })
              }
              disabled={!!editingFaulty}
              className={`border rounded w-full p-2 mb-2 ${
                editingFaulty ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <input
              type="text"
              placeholder="FAULT TYPE"
              value={formData.fault_type}
              onChange={(e) =>
                setFormData({ ...formData, fault_type: e.target.value })
              }
              disabled={!!editingFaulty}
              className={`border rounded w-full p-2 mb-2 ${
                editingFaulty ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <input
              type="text"
              placeholder="FAULT CAUSE"
              value={formData.fault_cause}
              onChange={(e) =>
                setFormData({ ...formData, fault_cause: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="APPROACH"
              value={formData.approach}
              onChange={(e) =>
                setFormData({ ...formData, approach: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="REPLACED PART"
              value={formData.replaced_part}
              onChange={(e) =>
                setFormData({ ...formData, replaced_part: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingFaulty(null);
                }}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={editingFaulty ? handleUpdateFaulty : handleAddFaulty}
                className={`${
                  editingFaulty
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded`}
              >
                {editingFaulty ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Upload via Excel</h2>
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
  className="text-blue-600 underline mb-3 block"
>
  📥 Download Excel Template
</button>

            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => setExcelFile(e.target.files?.[0] || null)}
              className="border rounded w-full p-2 mb-3"
            />
            <button
              onClick={handleUploadExcel}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
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
                className="bg-gray-300 px-4 py-2 rounded"
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
