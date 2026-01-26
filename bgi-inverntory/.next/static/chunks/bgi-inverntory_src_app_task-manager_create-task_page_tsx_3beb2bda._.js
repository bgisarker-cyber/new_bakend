(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaskManagerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)"); // FIXED: Removed AssignIcon
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ---------- config ---------- */ __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].interceptors.request.use((cfg)=>{
    const t = localStorage.getItem("access_token");
    if (t) cfg.headers.Authorization = "Bearer ".concat(t);
    return cfg;
});
// Static operator options
const OPERATOR_OPTIONS = [
    "ROBI",
    "GRAMEENPHONE",
    "BANGLALINK"
];
/* ---------- query hooks ---------- */ const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
function useAssignableUsers() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "assignable-users"
        ],
        queryFn: {
            "useAssignableUsers.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/auth/userlist?role=support,admin")).data
        }["useAssignableUsers.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s(useAssignableUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useBanks() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "banks"
        ],
        queryFn: {
            "useBanks.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/tasks/banks")).data
        }["useBanks.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s1(useBanks, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProblemTypes() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "problem-types"
        ],
        queryFn: {
            "useProblemTypes.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/tasks/problem-types")).data
        }["useProblemTypes.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s2(useProblemTypes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
/* ---------- form component ---------- */ function TaskForm(param) {
    let { taskId } = param;
    _s3();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isEditMode = Boolean(taskId);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, control, watch, reset, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            task_type: "Call",
            assigned_to: null,
            address: "",
            phone: "",
            operator: "",
            problem_type: "",
            comment: "",
            tid: "",
            mid: "",
            sim_serial: ""
        }
    });
    const { data: users = [], isLoading: loadingUsers } = useAssignableUsers();
    const { data: banks = [], isLoading: loadingBanks } = useBanks();
    const { data: problemTypes = [], isLoading: loadingProblemTypes } = useProblemTypes();
    // Fetch task data if in edit mode
    const { isLoading: loadingTask } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "task",
            taskId
        ],
        queryFn: {
            "TaskForm.useQuery": async ()=>{
                if (!taskId) return null;
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/tasks/".concat(taskId));
                const data = response.data;
                // Pre-fill form
                Object.entries(data).forEach({
                    "TaskForm.useQuery": (param)=>{
                        let [key, value] = param;
                        setValue(key, value, {
                            shouldValidate: true
                        });
                    }
                }["TaskForm.useQuery"]);
                return data;
            }
        }["TaskForm.useQuery"],
        enabled: isEditMode,
        staleTime: 0
    });
    const selectedTaskType = watch("task_type");
    const isCallTask = selectedTaskType === "Call";
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "TaskForm.useMutation[mutation]": async (data)=>{
                const payload = {
                    ...data,
                    assigned_to: data.assigned_to,
                    assigned_by: Number(localStorage.getItem("userId") || 1),
                    problem_type: isCallTask ? data.problem_type : null
                };
                if (isEditMode) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/tasks/".concat(taskId), payload);
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/tasks/create", payload);
                }
            }
        }["TaskForm.useMutation[mutation]"],
        onSuccess: {
            "TaskForm.useMutation[mutation]": ()=>{
                setMsg({
                    type: "success",
                    text: isEditMode ? "Task updated successfully!" : "Task created successfully!"
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "tasks"
                    ]
                });
                if (!isEditMode) {
                    reset({
                        task_type: "Call",
                        assigned_to: null,
                        address: "",
                        phone: "",
                        operator: "",
                        problem_type: "",
                        comment: "",
                        tid: "",
                        mid: "",
                        sim_serial: ""
                    });
                }
            }
        }["TaskForm.useMutation[mutation]"],
        onError: {
            "TaskForm.useMutation[mutation]": (error)=>{
                var _error_response_data, _error_response;
                setMsg({
                    type: "error",
                    text: ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.detail) || "Network error"
                });
            }
        }["TaskForm.useMutation[mutation]"]
    });
    const onSubmit = async (data)=>{
        // Validate field lengths on frontend too
        if (data.tid.length !== 8) {
            setMsg({
                type: "error",
                text: "TID must be exactly 8 characters"
            });
            return;
        }
        if (data.mid.length !== 15) {
            setMsg({
                type: "error",
                text: "MID must be exactly 15 characters"
            });
            return;
        }
        if (data.sim_serial && data.sim_serial.length > 30) {
            setMsg({
                type: "error",
                text: "SIM Serial must be 30 characters or less"
            });
            return;
        }
        if (!data.assigned_to) {
            setMsg({
                type: "error",
                text: "Please select an assignee"
            });
            return;
        }
        if (data.task_type === "Call" && !data.problem_type) {
            setMsg({
                type: "error",
                text: "Problem type is required for Call tasks"
            });
            return;
        }
        setMsg(null);
        mutation.mutate(data);
    };
    const isLoading = loadingUsers || loadingBanks || loadingProblemTypes || loadingTask || mutation.isPending;
    if (isLoading && isEditMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#f0f2f5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f0f2f5] rounded-2xl p-8 shadow-[10px_10px_18px_rgba(0,0,0,0.08),-8px_-8px_16px_#ffffff]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 border-4 border-gray-200 border-t-gray-700 rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f0f2f5] p-3 sm:p-4 md:p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800 tracking-wide",
                        children: isEditMode ? "Edit Task" : "Create New (POS CALL)"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-3 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] ".concat(msg.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", " font-semibold"),
                    children: msg.text
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit(onSubmit),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "Bank *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                                        name: "bank",
                                                        control: control,
                                                        rules: {
                                                            required: "Bank is required"
                                                        },
                                                        render: (param)=>{
                                                            let { field } = param;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                ...field,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select Bank"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    banks.map((bank)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: bank.name,
                                                                            children: bank.name
                                                                        }, bank.id, false, {
                                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 29
                                                                        }, void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 25
                                                            }, void 0);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.bank && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-600 text-xs mt-1",
                                                        children: errors.bank.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "DBA Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        ...register("merchant_name"),
                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                        placeholder: "Enter Dba name (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "TID * (8 characters)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        ...register("tid", {
                                                            required: "TID is required",
                                                            minLength: {
                                                                value: 8,
                                                                message: "TID must be exactly 8 characters"
                                                            },
                                                            maxLength: {
                                                                value: 8,
                                                                message: "TID must be exactly 8 characters"
                                                            }
                                                        }),
                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                        placeholder: "Enter 8-digit TID",
                                                        maxLength: 8
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.tid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-600 text-xs mt-1",
                                                        children: errors.tid.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "MID * (15 characters)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        ...register("mid", {
                                                            required: "MID is required",
                                                            minLength: {
                                                                value: 15,
                                                                message: "MID must be exactly 15 characters"
                                                            },
                                                            maxLength: {
                                                                value: 15,
                                                                message: "MID must be exactly 15 characters"
                                                            }
                                                        }),
                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                        placeholder: "Enter 15-digit MID",
                                                        maxLength: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.mid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-600 text-xs mt-1",
                                                        children: errors.mid.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "Task Type *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                                        name: "task_type",
                                                        control: control,
                                                        rules: {
                                                            required: "Task type is required"
                                                        },
                                                        render: (param)=>{
                                                            let { field } = param;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                ...field,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "New Install",
                                                                        children: "New Install"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 336,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Replacement",
                                                                        children: "Replacement"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 337,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Call",
                                                                        children: "Call"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 338,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 25
                                                            }, void 0);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.task_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-600 text-xs mt-1",
                                                        children: errors.task_type.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "Assign To *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                                        name: "assigned_to",
                                                        control: control,
                                                        rules: {
                                                            required: "Please select an assignee"
                                                        },
                                                        render: (param)=>{
                                                            let { field } = param;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: field.value || "",
                                                                        onChange: (e)=>field.onChange(e.target.value ? parseInt(e.target.value) : null),
                                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff] appearance-none",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select Assignee"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                                lineNumber: 359,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: user.id,
                                                                                    children: [
                                                                                        user.username,
                                                                                        " (",
                                                                                        user.role,
                                                                                        ")"
                                                                                    ]
                                                                                }, user.id, true, {
                                                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                                    lineNumber: 361,
                                                                                    columnNumber: 31
                                                                                }, void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M19 9l-7 7-7-7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                                lineNumber: 368,
                                                                                columnNumber: 31
                                                                            }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 29
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 25
                                                            }, void 0);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.assigned_to && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-600 text-xs mt-1",
                                                        children: errors.assigned_to.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this),
                                            isCallTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "Problem Type *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                                        name: "problem_type",
                                                        control: control,
                                                        rules: {
                                                            required: isCallTask ? "Problem type is required" : false
                                                        },
                                                        render: (param)=>{
                                                            let { field } = param;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                ...field,
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select Problem Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 29
                                                                    }, void 0),
                                                                    problemTypes.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: pt.name,
                                                                            children: pt.name
                                                                        }, pt.id, false, {
                                                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 31
                                                                        }, void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 27
                                                            }, void 0);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 23
                                                    }, this),
                                                    errors.problem_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-600 text-xs mt-1",
                                                        children: errors.problem_type.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 47
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "ADDRESS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                ...register("address"),
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff] resize-none",
                                                                rows: 3,
                                                                placeholder: "Enter merchant address (optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "PHONE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                ...register("phone"),
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                                placeholder: "Enter phone number (optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "OPERATOR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                                                name: "operator",
                                                                control: control,
                                                                render: (param)=>{
                                                                    let { field } = param;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        ...field,
                                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select Operator (optional)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                                lineNumber: 443,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            OPERATOR_OPTIONS.map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: op,
                                                                                    children: op
                                                                                }, op, false, {
                                                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                                    lineNumber: 445,
                                                                                    columnNumber: 31
                                                                                }, void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 27
                                                                    }, void 0);
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-1",
                                                                children: "SIM Serial"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                ...register("sim_serial", {
                                                                    maxLength: {
                                                                        value: 30,
                                                                        message: "SIM Serial must be 30 characters or less"
                                                                    }
                                                                }),
                                                                className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]",
                                                                placeholder: "Enter SIM serial number (optional)",
                                                                maxLength: 30
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this),
                                                            errors.sim_serial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-600 text-xs mt-1",
                                                                children: errors.sim_serial.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-1",
                                                        children: "COMMENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        ...register("comment"),
                                                        className: "w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff] resize-none",
                                                        rows: 3,
                                                        placeholder: "Add any additional comments (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: mutation.isPending,
                                        className: "w-full bg-[#f0f2f5] text-gray-800 py-3 rounded-2xl font-bold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base",
                                        children: mutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-gray-200 border-t-gray-700 rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 21
                                        }, this) : isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 23
                                                }, this),
                                                "Update Task"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 23
                                                }, this),
                                                "Create Task"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s3(TaskForm, "gtE1L7VRl9SB+lF+EbQPop6z8QE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        useAssignableUsers,
        useBanks,
        useProblemTypes,
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = TaskForm;
function TaskManagerPage() {
    _s4();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const taskId = params === null || params === void 0 ? void 0 : params.taskId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskForm, {
            taskId: taskId
        }, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
            lineNumber: 518,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/task-manager/create-task/page.tsx",
        lineNumber: 517,
        columnNumber: 5
    }, this);
}
_s4(TaskManagerPage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c1 = TaskManagerPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "TaskForm");
__turbopack_context__.k.register(_c1, "TaskManagerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_task-manager_create-task_page_tsx_3beb2bda._.js.map