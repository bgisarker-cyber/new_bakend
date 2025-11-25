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
  }, [emailFilter, actionFilter, roleFilter, dateFilter, logs]);

  if (loading) return <p className="p-6 text-gray-600">Loading logs...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Activity Logs</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by Gmail"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          className="border p-2 rounded-lg w-full focus:ring focus:ring-blue-200 outline-none"
        />
        <input
          type="text"
          placeholder="Filter by Action"
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="border p-2 rounded-lg w-full focus:ring focus:ring-blue-200 outline-none"
        />
        <input
          type="text"
          placeholder="Filter by Role"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border p-2 rounded-lg w-full focus:ring focus:ring-blue-200 outline-none"
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border p-2 rounded-lg w-full focus:ring focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-50 text-gray-700">
            <tr>
              <th className="border p-2">User Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Action</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="border p-2">{log.user_email}</td>
                  <td className="border p-2">{log.user_role}</td>
                  <td className="border p-2 font-semibold text-blue-600">
                    {log.action}
                  </td>
                  <td className="border p-2">{log.description || "-"}</td>
                  <td className="border p-2">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-gray-500 p-4 italic"
                >
                  No logs found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
