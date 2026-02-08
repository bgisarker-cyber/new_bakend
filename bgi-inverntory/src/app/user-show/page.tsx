"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// ==========================
// TypeScript Type
// ==========================
type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  created_at?: string;
  updated_at?: string;
};

// ==========================
// Component
// ==========================
const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [counter_users, setCounter_users] = useState(0);

  // Filters
  const [usernameFilter, setUsernameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const API_BASE = "http://127.0.0.1:8000/auth"; // Removed trailing space

  // ==========================
  // Auth Headers
  // ==========================
  const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  // ==========================
  // Fetch Users
  // ==========================
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("Please log in first.");

        const res = await fetch(`${API_BASE}/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to load users");

        const data = await res.json();
        setCounter_users(data.data.length);
        setUsers(data.data);
        setFilteredUsers(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // ==========================
  // Filter Logic
  // ==========================
  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchUsername = user.username
        .toLowerCase()
        .includes(usernameFilter.toLowerCase());
      const matchEmail = user.email
        .toLowerCase()
        .includes(emailFilter.toLowerCase());
      const matchRole = user.role
        .toLowerCase()
        .includes(roleFilter.toLowerCase());
      return matchUsername && matchEmail && matchRole;
    });
    setFilteredUsers(filtered);
  }, [usernameFilter, emailFilter, roleFilter, users]);

  // ==========================
  // Export Excel
  // ==========================
  const handleExport = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`${API_BASE}/download`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Users_Export.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("❌ Download failed: " + err.message);
    }
  };

  // ==========================
  // Delete User
  // ==========================
  const handleDeleteUser = async () => {
    if (!selectedUser) return;
    try {
      const token = localStorage.getItem("access_token");
      const email = localStorage.getItem("email") || "unknown";
      const role = localStorage.getItem("role") || "user";

      const res = await fetch(`${API_BASE}/delete/${selectedUser.id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          log_user_email: email,
          log_user_role: role,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to delete user");
      }

      alert("✅ User deleted!");
      setShowDeleteModal(false);
      setCounter_users(prev => prev - 1);
      setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
      setFilteredUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    } catch (err: any) {
      alert("❌ " + err.message);
    }
  };

  // ==========================
  // Table Columns
  // ==========================
  const columns: TableColumn<User>[] = [
    { name: "SL", selector: (row) => row.id, width: "60px" },
    { name: "Username", selector: (row) => row.username, style: { minWidth: "150px" } },
    { name: "Email", selector: (row) => row.email, style: { minWidth: "200px" } },
    { name: "Role", selector: (row) => row.role, style: { minWidth: "120px" } },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => {
            setSelectedUser(row);
            setShowDeleteModal(true);
          }}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      ),
      width: "120px",
    },
  ];

  // ==========================
  // Render UI
  // ==========================
  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center">
      {/* Title and Top Bar */}
      <div className="flex flex-col items-center mb-6 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-2 text-center">User Management</h1>
        <div className="flex justify-between items-center w-full px-4">
          {/* Left - Export */}
          <div className="flex-1">
            <button
              onClick={handleExport}
              className="px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold"
            >
              ⬇️ Export Excel
            </button>
          </div>
          
          {/* Center - Total Users */}
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold">Total Users: {counter_users}</h2>
          </div>
          
          {/* Right - Empty for balance */}
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Filters - Neumorphic styled */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 max-w-7xl w-full px-4">
        <input
          type="text"
          placeholder="Filter by Username"
          value={usernameFilter}
          onChange={(e) => setUsernameFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Filter by Role"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            setUsernameFilter("");
            setEmailFilter("");
            setRoleFilter("");
          }}
          className="px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Clear
        </button>
      </div>

      {/* Data Table - Neumorphic container */}
      <div className="bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl px-4">
        <DataTable
          columns={columns}
          data={filteredUsers}
          pagination
          striped
          highlightOnHover
          dense
        />
      </div>

      {/* DELETE MODAL - Neumorphic styled */}
      {showDeleteModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-sm shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff] text-center">
            <h2 className="text-lg font-semibold mb-3">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete user{" "}
              <b>{selectedUser.username}</b>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-2xl font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteUser}
                className="bg-red-600 text-white px-4 py-2 rounded-2xl hover:bg-red-700 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;