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
  const [counter_terminal, setCounter_terminal] = useState(0);

  // Filters
  const [serialFilter, setSerialFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [oemFilter, setOemFilter] = useState("");
  const [bankFilter, setBankFilter] = useState("");

  // Form visibility state
  const [showForm, setShowForm] = useState(false);

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

        const response = await fetch("http://127.0.0.1:8000/debug/all ", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok)
          throw new Error(`Failed to fetch data (status: ${response.status})`);

        const data = await response.json();
        setCounter_terminal(data.data.length);
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
      const response = await fetch("http://127.0.0.1:8000/debug/add ", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to add record");
      }

      alert("✅ Record added successfully!");
      setShowForm(false);
      setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });

      const updated = await fetch("http://127.0.0.1:8000/debug/all ", {
        headers: getAuthHeaders(),
      });
      const newData = await updated.json();
      setCounter_terminal(newData.data.length);
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
    setShowForm(true);
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
        `http://127.0.0.1:8000/debug/edit/ ${editingRecord.id}`,
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
      setShowForm(false);
      setEditingRecord(null);
      setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });

      const updated = await fetch("http://127.0.0.1:8000/debug/all ", {
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
      const response = await fetch(`http://127.0.0.1:8000/debug/delete/ ${id}`, {
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
    { name: "POS Serial", selector: (row) => row.pos_serial, style: { minWidth: "150px" } },
    { name: "Model", selector: (row) => row.model, style: { minWidth: "120px" } },
    { name: "OEM", selector: (row) => row.oem, style: { minWidth: "120px" } },
    { name: "Assigned Bank", selector: (row) => row.assigned_bank, style: { minWidth: "150px" } },
    
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
      {/* Centered Main Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Debug Terminals Records</h1>

      {/* Top Bar with Total Count and Add Button */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-6 px-4">
        {/* Left - Empty for future buttons */}
        <div className="flex-1"></div>
        
        {/* Center - Total Terminals */}
        <h2 className="text-xl font-semibold text-center">Total Terminals: {counter_terminal}</h2>
        
        {/* Right - Add Record Button */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => {
              setShowForm(true);
              setEditingRecord(null);
              setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });
            }}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
          >
            ➕ Add Record
          </button>
        </div>
      </div>

      {/* Inline Form - appears when showForm is true */}
      {showForm && (
        <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-2xl mb-6 shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {editingRecord ? "Edit Record" : "Add New Record"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="POS_SERIAL"
              value={formData.pos_serial}
              onChange={(e) =>
                setFormData({ ...formData, pos_serial: e.target.value })
              }
              disabled={!!editingRecord}
              className={`border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
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
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="OEM"
              value={formData.oem}
              onChange={(e) =>
                setFormData({ ...formData, oem: e.target.value })
              }
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="ASSIGNED BANK"
              value={formData.assigned_bank}
              onChange={(e) =>
                setFormData({ ...formData, assigned_bank: e.target.value })
              }
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => {
                setShowForm(false);
                setEditingRecord(null);
                setFormData({ pos_serial: "", model: "", oem: "", assigned_bank: "" });
              }}
              className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-400 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={editingRecord ? handleUpdateRecord : handleAddRecord}
              className={`${
                editingRecord
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-green-600 hover:bg-green-700"
              } text-white px-4 py-2 rounded-2xl font-semibold`}
            >
              {editingRecord ? "Update" : "Save"}
            </button>
          </div>
        </div>
      )}

      {/* Filters - Styled like Islami */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 max-w-7xl w-full px-4">
        <input
          type="text"
          placeholder="Filter by Serial"
          value={serialFilter}
          onChange={(e) => setSerialFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Model"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by OEM"
          value={oemFilter}
          onChange={(e) => setOemFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Assigned Bank"
          value={bankFilter}
          onChange={(e) => setBankFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            setSerialFilter("");
            setModelFilter("");
            setOemFilter("");
            setBankFilter("");
          }}
          className="px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Clear
        </button>
      </div>

      {/* Data Table - Styled like Islami */}
      <div className="bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl px-4">
        <DataTable
          columns={columns}
          data={filteredRecords}
          pagination
          striped
          highlightOnHover
          dense
        />
      </div>
    </div>
  );
};

export default DebugPage;