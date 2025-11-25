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

  // Filters
  const [tidFilter, setTidFilter] = useState<string>("");
  const [cityFilter, setCityFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [posSerialFilter, setPosSerialFilter] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
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
        const response = await fetch("http://127.0.0.1:8000/all");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
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
  // Add Device with Validation
  // ==========================
  const handleAddDevice = async () => {
    const emptyField = Object.entries(formData).find(([_, value]) => value.trim() === "");
    if (emptyField) {
      alert(`❌ Please fill the "${emptyField[0].replace("_", " ")}" field before saving.`);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/device", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to add device");
      }

      alert("✅ Terminal added successfully!");
      setShowAddModal(false);
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

      const updated = await fetch(" http://localhost:8000/all");
      const newData = await updated.json();
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
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload complete successfully!");
      setExcelFile(null);

      const updated = await fetch("http://127.0.0.1:8000/all");
      const newData = await updated.json();
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
    { name: "SL", selector: (_row, i) => i + 1, width: "60px" },
    { name: "TID", selector: (row) => row.tid, sortable: true },
    { name: "MID", selector: (row) => row.mid, sortable: true },
    { name: "Merchant Name", selector: (row) => row.merchant_name, sortable: true },
    { name: "POS Serial", selector: (row) => row.pos_serial },
    { name: "Model", selector: (row) => row.model },
    { name: "City", selector: (row) => row.city },
    { name: "Location", selector: (row) => row.location },
    { name: "Address", selector: (row) => row.merchant_address },
    { name: "Telephone", selector: (row) => row.telephone },
    {
      name: "Created Time",
      selector: (row) => new Date(row.created_time).toLocaleString(),
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">Terminal Manager</h1>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200"
        >
          ➕ Add Terminal
        </button>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200"
        >
          📂 Upload with Excel
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
        <input type="text" placeholder="Filter by TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input type="text" placeholder="Filter by City" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input type="text" placeholder="Filter by Location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input type="text" placeholder="Filter by POS Serial" value={posSerialFilter} onChange={(e) => setPosSerialFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input type="text" placeholder="Filter by Model" value={modelFilter} onChange={(e) => setModelFilter(e.target.value)} className="border rounded px-3 py-2" />
        <button onClick={() => { setTidFilter(""); setCityFilter(""); setLocationFilter(""); setPosSerialFilter(""); setModelFilter(""); }} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Clear</button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded shadow-md p-2">
        <DataTable columns={columns} data={filteredDevices} pagination striped highlightOnHover dense />
      </div>

      {/* ADD DEVICE MODAL */}
      {showAddModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Add New Device</h2>
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                type="text"
                placeholder={key.replace("_", " ").toUpperCase()}
                value={(formData as any)[key]}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                className="border rounded w-full p-2 mb-2"
              />
            ))}
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              <button onClick={handleAddDevice} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Upload Devices via Excel</h2>
            <a href="/templates/device_template.xlsx" download className="text-blue-600 underline mb-3 block">
              📥 Download Excel Template
            </a>

            <input type="file" accept=".xlsx, .xls" onChange={(e) => setExcelFile(e.target.files?.[0] || null)} className="border rounded w-full p-2 mb-3" />

            <button onClick={handleUploadExcel} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
              Upload
            </button>

            {uploadMsg && <pre className="bg-gray-100 p-2 mt-3 rounded text-sm">{uploadMsg}</pre>}

            <div className="flex justify-end mt-4">
              <button onClick={() => setShowUploadModal(false)} className="bg-gray-300 px-4 py-2 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevicesPage;
