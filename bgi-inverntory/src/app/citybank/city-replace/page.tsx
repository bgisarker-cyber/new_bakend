"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";

type CityReplace = {
  SL: number;
  PURPOSE: string;
  CONFIGDATE: string;
  "OLD MID": string;
  "OLD TID": string;
  MID: string;
  TID: string;
  "MERCHANT NAME": string;
  "DBA NAME": string;
  ADDRESS: string;
  CITY: string;
  LOCATION: string;
  VENDOR: string;
  "POS TYPE": string;
  "POS MODEL": string;
  "POS SERIAL": string;
  "OLD POS SERIAL": string;
  "SIM SERIAL NUMBER": string;
  "SIM NUMBER": string;
  "SIM CARRIER": string;
  "IP ADDRESS": string;
  "PORT NUMBER": string;
  REASON: string;
  "SPECIAL FUNCTIONALITY": string;
  "INSTALLATION DATE": string;
  "MERCHAN CONTACT PERSON": string;
  "MERCHAN CONTACT NUMBER": string;
  "HANDOVER TO": string;
  "HANDOVER DATE": string;
  "ROLL OUT BY": string;
  "ROLL OUT DATE": string;
  "APP RELEASE DATE": string;
  NFC: string;
  created_at?: string;
  updated_at?: string;
};

const API_BASE = "http://127.0.0.1:8000/city_replace";

export default function CityReplacePage() {
  const router = useRouter();

  const [records, setRecords] = useState<CityReplace[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<CityReplace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const [midFilter, setMidFilter] = useState("");
  const [tidFilter, setTidFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [posSerialFilter, setPosSerialFilter] = useState("");

  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [editingRow, setEditingRow] = useState<CityReplace | null>(null);
  const [formData, setFormData] = useState<Partial<CityReplace>>({});
  const [counterTerminal, setCounterTerminal] = useState(0);

  useEffect(() => {
    const t = localStorage.getItem("access_token");
    if (!t) router.push("/login");
    else setToken(t);
  }, [router]);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      if (!token) throw new Error("Please log in.");
      const res = await fetch(`${API_BASE}/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const data = json.data || json;
      setRecords(data);
      setFilteredRecords(data);
      setCounterTerminal(data.length);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchRecords();
  }, [token]);

  useEffect(() => {
    const filtered = records.filter((r) => {
      const mid = String(r.MID ?? "").toLowerCase();
      const tid = String(r.TID ?? "").toLowerCase();
      const city = String(r.CITY ?? "").toLowerCase();
      const loc = String(r.LOCATION ?? "").toLowerCase();
      const pos = String(r["POS SERIAL"] ?? "").toLowerCase();

      return (
        mid.includes(midFilter.toLowerCase()) &&
        tid.includes(tidFilter.toLowerCase()) &&
        city.includes(cityFilter.toLowerCase()) &&
        loc.includes(locationFilter.toLowerCase()) &&
        pos.includes(posSerialFilter.toLowerCase())
      );
    });
    setFilteredRecords(filtered);
  }, [midFilter, tidFilter, cityFilter, locationFilter, posSerialFilter, records]);

  const handleDelete = async (sl: number) => {
    if (!confirm("Delete this record?")) return;
    try {
      const res = await fetch(`${API_BASE}/delete/${sl}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      await fetchRecords();
      alert("🗑️ Record deleted.");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleEditSave = async () => {
    if (!editingRow) return;
    try {
      const res = await fetch(`${API_BASE}/edit/${editingRow.SL}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Update failed");
      await fetchRecords();
      setEditingRow(null);
      alert("✅ Updated.");
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Select a file!");
    try {
      const form = new FormData();
      form.append("file", excelFile);
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.detail || "Upload failed");
      setUploadMsg("✅ Upload successful!");
      await fetchRecords();
      setShowUploadModal(false);
    } catch (e: any) {
      setUploadMsg("❌ " + e.message);
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const res = await fetch(`${API_BASE}/template`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "City_Replace_Template.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Download failed: " + err.message);
    }
  };

  const handleExportExcel = async () => {
    try {
      const res = await fetch(`${API_BASE}/download`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "City_Replace_Data.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Export failed: " + err.message);
    }
  };

  const columns: TableColumn<CityReplace>[] = [
    { name: "SL", selector: (r) => r.SL, width: "70px" },
    { name: "Config Date", selector: (r) => r.CONFIGDATE, style: { width: "120px" } },
    { name: "TID", selector: (r) => r.TID, style: { minWidth: "100px" } },
    { name: "MID", selector: (r) => r.MID, style: { minWidth: "140px" } },
    { name: "Merchant Name", selector: (r) => r["MERCHANT NAME"], style: { minWidth: "200px" }, wrap: true },
    { name: "City", selector: (r) => r.CITY, style: { width: "140px" } },
    { name: "Location", selector: (r) => r.LOCATION, style: { width: "140px" } },
    { name: "POS Serial", selector: (r) => r["POS SERIAL"], style: { minWidth: "150px" } },
    {
      name: "Actions",
      cell: (r) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditingRow(r);
              setFormData(r);
            }}
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            ✏️
          </button>
          <button
            onClick={() => handleDelete(r.SL)}
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            🗑️
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen bg-[#e6e9ef] p-6 flex flex-col items-center">
      

      {/* HEADER */}
      <header className="flex flex-col items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">CBL Replace Records</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Total Terminals: {counterTerminal}
        </h2>
      </header>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mb-4 gap-4">
        <div>
          <button
            onClick={handleExportExcel}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef]
            shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]
            hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]
            transition-all font-semibold text-gray-800"
          >
            ⬇️ Export Excel
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => router.push("/citybank")}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef]
            shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]
            hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]
            transition-all font-semibold text-gray-800"
          >
            🔵 Live
          </button>

          <button
            onClick={() => setShowUploadModal(true)}
            className="px-6 py-3 rounded-2xl bg-[#e6e9ef]
            shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]
            hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]
            transition-all font-semibold text-gray-800"
          >
            📂 Upload Excel
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 max-w-7xl w-full">
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="City" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="Location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input placeholder="POS Serial" value={posSerialFilter} onChange={(e) => setPosSerialFilter(e.target.value)} className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button
          onClick={() => { setMidFilter(""); setTidFilter(""); setCityFilter(""); setLocationFilter(""); setPosSerialFilter(""); }}
          className="px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Clear
        </button>
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

      {/* EDIT MODAL */}
      {editingRow && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-3">✏️ Edit Record SL {editingRow.SL}</h2>
            {Object.keys(editingRow).map((key) =>
              key === "SL" || key === "created_at" || key === "updated_at" ? null : (
                <div key={key} className="mb-2">
                  <label className="block text-sm font-semibold">{key}</label>
                  <input
                    type="text"
                    value={(formData as any)[key] || ""}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="border w-full p-2 rounded"
                  />
                </div>
              )
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleEditSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Save
              </button>
              <button onClick={() => setEditingRow(null)} className="bg-gray-300 px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPLOAD EXCEL MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]">
            <h2 className="text-xl font-semibold mb-4 text-center">📤 Upload Excel</h2>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={(e) => setExcelFile(e.target.files?.[0] || null)}
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
