"use client";

import { useEffect, useState } from "react";
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

  /* ---------- fetch ---------- */
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        if (!token) throw new Error("Please log in.");
        const res = await fetch(`${API_BASE}/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`${res.status}  ${txt}`);
        }
        const json = await res.json();

        /* ======  defensive: ensure array  ====== */
        const data = Array.isArray(json?.data) ? json.data : [];

        const mapped: StandardPOS[] = data.map((r) => ({
          sl: r["SL"],
          purpose: r["PURPOSE"] ?? "",
          configdate: r["CONFIGDATE"] ?? "",
          mid: String(r["MID"] ?? ""),
          tid: String(r["TID"] ?? ""),
          dba_name: r["DBA NAME"] ?? "",
          address: r["ADDRESS"] ?? "",
          city: r["CITY"] ?? "",
          location: r["LOCATION"] ?? "",
          pos_type: r["POS TYPE"] ?? "",
          pos_model: r["POS MODEL"] ?? "",
          pos_serial: r["POS SERIAL"] ?? "",
          app_version: r["APP VERSION"] ?? "",
          roll_out_date: r["ROLL OUT DATE"] ?? "",
          engineer_name: r["ENGINEER NAME"] ?? "",
          ip_address: r["IP ADDRESS"] ?? "",
          port_number: String(r["PORT NUMBER"] ?? ""),
          contact_number: String(r["CONTACT NUMBER"] ?? ""),
          handover_to: r["HANDOVER TO"] ?? "",
          handover_date: r["HANDOVER DATE"] ?? "",
          create_time: r["create_time"] ?? "",
        }));
        setRecords(mapped);
        setFilteredRecords(mapped);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchRecords();
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

  /* ---------- upload ---------- */
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
      const result = await res.json();
      setUploadMsg("✅ Upload successful!");
      setExcelFile(null);
      setShowUploadModal(false);
      // refresh
      const upd = await fetch(`${API_BASE}/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!upd.ok) {
        const txt = await upd.text();
        throw new Error(txt);
      }
      const json = await upd.json();
      const data = Array.isArray(json?.data) ? json.data : [];
      const mapped: StandardPOS[] = data.map((r) => ({
        sl: r["SL"],
        purpose: r["PURPOSE"] ?? "",
        configdate: r["CONFIGDATE"] ?? "",
        mid: String(r["MID"] ?? ""),
        tid: String(r["TID"] ?? ""),
        dba_name: r["DBA NAME"] ?? "",
        address: r["ADDRESS"] ?? "",
        city: r["CITY"] ?? "",
        location: r["LOCATION"] ?? "",
        pos_type: r["POS TYPE"] ?? "",
        pos_model: r["POS MODEL"] ?? "",
        pos_serial: r["POS SERIAL"] ?? "",
        app_version: r["APP VERSION"] ?? "",
        roll_out_date: r["ROLL OUT DATE"] ?? "",
        engineer_name: r["ENGINEER NAME"] ?? "",
        ip_address: r["IP ADDRESS"] ?? "",
        port_number: String(r["PORT NUMBER"] ?? ""),
        contact_number: String(r["CONTACT NUMBER"] ?? ""),
        handover_to: r["HANDOVER TO"] ?? "",
        handover_date: r["HANDOVER DATE"] ?? "",
        create_time: r["create_time"] ?? "",
      }));
      setRecords(mapped);
      setFilteredRecords(mapped);
    } catch (e: any) {
      setUploadMsg("❌ " + e.message);
    }
  };

  const handleDownloadTemplate = async () => {
    if (!token) return alert("Please log in first.");
    try {
      const res = await fetch(`${API_BASE}/template`, {
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
      a.download = "StandardPOS_Template.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Download failed: " + err.message);
    }
  };

  const handleExportExcel = async () => {
    if (!token) return alert("Please log in first.");
    try {
      const res = await fetch(`${API_BASE}/download`, {
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
      a.download = "StandardPOS_Export.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Export failed: " + err.message);
    }
  };

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">STANDARD BANK POS RECORDS</h1>

      {/* top buttons */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <h1 className="text-xl font-bold">Total Terminals: {records.length}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={handleExportExcel} className="bg-white text-black px-6 py-3 rounded-lg border hover:bg-gray-100">
            ⬇️ Export Excel
          </button>
          <button onClick={() => setShowUploadModal(true)} className="bg-white text-black px-6 py-3 rounded-lg border hover:bg-gray-100">
            📂 Upload Excel
          </button>
        </div>
      </div>

      {/* filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="City" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="POS Serial" value={posSerialFilter} onChange={(e) => setPosSerialFilter(e.target.value)} className="border rounded px-3 py-2" />
        <button onClick={() => { setMidFilter(""); setTidFilter(""); setCityFilter(""); setPosSerialFilter(""); }} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Clear
        </button>
      </div>

      {/* table */}
      <div className="bg-white rounded shadow-md p-2 overflow-x-auto">
        <DataTable columns={columns} data={filteredRecords} pagination striped highlightOnHover dense persistTableHead />
      </div>

      {/* upload modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">📤 Upload Excel</h2>
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
}