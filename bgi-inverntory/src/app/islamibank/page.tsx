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

const IslamiPOSPage = () => {
  const [records, setRecords] = useState<IslamiPOS[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<IslamiPOS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
    const [counter_terminal, setCounter_terminal] = useState("");

  const [serialFilter, setSerialFilter] = useState("");
  const [midFilter, setMidFilter] = useState("");
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
        const res = await fetch("http://127.0.0.1:8000/islami/all");
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
  // Filter logic
  // ==========================
  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r.pos_serial?.toLowerCase().includes(serialFilter.toLowerCase()) &&
        r.mid?.toLowerCase().includes(midFilter.toLowerCase()) &&
        r.tid?.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r.city?.toLowerCase().includes(cityFilter.toLowerCase()) &&
        r.branch?.toLowerCase().includes(branchFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [serialFilter, midFilter, tidFilter, cityFilter, branchFilter, records]);

  // ==========================
  // Upload Excel
  // ==========================
  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Please select an Excel file!");
    const form = new FormData();
    form.append("file", excelFile);

    try {
      const res = await fetch("http://127.0.0.1:8000/islami/upload", {
        method: "POST",
        body: form,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload successful!");
      setExcelFile(null);

      const updated = await fetch("http://127.0.0.1:8000/islami/all");
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
    window.open("http://127.0.0.1:8000/islami/template", "_blank");
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<IslamiPOS>[] = [
    { name: "SL", selector: (_row, i) => i + 1, width: "50px" },
    { name: "Config Date", selector: (r) => r.configdate, minWidth: "100px" },
    { name: "Old MID", selector: (r) => r.old_mid, minWidth: "100px" },
    { name: "Old TID", selector: (r) => r.old_tid, minWidth: "80px" },
    { name: "MID", selector: (r) => r.mid, minWidth: "150px" },
    { name: "TID", selector: (r) => r.tid, minWidth: "120px" },
    { name: "MERCHANT SIGNBOARD Name", selector: (r) => r.merchant_signboard, minWidth: "250px" },
    { name: "Address", selector: (r) => r.address, minWidth: "250px", wrap: true },
    { name: "City", selector: (r) => r.city, minWidth: "130px" },
    { name: "Area", selector: (r) => r.area, minWidth: "130px" },
    { name: "Branch", selector: (r) => r.branch, minWidth: "180px" },
    { name: "Vendor", selector: (r) => r.vendor, minWidth: "100px" },
    { name: "POS Model", selector: (r) => r.pos_model, minWidth: "100px" },
    { name: "POS Serial", selector: (r) => r.pos_serial, minWidth: "130px" },
    { name: "Battery Serial", selector: (r) => r.battery_serial, minWidth: "160px" },
    { name: "Old POS Serial", selector: (r) => r.old_pos_serial, minWidth: "160px" },
    { name: "SIM Operator", selector: (r) => r.sim_operator, minWidth: "110px" },
    { name: "SIM Serial Number", selector: (r) => r.sim_serial_number, minWidth: "180px" },
    { name: "IP Address", selector: (r) => r.ip_address, minWidth: "150px" },
    { name: "Port", selector: (r) => r.port_number, minWidth: "100px" },
    { name: "Functionality", selector: (r) => r.special_functionality, minWidth: "200px" },
    { name: "TL", selector: (r) => r.tl, minWidth: "180px" },
    { name: "ARO", selector: (r) => r.aro, minWidth: "180px" },
    { name: "Merchant Contact Person", selector: (r) => r.merchant_contact_person, minWidth: "200px" },
    { name: "Merchant Contact Number", selector: (r) => r.merchant_contact_number, minWidth: "140px" },
    { name: "Installation Date", selector: (r) => r.installation_date, minWidth: "110px" },
    { name: "Installation Engineer", selector: (r) => r.installation_engineer_name, minWidth: "180px" },
    { name: "Handover To", selector: (r) => r.handover_to, minWidth: "100px" },
    { name: "Handover Date", selector: (r) => r.handover_date, minWidth: "110px" },
    { name: "App Version", selector: (r) => r.app_version, minWidth: "120px" },
    { name: "App Release Date", selector: (r) => r.app_release_date, minWidth: "110px" },
    { name: "Firmware Version", selector: (r) => r.firmware_version, minWidth: "120px" },
    { name: "Remarks", selector: (r) => r.remarks, minWidth: "200px", wrap: true },
    { name: "Created Time", selector: (r) => r.create_time, minWidth: "200px", wrap: true },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">IBBL LIVE TERMINALS</h1>

      {/* Buttons */}
     {/* Buttons */}
 <div className="flex justify-between gap-4 mb-6">
        
       <div className="">
           <h1 className="text-xl font-bold mb-4 ">Total Terminals: {counter_terminal}</h1>
       </div>
       
      <div className="">
          <button
           onClick={() => window.open("http://127.0.0.1:8000/islami/download", "_blank")}
          className="mr-2 bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200"
        >
          ⬇️ Export Excel
        </button>
        

        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200"
        >
          📂 Upload Excel
        </button>
      </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
        <input placeholder="Pos_Serial" value={serialFilter} onChange={(e) => setSerialFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="City" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="Branch" value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className="border rounded px-3 py-2" />
        <button
          onClick={() => {
            setSerialFilter("");
            setMidFilter("");
            setTidFilter("");
            setCityFilter("");
            setBranchFilter("");
          }}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded shadow-md p-2 overflow-x-auto">
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
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Upload via Excel</h2>
            <input
              type="file"
              accept=".xlsx,.xls"
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
              <pre className="bg-gray-100 p-2 mt-3 rounded text-sm">{uploadMsg}</pre>
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={handleDownloadTemplate}
                className="text-blue-600 underline"
              >
                📥 Download Template
              </button>
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

export default IslamiPOSPage;
