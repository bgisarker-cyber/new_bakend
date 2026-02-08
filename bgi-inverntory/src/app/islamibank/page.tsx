"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type IslamiPOS = {
  id: number;
  configdate: string;
  old_mid: string;
  old_tid: string;
  mid: string;
  tid: string;
  merchant_mother_name: string;
  merchant_signboard: string;
  address: string;
  city: string;
  area: string;
  branch: string;
  vendor: string;
  pos_model: string;
  pos_serial: string;
  battery_serial: string;
  old_pos_serial: string;
  sim_operator: string;
  sim_serial_number: string;
  ip_address: string;
  port_number: string;
  special_functionality: string;
  tl: string;
  aro: string;
  merchant_contact_person: string;
  merchant_contact_number: string;
  installation_date: string;
  installation_engineer_name: string;
  handover_to: string;
  handover_date: string;
  app_version: string;
  app_release_date: string;
  firmware_version: string;
  remarks: string;
  create_time: string;
  updated_at: string;
};

// Custom column type that uses style instead of minWidth
type CustomColumn<T> = Omit<TableColumn<T>, 'minWidth'> & {
  minWidth?: string;
};

const IslamiPOSPage = () => {
  const [records, setRecords] = useState<IslamiPOS[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<IslamiPOS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [counter_terminal, setCounter_terminal] = useState(0);

  // REMOVE MID FILTER, KEEP OTHERS AND ADD AREA FILTER
  const [serialFilter, setSerialFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState(""); // ✅ NEW: Area filter
  const [tidFilter, setTidFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");

  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  // ==========================
  // Fetch Records
  // ==========================
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/islami/all  ");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCounter_terminal(data.data.length);
        setRecords(data.data || data);
        setFilteredRecords(data.data || data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  // ==========================
  // Filter logic - UPDATED TO USE AREA FILTER
  // ==========================
  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r.pos_serial?.toLowerCase().includes(serialFilter.toLowerCase()) &&
        r.area?.toLowerCase().includes(areaFilter.toLowerCase()) && // ✅ NEW: Area filter
        r.tid?.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r.city?.toLowerCase().includes(cityFilter.toLowerCase()) &&
        r.branch?.toLowerCase().includes(branchFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [serialFilter, areaFilter, tidFilter, cityFilter, branchFilter, records]); // ✅ UPDATED dependencies

  // ==========================
  // Upload Excel
  // ==========================
  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Please select an Excel file!");
    const form = new FormData();
    form.append("file", excelFile);

    try {
      const res = await fetch("http://127.0.0.1:8000/islami/upload  ", {
        method: "POST",
        body: form,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload successful!");
      setExcelFile(null);

      const updated = await fetch("http://127.0.0.1:8000/islami/all  ");
      const newData = await updated.json();
      setRecords(newData.data || newData);
      setFilteredRecords(newData.data || newData);
    } catch (e: any) {
      setUploadMsg("❌ " + e.message);
    }
  };

  // ==========================
  // Download Template
  // ==========================
  const handleDownloadTemplate = () => {
    window.open("http://127.0.0.1:8000/islami/template  ", "_blank");
  };

  // ==========================
  // Table Columns - FIXED: Convert minWidth to style
  // ==========================
  const columns: TableColumn<IslamiPOS>[] = [
    { name: "SL", selector: (row) => row.id, width: "60px" },
    { name: "Config Date", selector: (r) => r.configdate, style: { minWidth: "100px" } },
    
    { name: "MID", selector: (r) => r.mid, style: { minWidth: "150px" } },
    { name: "TID", selector: (r) => r.tid, style: { minWidth: "120px" } },
    { name: "MERCHANT SIGNBOARD", selector: (r) => r.merchant_signboard, style: { minWidth: "250px" } },
    { name: "Address", selector: (r) => r.address, style: { minWidth: "250px" }, wrap: true },
    { name: "City", selector: (r) => r.city, style: { minWidth: "130px" } },
    { name: "Area", selector: (r) => r.area, style: { minWidth: "130px" } }, // ✅ Area column already exists
    { name: "Branch", selector: (r) => r.branch, style: { minWidth: "180px" } },
    { name: "Vendor", selector: (r) => r.vendor, style: { minWidth: "100px" } },
    { name: "POS Model", selector: (r) => r.pos_model, style: { minWidth: "100px" } },
    { name: "POS Serial", selector: (r) => r.pos_serial, style: { minWidth: "130px" } },
    { name: "Battery Serial", selector: (r) => r.battery_serial, style: { minWidth: "160px" } },
    { name: "Old POS Serial", selector: (r) => r.old_pos_serial, style: { minWidth: "160px" } },
    { name: "SIM Operator", selector: (r) => r.sim_operator, style: { minWidth: "110px" } },
    { name: "SIM Serial Number", selector: (r) => r.sim_serial_number, style: { minWidth: "180px" } },
    { name: "IP Address", selector: (r) => r.ip_address, style: { minWidth: "150px" } },
    { name: "Port", selector: (r) => r.port_number, style: { minWidth: "100px" } },
    { name: "Functionality", selector: (r) => r.special_functionality, style: { minWidth: "200px" } },
    { name: "TL", selector: (r) => r.tl, style: { minWidth: "180px" } },
    { name: "ARO", selector: (r) => r.aro, style: { minWidth: "180px" } },
    { name: "Merchant Contact Person", selector: (r) => r.merchant_contact_person, style: { minWidth: "200px" } },
    { name: "Merchant Contact Number", selector: (r) => r.merchant_contact_number, style: { minWidth: "140px" } },
    { name: "Installation Date", selector: (r) => r.installation_date, style: { minWidth: "110px" } },
    { name: "Installation Engineer", selector: (r) => r.installation_engineer_name, style: { minWidth: "180px" } },
    { name: "Handover To", selector: (r) => r.handover_to, style: { minWidth: "100px" } },
    { name: "Handover Date", selector: (r) => r.handover_date, style: { minWidth: "110px" } },
    { name: "App Version", selector: (r) => r.app_version, style: { minWidth: "120px" } },
    { name: "App Release Date", selector: (r) => r.app_release_date, style: { minWidth: "110px" } },
    { name: "Firmware Version", selector: (r) => r.firmware_version, style: { minWidth: "120px" } },
    { name: "Remarks", selector: (r) => r.remarks, style: { minWidth: "200px" }, wrap: true },
    { name: "Created Time", selector: (r) => r.create_time, style: { minWidth: "200px" }, wrap: true },
  ];

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">IBBL LIVE TERMINALS</h1>

      {/* Top Bar */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-6 px-4">
        {/* Left: Export */}
        <button
          onClick={() => window.open("http://127.0.0.1:8000/islami/download  ", "_blank")}
          className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
        >
          ⬇️ Export Excel
        </button>

        {/* Center: Total Terminals */}
        <h2 className="text-xl font-semibold text-center">Total Terminals: {counter_terminal}</h2>

        {/* Right: Upload */}
        <button
          onClick={() => setShowUploadModal(true)}
          className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
        >
          📂 Upload Excel
        </button>
      </div>

      {/* Filters - UPDATED: Replaced MID with Area */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 max-w-7xl w-full px-4">
        <input 
          placeholder="POS Serial" 
          value={serialFilter} 
          onChange={(e) => setSerialFilter(e.target.value)} 
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <input 
          placeholder="Area" // ✅ NEW: Area filter
          value={areaFilter} 
          onChange={(e) => setAreaFilter(e.target.value)} 
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <input 
          placeholder="TID" 
          value={tidFilter} 
          onChange={(e) => setTidFilter(e.target.value)} 
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <input 
          placeholder="City" 
          value={cityFilter} 
          onChange={(e) => setCityFilter(e.target.value)} 
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <input 
          placeholder="Branch" 
          value={branchFilter} 
          onChange={(e) => setBranchFilter(e.target.value)} 
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <button
          onClick={() => { 
            setSerialFilter(""); 
            setAreaFilter(""); // ✅ NEW: Clear area filter
            setTidFilter(""); 
            setCityFilter(""); 
            setBranchFilter(""); 
          }}
          className="px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Clear
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl px-4">
        <DataTable
          columns={columns}
          data={filteredRecords}
          pagination
          striped
          highlightOnHover
          dense
          persistTableHead
        />
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
            <h2 className="text-xl font-semibold mb-4 text-center">📤 Upload Excel</h2>
            <input type="file" accept=".xlsx,.xls" onChange={(e) => setExcelFile(e.target.files?.[0] || null)} className="border rounded-2xl w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button onClick={handleUploadExcel} className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2">Upload</button>
            {uploadMsg && <pre className="bg-gray-100 p-2 mt-2 rounded text-sm">{uploadMsg}</pre>}
            <div className="flex justify-between mt-4">
              <button onClick={handleDownloadTemplate} className="text-blue-600 underline font-semibold">📥 Download Template</button>
              <button onClick={() => setShowUploadModal(false)} className="bg-gray-300 px-4 py-2 rounded-2xl font-semibold">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IslamiPOSPage;