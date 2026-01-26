module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/bgi-inverntory/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/react-data-table-component/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
// ========================== Main Component ==========================
const TaskSettingsPage = ()=>{
    const API_BASE = "http://127.0.0.1:8000";
    // Tab state
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("banks");
    // Auth & loading
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Banks state
    const [banks, setBanks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showBankForm, setShowBankForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingBank, setEditingBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bankFormData, setBankFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: ""
    });
    // Problem Types state
    const [problemTypes, setProblemTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showProblemTypeForm, setShowProblemTypeForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProblemType, setEditingProblemType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [problemTypeFormData, setProblemTypeFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: ""
    });
    // ========================== Auth Headers ==========================
    const getAuthHeaders = ()=>{
        const token = localStorage.getItem("access_token");
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
    };
    // ========================== Check Superadmin ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const role = localStorage.getItem("role");
        setUserRole(role);
        if (role !== "superadmin") {
            setError("Access Denied: Superadmin privileges required");
            setLoading(false);
        } else {
            fetchAllData();
        }
    }, []);
    // ========================== Fetch Data ==========================
    const fetchAllData = async ()=>{
        try {
            const token = localStorage.getItem("access_token");
            if (!token) throw new Error("Please log in first.");
            // Fetch banks
            const banksRes = await fetch(`${API_BASE}/banks/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!banksRes.ok) throw new Error("Failed to load banks");
            const banksData = await banksRes.json();
            setBanks(banksData);
            // Fetch problem types
            const typesRes = await fetch(`${API_BASE}/problem-types/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!typesRes.ok) throw new Error("Failed to load problem types");
            const typesData = await typesRes.json();
            setProblemTypes(typesData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    // ========================== Bank CRUD ==========================
    const handleCreateBank = async ()=>{
        if (!bankFormData.name.trim()) {
            alert("❌ Bank name is required");
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/banks/`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    name: bankFormData.name
                })
            });
            if (!res.ok) throw new Error((await res.json()).detail || "Failed to create bank");
            alert("✅ Bank created successfully!");
            setBankFormData({
                name: ""
            });
            setShowBankForm(false);
            fetchAllData();
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const handleUpdateBank = async ()=>{
        if (!editingBank || !bankFormData.name.trim()) {
            alert("❌ Bank name is required");
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/banks/${editingBank.id}`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    name: bankFormData.name
                })
            });
            if (!res.ok) throw new Error((await res.json()).detail || "Failed to update bank");
            alert("✅ Bank updated successfully!");
            setBankFormData({
                name: ""
            });
            setEditingBank(null);
            setShowBankForm(false);
            fetchAllData();
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const handleDeleteBank = async (id)=>{
        if (!confirm("Are you sure you want to delete this bank?")) return;
        try {
            const res = await fetch(`${API_BASE}/banks/${id}`, {
                method: "DELETE",
                headers: getAuthHeaders()
            });
            if (!res.ok) throw new Error((await res.json()).detail || "Failed to delete bank");
            alert("✅ Bank deleted!");
            fetchAllData();
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const startEditBank = (bank)=>{
        setEditingBank(bank);
        setBankFormData({
            name: bank.name
        });
        setShowBankForm(true);
    };
    const cancelBankEdit = ()=>{
        setEditingBank(null);
        setBankFormData({
            name: ""
        });
        setShowBankForm(false);
    };
    // ========================== Problem Type CRUD ==========================
    const handleCreateProblemType = async ()=>{
        if (!problemTypeFormData.name.trim()) {
            alert("❌ Problem type name is required");
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/problem-types/`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    name: problemTypeFormData.name
                })
            });
            if (!res.ok) throw new Error((await res.json()).detail || "Failed to create problem type");
            alert("✅ Problem type created successfully!");
            setProblemTypeFormData({
                name: ""
            });
            setShowProblemTypeForm(false);
            fetchAllData();
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const handleUpdateProblemType = async ()=>{
        if (!editingProblemType || !problemTypeFormData.name.trim()) {
            alert("❌ Problem type name is required");
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/problem-types/${editingProblemType.id}`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    name: problemTypeFormData.name
                })
            });
            if (!res.ok) throw new Error((await res.json()).detail || "Failed to update problem type");
            alert("✅ Problem type updated successfully!");
            setProblemTypeFormData({
                name: ""
            });
            setEditingProblemType(null);
            setShowProblemTypeForm(false);
            fetchAllData();
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const handleDeleteProblemType = async (id)=>{
        if (!confirm("Are you sure you want to delete this problem type?")) return;
        try {
            const res = await fetch(`${API_BASE}/problem-types/${id}`, {
                method: "DELETE",
                headers: getAuthHeaders()
            });
            if (!res.ok) throw new Error((await res.json()).detail || "Failed to delete problem type");
            alert("✅ Problem type deleted!");
            fetchAllData();
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const startEditProblemType = (pt)=>{
        setEditingProblemType(pt);
        setProblemTypeFormData({
            name: pt.name
        });
        setShowProblemTypeForm(true);
    };
    const cancelProblemTypeEdit = ()=>{
        setEditingProblemType(null);
        setProblemTypeFormData({
            name: ""
        });
        setShowProblemTypeForm(false);
    };
    // ========================== Table Columns ==========================
    const bankColumns = [
        {
            name: "SL",
            selector: (row)=>row.id,
            width: "60px",
            style: {
                fontSize: "14px",
                fontWeight: "500"
            }
        },
        {
            name: "Bank Name",
            selector: (row)=>row.name,
            grow: 2,
            style: {
                fontSize: "14px",
                fontWeight: "500"
            }
        },
        {
            name: "Created At",
            selector: (row)=>row.created_at ? new Date(row.created_at).toLocaleDateString() : "",
            style: {
                fontSize: "14px"
            }
        },
        {
            name: "Actions",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>startEditBank(row),
                            className: "bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.2),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.25),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all",
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDeleteBank(row.id),
                            className: "bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.2),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.25),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
            width: "160px"
        }
    ];
    const problemTypeColumns = [
        {
            name: "SL",
            selector: (row)=>row.id,
            width: "60px",
            style: {
                fontSize: "14px",
                fontWeight: "500"
            }
        },
        {
            name: "Problem Type",
            selector: (row)=>row.name,
            grow: 2,
            style: {
                fontSize: "14px",
                fontWeight: "500"
            }
        },
        {
            name: "Created At",
            selector: (row)=>row.created_at ? new Date(row.created_at).toLocaleDateString() : "",
            style: {
                fontSize: "14px"
            }
        },
        {
            name: "Actions",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>startEditProblemType(row),
                            className: "bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.2),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.25),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all",
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDeleteProblemType(row.id),
                            className: "bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.2),-2px_-2px_6px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.25),-1px_-1px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
            width: "160px"
        }
    ];
    // ========================== Render UI ==========================
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-[#e6e9ef]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-10 h-10 text-gray-700 animate-spin"
        }, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
            lineNumber: 328,
            columnNumber: 99
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
        lineNumber: 328,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-[#e6e9ef]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#e6e9ef] rounded-2xl p-8 shadow-[10px_10px_18px_rgba(0,0,0,0.18),-8px_-8px_16px_#ffffff] text-red-600 font-semibold",
            children: error
        }, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
            lineNumber: 329,
            columnNumber: 97
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
        lineNumber: 329,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    if (userRole !== "superadmin") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#e6e9ef]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#e6e9ef] rounded-2xl p-8 shadow-[10px_10px_18px_rgba(0,0,0,0.18),-8px_-8px_16px_#ffffff] text-red-600 font-semibold",
                children: "Access Denied: Superadmin privileges required"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                lineNumber: 331,
                columnNumber: 88
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
            lineNumber: 331,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#e6e9ef] p-4 sm:p-6 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#e6e9ef] rounded-3xl shadow-[10px_10px_18px_rgba(0,0,0,0.18),-8px_-8px_16px_#ffffff] p-6 sm:p-8 inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide",
                                children: "Task Control"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mt-1",
                                children: "Manage Banks and Problem Types"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_#ffffff] p-1 sm:p-2 mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 sm:gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("banks"),
                                className: `flex-1 py-3 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all ${activeTab === "banks" ? "bg-[#e6e9ef] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_#ffffff] text-gray-800" : "bg-[#e6e9ef] shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] text-gray-600 hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff]"}`,
                                children: "Banks"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("problem-types"),
                                className: `flex-1 py-3 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all ${activeTab === "problem-types" ? "bg-[#e6e9ef] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_#ffffff] text-gray-800" : "bg-[#e6e9ef] shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] text-gray-600 hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff]"}`,
                                children: "Problem Types"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                activeTab === "banks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_#ffffff] p-4 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-800",
                                    children: "Bank Management"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowBankForm(true);
                                        setEditingBank(null);
                                        setBankFormData({
                                            name: ""
                                        });
                                    },
                                    className: "bg-[#e6e9ef] text-gray-800 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap",
                                    children: "+ Add New Bank"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (showBankForm || editingBank) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#e6e9ef] rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_#ffffff] p-4 sm:p-6 mb-4 sm:mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-3 sm:mb-4",
                                    children: editingBank ? "Edit Bank" : "Create New Bank"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Enter bank name...",
                                            value: bankFormData.name,
                                            onChange: (e)=>setBankFormData({
                                                    name: e.target.value
                                                }),
                                            className: "flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#e6e9ef] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: editingBank ? handleUpdateBank : handleCreateBank,
                                            className: "px-5 sm:px-6 py-2 sm:py-3 bg-[#e6e9ef] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap",
                                            children: editingBank ? "Update" : "Create"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: editingBank ? ()=>{
                                                cancelBankEdit();
                                                setShowBankForm(false);
                                            } : ()=>setShowBankForm(false),
                                            className: "px-5 sm:px-6 py-2 sm:py-3 bg-[#e6e9ef] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 390,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#e6e9ef] rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    columns: bankColumns,
                                    data: banks,
                                    pagination: true,
                                    striped: true,
                                    highlightOnHover: true,
                                    dense: true,
                                    responsive: true
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                lineNumber: 420,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 419,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                    lineNumber: 373,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                activeTab === "problem-types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_#ffffff] p-4 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-800",
                                    children: "Problem Type Management"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowProblemTypeForm(true);
                                        setEditingProblemType(null);
                                        setProblemTypeFormData({
                                            name: ""
                                        });
                                    },
                                    className: "bg-[#e6e9ef] text-gray-800 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap",
                                    children: "+ Add New Problem Type"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 438,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (showProblemTypeForm || editingProblemType) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#e6e9ef] rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_#ffffff] p-4 sm:p-6 mb-4 sm:mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-3 sm:mb-4",
                                    children: editingProblemType ? "Edit Problem Type" : "Create New Problem Type"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Enter problem type name...",
                                            value: problemTypeFormData.name,
                                            onChange: (e)=>setProblemTypeFormData({
                                                    name: e.target.value
                                                }),
                                            className: "flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#e6e9ef] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: editingProblemType ? handleUpdateProblemType : handleCreateProblemType,
                                            className: "px-5 sm:px-6 py-2 sm:py-3 bg-[#e6e9ef] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap",
                                            children: editingProblemType ? "Update" : "Create"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: editingProblemType ? ()=>{
                                                cancelProblemTypeEdit();
                                                setShowProblemTypeForm(false);
                                            } : ()=>setShowProblemTypeForm(false),
                                            className: "px-5 sm:px-6 py-2 sm:py-3 bg-[#e6e9ef] text-gray-800 rounded-xl font-semibold shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.18),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_#ffffff] transition-all text-sm sm:text-base whitespace-nowrap",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 454,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#e6e9ef] rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_#ffffff] overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    columns: problemTypeColumns,
                                    data: problemTypes,
                                    pagination: true,
                                    striped: true,
                                    highlightOnHover: true,
                                    dense: true,
                                    responsive: true
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
                    lineNumber: 437,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
            lineNumber: 336,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/dashboard/page.tsx",
        lineNumber: 335,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TaskSettingsPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dfce9273._.js.map