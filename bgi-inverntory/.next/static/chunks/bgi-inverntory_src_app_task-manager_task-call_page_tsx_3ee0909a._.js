(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuperCallsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].interceptors.request.use((cfg)=>{
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("access_token") : "TURBOPACK unreachable";
    if (token) cfg.headers.Authorization = "Bearer ".concat(token);
    return cfg;
});
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
function SuperCallsBoard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [assigneeFilter, setAssigneeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [dateFrom, setDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dateTo, setDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { data = [], isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "all-tasks"
        ],
        queryFn: {
            "SuperCallsBoard.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/tasks/all")).data
        }["SuperCallsBoard.useQuery"]
    });
    const { data: timeline = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "timeline",
            selected === null || selected === void 0 ? void 0 : selected.id
        ],
        queryFn: {
            "SuperCallsBoard.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/tasks/".concat(selected === null || selected === void 0 ? void 0 : selected.id, "/timeline")).then({
                    "SuperCallsBoard.useQuery": (r)=>r.data
                }["SuperCallsBoard.useQuery"])
        }["SuperCallsBoard.useQuery"],
        enabled: !!selected
    });
    const assigneeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SuperCallsBoard.useMemo[assigneeOptions]": ()=>{
            const names = Array.from(new Set(data.map({
                "SuperCallsBoard.useMemo[assigneeOptions].names": (d)=>d.assigned_to_name
            }["SuperCallsBoard.useMemo[assigneeOptions].names"]).filter(Boolean)));
            return [
                "all",
                ...names
            ];
        }
    }["SuperCallsBoard.useMemo[assigneeOptions]"], [
        data
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SuperCallsBoard.useMemo[filtered]": ()=>{
            let base = data.filter({
                "SuperCallsBoard.useMemo[filtered].base": (t)=>filterStatus === "all" ? true : t.status === filterStatus
            }["SuperCallsBoard.useMemo[filtered].base"]).filter({
                "SuperCallsBoard.useMemo[filtered].base": (t)=>"".concat(t.task_type, " ").concat(t.merchant_name || '', " ").concat(t.address || '', " ").concat(t.problem_type || '', " ").concat(t.assigned_to_name || '', " ").concat(t.tid || '', " ").concat(t.mid || '', " ").concat(t.bank).toLowerCase().includes(search.toLowerCase())
            }["SuperCallsBoard.useMemo[filtered].base"]);
            if (assigneeFilter !== "all") base = base.filter({
                "SuperCallsBoard.useMemo[filtered]": (t)=>t.assigned_to_name === assigneeFilter
            }["SuperCallsBoard.useMemo[filtered]"]);
            if (dateFrom) base = base.filter({
                "SuperCallsBoard.useMemo[filtered]": (t)=>new Date(t.create_time) >= new Date(dateFrom)
            }["SuperCallsBoard.useMemo[filtered]"]);
            if (dateTo) base = base.filter({
                "SuperCallsBoard.useMemo[filtered]": (t)=>new Date(t.create_time) <= new Date(dateTo)
            }["SuperCallsBoard.useMemo[filtered]"]);
            return base;
        }
    }["SuperCallsBoard.useMemo[filtered]"], [
        data,
        filterStatus,
        search,
        assigneeFilter,
        dateFrom,
        dateTo
    ]);
    const completeMut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "SuperCallsBoard.useMutation[completeMut]": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/tasks/my/".concat(id, "/complete"), {
                    note: "Task completed"
                })
        }["SuperCallsBoard.useMutation[completeMut]"],
        onSuccess: {
            "SuperCallsBoard.useMutation[completeMut]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "all-tasks"
                    ]
                });
                setSelected(null);
                setIsEditing(false);
            }
        }["SuperCallsBoard.useMutation[completeMut]"]
    });
    const updateTaskMut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "SuperCallsBoard.useMutation[updateTaskMut]": (param)=>{
                let { id, data } = param;
                return __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/tasks/".concat(id), data);
            }
        }["SuperCallsBoard.useMutation[updateTaskMut]"],
        onSuccess: {
            "SuperCallsBoard.useMutation[updateTaskMut]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "all-tasks"
                    ]
                });
                setIsEditing(false);
            }
        }["SuperCallsBoard.useMutation[updateTaskMut]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuperCallsBoard.useEffect": ()=>{
            if (selected) {
                setFormData({
                    merchant_name: selected.merchant_name || '',
                    phone: selected.phone || '',
                    address: selected.address || '',
                    tid: selected.tid || '',
                    mid: selected.mid || '',
                    sim_serial: selected.sim_serial || '',
                    operator: selected.operator || '',
                    problem_type: selected.problem_type || '',
                    comment: selected.comment || '',
                    bank: selected.bank,
                    task_type: selected.task_type,
                    assigned_to: 1
                });
                setIsEditing(false);
            }
        }
    }["SuperCallsBoard.useEffect"], [
        selected
    ]);
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSave = ()=>{
        if (!selected) return;
        if (formData.tid && formData.tid.length !== 8) {
            alert("TID must be 8 characters");
            return;
        }
        if (formData.mid && formData.mid.length !== 15) {
            alert("MID must be 15 characters");
            return;
        }
        updateTaskMut.mutate({
            id: selected.id,
            data: {
                ...formData,
                assigned_to: 1
            }
        });
    };
    const statusColor = (s)=>s === "completed" ? "bg-green-300 text-green-900" : s === "in_progress" ? "bg-blue-300 text-blue-900" : "bg-yellow-300 text-yellow-900";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f0f2f5] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f0f2f5] p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1800px] mx-auto flex items-center justify-between gap-4 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "📞 Call Manager"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 flex-wrap flex-1 max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search...",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    className: "flex-1 min-w-[200px] px-4 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 text-sm focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: filterStatus,
                                    onChange: (e)=>setFilterStatus(e.target.value),
                                    className: "px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All Status"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "open",
                                            children: "Open"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 54
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "in_progress",
                                            children: "In Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "completed",
                                            children: "Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 63
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: assigneeFilter,
                                    onChange: (e)=>setAssigneeFilter(e.target.value),
                                    className: "px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-700 text-sm",
                                    children: assigneeOptions.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: name,
                                            children: name === "all" ? "All Assignees" : name
                                        }, name, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 44
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: dateFrom,
                                    onChange: (e)=>setDateFrom(e.target.value),
                                    className: "px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "to"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: dateTo,
                                    onChange: (e)=>setDateTo(e.target.value),
                                    className: "px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-600 font-semibold",
                                    children: [
                                        filtered.length,
                                        " calls"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>refetch(),
                                    className: "p-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all",
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 28
                                    }, this) : "🔄"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/task-manager/create-task"),
                                    className: "px-4 py-2 rounded-lg bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-semibold text-gray-800 text-sm",
                                    children: "➕ Add Call"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[280px] border-r border-gray-300 overflow-y-auto p-3 bg-[#f0f2f5]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: filtered.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelected(t),
                                    className: "p-3 rounded-xl cursor-pointer transition-all ".concat((selected === null || selected === void 0 ? void 0 : selected.id) === t.id ? "bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff]" : "bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)]"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-full text-xs font-bold ".concat(statusColor(t.status)),
                                                    children: t.status.replace("_", " ").toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-full text-xs font-bold bg-blue-300 text-blue-900",
                                                    children: t.bank
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-sm text-gray-800 mb-2",
                                            children: t.task_type
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        t.merchant_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-1 truncate",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "DBA:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 88
                                                }, this),
                                                " ",
                                                t.merchant_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 37
                                        }, this),
                                        t.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Phone:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 71
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: t.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 117
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        t.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Address:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 73
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: t.address
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 121
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 31
                                        }, this),
                                        t.assigned_to_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Assigned To:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 82
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: t.assigned_to_name
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 134
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-2",
                                            children: [
                                                "📅 ",
                                                new Date(t.create_time).toLocaleDateString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 bg-[#f0f2f5]",
                        children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-800",
                                            children: [
                                                "Call #",
                                                selected.id,
                                                " – ",
                                                selected.task_type
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsEditing(true),
                                                    className: "px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800",
                                                    children: "✏️ Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setIsEditing(false);
                                                                setFormData({
                                                                    merchant_name: selected.merchant_name || '',
                                                                    phone: selected.phone || '',
                                                                    address: selected.address || '',
                                                                    tid: selected.tid || '',
                                                                    mid: selected.mid || '',
                                                                    sim_serial: selected.sim_serial || '',
                                                                    operator: selected.operator || '',
                                                                    problem_type: selected.problem_type || '',
                                                                    comment: selected.comment || ''
                                                                });
                                                            },
                                                            className: "px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] font-bold text-gray-600",
                                                            children: "❌ Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSave,
                                                            disabled: updateTaskMut.isPending,
                                                            className: "px-6 py-2 rounded-xl bg-[#f0f2f5] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold text-gray-800 disabled:opacity-50",
                                                            children: updateTaskMut.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin mx-auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 52
                                                            }, this) : "💾 Save"
                                                        }, void 0, false, {
                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                selected.status !== "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>completeMut.mutate(selected.id),
                                                    disabled: completeMut.isPending,
                                                    className: "px-6 py-2 rounded-xl bg-green-300 text-green-900 shadow-[4px_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08)] transition-all font-bold disabled:opacity-50",
                                                    children: "✅ Complete"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-4 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "Bank"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: selected.bank,
                                                                disabled: true,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "DBA Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.merchant_name || '',
                                                                onChange: (e)=>handleInputChange('merchant_name', e.target.value),
                                                                disabled: !isEditing,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "TID (8 chars)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.tid || '',
                                                                onChange: (e)=>handleInputChange('tid', e.target.value),
                                                                disabled: !isEditing,
                                                                maxLength: 8,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "MID (15 chars)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.mid || '',
                                                                onChange: (e)=>handleInputChange('mid', e.target.value),
                                                                disabled: !isEditing,
                                                                maxLength: 15,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "ADDRESS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: formData.address || '',
                                                                onChange: (e)=>handleInputChange('address', e.target.value),
                                                                disabled: !isEditing,
                                                                rows: 3,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                        children: "PHONE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: formData.phone || '',
                                                                        onChange: (e)=>handleInputChange('phone', e.target.value),
                                                                        disabled: !isEditing,
                                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                        children: "OPERATOR"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: formData.operator || '',
                                                                        onChange: (e)=>handleInputChange('operator', e.target.value),
                                                                        disabled: !isEditing,
                                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "ROBI",
                                                                                children: "ROBI"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 59
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "GRAMEENPHONE",
                                                                                children: "GRAMEENPHONE"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                                lineNumber: 250,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "BANGLALINK",
                                                                                children: "BANGLALINK"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                                lineNumber: 250,
                                                                                columnNumber: 77
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "SIM Serial"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.sim_serial || '',
                                                                onChange: (e)=>handleInputChange('sim_serial', e.target.value),
                                                                disabled: !isEditing,
                                                                maxLength: 30,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 font-mono disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "Problem Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.problem_type || '',
                                                                onChange: (e)=>handleInputChange('problem_type', e.target.value),
                                                                disabled: !isEditing,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 disabled:opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "COMMENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.comment || '',
                                                    onChange: (e)=>handleInputChange('comment', e.target.value),
                                                    disabled: !isEditing,
                                                    rows: 4,
                                                    className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-0 text-gray-800 resize-none disabled:opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold text-gray-800 mb-3",
                                                    children: "Update Timeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this),
                                                timeline.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-100 text-blue-800 p-3 rounded-lg text-sm",
                                                    children: "ℹ️ No updates yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: timeline.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#f0f2f5] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] p-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-2 py-1 rounded-full text-xs font-bold ".concat(statusColor(u.status)),
                                                                            children: u.status.toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                "📅 ",
                                                                                new Date(u.update_time).toLocaleString([], {
                                                                                    dateStyle: "short",
                                                                                    timeStyle: "short"
                                                                                })
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-700 mb-1",
                                                                    children: u.update_text || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 27
                                                                }, this),
                                                                u.assigned_to_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        "by ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold",
                                                                            children: u.assigned_to_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                            lineNumber: 283,
                                                                            columnNumber: 90
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, u.id, true, {
                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full text-gray-500 text-xl font-medium",
                            children: "Select a call on the left to view details"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(SuperCallsBoard, "J3bZSKM4O5TBB8Y0pmlVwFir5IQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = SuperCallsBoard;
function SuperCallsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuperCallsBoard, {}, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
            lineNumber: 305,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/task-manager/task-call/page.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c1 = SuperCallsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SuperCallsBoard");
__turbopack_context__.k.register(_c1, "SuperCallsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_task-manager_task-call_page_tsx_3ee0909a._.js.map