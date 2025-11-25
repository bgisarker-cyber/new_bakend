"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// ==========================
// TypeScript Type Definition
// ==========================
type MTBPOS = {
  id: number;
  sl: number;
  tid: string;
  mid: string;
  client_id: string;
  outlet_name_dba_name: string;
  merchant_name: string;
  address: string;
  status: string;
  tenure: string;
  city: string;
  zone_area: string;
  pos_model: string;
  pos_serial: string;
  telco: string;
  sim_serial_number: string;
  app_version: string;
  installation_date: string;
  ip_address: string;
  configured: string;
  handover_to: string;
  handover_date: string;
  deployment_date: string;
  vendor: string;
  port_number: string;
  reason: string;
  merchant_contact_person: string;
  merchant_contact_number: string;
  roll_out_by: string;
  roll_out_date: string;
  app_release_date: string;
  statas: string;
  description: string;
  tms_operating: string;
  tms_date: string;
  updat_type: string;
  new_per_file_add: string;
  unnamed_36: string;
  create_time: string;
};

// ==========================
// Main Component
// ==========================
const MTBPOSPage = () => {
  const [records, setRecords] = useState<MTBPOS[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<MTBPOS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [counter_terminal, setCounter_terminal] = useState(0);

  // Filters
  const [tidFilter, setTidFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [posSerialFilter, setPosSerialFilter] = useState("");
  const [zoneAreaFilter, setZoneAreaFilter] = useState("");
  const [dbaNameFilter, setDbaNameFilter] = useState("");

  // Upload
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  // ==========================
  // Helper: Auth Headers
  // ==========================
  const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  // ==========================
  // Map API data to MTBPOS type
  // ==========================
  const mapApiData = (data: any[]): MTBPOS[] =>
    data.map((r) => ({
      id: r.id,
      sl: r["SL."] || 0,
      tid: r["TID"] || "",
      mid: r["MID"] || "",
      client_id: r["CLIENT ID"] || "",
      outlet_name_dba_name: r["OUTLET NAME/DBA NAME"] || "",
      merchant_name: r["MERCHANT NAME"] || "",
      address: r["ADDRESS"] || "",
      status: r["STATUS"] || "",
      tenure: r["TENURE"] || "",
      city: r["City"] || "",
      zone_area: r["ZONE AREA"] || "",
      pos_model: r["POS MODEL"] || "",
      pos_serial: r["POS SERIAL"] || "",
      telco: r["TELCO"] || "",
      sim_serial_number: r["SIM SERIAL NUMBER"] || "",
      app_version: r["APP VERSION"] || "",
      installation_date: r["INSTALLATION DATE"] || "",
      ip_address: r["IP ADDRESS"] || "",
      configured: r["CONFIGURED"] || "",
      handover_to: r["HANDOVER TO"] || "",
      handover_date: r["HANDOVER DATE"] || "",
      deployment_date: r["DEPLOYMENT DATE"] || "",
      vendor: r["VENDOR"] || "",
      port_number: r["PORT NUMBER"] || "",
      reason: r["REASON"] || "",
      merchant_contact_person: r["MERCHAN CONTACT PERSON"] || "",
      merchant_contact_number: r["MERCHAN CONTACT NUMBER"] || "",
      roll_out_by: r["ROLL OUT BY"] || "",
      roll_out_date: r["ROLL OUT DATE"] || "",
      app_release_date: r["APP RELEASE DATE"] || "",
      statas: r["Statas"] || "",
      description: r["Description"] || "",
      tms_operating: r["TMS OPERATING"] || "",
      tms_date: r["TMS DATE"] || "",
      updat_type: r["UPDAT TYPE"] || "",
      new_per_file_add: r["New per file add"] || "",
      unnamed_36: r["Unnamed: 36"] || "",
      create_time: r["create_time"] || "",
    }));

  // ==========================
  // Fetch all records
  // ==========================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/mtb/all", {
          headers: getAuthHeaders(),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCounter_terminal(data.data.length);
        const formatted = mapApiData(data.data || data);
        setRecords(formatted);
        setFilteredRecords(formatted);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ==========================
  // Filtering Logic
  // ==========================
  useEffect(() => {
    const filtered = records.filter(
      (r) =>
        r.tid.toLowerCase().includes(tidFilter.toLowerCase()) &&
        r.city.toLowerCase().includes(cityFilter.toLowerCase()) &&
        r.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase()) &&
        r.zone_area.toLowerCase().includes(zoneAreaFilter.toLowerCase()) &&
        r.outlet_name_dba_name.toLowerCase().includes(dbaNameFilter.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [tidFilter, cityFilter, posSerialFilter, zoneAreaFilter, dbaNameFilter, records]);

  // ==========================
  // Upload Excel
  // ==========================
  const handleUploadExcel = async () => {
    if (!excelFile) return alert("Please select an Excel file!");
    const form = new FormData();
    form.append("file", excelFile);

    try {
      const res = await fetch("http://127.0.0.1:8000/mtb/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: form,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.detail || "Upload failed");

      setUploadMsg("✅ Upload successful!");
      setExcelFile(null);

      // Refresh data
      const updated = await fetch("http://127.0.0.1:8000/mtb/all", {
        headers: getAuthHeaders(),
      });
      const newData = await updated.json();
      const formatted = mapApiData(newData.data || newData);
      setRecords(formatted);
      setFilteredRecords(formatted);
      setCounter_terminal(formatted.length);
    } catch (e: any) {
      setUploadMsg("❌ " + e.message);
    }
  };

  // ==========================
  // Download Template
  // ==========================
  const handleDownloadTemplate = () => {
    window.open("http://127.0.0.1:8000/mtb/template", "_blank");
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<MTBPOS>[] = [
    { name: "SL", selector: (r) => r.sl, width: "70px" },
    { name: "TID", selector: (r) => r.tid },
    { name: "MID", selector: (r) => r.mid, minWidth: "150px" },
    { name: "CLIENT ID", selector: (r) => r.client_id },
    { name: "Outlet/DBA Name", selector: (r) => r.outlet_name_dba_name, minWidth: "200px" },
    { name: "Merchant Name", selector: (r) => r.merchant_name, wrap: true, minWidth: "200px" },
    { name: "Address", selector: (r) => r.address, wrap: true, minWidth: "250px" },
    { name: "STATUS", selector: (r) => r.status },
    { name: "TENURE", selector: (r) => r.tenure },
    { name: "City", selector: (r) => r.city },
    { name: "ZONE AREA", selector: (r) => r.zone_area },
    { name: "POS Model", selector: (r) => r.pos_model, minWidth: "110px" },
    { name: "POS Serial", selector: (r) => r.pos_serial, minWidth: "120px" },
    { name: "TELCO", selector: (r) => r.telco },
    { name: "SIM SERIAL", selector: (r) => r.sim_serial_number, minWidth: "190px" },
    { name: "APP VERSION", selector: (r) => r.app_version, width: "150px" },
    { name: "Installation Date", selector: (r) => r.installation_date, width: "150px" },
    { name: "IP ADDRESS", selector: (r) => r.ip_address, width: "120px" },
    { name: "CONFIGURED", selector: (r) => r.configured, width: "120px" },
    { name: "HANDOVER TO", selector: (r) => r.handover_to, width: "120px" },
    { name: "HANDOVER DATE", selector: (r) => r.handover_date, width: "150px" },
    { name: "Roll Out By", selector: (r) => r.roll_out_by },
    { name: "Roll Out Date", selector: (r) => r.roll_out_date },
    { name: "Created", selector: (r) => r.create_time, width: "180px" },
  ];

  // ==========================
  // Render UI
  // ==========================
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">MTBL LIVE TERMINALS</h1>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold">Total Terminals: {counter_terminal}</h2>
        </div>
        <div>
          <button
            onClick={() => window.open("http://127.0.0.1:8000/mtb/download", "_blank")}
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
        <input
          placeholder="TID"
          value={tidFilter}
          onChange={(e) => setTidFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="City"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="POS Serial"
          value={posSerialFilter}
          onChange={(e) => setPosSerialFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="Zone Area"
          value={zoneAreaFilter}
          onChange={(e) => setZoneAreaFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="DBA Name"
          value={dbaNameFilter}
          onChange={(e) => setDbaNameFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={() => {
            setTidFilter("");
            setCityFilter("");
            setPosSerialFilter("");
            setZoneAreaFilter("");
            setDbaNameFilter("");
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
              <button onClick={handleDownloadTemplate} className="text-blue-600 underline">
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

export default MTBPOSPage;
