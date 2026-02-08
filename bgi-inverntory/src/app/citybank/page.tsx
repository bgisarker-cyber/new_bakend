"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";

// =============================
// TypeScript Type Definition
// =============================
type CityPOS = {
  id: number;
  sl: string;
  purpose: string;
  configdate: string;
  old_mid: string;
  old_tid: string;
  mid: string;
  tid: string;
  merchant_name: string;
  dba_name: string;
  address: string;
  city: string;
  location: string;
  vendor: string;
  pos_type: string;
  pos_model: string;
  pos_serial: string;
  old_pos_serial: string;
  old_sim_serial: string;
  sim_serial_number: string;
  sim_number: string;
  sim_carrier: string;
  ip_address: string;
  port_number: string;
  reason: string;
  special_functionality: string;
  installation_date: string;
  merchant_contact_person: string;
  merchant_contact_number: string;
  handover_to: string;
  handover_date: string;
  roll_out_by: string;
  roll_out_date: string;
  app_release_date: string;
  qr_code: string;
  qr_id: string;
  create_time: string;
};

const API_BASE = "http://127.0.0.1:8000/city";

// =============================
// Main Component
// =============================
const CityPOSPage = () => {
  const router = useRouter();

  const [records, setRecords] = useState<CityPOS[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<CityPOS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [counter_terminal, setCounter_terminal] = useState(0);

  const [midFilter, setMidFilter] = useState("");
  const [tidFilter, setTidFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [posSerialFilter, setPosSerialFilter] = useState("");

  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("access_token");
    if (!t) router.push("/login");
    else setToken(t);
  }, [router]);

  const getAuthHeaders = () => ({
    Authorization: `Bearer ${token}`,
  });

  const mapApiData = (data: any[]): CityPOS[] =>
    (data || []).map((r: any) => ({
      id: r.id,
      sl: r["SL"] ?? "",
      purpose: r["PURPOSE"] ?? "",
      configdate: r["CONFIGDATE"] ?? "",
      old_mid: r["OLD MID"] ?? "",
      old_tid: r["OLD TID"] ?? "",
      mid: r["MID"] ?? "",
      tid: r["TID"] ?? "",
      merchant_name: r["MERCHANT NAME"] ?? "",
      dba_name: r["DBA NAME"] ?? "",
      address: r["ADDRESS"] ?? "",
      city: r["CITY"] ?? "",
      location: r["LOCATION"] ?? "",
      vendor: r["VENDOR"] ?? "",
      pos_type: r["POS TYPE"] ?? "",
      pos_model: r["POS MODEL"] ?? "",
      pos_serial: r["POS SERIAL"] ?? "",
      old_pos_serial: r["OLD POS SERIAL"] ?? "",
      old_sim_serial: r["OLD SIM SERIAL"] ?? "",
      sim_serial_number: r["SIM SERIAL NUMBER"] ?? "",
      sim_number: r["SIM NUMBER"] ?? "",
      sim_carrier: r["SIM CARRIER"] ?? "",
      ip_address: r["IP ADDRESS"] ?? "",
      port_number: r["PORT NUMBER"] ?? "",
      reason: r["REASON"] ?? "",
      special_functionality: r["SPECIAL FUNCTIONALITY"] ?? "",
      installation_date: r["INSTALLATION DATE"] ?? "",
      merchant_contact_person: r["MERCHAN CONTACT PERSON"] ?? "",
      merchant_contact_number: r["MERCHAN CONTACT NUMBER"] ?? "",
      handover_to: r["HANDOVER TO"] ?? "",
      handover_date: r["HANDOVER DATE"] ?? "",
      roll_out_by: r["ROLL OUT BY"] ?? "",
      roll_out_date: r["ROLL OUT DATE"] ?? "",
      app_release_date: r["APP RELEASE DATE"] ?? "",
      qr_code: r["QR CODE"] ?? "",
      qr_id: r["QR ID"] ?? "",
      create_time: r["create_time"] ?? "",
    }));

  useEffect(() => {
    if (!token) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/all`, { headers: getAuthHeaders() });
        if (res.status === 401) throw new Error("Unauthorized");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const mapped = mapApiData(json.data || json);
        setCounter_terminal(mapped.length);
        setRecords(mapped);
        setFilteredRecords(mapped);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r.mid.toLowerCase().includes(midFilter.toLowerCase()) &&
        r.tid.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r.city.toLowerCase().includes(cityFilter.toLowerCase()) &&
        r.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
        r.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [midFilter, tidFilter, cityFilter, locationFilter, posSerialFilter, records]);

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
      setUploadMsg("✅ Upload completed!");
      setExcelFile(null);

      // refresh
      const updated = await fetch(`${API_BASE}/all`, { headers: getAuthHeaders() });
      const json = await updated.json();
      const mapped = mapApiData(json.data || json);
      setRecords(mapped);
      setFilteredRecords(mapped);
      setCounter_terminal(mapped.length);
    } catch (e: any) {
      setUploadMsg("❌ " + e.message);
    }
  };

  const downloadBlob = async (endpoint: string, filename: string) => {
    if (!token) return alert("Authentication required!");
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Download failed: " + err.message);
    }
  };

  const handleDownloadData = () => downloadBlob("/download", "CityPOS_Export.xlsx");
  const handleDownloadTemplate = () => downloadBlob("/template", "CityPOS_Template.xlsx");

  const columns: TableColumn<CityPOS>[] = [
    { name: "SL", selector: (r) => r.sl, width: "70px" },
    { name: "Config Date", selector: (r) => r.configdate, width: "100px" },
    { name: "TID", selector: (r) => r.tid },
    { name: "MID", selector: (r) => r.mid, style: { minWidth: "150px" } },
    { name: "Merchant Name", selector: (r) => r.merchant_name, wrap: true, style: { minWidth: "200px" } },
    { name: "DBA Name", selector: (r) => r.dba_name, wrap: true, style: { minWidth: "200px" } },
    { name: "Address", selector: (r) => r.address, wrap: true, style: { minWidth: "300px" } },
    { name: "City", selector: (r) => r.city, style: { minWidth: "150px" } },
    { name: "Location", selector: (r) => r.location, style: { minWidth: "180px" } },
    { name: "Vendor", selector: (r) => r.vendor },
    { name: "POS Type", selector: (r) => r.pos_type },
    { name: "POS Model", selector: (r) => r.pos_model, style: { minWidth: "110px" } },
    { name: "POS Serial", selector: (r) => r.pos_serial, style: { minWidth: "120px" } },
    { name: "SIM Serial", selector: (r) => r.sim_serial_number, style: { minWidth: "190px" } },
    { name: "SIM Carrier", selector: (r) => r.sim_carrier },
    { name: "IP Address", selector: (r) => r.ip_address, width: "120px" },
    { name: "Port Number", selector: (r) => r.port_number },
    { name: "Installation Date", selector: (r) => r.installation_date, width: "150px" },
    { name: "Handover To", selector: (r) => r.handover_to, width: "120px" },
    { name: "Handover Date", selector: (r) => r.handover_date, width: "150px" },
    { name: "Roll Out By", selector: (r) => r.roll_out_by },
    { name: "Roll Out Date", selector: (r) => r.roll_out_date },
    { name: "App Release Date", selector: (r) => r.app_release_date },
    { name: "Created", selector: (r) => r.create_time, width: "180px" },
  ];

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">CBL LIVE TERMINALS</h1>

      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Total Terminals: {counter_terminal}
      </h2>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl justify-between items-center mb-6 gap-4">
        {/* Left Side */}
        <div className="flex justify-start w-full md:w-auto">
          <button
            onClick={handleDownloadData}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef]
              shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]
              hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]
              transition-all font-semibold text-gray-800"
          >
            ⬇️ Export Excel
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-end w-full md:w-auto gap-4">
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef]
              shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]
              hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]
              transition-all font-semibold text-gray-800"
          >
            📂 Upload Excel
          </button>

          <button
            onClick={() => router.push("/citybank/city-replace")}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef]
              shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]
              hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]
              transition-all font-semibold text-gray-800"
          >
            🔵 Replace
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6 w-full max-w-6xl">
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="City" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="Location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="POS Serial" value={posSerialFilter} onChange={(e) => setPosSerialFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button onClick={() => {setMidFilter(""); setTidFilter(""); setCityFilter(""); setLocationFilter(""); setPosSerialFilter("");}} className="px-4 py-2 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.18),-4px_-4px_#ffffff] hover:shadow-[3px_3px_10px_rgba(0,0,0,0.22),-3px_-3px_#ffffff] font-semibold">Clear</button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl">
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
          <div className="bg-[#e6e9ef] p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Upload via Excel</h2>
            <input type="file" accept=".xlsx,.xls" onChange={(e) => setExcelFile(e.target.files?.[0] || null)} className="border rounded px-3 py-2 mb-3 w-full" />
            <button onClick={handleUploadExcel} className="w-full px-4 py-2 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700 mb-2 transition">Upload</button>
            {uploadMsg && <pre className="bg-gray-100 p-2 rounded text-sm">{uploadMsg}</pre>}
            <div className="flex justify-between mt-4">
              <button onClick={handleDownloadTemplate} className="text-blue-600 underline">📥 Download Template</button>
              <button onClick={() => setShowUploadModal(false)} className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-400 transition">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityPOSPage;