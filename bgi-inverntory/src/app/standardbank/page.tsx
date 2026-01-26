"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";

/* ------------------------------------------------------------------ */
type StandardPOS = {
  sl: number;
  purpose: string;
  configdate: string;
  mid: string;
  tid: string;
  dba_name: string;
  address: string;
  city: string;
  location: string;
  pos_type: string;
  pos_model: string;
  pos_serial: string;
  app_version: string;
  roll_out_date: string;
  engineer_name: string;
  ip_address: string;
  port_number: string;
  contact_number: string;
  handover_to: string;
  handover_date: string;
  create_time: string;
};

type RawPOS = Record<string, unknown>;

const API_BASE = "http://127.0.0.1:8000/standard";

/* ------------------------------------------------------------------ */
export default function StandardPOSPage() {
  const router = useRouter();

  /* ---------------- state ---------------- */
  const [records, setRecords] = useState<StandardPOS[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<StandardPOS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const [midFilter, setMidFilter] = useState("");
  const [tidFilter, setTidFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [posSerialFilter, setPosSerialFilter] = useState("");

  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  /* ---------- auth ---------- */
  useEffect(() => {
    const t = localStorage.getItem("access_token");
    if (!t) router.push("/login");
    else setToken(t);
  }, [router]);

  /* ---------- fetch records ---------- */
  const fetchRecords = async (authToken: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/all`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`${res.status}  ${txt}`);
      }
      const json = await res.json();
      const data: RawPOS[] = Array.isArray(json?.data) ? json.data : [];

      const mapped: StandardPOS[] = data.map((r: RawPOS) => ({
        sl: Number(r["SL"] ?? 0),
        purpose: String(r["PURPOSE"] ?? ""),
        configdate: String(r["CONFIGDATE"] ?? ""),
        mid: String(r["MID"] ?? ""),
        tid: String(r["TID"] ?? ""),
        dba_name: String(r["DBA NAME"] ?? ""),
        address: String(r["ADDRESS"] ?? ""),
        city: String(r["CITY"] ?? ""),
        location: String(r["LOCATION"] ?? ""),
        pos_type: String(r["POS TYPE"] ?? ""),
        pos_model: String(r["POS MODEL"] ?? ""),
        pos_serial: String(r["POS SERIAL"] ?? ""),
        app_version: String(r["APP VERSION"] ?? ""),
        roll_out_date: String(r["ROLL OUT DATE"] ?? ""),
        engineer_name: String(r["ENGINEER NAME"] ?? ""),
        ip_address: String(r["IP ADDRESS"] ?? ""),
        port_number: String(r["PORT NUMBER"] ?? ""),
        contact_number: String(r["CONTACT NUMBER"] ?? ""),
        handover_to: String(r["HANDOVER TO"] ?? ""),
        handover_date: String(r["HANDOVER DATE"] ?? ""),
        create_time: String(r["create_time"] ?? ""),
      }));

      setRecords(mapped);
      setFilteredRecords(mapped);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchRecords(token);
  }, [token]);

  /* ---------- filter ---------- */
  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r.mid.toLowerCase().includes(midFilter.toLowerCase()) &&
        r.tid.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r.city.toLowerCase().includes(cityFilter.toLowerCase()) &&
        r.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [midFilter, tidFilter, cityFilter, posSerialFilter, records]);

  /* ---------- Excel Upload ---------- */
  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Select a file!");
    if (!token) return alert("Authentication required!");

    const form = new FormData();
    form.append("file", excelFile);

    try {
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt);
      }

      setUploadMsg("✅ Upload successful!");
      setExcelFile(null);
      setShowUploadModal(false);
      await fetchRecords(token);
    } catch (err: any) {
      setUploadMsg("❌ " + err.message);
    }
  };

  /* ---------- Excel Download ---------- */
  const downloadExcelFile = async (endpoint: "template" | "download", filename: string) => {
    if (!token) return alert("Please log in first.");

    try {
      const res = await fetch(`${API_BASE}/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt);
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert(`Download failed: ${err.message}`);
    }
  };

  const handleDownloadTemplate = () => downloadExcelFile("template", "StandardPOS_Template.xlsx");
  const handleExportExcel = () => downloadExcelFile("download", "StandardPOS_Export.xlsx");

  /* ---------- table ---------- */
  const columns: TableColumn<StandardPOS>[] = [
    { name: "SL", selector: (r) => r.sl, width: "80px" },
    { name: "Purpose", selector: (r) => r.purpose, style: { minWidth: 150 } },
    { name: "Config Date", selector: (r) => r.configdate, style: { minWidth: 130 } },
    { name: "TID", selector: (r) => r.tid, style: { minWidth: 100 } },
    { name: "MID", selector: (r) => r.mid, style: { minWidth: 150 } },
    { name: "DBA Name", selector: (r) => r.dba_name, style: { minWidth: 200 }, wrap: true },
    { name: "Address", selector: (r) => r.address, style: { minWidth: 220 }, wrap: true },
    { name: "City", selector: (r) => r.city, style: { minWidth: 150 } },
    { name: "Location", selector: (r) => r.location, style: { minWidth: 150 } },
    { name: "POS Serial", selector: (r) => r.pos_serial, style: { minWidth: 150 } },
    { name: "Engineer Name", selector: (r) => r.engineer_name, style: { minWidth: 200 } },
    { name: "Remarks", selector: (r) => r.app_version, style: { minWidth: 150 } },
    { name: "Created Time", selector: (r) => r.create_time, style: { minWidth: 180 } },
  ];

  /* ---------- render ---------- */
  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">SDBL LIVE TERMINALS</h1>
       {/* Center: Total Terminals */}
        <h2 className="text-xl font-semibold text-gray-700 text-center">Total Terminals: {records.length}</h2>


      {/* top buttons layout */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-6 px-4">
        {/* Left: Export */}
        <button
          onClick={handleExportExcel}
          className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] transition-all font-semibold"
        >
          ⬇️ Export Excel
        </button>

       
        {/* Right: Upload */}
        <button
          onClick={() => setShowUploadModal(true)}
          className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] transition-all font-semibold"
        >
          📂 Upload Excel
        </button>
      </div>

      {/* filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 max-w-7xl w-full px-4">
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="City" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="POS Serial" value={posSerialFilter} onChange={(e) => setPosSerialFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button
          onClick={() => { setMidFilter(""); setTidFilter(""); setCityFilter(""); setPosSerialFilter(""); }}
          className="px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Clear
        </button>
      </div>

      {/* table */}
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

      {/* upload modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
            <h2 className="text-xl font-semibold mb-4 text-center">📤 Upload Excel</h2>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setExcelFile(e.target.files?.[0] ?? null)}
              className="border rounded-2xl w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleUploadExcel}
              className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2"
            >
              Upload
            </button>
            {uploadMsg && <pre className="bg-gray-100 p-2 mt-2 rounded text-sm">{uploadMsg}</pre>}
            <div className="flex justify-between mt-4">
              <button onClick={handleDownloadTemplate} className="text-blue-600 underline font-semibold">
                📥 Download Template
              </button>
              <button onClick={() => setShowUploadModal(false)} className="bg-gray-300 px-4 py-2 rounded-2xl font-semibold">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
