module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/bgi-inverntory/src/app/demo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/react-data-table-component/dist/index.es.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// ==========================
// Component
// ==========================
const DemoPage = ()=>{
    const [demos, setDemos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredDemos, setFilteredDemos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Filters
    const [serialFilter, setSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [modelFilter, setModelFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [oemFilter, setOemFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [givenToFilter, setGivenToFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Modals
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form Data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        pos_serial: "",
        model: "",
        oem: "",
        given_to: "",
        remarks: ""
    });
    const [editingDemo, setEditingDemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // ==========================
    // Helper: Auth Headers
    // ==========================
    const getAuthHeaders = ()=>{
        const token = localStorage.getItem("access_token");
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
    };
    // ==========================
    // Fetch Demos
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchDemos = async ()=>{
            try {
                const token = localStorage.getItem("access_token");
                if (!token) throw new Error("Please log in first.");
                const response = await fetch("http://127.0.0.1:8000/demo/all", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.ok) throw new Error(`Failed to fetch data (status: ${response.status})`);
                const data = await response.json();
                setDemos(data.data);
                setFilteredDemos(data.data);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        fetchDemos();
    }, []);
    // ==========================
    // Filter Logic
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = demos.filter((item)=>{
            const matchSerial = item.pos_serial.toLowerCase().includes(serialFilter.toLowerCase());
            const matchModel = item.model.toLowerCase().includes(modelFilter.toLowerCase());
            const matchOem = item.oem.toLowerCase().includes(oemFilter.toLowerCase());
            const matchGivenTo = item.given_to.toLowerCase().includes(givenToFilter.toLowerCase());
            return matchSerial && matchModel && matchOem && matchGivenTo;
        });
        setFilteredDemos(filtered);
    }, [
        serialFilter,
        modelFilter,
        oemFilter,
        givenToFilter,
        demos
    ]);
    // ==========================
    // Add Demo
    // ==========================
    const handleAddDemo = async ()=>{
        const emptyField = Object.entries(formData).find(([_, v])=>v.trim() === "");
        if (emptyField) {
            alert(`❌ Please fill the "${emptyField[0]}" field.`);
            return;
        }
        try {
            const token = localStorage.getItem("access_token");
            const email = localStorage.getItem("email") || "unknown";
            const role = localStorage.getItem("role") || "user";
            const response = await fetch("http://127.0.0.1:8000/demo/add", {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    ...formData,
                    log_user_email: email,
                    log_user_role: role
                })
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to add record");
            }
            alert("✅ Record added successfully!");
            setShowAddModal(false);
            setFormData({
                pos_serial: "",
                model: "",
                oem: "",
                given_to: "",
                remarks: ""
            });
            const updated = await fetch("http://127.0.0.1:8000/demo/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newData = await updated.json();
            setDemos(newData.data);
            setFilteredDemos(newData.data);
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    // ==========================
    // Edit Demo
    // ==========================
    const handleEditClick = (demo)=>{
        setEditingDemo(demo);
        setShowAddModal(true);
        setFormData({
            pos_serial: demo.pos_serial,
            model: demo.model,
            oem: demo.oem,
            given_to: demo.given_to,
            remarks: demo.remarks
        });
    };
    const handleUpdateDemo = async ()=>{
        if (!editingDemo) return;
        const emptyField = Object.entries(formData).find(([_, v])=>v.trim() === "");
        if (emptyField) {
            alert(`❌ Please fill the "${emptyField[0]}" field.`);
            return;
        }
        try {
            const token = localStorage.getItem("access_token");
            const email = localStorage.getItem("email") || "unknown";
            const role = localStorage.getItem("role") || "user";
            const response = await fetch(`http://127.0.0.1:8000/demo/edit/${editingDemo.id}`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    ...formData,
                    log_user_email: email,
                    log_user_role: role
                })
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to update record");
            }
            alert("✅ Record updated successfully!");
            setShowAddModal(false);
            setEditingDemo(null);
            setFormData({
                pos_serial: "",
                model: "",
                oem: "",
                given_to: "",
                remarks: ""
            });
            const updated = await fetch("http://127.0.0.1:8000/demo/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newData = await updated.json();
            setDemos(newData.data);
            setFilteredDemos(newData.data);
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    // ==========================
    // Delete Demo
    // ==========================
    const handleDelete = async (id, pos_serial)=>{
        const confirmDelete = window.confirm(`Are you sure you want to delete record: ${pos_serial}?`);
        if (!confirmDelete) return;
        try {
            const token = localStorage.getItem("access_token");
            const email = localStorage.getItem("email") || "unknown";
            const role = localStorage.getItem("role") || "user";
            const response = await fetch(`http://127.0.0.1:8000/demo/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    log_user_email: email,
                    log_user_role: role
                })
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to delete record");
            }
            alert("✅ Record deleted!");
            setDemos((prev)=>prev.filter((d)=>d.id !== id));
            setFilteredDemos((prev)=>prev.filter((d)=>d.id !== id));
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    // ==========================
    // Upload Excel
    // ==========================
    const handleUploadExcel = async ()=>{
        if (!excelFile) {
            alert("Please select an Excel file!");
            return;
        }
        const token = localStorage.getItem("access_token");
        const email = localStorage.getItem("email") || "unknown";
        const role = localStorage.getItem("role") || "user";
        const form = new FormData();
        form.append("file", excelFile);
        form.append("log_user_email", email);
        form.append("log_user_role", role);
        try {
            const response = await fetch("http://127.0.0.1:8000/demo/upload", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: form
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.detail || "Upload failed");
            setUploadMsg("✅ Upload complete!");
            setExcelFile(null);
            const updated = await fetch("http://127.0.0.1:8000/demo/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newData = await updated.json();
            setDemos(newData.data);
            setFilteredDemos(newData.data);
        } catch (err) {
            setUploadMsg("❌ " + err.message);
        }
    };
    // ==========================
    // Table Columns
    // ==========================
    const columns = [
        {
            name: "SL",
            selector: (row)=>row.id,
            width: "60px"
        },
        {
            name: "POS Serial",
            selector: (row)=>row.pos_serial
        },
        {
            name: "Model",
            selector: (row)=>row.model
        },
        {
            name: "OEM",
            selector: (row)=>row.oem
        },
        {
            name: "Given to",
            selector: (row)=>row.given_to,
            width: "150px"
        },
        {
            name: "Remarks",
            selector: (row)=>row.remarks,
            width: "250px"
        },
        {
            name: "Updated",
            selector: (row)=>new Date(row.updated_at).toLocaleString("en-GB")
        },
        {
            name: "Actions",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleEditClick(row),
                            className: "bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDelete(row.id, row.pos_serial),
                            className: "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    // ==========================
    // Render UI
    // ==========================
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
        lineNumber: 336,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
        lineNumber: 337,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Demo Terminals Records"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowAddModal(true);
                            setEditingDemo(null);
                            setFormData({
                                pos_serial: "",
                                model: "",
                                oem: "",
                                given_to: "",
                                remarks: ""
                            });
                        },
                        className: "bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100",
                        children: "➕ Add Record"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowUploadModal(true),
                        className: "bg-white text-black font-bold text-lg px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100",
                        children: "📂 Upload Excel"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Serial",
                        value: serialFilter,
                        onChange: (e)=>setSerialFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Model",
                        value: modelFilter,
                        onChange: (e)=>setModelFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by OEM",
                        value: oemFilter,
                        onChange: (e)=>setOemFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Given to",
                        value: givenToFilter,
                        onChange: (e)=>setGivenToFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSerialFilter("");
                            setModelFilter("");
                            setOemFilter("");
                            setGivenToFilter("");
                        },
                        className: "bg-gray-200 px-4 py-2 rounded hover:bg-gray-300",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded shadow-md p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    data: filteredDemos,
                    pagination: true,
                    striped: true,
                    highlightOnHover: true,
                    dense: true
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-1/2 transform -translate-x-1/2 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: editingDemo ? "Edit Record" : "Add New Record"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "POS_SERIAL",
                            value: formData.pos_serial,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    pos_serial: e.target.value
                                }),
                            disabled: !!editingDemo,
                            className: `border rounded w-full p-2 mb-2 ${editingDemo ? "bg-gray-100 cursor-not-allowed" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "MODEL",
                            value: formData.model,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    model: e.target.value
                                }),
                            className: "border rounded w-full p-2 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 438,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "OEM",
                            value: formData.oem,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    oem: e.target.value
                                }),
                            className: "border rounded w-full p-2 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Given to",
                            value: formData.given_to,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    given_to: e.target.value
                                }),
                            className: "border rounded w-full p-2 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "Remarks",
                            value: formData.remarks,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    remarks: e.target.value
                                }),
                            className: "border rounded w-full p-2 mb-2",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 465,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowAddModal(false);
                                        setEditingDemo(null);
                                    },
                                    className: "bg-gray-300 px-4 py-2 rounded",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: editingDemo ? handleUpdateDemo : handleAddDemo,
                                    className: `${editingDemo ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"} text-white px-4 py-2 rounded`,
                                    children: editingDemo ? "Update" : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                lineNumber: 420,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-1/2 transform -translate-x-1/2 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded shadow-xl w-full max-w-md border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Upload via Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: async ()=>{
                                const token = localStorage.getItem("access_token");
                                const res = await fetch("http://127.0.0.1:8000/demo/template", {
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    }
                                });
                                if (!res.ok) {
                                    alert("❌ Unauthorized or failed to download template");
                                    return;
                                }
                                const blob = await res.blob();
                                const url = window.URL.createObjectURL(blob);
                                const link = document.createElement("a");
                                link.href = url;
                                link.download = "demo_upload_template.xlsx";
                                document.body.appendChild(link);
                                link.click();
                                link.remove();
                            },
                            className: "text-blue-600 underline mb-3 block",
                            children: "📥 Download Excel Template"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 505,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".xlsx, .xls",
                            onChange: (e)=>setExcelFile(e.target.files?.[0] || null),
                            className: "border rounded w-full p-2 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 535,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 mt-3 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 543,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUploadModal(false),
                                className: "bg-gray-300 px-4 py-2 rounded",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                                lineNumber: 549,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                            lineNumber: 548,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                    lineNumber: 503,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
                lineNumber: 502,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/demo/page.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DemoPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e77b1af._.js.map