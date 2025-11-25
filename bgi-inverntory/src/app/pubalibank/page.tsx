"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";

type PubaliPOS = {
  id: number;
  sn: number;
  configuration_date: string;
  tid: string;
  mid: string;
  merchant_name: string;
  dba_name: string;
  address: string;
  bank_contact_person_name: string;
  bank_contact_person_number: string;
  district: string;
  division: string;
  zone: string;
  pos_sn: string;
  pos_brand_model: string;
  operator_name: string;
  sim_number: string;
  sim_ip: string;
  host_ip: string;
  host_port: string;
  emi: string;
  vendor_name: string;
  emi_tenure: string;
  remarks: string;
  apps_version: string;
  configure_by: string;
  installation_date: string;
  installation_by: string;
  merchant_number: string;
  firmware_version: string;
  qr: string;
  create_time: string;
};

const API_BASE = "http://127.0.0.1:8000/pubali";

const PubaliPOSPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState<PubaliPOS[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<PubaliPOS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [counter_terminal, setCounter_terminal] = useState("");

  // Filters
  const [midFilter, setMidFilter] = useState("");
  const [tidFilter, setTidFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [pos_serialFilter, setpos_serialFilter] = useState("");
  const [zoneFilter, setZoneFilter] = useState("");

  // Upload
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Auth
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("access_token");
    setToken(stored);
  }, []);

  // ✅ Helper: Map API response keys
  const mapApiData = (data: any[]): PubaliPOS[] => {
    return data.map((r) => ({
      id: r.id,
      sn: r["S/N"],
      configuration_date: r["CONFIGURATION DATE"] || "",
      tid: r["TID"] || "",
      mid: r["MID"] || "",
      merchant_name: r["MERCHANT NAME"] || "",
      dba_name: r["DBA NAME"] || "",
      address: r["ADDRESS"] || "",
      bank_contact_person_name: r["BANK CONT. PERSON NAME"] || "",
      bank_contact_person_number: r["BANK CONT. PERSON NUMBER"] || "",
      district: r["DISTRICT"] || "",
      division: r["DIVISION"] || "",
      zone: r["ZONE"] || "",
      pos_sn: r["POS S/N"] || "",
      pos_brand_model: r["POS BRAND & MODEL"] || "",
      operator_name: r["OPERATOR NAME"] || "",
      sim_number: r["SIM NUMBER"] || "",
      sim_ip: r["SIM IP"] || "",
      host_ip: r["HOST IP"] || "",
      host_port: r["HOST PORT"] || "",
      emi: r["EMI"] || "",
      vendor_name: r["VENDOR NAME"] || "",
      emi_tenure: r["EMI TENURE"] || "",
      remarks: r["REMARKS"] || "",
      apps_version: r["APPS VERSION"] || "",
      configure_by: r["CONFIGURE BY"] || "",
      installation_date: r["INSTALLATION DATE"] || "",
      installation_by: r["INSTALLATION BY"] || "",
      merchant_number: r["MERCHANT NUMBER"] || "",
      firmware_version: r["FIRMWARE VERSION"] || "",
      qr: r["QR"] || "",
      create_time: r["create_time"] || "",
    }));
  };

  // ✅ Fetch Data (Authenticated)
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        if (!token) throw new Error("No authentication token found. Please log in.");

        const res = await fetch(`${API_BASE}/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) throw new Error("Unauthorized: Invalid or expired token.");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setCounter_terminal(data.data?.length || 0);

        const formatted = mapApiData(data.data || data);
        setRecords(formatted);
        setFilteredRecords(formatted);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchRecords();
  }, [token]);

  // ✅ Filter logic
  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r.mid.toLowerCase().includes(midFilter.toLowerCase()) &&
        r.tid.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r.district.toLowerCase().includes(districtFilter.toLowerCase()) &&
        r.zone.toLowerCase().includes(zoneFilter.toLowerCase()) &&
        r.pos_sn.toLowerCase().includes(pos_serialFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [midFilter, tidFilter, districtFilter, zoneFilter, pos_serialFilter, records]);

  // ✅ Upload Excel
  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Please select an Excel file!");
    if (!token) return alert("Authentication required!");

    const form = new FormData();
    form.append("file", excelFile);

    try {
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload successful!");
      setExcelFile(null);

      // Refresh
      const updated = await fetch(`${API_BASE}/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newData = await updated.json();
      const formatted = mapApiData(newData.data || newData);
      setRecords(formatted);
      setFilteredRecords(formatted);
    } catch (e: any) {
      setUploadMsg("❌ " + e.message);
    }
  };

  // ✅ Download Template
  const handleDownloadTemplate = async () => {
    if (!token) return alert("Please log in first.");
    try {
      const res = await fetch(`${API_BASE}/template`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "PubaliPOS_Template.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Download failed: " + err.message);
    }
  };

  // ✅ Export Excel
  const handleExportExcel = async () => {
    if (!token) return alert("Please log in first.");
    try {
      const res = await fetch(`${API_BASE}/download`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "PubaliPOS_Export.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Download failed: " + err.message);
    }
  };

  // ✅ Table Columns
  const columns: TableColumn<PubaliPOS>[] = [
    { name: "S/N", selector: (r) => r.sn, width: "80px" },
    { name: "Config Date", selector: (r) => r.configuration_date, minWidth: "120px" },
    { name: "TID", selector: (r) => r.tid, minWidth: "100px" },
    { name: "MID", selector: (r) => r.mid, minWidth: "150px" },
    { name: "Merchant Name", selector: (r) => r.merchant_name, minWidth: "200px", wrap: true },
    { name: "DBA Name", selector: (r) => r.dba_name, minWidth: "230px" },
    { name: "Address", selector: (r) => r.address, minWidth: "250px", wrap: true },
    { name: "District", selector: (r) => r.district, minWidth: "150px" },
    { name: "Zone", selector: (r) => r.zone, minWidth: "150px" },
    { name: "POS SN", selector: (r) => r.pos_sn, minWidth: "150px" },
    { name: "Vendor", selector: (r) => r.vendor_name, minWidth: "150px" },
    { name: "Remarks", selector: (r) => r.remarks, minWidth: "200px", wrap: true },
    { name: "Created Time", selector: (r) => r.create_time, minWidth: "180px" },
  ];

  // ✅ Page Rendering
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">PBL LIVE TERMINALS</h1>

      {/* Buttons Section */}
      {/* Buttons */}
