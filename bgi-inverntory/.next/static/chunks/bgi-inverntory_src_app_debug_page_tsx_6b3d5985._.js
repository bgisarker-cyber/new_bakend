(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/debug/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/react-data-table-component/dist/index.cjs.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// ==========================
// Component
// ==========================
const DebugPage = ()=>{
    _s();
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [counter_terminal, setCounter_terminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Filters
    const [serialFilter, setSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modelFilter, setModelFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [oemFilter, setOemFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [bankFilter, setBankFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Form visibility state
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form Data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pos_serial: "",
        model: "",
        oem: "",
        assigned_bank: ""
    });
    const [editingRecord, setEditingRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ==========================
    // Helper: Auth Headers
    // ==========================
    const getAuthHeaders = ()=>{
        const token = localStorage.getItem("access_token");
        return {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token)
        };
    };
    // ==========================
    // Fetch Records
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DebugPage.useEffect": ()=>{
            const fetchRecords = {
                "DebugPage.useEffect.fetchRecords": async ()=>{
                    try {
                        const token = localStorage.getItem("access_token");
                        if (!token) throw new Error("Please log in first.");
                        const response = await fetch("http://127.0.0.1:8000/debug/all ", {
                            headers: {
                                Authorization: "Bearer ".concat(token)
                            }
                        });
                        if (!response.ok) throw new Error("Failed to fetch data (status: ".concat(response.status, ")"));
                        const data = await response.json();
                        setCounter_terminal(data.data.length);
                        setRecords(data.data);
                        setFilteredRecords(data.data);
                    } catch (err) {
                        setError(err.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["DebugPage.useEffect.fetchRecords"];
            fetchRecords();
        }
    }["DebugPage.useEffect"], []);
    // ==========================
    // Filter Logic
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DebugPage.useEffect": ()=>{
            const filtered = records.filter({
                "DebugPage.useEffect.filtered": (item)=>{
                    const matchSerial = item.pos_serial.toLowerCase().includes(serialFilter.toLowerCase());
                    const matchModel = item.model.toLowerCase().includes(modelFilter.toLowerCase());
                    const matchOem = item.oem.toLowerCase().includes(oemFilter.toLowerCase());
                    const matchBank = item.assigned_bank.toLowerCase().includes(bankFilter.toLowerCase());
                    return matchSerial && matchModel && matchOem && matchBank;
                }
            }["DebugPage.useEffect.filtered"]);
            setFilteredRecords(filtered);
        }
    }["DebugPage.useEffect"], [
        serialFilter,
        modelFilter,
        oemFilter,
        bankFilter,
        records
    ]);
    // ==========================
    // Add Record
    // ==========================
    const handleAddRecord = async ()=>{
        const emptyField = Object.entries(formData).find((param)=>{
            let [_, v] = param;
            return v.trim() === "";
        });
        if (emptyField) {
            alert('❌ Please fill the "'.concat(emptyField[0], '" field.'));
            return;
        }
        try {
            const response = await fetch("http://127.0.0.1:8000/debug/add ", {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to add record");
            }
            alert("✅ Record added successfully!");
            setShowForm(false);
            setFormData({
                pos_serial: "",
                model: "",
                oem: "",
                assigned_bank: ""
            });
            const updated = await fetch("http://127.0.0.1:8000/debug/all ", {
                headers: getAuthHeaders()
            });
            const newData = await updated.json();
            setCounter_terminal(newData.data.length);
            setRecords(newData.data);
            setFilteredRecords(newData.data);
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    // ==========================
    // Edit Record
    // ==========================
    const handleEditClick = (record)=>{
        setEditingRecord(record);
        setShowForm(true);
        setFormData({
            pos_serial: record.pos_serial,
            model: record.model,
            oem: record.oem,
            assigned_bank: record.assigned_bank
        });
    };
    const handleUpdateRecord = async ()=>{
        if (!editingRecord) return;
        const emptyField = Object.entries(formData).find((param)=>{
            let [_, v] = param;
            return v.trim() === "";
        });
        if (emptyField) {
            alert('❌ Please fill the "'.concat(emptyField[0], '" field.'));
            return;
        }
        try {
            const response = await fetch("http://127.0.0.1:8000/debug/edit/ ".concat(editingRecord.id), {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to update record");
            }
            alert("✅ Record updated successfully!");
            setShowForm(false);
            setEditingRecord(null);
            setFormData({
                pos_serial: "",
                model: "",
                oem: "",
                assigned_bank: ""
            });
            const updated = await fetch("http://127.0.0.1:8000/debug/all ", {
                headers: getAuthHeaders()
            });
            const newData = await updated.json();
            setRecords(newData.data);
            setFilteredRecords(newData.data);
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    // ==========================
    // Delete Record
    // ==========================
    const handleDelete = async (id, pos_serial)=>{
        const confirmDelete = window.confirm("Are you sure you want to delete record: ".concat(pos_serial, "?"));
        if (!confirmDelete) return;
        try {
            const response = await fetch("http://127.0.0.1:8000/debug/delete/ ".concat(id), {
                method: "DELETE",
                headers: getAuthHeaders()
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to delete record");
            }
            alert("✅ Record deleted!");
            setRecords((prev)=>prev.filter((d)=>d.id !== id));
            setFilteredRecords((prev)=>prev.filter((d)=>d.id !== id));
        } catch (e) {
            alert("❌ " + e.message);
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
            selector: (row)=>row.pos_serial,
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "Model",
            selector: (row)=>row.model,
            style: {
                minWidth: "120px"
            }
        },
        {
            name: "OEM",
            selector: (row)=>row.oem,
            style: {
                minWidth: "120px"
            }
        },
        {
            name: "Assigned Bank",
            selector: (row)=>row.assigned_bank,
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "Actions",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleEditClick(row),
                            className: "bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDelete(row.id, row.pos_serial),
                            className: "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    // ==========================
    // Render UI
    // ==========================
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-20",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
        lineNumber: 260,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-center mt-20",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
        lineNumber: 261,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "Debug Terminals Records"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full max-w-7xl mb-6 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-center",
                        children: [
                            "Total Terminals: ",
                            counter_terminal
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowForm(true);
                                setEditingRecord(null);
                                setFormData({
                                    pos_serial: "",
                                    model: "",
                                    oem: "",
                                    assigned_bank: ""
                                });
                            },
                            className: "px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold",
                            children: "➕ Add Record"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-2xl mb-6 shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4 text-center",
                        children: editingRecord ? "Edit Record" : "Add New Record"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "POS_SERIAL",
                                value: formData.pos_serial,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        pos_serial: e.target.value
                                    }),
                                disabled: !!editingRecord,
                                className: "border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ".concat(editingRecord ? "bg-gray-100 cursor-not-allowed" : "")
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "MODEL",
                                value: formData.model,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        model: e.target.value
                                    }),
                                className: "border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "OEM",
                                value: formData.oem,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        oem: e.target.value
                                    }),
                                className: "border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "ASSIGNED BANK",
                                value: formData.assigned_bank,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        assigned_bank: e.target.value
                                    }),
                                className: "border rounded-2xl w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowForm(false);
                                    setEditingRecord(null);
                                    setFormData({
                                        pos_serial: "",
                                        model: "",
                                        oem: "",
                                        assigned_bank: ""
                                    });
                                },
                                className: "px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-400 font-semibold",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: editingRecord ? handleUpdateRecord : handleAddRecord,
                                className: "".concat(editingRecord ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700", " text-white px-4 py-2 rounded-2xl font-semibold"),
                                children: editingRecord ? "Update" : "Save"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                lineNumber: 293,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 max-w-7xl w-full px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Serial",
                        value: serialFilter,
                        onChange: (e)=>setSerialFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Model",
                        value: modelFilter,
                        onChange: (e)=>setModelFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by OEM",
                        value: oemFilter,
                        onChange: (e)=>setOemFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Assigned Bank",
                        value: bankFilter,
                        onChange: (e)=>setBankFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSerialFilter("");
                            setModelFilter("");
                            setOemFilter("");
                            setBankFilter("");
                        },
                        className: "px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    data: filteredRecords,
                    pagination: true,
                    striped: true,
                    highlightOnHover: true,
                    dense: true
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/debug/page.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DebugPage, "I8pOZS7/7ViWjpdujqGXQz/wpY0=");
_c = DebugPage;
const __TURBOPACK__default__export__ = DebugPage;
var _c;
__turbopack_context__.k.register(_c, "DebugPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_debug_page_tsx_6b3d5985._.js.map