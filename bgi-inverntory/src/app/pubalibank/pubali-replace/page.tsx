"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable, { TableColumn } from "react-data-table-component";

type PubaliReplace = {
  id: number;
  "S/N": number;
  "CONFIGURATION DATE": string;
  "TID": string;
  "MID": string;
  "MERCHANT NAME": string;
  "DBA NAME": string;
  "ADDRESS": string;
  "BANK CONT. PERSON NAME": string;
  "BANK CONT. PERSON NUMBER": string;
  "DISTRICT": string;
  "DIVISION": string;
  "ZONE": string;
  "POS S/N": string;
  "POS BRAND & MODEL": string;
  "OPERATOR NAME": string;
  "SIM NUMBER": string;
  "SIM IP": string;
  "HOST IP": string;
  "HOST PORT": string;
  "EMI": string;
  "VENDOR NAME": string;
  "EMI TENURE": string;
  "REMARKS": string;
  "APPS VERSION": string;
  "CONFIGURE BY": string;
  "INSTALLATION DATE": string;
  "INSTALLATION BY": string;
  "MERCHANT NUMBER": string;
  "FIRMWARE VERSION": string;
  "QR": string;
  created_at: string;
  updated_at: string;
};

const API_BASE = "http://127.0.0.1:8000/pubali_replace";

const PubaliReplacePage = () => {
  const router = useRouter();
  const [records, setRecords] = useState<PubaliReplace[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<PubaliReplace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [midFilter, setMidFilter] = useState("");
  const [tidFilter, setTidFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [zoneFilter, setZoneFilter] = useState("");
  const [posFilter, setPosFilter] = useState("");

  const [editingRow, setEditingRow] = useState<PubaliReplace | null>(null);
  const [formData, setFormData] = useState<Partial<PubaliReplace>>({});

  const [counter_terminal, setCounter_terminal] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("access_token");
    setToken(stored);
  }, []);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      if (!token) throw new Error("Please log in.");
      const res = await fetch(`${API_BASE}/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setRecords(data.data || data);
      setFilteredRecords(data.data || data);
      setCounter_terminal(data.data?.length || data.length || 0);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchRecords();
  }, [token]);

  // Filter logic
  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r["MID"]?.toLowerCase().includes(midFilter.toLowerCase()) &&
        r["TID"]?.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r["DISTRICT"]?.toLowerCase().includes(districtFilter.toLowerCase()) &&
        r["ZONE"]?.toLowerCase().includes(zoneFilter.toLowerCase()) &&
        r["POS S/N"]?.toLowerCase().includes(posFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [midFilter, tidFilter, districtFilter, zoneFilter, posFilter, records]);

  // Delete Record
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    try {
      const res = await fetch(`${API_BASE}/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      await fetchRecords();
      alert("Record deleted successfully!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Edit Record
  const handleEditSave = async () => {
    if (!editingRow) return;
    try {
      const res = await fetch(`${API_BASE}/edit/${editingRow["S/N"]}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to update record");
      await fetchRecords();
      setEditingRow(null);
      alert("✅ Record updated successfully!");
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  // Upload Excel
  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Please select an Excel file!");
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

  // Download Template
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
      a.download = "Pubali_Replace_Template.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Download failed: " + err.message);
    }
  };

  // Export Excel
  const handleExportExcel = async () => {
    try {
      const res = await fetch(`${API_BASE}/download`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Pubali_Replace_Data.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Export failed: " + err.message);
    }
  };

  // Table Columns
  const columns: TableColumn<PubaliReplace>[] = [
    { name: "S/N", selector: (r) => r["S/N"], width: "70px" },
    { name: "CONFIG DATE", selector: (r) => r["CONFIGURATION DATE"], minWidth: "130px" },
    { name: "TID", selector: (r) => r["TID"], minWidth: "120px" },
    { name: "MID", selector: (r) => r["MID"], minWidth: "140px" },
    { name: "MERCHANT NAME", selector: (r) => r["MERCHANT NAME"], minWidth: "200px", wrap: true },
    { name: "DISTRICT", selector: (r) => r["DISTRICT"], minWidth: "150px" },
    { name: "ZONE", selector: (r) => r["ZONE"], minWidth: "120px" },
    { name: "ADDRESS", selector: (r) => r["ADDRESS"], minWidth: "300px" },
    {
      name: "Actions",
      cell: (r) => (
        <div className="flex gap-2">
          <button
            onClick={() => { setEditingRow(r); setFormData(r); }}
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => handleDelete(r["S/N"])}
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            🗑️ Delete
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">🔵 Pubali Replace Records</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <h1 className="text-xl font-bold">Total Terminals: {counter_terminal}</h1>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => router.push("/pubalibank")} className="bg-white text-black font-semibold px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100">🟢 Live</button>
          <button onClick={() => router.push("/pubalibank/pubali-withdraw")} className="bg-white text-black font-semibold px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100">🟠 Withdraw</button>
          <button onClick={() => router.push("/pubalibank/pubali-replace")} className="bg-white text-black font-semibold px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100">🔵 Replace</button>
          <button onClick={handleExportExcel} className="bg-white text-black font-semibold px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100">⬇️ Export Excel</button>
          <button onClick={() => setShowUploadModal(true)} className="bg-white text-black font-semibold px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100">📂 Upload Excel</button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
        <input placeholder="MID" value={midFilter} onChange={(e) => setMidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="TID" value={tidFilter} onChange={(e) => setTidFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="District" value={districtFilter} onChange={(e) => setDistrictFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="Zone" value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="border rounded px-3 py-2" />
        <input placeholder="POS Serial" value={posFilter} onChange={(e) => setPosFilter(e.target.value)} className="border rounded px-3 py-2" />
        <button onClick={() => { setMidFilter(""); setTidFilter(""); setDistrictFilter(""); setZoneFilter(""); setPosFilter(""); }} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Clear</button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded shadow-md p-2 overflow-x-auto">
        <DataTable columns={columns} data={filteredRecords} pagination highlightOnHover striped dense />
      </div>

      {/* Edit Modal */}
      {editingRow && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-3">✏️ Edit Record #{editingRow["S/N"]}</h2>
            {Object.keys(editingRow).map((key) =>
              key !== "id" ? (
                <div key={key} className="mb-2">
                  <label className="block text-sm font-semibold">{key}</label>
                  <input type="text" value={(formData as any)[key] || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} className="border w-full p-2 rounded" />
                </div>
              ) : null
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleEditSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
              <button onClick={() => setEditingRow(null)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">📤 Upload Excel</h2>
            <input type="file" accept=".xlsx,.xls" onChange={(e) => setExcelFile(e.target.files?.[0] || null)} className="border rounded w-full p-2 mb-3" />
            <button onClick={handleUploadExcel} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">Upload</button>
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

export default PubaliReplacePage;
