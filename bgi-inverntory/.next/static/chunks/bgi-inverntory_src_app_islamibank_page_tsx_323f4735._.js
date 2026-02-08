(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/islamibank/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const IslamiPOSPage = ()=>{
    _s();
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [counter_terminal, setCounter_terminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // REMOVE MID FILTER, KEEP OTHERS AND ADD AREA FILTER
    const [serialFilter, setSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [areaFilter, setAreaFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // ✅ NEW: Area filter
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [branchFilter, setBranchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ==========================
    // Fetch Records
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IslamiPOSPage.useEffect": ()=>{
            const fetchRecords = {
                "IslamiPOSPage.useEffect.fetchRecords": async ()=>{
                    try {
                        const res = await fetch("http://127.0.0.1:8000/islami/all  ");
                        if (!res.ok) throw new Error("HTTP ".concat(res.status));
                        const data = await res.json();
                        setCounter_terminal(data.data.length);
                        setRecords(data.data || data);
                        setFilteredRecords(data.data || data);
                    } catch (e) {
                        setError(e.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["IslamiPOSPage.useEffect.fetchRecords"];
            fetchRecords();
        }
    }["IslamiPOSPage.useEffect"], []);
    // ==========================
    // Filter logic - UPDATED TO USE AREA FILTER
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IslamiPOSPage.useEffect": ()=>{
            const filtered = records.filter({
                "IslamiPOSPage.useEffect.filtered": (r)=>{
                    var _r_pos_serial, _r_area, // ✅ NEW: Area filter
                    _r_tid, _r_city, _r_branch;
                    return ((_r_pos_serial = r.pos_serial) === null || _r_pos_serial === void 0 ? void 0 : _r_pos_serial.toLowerCase().includes(serialFilter.toLowerCase())) && ((_r_area = r.area) === null || _r_area === void 0 ? void 0 : _r_area.toLowerCase().includes(areaFilter.toLowerCase())) && ((_r_tid = r.tid) === null || _r_tid === void 0 ? void 0 : _r_tid.toLowerCase().includes(tidFilter.toLowerCase())) && ((_r_city = r.city) === null || _r_city === void 0 ? void 0 : _r_city.toLowerCase().includes(cityFilter.toLowerCase())) && ((_r_branch = r.branch) === null || _r_branch === void 0 ? void 0 : _r_branch.toLowerCase().includes(branchFilter.toLowerCase()));
                }
            }["IslamiPOSPage.useEffect.filtered"]);
            setFilteredRecords(filtered);
        }
    }["IslamiPOSPage.useEffect"], [
        serialFilter,
        areaFilter,
        tidFilter,
        cityFilter,
        branchFilter,
        records
    ]); // ✅ UPDATED dependencies
    // ==========================
    // Upload Excel
    // ==========================
    const handleUploadExcel = async ()=>{
        if (!excelFile) return alert("Please select an Excel file!");
        const form = new FormData();
        form.append("file", excelFile);
        try {
            const res = await fetch("http://127.0.0.1:8000/islami/upload  ", {
                method: "POST",
                body: form
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.detail || "Upload failed");
            setUploadMsg("✅ Upload successful!");
            setExcelFile(null);
            const updated = await fetch("http://127.0.0.1:8000/islami/all  ");
            const newData = await updated.json();
            setRecords(newData.data || newData);
            setFilteredRecords(newData.data || newData);
        } catch (e) {
            setUploadMsg("❌ " + e.message);
        }
    };
    // ==========================
    // Download Template
    // ==========================
    const handleDownloadTemplate = ()=>{
        window.open("http://127.0.0.1:8000/islami/template  ", "_blank");
    };
    // ==========================
    // Table Columns - FIXED: Convert minWidth to style
    // ==========================
    const columns = [
        {
            name: "SL",
            selector: (row)=>row.id,
            width: "60px"
        },
        {
            name: "Config Date",
            selector: (r)=>r.configdate,
            style: {
                minWidth: "100px"
            }
        },
        {
            name: "MID",
            selector: (r)=>r.mid,
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "TID",
            selector: (r)=>r.tid,
            style: {
                minWidth: "120px"
            }
        },
        {
            name: "MERCHANT SIGNBOARD",
            selector: (r)=>r.merchant_signboard,
            style: {
                minWidth: "250px"
            }
        },
        {
            name: "Address",
            selector: (r)=>r.address,
            style: {
                minWidth: "250px"
            },
            wrap: true
        },
        {
            name: "City",
            selector: (r)=>r.city,
            style: {
                minWidth: "130px"
            }
        },
        {
            name: "Area",
            selector: (r)=>r.area,
            style: {
                minWidth: "130px"
            }
        },
        {
            name: "Branch",
            selector: (r)=>r.branch,
            style: {
                minWidth: "180px"
            }
        },
        {
            name: "Vendor",
            selector: (r)=>r.vendor,
            style: {
                minWidth: "100px"
            }
        },
        {
            name: "POS Model",
            selector: (r)=>r.pos_model,
            style: {
                minWidth: "100px"
            }
        },
        {
            name: "POS Serial",
            selector: (r)=>r.pos_serial,
            style: {
                minWidth: "130px"
            }
        },
        {
            name: "Battery Serial",
            selector: (r)=>r.battery_serial,
            style: {
                minWidth: "160px"
            }
        },
        {
            name: "Old POS Serial",
            selector: (r)=>r.old_pos_serial,
            style: {
                minWidth: "160px"
            }
        },
        {
            name: "SIM Operator",
            selector: (r)=>r.sim_operator,
            style: {
                minWidth: "110px"
            }
        },
        {
            name: "SIM Serial Number",
            selector: (r)=>r.sim_serial_number,
            style: {
                minWidth: "180px"
            }
        },
        {
            name: "IP Address",
            selector: (r)=>r.ip_address,
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "Port",
            selector: (r)=>r.port_number,
            style: {
                minWidth: "100px"
            }
        },
        {
            name: "Functionality",
            selector: (r)=>r.special_functionality,
            style: {
                minWidth: "200px"
            }
        },
        {
            name: "TL",
            selector: (r)=>r.tl,
            style: {
                minWidth: "180px"
            }
        },
        {
            name: "ARO",
            selector: (r)=>r.aro,
            style: {
                minWidth: "180px"
            }
        },
        {
            name: "Merchant Contact Person",
            selector: (r)=>r.merchant_contact_person,
            style: {
                minWidth: "200px"
            }
        },
        {
            name: "Merchant Contact Number",
            selector: (r)=>r.merchant_contact_number,
            style: {
                minWidth: "140px"
            }
        },
        {
            name: "Installation Date",
            selector: (r)=>r.installation_date,
            style: {
                minWidth: "110px"
            }
        },
        {
            name: "Installation Engineer",
            selector: (r)=>r.installation_engineer_name,
            style: {
                minWidth: "180px"
            }
        },
        {
            name: "Handover To",
            selector: (r)=>r.handover_to,
            style: {
                minWidth: "100px"
            }
        },
        {
            name: "Handover Date",
            selector: (r)=>r.handover_date,
            style: {
                minWidth: "110px"
            }
        },
        {
            name: "App Version",
            selector: (r)=>r.app_version,
            style: {
                minWidth: "120px"
            }
        },
        {
            name: "App Release Date",
            selector: (r)=>r.app_release_date,
            style: {
                minWidth: "110px"
            }
        },
        {
            name: "Firmware Version",
            selector: (r)=>r.firmware_version,
            style: {
                minWidth: "120px"
            }
        },
        {
            name: "Remarks",
            selector: (r)=>r.remarks,
            style: {
                minWidth: "200px"
            },
            wrap: true
        },
        {
            name: "Created Time",
            selector: (r)=>r.create_time,
            style: {
                minWidth: "200px"
            },
            wrap: true
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-20",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
        lineNumber: 178,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-center mt-20",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
        lineNumber: 179,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "IBBL LIVE TERMINALS"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full max-w-7xl mb-6 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.open("http://127.0.0.1:8000/islami/download  ", "_blank"),
                        className: "px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold",
                        children: "⬇️ Export Excel"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-center",
                        children: [
                            "Total Terminals: ",
                            counter_terminal
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowUploadModal(true),
                        className: "px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] font-semibold",
                        children: "📂 Upload Excel"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 max-w-7xl w-full px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "POS Serial",
                        value: serialFilter,
                        onChange: (e)=>setSerialFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Area",
                        value: areaFilter,
                        onChange: (e)=>setAreaFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "City",
                        value: cityFilter,
                        onChange: (e)=>setCityFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Branch",
                        value: branchFilter,
                        onChange: (e)=>setBranchFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSerialFilter("");
                            setAreaFilter(""); // ✅ NEW: Clear area filter
                            setTidFilter("");
                            setCityFilter("");
                            setBranchFilter("");
                        },
                        className: "px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                lineNumber: 208,
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
                    dense: true,
                    persistTableHead: true
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4 text-center",
                            children: "📤 Upload Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".xlsx,.xls",
                            onChange: (e)=>{
                                var _e_target_files;
                                return setExcelFile(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);
                            },
                            className: "border rounded-2xl w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 mt-2 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 273,
                            columnNumber: 27
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadTemplate,
                                    className: "text-blue-600 underline font-semibold",
                                    children: "📥 Download Template"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "bg-gray-300 px-4 py-2 rounded-2xl font-semibold",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IslamiPOSPage, "7o0QGD0IxWZHKP7yQqJWgCpJ9/s=");
_c = IslamiPOSPage;
const __TURBOPACK__default__export__ = IslamiPOSPage;
var _c;
__turbopack_context__.k.register(_c, "IslamiPOSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_islamibank_page_tsx_323f4735._.js.map