"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// ==========================
// TypeScript Type
// ==========================
type Store = {
  sl: number;
  pos_serial: string;
  model: string;
  oem: string;
  assigned: string;
  created_at: string;
  updated_at: string;
};

// ==========================
// Component
// ==========================
const StorePage = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Filters
  const [serialFilter, setSerialFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [oemFilter, setOemFilter] = useState("");
  const [assignedFilter, setAssignedFilter] = useState("");

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    pos_serial: "",
    model: "",
    oem: "",
    assigned: "",
  });

  const [editingStore, setEditingStore] = useState<Store | null>(null);
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
  // Fetch Stores
  // ==========================
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Please log in first.");

        const response = await fetch("http://127.0.0.1:8000/store/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok)
          throw new Error(`Failed to fetch data (status: ${response.status})`);

        const data = await response.json();
        setStores(data.data);
        setFilteredStores(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  // ==========================
  // Filter Logic
  // ==========================
  useEffect(() => {
    const filtered = stores.filter((item) => {
      const matchSerial = item.pos_serial
        ?.toLowerCase()
        .includes(serialFilter.toLowerCase());
      const matchModel = item.model
        ?.toLowerCase()
        .includes(modelFilter.toLowerCase());
      const matchOem = item.oem?.toLowerCase().includes(oemFilter.toLowerCase());
      const matchAssigned = item.assigned
        ?.toLowerCase()
        .includes(assignedFilter.toLowerCase());
      return matchSerial && matchModel && matchOem && matchAssigned;
    });
    setFilteredStores(filtered);
  }, [serialFilter, modelFilter, oemFilter, assignedFilter, stores]);

  // ==========================
  // Add Store
  // ==========================
  const handleAddStore = async () => {
    const emptyField = Object.entries(formData).find(([_, v]) => v.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0]}" field.`);
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const email = localStorage.getItem("email") || "unknown";
      const role = localStorage.getItem("role") || "user";

      const response = await fetch("http://127.0.0.1:8000/store/add", {
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
      setFormData({ pos_serial: "", model: "", oem: "", assigned: "" });

      const updated = await fetch("http://127.0.0.1:8000/store/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      setStores(newData.data);
      setFilteredStores(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Edit Store
  // ==========================
  const handleEditClick = (store: Store) => {
    setEditingStore(store);
    setShowAddModal(true);
    setFormData({
      pos_serial: store.pos_serial,
      model: store.model,
      oem: store.oem,
      assigned: store.assigned,
    });
  };

  const handleUpdateStore = async () => {
    if (!editingStore) return;
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
        `http://127.0.0.1:8000/store/edit/${editingStore.sl}`,
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
      setEditingStore(null);
      setFormData({ pos_serial: "", model: "", oem: "", assigned: "" });

      const updated = await fetch("http://127.0.0.1:8000/store/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      setStores(newData.data);
      setFilteredStores(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Delete Store
  // ==========================
  const handleDelete = async (sl: number, pos_serial: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete record: ${pos_serial}?`
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("access_token");
      const email = localStorage.getItem("email") || "unknown";
      const role = localStorage.getItem("role") || "user";

      const response = await fetch(`http://127.0.0.1:8000/store/delete/${sl}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
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
      setStores((prev) => prev.filter((d) => d.sl !== sl));
      setFilteredStores((prev) => prev.filter((d) => d.sl !== sl));
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
      const response = await fetch("http://127.0.0.1:8000/store/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload complete!");
      setExcelFile(null);

      const updated = await fetch("http://127.0.0.1:8000/store/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      setStores(newData.data);
      setFilteredStores(newData.data);
    } catch (err: any) {
      setUploadMsg("❌ " + err.message);
    }
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<Store>[] = [
    { name: "SL", selector: (row) => row.sl, width: "60px" },
    { name: "POS Serial", selector: (row) => row.pos_serial },
    { name: "Model", selector: (row) => row.model },
    { name: "OEM", selector: (row) => row.oem },
    { name: "Assigned", selector: (row) => row.assigned },
    {
      name: "Created",
      selector: (row) => new Date(row.created_at).toLocaleString("en-GB"),
    },
    {
      name: "Updated",
      selector: (row) => new Date(row.updated_at).toLocaleString("en-GB"),
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
            onClick={() => handleDelete(row.sl, row.pos_serial)}
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
      <h1 className="text-2xl font-bold mb-4">Store Inventory Records</h1>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={() => {
            setShowAddModal(true);
            setEditingStore(null);
            setFormData({ pos_serial: "", model: "", oem: "", assigned: "" });
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Serial"
          value={serialFilter}
          onChange={(e) => setSerialFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Model"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by OEM"
          value={oemFilter}
          onChange={(e) => setOemFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Assigned"
          value={assignedFilter}
          onChange={(e) => setAssignedFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={() => {
            setSerialFilter("");
            setModelFilter("");
            setOemFilter("");
            setAssignedFilter("");
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
          data={filteredStores}
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
              {editingStore ? "Edit Record" : "Add New Record"}
            </h2>

            <input
              type="text"
              placeholder="POS_SERIAL"
              value={formData.pos_serial}
              onChange={(e) =>
                setFormData({ ...formData, pos_serial: e.target.value })
              }
              disabled={!!editingStore}
              className={`border rounded w-full p-2 mb-2 ${
                editingStore ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <input
              type="text"
              placeholder="MODEL"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="OEM"
              value={formData.oem}
              onChange={(e) => setFormData({ ...formData, oem: e.target.value })}
              className="border rounded w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="ASSIGNED"
              value={formData.assigned}
              onChange={(e) =>
                setFormData({ ...formData, assigned: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingStore(null);
                }}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={editingStore ? handleUpdateStore : handleAddStore}
                className={`${
                  editingStore
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded`}
              >
                {editingStore ? "Update" : "Save"}
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
    const res = await fetch("http://127.0.0.1:8000/store/template", {
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
    link.download = "store_upload_template.xlsx";
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

export default StorePage;
