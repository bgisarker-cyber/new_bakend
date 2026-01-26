(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/pubalibank/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const API_BASE = "http://127.0.0.1:8000/pubali";
const PubaliPOSPage = ()=>{
    _s();
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [counter_terminal, setCounter_terminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Filters
    const [midFilter, setMidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [districtFilter, setDistrictFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [posSerialFilter, setPosSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [zoneFilter, setZoneFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Upload
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auth
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PubaliPOSPage.useEffect": ()=>{
            const stored = localStorage.getItem("access_token");
            setToken(stored);
        }
    }["PubaliPOSPage.useEffect"], []);
    // Map API response keys
    const mapApiData = (data)=>{
        return data.map((r)=>({
                id: r.id,
                sn: r["S/N"],
                configuration_date: r["CONFIGURATION DATE"] || "",
                tid: r["TID"] || "",
                mid: r["MID"] || "",
                merchant_name: r["MERCHANT NAME"] || "",
                dba_name: r["DBA NAME"] || "",
                address: r["ADDRESS"] || "",
                bank_contact_person_name: r["BANK CONT. PERSON NAME"] || "",
                bank_contact_person_number: r["BANK CONT. PERSON NUMBER"] || "",
                district: r["DISTRICT"] || "",
                division: r["DIVISION"] || "",
                zone: r["ZONE"] || "",
                pos_sn: r["POS S/N"] || "",
                pos_brand_model: r["POS BRAND & MODEL"] || "",
                operator_name: r["OPERATOR NAME"] || "",
                sim_number: r["SIM NUMBER"] || "",
                sim_ip: r["SIM IP"] || "",
                host_ip: r["HOST IP"] || "",
                host_port: r["HOST PORT"] || "",
                emi: r["EMI"] || "",
                vendor_name: r["VENDOR NAME"] || "",
                emi_tenure: r["EMI TENURE"] || "",
                remarks: r["REMARKS"] || "",
                apps_version: r["APPS VERSION"] || "",
                configure_by: r["CONFIGURE BY"] || "",
                installation_date: r["INSTALLATION DATE"] || "",
                installation_by: r["INSTALLATION BY"] || "",
                merchant_number: r["MERCHANT NUMBER"] || "",
                firmware_version: r["FIRMWARE VERSION"] || "",
                qr: r["QR"] || "",
                create_time: r["create_time"] || ""
            }));
    };
    // Fetch Data (Authenticated)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PubaliPOSPage.useEffect": ()=>{
            const fetchRecords = {
                "PubaliPOSPage.useEffect.fetchRecords": async ()=>{
                    try {
                        var _data_data;
                        if (!token) throw new Error("No authentication token found. Please log in.");
                        const res = await fetch("".concat(API_BASE, "/all"), {
                            headers: {
                                Authorization: "Bearer ".concat(token)
                            }
                        });
                        if (res.status === 401) throw new Error("Unauthorized: Invalid or expired token.");
                        if (!res.ok) throw new Error("HTTP ".concat(res.status));
                        const data = await res.json();
                        setCounter_terminal(((_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.length) || 0);
                        const formatted = mapApiData(data.data || data);
                        setRecords(formatted);
                        setFilteredRecords(formatted);
                    } catch (e) {
                        setError(e.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["PubaliPOSPage.useEffect.fetchRecords"];
            if (token) fetchRecords();
        }
    }["PubaliPOSPage.useEffect"], [
        token
    ]);
    // Filter logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PubaliPOSPage.useEffect": ()=>{
            const filtered = records.filter({
                "PubaliPOSPage.useEffect.filtered": (r)=>r.mid.toLowerCase().includes(midFilter.toLowerCase()) && r.tid.toLowerCase().includes(tidFilter.toLowerCase()) && r.district.toLowerCase().includes(districtFilter.toLowerCase()) && r.zone.toLowerCase().includes(zoneFilter.toLowerCase()) && r.pos_sn.toLowerCase().includes(posSerialFilter.toLowerCase())
            }["PubaliPOSPage.useEffect.filtered"]);
            setFilteredRecords(filtered);
        }
    }["PubaliPOSPage.useEffect"], [
        midFilter,
        tidFilter,
        districtFilter,
        zoneFilter,
        posSerialFilter,
        records
    ]);
    // Upload Excel
    const handleUploadExcel = async ()=>{
        if (!excelFile) return alert("Please select an Excel file!");
        if (!token) return alert("Authentication required!");
        const form = new FormData();
        form.append("file", excelFile);
        try {
            const res = await fetch("".concat(API_BASE, "/upload"), {
                method: "POST",
                headers: {
                    Authorization: "Bearer ".concat(token)
                },
                body: form
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.detail || "Upload failed");
            setUploadMsg("✅ Upload successful!");
            setExcelFile(null);
            // Refresh
            const updated = await fetch("".concat(API_BASE, "/all"), {
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            const newData = await updated.json();
            const formatted = mapApiData(newData.data || newData);
            setRecords(formatted);
            setFilteredRecords(formatted);
        } catch (e) {
            setUploadMsg("❌ " + e.message);
        }
    };
    // Download Template
    const handleDownloadTemplate = async ()=>{
        if (!token) return alert("Please log in first.");
        try {
            const res = await fetch("".concat(API_BASE, "/template"), {
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            if (!res.ok) throw new Error("HTTP ".concat(res.status));
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "PubaliPOS_Template.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed: " + err.message);
        }
    };
    // Export Excel
    const handleExportExcel = async ()=>{
        if (!token) return alert("Please log in first.");
        try {
            const res = await fetch("".concat(API_BASE, "/download"), {
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            if (!res.ok) throw new Error("HTTP ".concat(res.status));
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "PubaliPOS_Export.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed: " + err.message);
        }
    };
    // Table Columns
    const columns = [
        {
            name: "S/N",
            selector: (r)=>r.sn,
            width: "80px"
        },
        {
            name: "Config Date",
            selector: (r)=>r.configuration_date,
            minWidth: "120px"
        },
        {
            name: "TID",
            selector: (r)=>r.tid,
            minWidth: "100px"
        },
        {
            name: "MID",
            selector: (r)=>r.mid,
            minWidth: "150px"
        },
        {
            name: "Merchant Name",
            selector: (r)=>r.merchant_name,
            minWidth: "200px",
            wrap: true
        },
        {
            name: "DBA Name",
            selector: (r)=>r.dba_name,
            minWidth: "230px"
        },
        {
            name: "Address",
            selector: (r)=>r.address,
            minWidth: "250px",
            wrap: true
        },
        {
            name: "District",
            selector: (r)=>r.district,
            minWidth: "150px"
        },
        {
            name: "Zone",
            selector: (r)=>r.zone,
            minWidth: "150px"
        },
        {
            name: "POS SN",
            selector: (r)=>r.pos_sn,
            minWidth: "150px"
        },
        {
            name: "Vendor",
            selector: (r)=>r.vendor_name,
            minWidth: "150px"
        },
        {
            name: "Remarks",
            selector: (r)=>r.remarks,
            minWidth: "200px",
            wrap: true
        },
        {
            name: "Created Time",
            selector: (r)=>r.create_time,
            minWidth: "180px"
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-20",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
        lineNumber: 240,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-center mt-20",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
        lineNumber: 241,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "PBL LIVE TERMINALS"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full max-w-7xl mb-6 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white px-5 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100 font-semibold",
                                children: "🟢 Live"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white px-5 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100 font-semibold",
                                children: "🟠 Withdraw"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white px-5 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100 font-semibold",
                                children: "🔵 Replace"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold text-center flex-1",
                        children: [
                            "Total Terminals: ",
                            counter_terminal
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExportExcel,
                                className: "bg-white px-5 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100 font-semibold",
                                children: "⬇️ Export Excel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUploadModal(true),
                                className: "bg-white px-5 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100 font-semibold",
                                children: "📂 Upload Excel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 max-w-7xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "MID",
                        value: midFilter,
                        onChange: (e)=>setMidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "District",
                        value: districtFilter,
                        onChange: (e)=>setDistrictFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Zone",
                        value: zoneFilter,
                        onChange: (e)=>setZoneFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "POS Serial",
                        value: posSerialFilter,
                        onChange: (e)=>setPosSerialFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMidFilter("");
                            setTidFilter("");
                            setDistrictFilter("");
                            setZoneFilter("");
                            setPosSerialFilter("");
                        },
                        className: "px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    data: filteredRecords,
                    pagination: true,
                    striped: true,
                    highlightOnHover: true,
                    dense: true,
                    persistTableHead: true
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4 text-center",
                            children: "📤 Upload Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                            lineNumber: 287,
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
                            fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 mt-2 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                            lineNumber: 290,
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
                                    fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "bg-gray-300 px-4 py-2 rounded-2xl font-semibold",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/pubalibank/page.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PubaliPOSPage, "aS/llpnGTAqd4gRh/TG5+AOWJzQ=");
_c = PubaliPOSPage;
const __TURBOPACK__default__export__ = PubaliPOSPage;
var _c;
__turbopack_context__.k.register(_c, "PubaliPOSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_pubalibank_page_tsx_5784d7ad._.js.map