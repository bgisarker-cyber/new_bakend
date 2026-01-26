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

  // Filters
  const [usernameFilter, setUsernameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const API_BASE = "http://127.0.0.1:8000/auth"; // 🔧 Adjust backend base URL if needed

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
    { name: "Username", selector: (row) => row.username },
    { name: "Email", selector: (row) => row.email },
    

    { name: "Role", selector: (row) => row.role },
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Username"
          value={usernameFilter}
          onChange={(e) => setUsernameFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Filter by Role"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={() => {
            setUsernameFilter("");
            setEmailFilter("");
            setRoleFilter("");
          }}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow-md p-2">
        <DataTable
          columns={columns}
          data={filteredUsers}
          pagination
          striped
          highlightOnHover
          dense
        />
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && selectedUser && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-sm border border-gray-200 text-center">
            <h2 className="text-lg font-semibold mb-3">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete user{" "}
              <b>{selectedUser.username}</b>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteUser}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