<div className="flex justify-between items-center flex-wrap gap-4 mb-6">
  <h1 className="text-xl font-bold">Total Terminals: {counter_terminal}</h1>

  <div className="flex flex-wrap items-center gap-3">
    {/* 🔘 Switch Buttons */}
    <button
      onClick={() => {
        if (!token) return alert("Authentication required! Please log in.");
        window.location.href = "/pubalibank";
      }}
      className="bg-white text-black font-semibold text-base px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
    >
      🟢 Live
    </button>

    <button
      onClick={() => {
        if (!token) return alert("Authentication required! Please log in.");
        window.location.href = "/pubalibank/pubali-withdraw";
      }}
      className="bg-white text-black font-semibold text-base px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
    >
      🟠 Withdraw
    </button>

    <button
      onClick={() => {
        if (!token) return alert("Authentication required! Please log in.");
        window.location.href = "/pubalibank/pubali-replace";
      }}
      className="bg-white text-black font-semibold text-base px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
    >
      🔵 Replace
    </button>

    {/* Existing Export & Upload */}
    <button
      onClick={handleExportExcel}
      className="bg-white text-black font-semibold text-base px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
    >
      ⬇️ Export Excel
    </button>

    <button
      onClick={() => setShowUploadModal(true)}
      className="bg-white text-black font-semibold text-base px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
    >
      📂 Upload Excel
    </button>
  </div>
</div>
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="District" value={districtFilter} onChange={(e) => setDistrictFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="Zone" value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="POS Serial" value={pos_serialFilter} onChange={(e) => setpos_serialFilter(e.target.value)} className="border rounded px-3 py-2" />
        <button
          onClick={() => {
            setMidFilter("");
            setTidFilter("");
            setDistrictFilter("");
            setZoneFilter("");
            setpos_serialFilter("");
          }}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded shadow-md p-2 overflow-x-auto">
        <DataTable columns={columns} data={filteredRecords} pagination striped highlightOnHover dense persistTableHead />
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Upload via Excel</h2>
            <input type="file" accept=".xlsx,.xls" onChange={(e) => setExcelFile(e.target.files?.[0] || null)} className="border rounded w-full p-2 mb-3" />
            <button onClick={handleUploadExcel} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
              Upload
            </button>
            {uploadMsg && <pre className="bg-gray-100 p-2 mt-3 rounded text-sm">{uploadMsg}</pre>}
            <div className="flex justify-between mt-4">
              <button onClick={handleDownloadTemplate} className="text-blue-600 underline">
                📥 Download Template
              </button>
              <button onClick={() => setShowUploadModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PubaliPOSPage;
