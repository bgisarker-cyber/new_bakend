"use client";
import { useEffect, useState } from "react";

export default function UserLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Filters
  const [emailFilter, setEmailFilter] = useState("");
  const [actionFilter, setActionFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await fetch("http://127.0.0.1:8000/logs/show", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Failed to fetch logs");
        setLogs(data.data);
        setFilteredLogs(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  // Apply filters dynamically
  useEffect(() => {
    let filtered = logs;

    if (emailFilter)
      filtered = filtered.filter((log) =>
        log.user_email?.toLowerCase().includes(emailFilter.toLowerCase())
      );

    if (actionFilter)
      filtered = filtered.filter((log) =>
        log.action?.toLowerCase().includes(actionFilter.toLowerCase())
      );

    if (roleFilter)
      filtered = filtered.filter((log) =>
        log.user_role?.toLowerCase().includes(roleFilter.toLowerCase())
      );

    if (dateFilter)
      filtered = filtered.filter(
        (log) =>
          new Date(log.timestamp).toLocaleDateString() ===
          new Date(dateFilter).toLocaleDateString()
      );

    setFilteredLogs(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [emailFilter, actionFilter, roleFilter, dateFilter, logs]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading)
    return (
      <p className="p-6 text-gray-600 text-center text-lg font-medium">
        Loading logs...
      </p>
    );
  if (error)
    return (
      <p className="p-6 text-red-500 text-center text-lg font-medium">{error}</p>
    );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        User Activity Logs
      </h1>

      {/* Filters - Sticky */}
      <div className="sticky top-0 bg-gray-50 z-20 py-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            placeholder="Filter by Email"
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value)}
            className="border border-gray-300 rounded-xl p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Filter by Action"
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="border border-gray-300 rounded-xl p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Filter by Role"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="border border-gray-300 rounded-xl p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border border-gray-300 rounded-xl p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white max-w-5xl mx-auto">
        <table className="min-w-full border-collapse table-auto text-sm">
          <thead className="bg-blue-50 sticky top-0 z-10">
            <tr>
              <th className="border-b p-2 text-left text-gray-700 w-1/4">User Email</th>
              <th className="border-b p-2 text-left text-gray-700 w-1/6">Role</th>
              <th className="border-b p-2 text-left text-gray-700 w-1/6">Action</th>
              <th className="border-b p-2 text-left text-gray-700 w-1/3">Description</th>
              <th className="border-b p-2 text-left text-gray-700 w-1/6">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLogs.length > 0 ? (
              paginatedLogs.map((log, idx) => (
                <tr
                  key={log.id}
                  className={`border-b transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="p-2 truncate" title={log.user_email}>{log.user_email}</td>
                  <td className="p-2 truncate" title={log.user_role}>{log.user_role}</td>
                  <td className="p-2 font-semibold text-blue-600 truncate" title={log.action}>{log.action}</td>
                  <td className="p-2 truncate" title={log.description || "-"}>{log.description || "-"}</td>
                  <td className="p-2 truncate" title={new Date(log.timestamp).toLocaleString()}>
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 p-4 italic">
                  No logs found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-blue-500 text-white disabled:bg-gray-300 hover:bg-blue-600 transition text-sm"
          >
            Prev
          </button>
          <span className="px-2 py-1 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-blue-500 text-white disabled:bg-gray-300 hover:bg-blue-600 transition text-sm"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
