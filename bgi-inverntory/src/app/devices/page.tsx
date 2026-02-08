"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// ==========================
// TypeScript Device Type
// ==========================
type Device = {
  id: number;
  tid: string;
  mid: string;
  merchant_name: string;
  pos_serial: string;
  model: string;
  city: string;
  location: string;
  merchant_address: string;
  telephone: string;
  created_time: string;
};

const DevicesPage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [counter_terminal, setCounter_terminal] = useState(0);

  // Filters
  const [tidFilter, setTidFilter] = useState<string>("");
  const [cityFilter, setCityFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [posSerialFilter, setPosSerialFilter] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");

  // Modals and Form
  const [showForm, setShowForm] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    tid: "",
    mid: "",
    merchant_name: "",
    pos_serial: "",
    model: "",
    city: "",
    location: "",
    merchant_address: "",
    telephone: "",
  });

  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState<string>("");

  // ==========================
  // Fetch Devices
  // ==========================
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/all ");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setCounter_terminal(data.data.length);
        setDevices(data.data);
        setFilteredDevices(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, []);

  // ==========================
  // Filtering Logic
  // ==========================
  useEffect(() => {
    const filtered = devices.filter((dev) => {
      const matchTid = dev.tid.toLowerCase().includes(tidFilter.toLowerCase());
      const matchCity = dev.city.toLowerCase().includes(cityFilter.toLowerCase());
      const matchLocation = dev.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchPosSerial = dev.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase());
      const matchModel = dev.model.toLowerCase().includes(modelFilter.toLowerCase());
      return matchTid && matchCity && matchLocation && matchPosSerial && matchModel;
    });
    setFilteredDevices(filtered);
  }, [tidFilter, cityFilter, locationFilter, posSerialFilter, modelFilter, devices]);

  // ==========================
  // Export Excel
  // ==========================
  const handleExport = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/download ");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Device_Export.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("❌ Download failed: " + err.message);
    }
  };

  // ==========================
  // Add Device with Validation
  // ==========================
  const handleAddDevice = async () => {
    const emptyField = Object.entries(formData).find(([_, value]) => value.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0].replace("_", " ")}" field before saving.`);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/device ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to add device");
      }

      alert("✅ Terminal added successfully!");
      setShowForm(false);
      setFormData({
        tid: "",
        mid: "",
        merchant_name: "",
        pos_serial: "",
        model: "",
        city: "",
        location: "",
        merchant_address: "",
        telephone: "",
      });

      const updated = await fetch("http://127.0.0.1:8000/all ");
      const newData = await updated.json();
      setCounter_terminal(newData.data.length);
      setDevices(newData.data);
      setFilteredDevices(newData.data);
    } catch (e: any) {
      alert("❌ " + e.message);
    }
  };

  // ==========================
  // Upload Excel
  // ==========================
  const handleUploadExcel = async () => {
    if (!excelFile) {
      alert("Please select an Excel file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", excelFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload ", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload complete successfully!");
      setExcelFile(null);

      const updated = await fetch("http://127.0.0.1:8000/all ");
      const newData = await updated.json();
      setCounter_terminal(newData.data.length);
      setDevices(newData.data);
      setFilteredDevices(newData.data);
    } catch (err: any) {
      setUploadMsg("❌ " + err.message);
    }
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<Device>[] = [
    { name: "SL", selector: (row) => row.id, width: "60px" },
    { name: "TID", selector: (row) => row.tid, sortable: true, style: { minWidth: "120px" } },
    { name: "MID", selector: (row) => row.mid, sortable: true, style: { minWidth: "150px" } },
    { name: "Merchant Name", selector: (row) => row.merchant_name, sortable: true, style: { minWidth: "200px" } },
    { name: "POS Serial", selector: (row) => row.pos_serial, style: { minWidth: "130px" } },
    { name: "Model", selector: (row) => row.model, style: { minWidth: "120px" } },
    { name: "City", selector: (row) => row.city, style: { minWidth: "130px" } },
    { name: "Location", selector: (row) => row.location, style: { minWidth: "150px" } },
    { name: "Address", selector: (row) => row.merchant_address, style: { minWidth: "250px" } },
    { name: "Telephone", selector: (row) => row.telephone, style: { minWidth: "130px" } },
    {
      name: "Created Time",
      selector: (row) => new Date(row.created_time).toLocaleString(),
      style: { minWidth: "180px" }
    },
  ];

  // ==========================
  // Render UI
  // ==========================
  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center">
      {/* Title and Top Bar */}
      <div className="flex flex-col items-center mb-6 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Terminal Manager</h1>
        <div className="flex justify-between items-center w-full px-4">
          {/* Left - Export */}
          <div className="flex-1">
            <button
              onClick={handleExport}
              className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
            >
              ⬇️ Export Excel
            </button>
          </div>
          
          {/* Center - Total Terminals */}
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold">Total Terminals: {counter_terminal}</h2>
          </div>
          
          {/* Right - Add & Upload */}
          <div className="flex-1 flex justify-end gap-4">
            <button
              onClick={() => {
                setShowForm(true);
                setFormData({
                  tid: "",
                  mid: "",
                  merchant_name: "",
                  pos_serial: "",
                  model: "",
                  city: "",
                  location: "",
                  merchant_address: "",
                  telephone: "",
                });
              }}
              className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
            >
              ➕ Add Terminal
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

      {/* Inline Add Form */}
      {showForm && (
        <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-4xl mb-6 shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
          <h2 className="text-xl font-semibold mb-4 text-center">Add New Terminal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="TID"
              value={formData.tid}
              onChange={(e) => setFormData({ ...formData, tid: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="MID"
              value={formData.mid}
              onChange={(e) => setFormData({ ...formData, mid: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Merchant Name"
              value={formData.merchant_name}
              onChange={(e) => setFormData({ ...formData, merchant_name: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="POS Serial"
              value={formData.pos_serial}
              onChange={(e) => setFormData({ ...formData, pos_serial: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Model"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Merchant Address"
              value={formData.merchant_address}
              onChange={(e) => setFormData({ ...formData, merchant_address: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => {
                setShowForm(false);
                setFormData({
                  tid: "",
                  mid: "",
                  merchant_name: "",
                  pos_serial: "",
                  model: "",
                  city: "",
                  location: "",
                  merchant_address: "",
                  telephone: "",
                });
              }}
              className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-400 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleAddDevice}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-semibold"
            >
              Save Terminal
            </button>
          </div>
        </div>
      )}

      {/* Filters - Neumorphic styled */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6 max-w-7xl w-full px-4">
        <input
          type="text"
          placeholder="Filter by TID"
          value={tidFilter}
          onChange={(e) => setTidFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by City"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by POS Serial"
          value={posSerialFilter}
          onChange={(e) => setPosSerialFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Model"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => { 
            setTidFilter(""); 
            setCityFilter(""); 
            setLocationFilter(""); 
            setPosSerialFilter(""); 
            setModelFilter(""); 
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
          data={filteredDevices}
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
            <a 
              href="/templates/device_template.xlsx" 
              download 
              className="text-blue-600 underline mb-3 block font-semibold"
            >
              📥 Download Excel Template
            </a>

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

export default DevicesPage;