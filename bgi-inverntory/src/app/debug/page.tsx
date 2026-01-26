"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// ==========================
// TypeScript Type
// ==========================
type Debug = {
  id: number;
  pos_serial: string;
  model: string;
  oem: string;
  assigned_bank: string;
  create_at: string;
  update_at: string;
};

// ==========================
// Component
// ==========================
const DebugPage = () => {
  const [records, setRecords] = useState<Debug[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<Debug[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Filters
  const [serialFilter, setSerialFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [oemFilter, setOemFilter] = useState("");
  const [bankFilter, setBankFilter] = useState("");

  // Modal
  const [showAddModal, setShowAddModal] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    pos_serial: "",
    model: "",
    oem: "",
    assigned_bank: "",
  });

  const [editingRecord, setEditingRecord] = useState<Debug | null>(null);

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
  // Fetch Records
  // ==========================
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Please log in first.");

        const response = await fetch("http://127.0.0.1:8000/debug/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok)
          throw new Error(`Failed to fetch data (status: ${response.status})`);

        const data = await response.json();
        setRecords(data.data);
        setFilteredRecords(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  // ==========================
  // Filter Logic
  // ==========================
  useEffect(() => {
    const filtered = records.filter((item) => {
      const matchSerial = item.pos_serial
        .toLowerCase()
        .includes(serialFilter.toLowerCase());
      const matchModel = item.model
        .toLowerCase()
        .includes(modelFilter.toLowerCase());
      const matchOem = item.oem.toLowerCase().includes(oemFilter.toLowerCase());
      const matchBank = item.assigned_bank
        .toLowerCase()
        .includes(bankFilter.toLowerCase());
      return matchSerial && matchModel && matchOem && matchBank;
    });
    setFilteredRecords(filtered);
  }, [serialFilter, modelFilter, oemFilter, bankFilter, records]);

  // ==========================
  // Add Record
  // ==========================
  const handleAddRecord = async () => {
    const emptyField = Object.entries(formData).find(([_, v]) => v.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0]}" field.`);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/debug/add", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to add record");
      }

      alert("✅ Record added successfully!");
      setShowAddModal(false);
      setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });

      const updated = await fetch("http://127.0.0.1:8000/debug/all", {
        headers: getAuthHeaders(),
      });
      const newData = await updated.json();
      setRecords(newData.data);
      setFilteredRecords(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Edit Record
  // ==========================
  const handleEditClick = (record: Debug) => {
    setEditingRecord(record);
    setShowAddModal(true);
    setFormData({
      pos_serial: record.pos_serial,
      model: record.model,
      oem: record.oem,
      assigned_bank: record.assigned_bank,
    });
  };

  const handleUpdateRecord = async () => {
    if (!editingRecord) return;
    const emptyField = Object.entries(formData).find(([_, v]) => v.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0]}" field.`);
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/debug/edit/${editingRecord.id}`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to update record");
      }

      alert("✅ Record updated successfully!");
      setShowAddModal(false);
      setEditingRecord(null);
      setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });

      const updated = await fetch("http://127.0.0.1:8000/debug/all", {
        headers: getAuthHeaders(),
      });
      const newData = await updated.json();
      setRecords(newData.data);
      setFilteredRecords(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Delete Record
  // ==========================
  const handleDelete = async (id: number, pos_serial: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete record: ${pos_serial}?`
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/debug/delete/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to delete record");
      }

      alert("✅ Record deleted!");
      setRecords((prev) => prev.filter((d) => d.id !== id));
      setFilteredRecords((prev) => prev.filter((d) => d.id !== id));
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<Debug>[] = [
    { name: "SL", selector: (row) => row.id, width: "60px" },
    { name: "POS Serial", selector: (row) => row.pos_serial },
    { name: "Model", selector: (row) => row.model },
    { name: "OEM", selector: (row) => row.oem },
    { name: "Assigned Bank", selector: (row) => row.assigned_bank },
    
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
      <h1 className="text-2xl font-bold mb-4">Debug Terminals Records</h1>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={() => {
            setShowAddModal(true);
            setEditingRecord(null);
            setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });
          }}
          className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100"
        >
          ➕ Add Record
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
          placeholder="Filter by Assigned Bank"
          value={bankFilter}
          onChange={(e) => setBankFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={() => {
            setSerialFilter("");
            setModelFilter("");
            setOemFilter("");
            setBankFilter("");
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
          data={filteredRecords}
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
              {editingRecord ? "Edit Record" : "Add New Record"}
            </h2>

            <input
              type="text"
              placeholder="POS_SERIAL"
              value={formData.pos_serial}
              onChange={(e) =>
                setFormData({ ...formData, pos_serial: e.target.value })
              }
              disabled={!!editingRecord}
              className={`border rounded w-full p-2 mb-2 ${
                editingRecord ? "bg-gray-100 cursor-not-allowed" : ""
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
              onChange={(e) =>
                setFormData({ ...formData, oem: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="ASSIGNED BANK"
              value={formData.assigned_bank}
              onChange={(e) =>
                setFormData({ ...formData, assigned_bank: e.target.value })
              }
              className="border rounded w-full p-2 mb-2"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingRecord(null);
                }}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={editingRecord ? handleUpdateRecord : handleAddRecord}
                className={`${
                  editingRecord
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded`}
              >
                {editingRecord ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugPage;
