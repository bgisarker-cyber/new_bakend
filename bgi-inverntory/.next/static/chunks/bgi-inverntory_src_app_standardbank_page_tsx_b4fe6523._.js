(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/standardbank/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StandardPOSPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/react-data-table-component/dist/index.cjs.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const API_BASE = "http://127.0.0.1:8000/standard";
function StandardPOSPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    /* ---------------- state ---------------- */ const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [midFilter, setMidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [posSerialFilter, setPosSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ---------- auth ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandardPOSPage.useEffect": ()=>{
            const t = localStorage.getItem("access_token");
            if (!t) router.push("/login");
            else setToken(t);
        }
    }["StandardPOSPage.useEffect"], [
        router
    ]);
    /* ---------- fetch records ---------- */ const fetchRecords = async (authToken)=>{
        try {
            setLoading(true);
            const res = await fetch("".concat(API_BASE, "/all"), {
                headers: {
                    Authorization: "Bearer ".concat(authToken)
                }
            });
            if (!res.ok) {
                const txt = await res.text();
                throw new Error("".concat(res.status, "  ").concat(txt));
            }
            const json = await res.json();
            const data = Array.isArray(json === null || json === void 0 ? void 0 : json.data) ? json.data : [];
            const mapped = data.map((r)=>{
                var _r_SL, _r_PURPOSE, _r_CONFIGDATE, _r_MID, _r_TID, _r_DBANAME, _r_ADDRESS, _r_CITY, _r_LOCATION, _r_POSTYPE, _r_POSMODEL, _r_POSSERIAL, _r_APPVERSION, _r_ROLLOUTDATE, _r_ENGINEERNAME, _r_IPADDRESS, _r_PORTNUMBER, _r_CONTACTNUMBER, _r_HANDOVERTO, _r_HANDOVERDATE, _r_create_time;
                return {
                    sl: Number((_r_SL = r["SL"]) !== null && _r_SL !== void 0 ? _r_SL : 0),
                    purpose: String((_r_PURPOSE = r["PURPOSE"]) !== null && _r_PURPOSE !== void 0 ? _r_PURPOSE : ""),
                    configdate: String((_r_CONFIGDATE = r["CONFIGDATE"]) !== null && _r_CONFIGDATE !== void 0 ? _r_CONFIGDATE : ""),
                    mid: String((_r_MID = r["MID"]) !== null && _r_MID !== void 0 ? _r_MID : ""),
                    tid: String((_r_TID = r["TID"]) !== null && _r_TID !== void 0 ? _r_TID : ""),
                    dba_name: String((_r_DBANAME = r["DBA NAME"]) !== null && _r_DBANAME !== void 0 ? _r_DBANAME : ""),
                    address: String((_r_ADDRESS = r["ADDRESS"]) !== null && _r_ADDRESS !== void 0 ? _r_ADDRESS : ""),
                    city: String((_r_CITY = r["CITY"]) !== null && _r_CITY !== void 0 ? _r_CITY : ""),
                    location: String((_r_LOCATION = r["LOCATION"]) !== null && _r_LOCATION !== void 0 ? _r_LOCATION : ""),
                    pos_type: String((_r_POSTYPE = r["POS TYPE"]) !== null && _r_POSTYPE !== void 0 ? _r_POSTYPE : ""),
                    pos_model: String((_r_POSMODEL = r["POS MODEL"]) !== null && _r_POSMODEL !== void 0 ? _r_POSMODEL : ""),
                    pos_serial: String((_r_POSSERIAL = r["POS SERIAL"]) !== null && _r_POSSERIAL !== void 0 ? _r_POSSERIAL : ""),
                    app_version: String((_r_APPVERSION = r["APP VERSION"]) !== null && _r_APPVERSION !== void 0 ? _r_APPVERSION : ""),
                    roll_out_date: String((_r_ROLLOUTDATE = r["ROLL OUT DATE"]) !== null && _r_ROLLOUTDATE !== void 0 ? _r_ROLLOUTDATE : ""),
                    engineer_name: String((_r_ENGINEERNAME = r["ENGINEER NAME"]) !== null && _r_ENGINEERNAME !== void 0 ? _r_ENGINEERNAME : ""),
                    ip_address: String((_r_IPADDRESS = r["IP ADDRESS"]) !== null && _r_IPADDRESS !== void 0 ? _r_IPADDRESS : ""),
                    port_number: String((_r_PORTNUMBER = r["PORT NUMBER"]) !== null && _r_PORTNUMBER !== void 0 ? _r_PORTNUMBER : ""),
                    contact_number: String((_r_CONTACTNUMBER = r["CONTACT NUMBER"]) !== null && _r_CONTACTNUMBER !== void 0 ? _r_CONTACTNUMBER : ""),
                    handover_to: String((_r_HANDOVERTO = r["HANDOVER TO"]) !== null && _r_HANDOVERTO !== void 0 ? _r_HANDOVERTO : ""),
                    handover_date: String((_r_HANDOVERDATE = r["HANDOVER DATE"]) !== null && _r_HANDOVERDATE !== void 0 ? _r_HANDOVERDATE : ""),
                    create_time: String((_r_create_time = r["create_time"]) !== null && _r_create_time !== void 0 ? _r_create_time : "")
                };
            });
            setRecords(mapped);
            setFilteredRecords(mapped);
        } catch (e) {
            setError(e.message);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandardPOSPage.useEffect": ()=>{
            if (token) fetchRecords(token);
        }
    }["StandardPOSPage.useEffect"], [
        token
    ]);
    /* ---------- filter ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandardPOSPage.useEffect": ()=>{
            const filtered = records.filter({
                "StandardPOSPage.useEffect.filtered": (r)=>r.mid.toLowerCase().includes(midFilter.toLowerCase()) && r.tid.toLowerCase().includes(tidFilter.toLowerCase()) && r.city.toLowerCase().includes(cityFilter.toLowerCase()) && r.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase())
            }["StandardPOSPage.useEffect.filtered"]);
            setFilteredRecords(filtered);
        }
    }["StandardPOSPage.useEffect"], [
        midFilter,
        tidFilter,
        cityFilter,
        posSerialFilter,
        records
    ]);
    /* ---------- Excel Upload ---------- */ const handleUploadExcel = async ()=>{
        if (!excelFile) return alert("Select a file!");
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
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt);
            }
            setUploadMsg("✅ Upload successful!");
            setExcelFile(null);
            setShowUploadModal(false);
            await fetchRecords(token);
        } catch (err) {
            setUploadMsg("❌ " + err.message);
        }
    };
    /* ---------- Excel Download ---------- */ const downloadExcelFile = async (endpoint, filename)=>{
        if (!token) return alert("Please log in first.");
        try {
            const res = await fetch("".concat(API_BASE, "/").concat(endpoint), {
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt);
            }
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed: ".concat(err.message));
        }
    };
    const handleDownloadTemplate = ()=>downloadExcelFile("template", "StandardPOS_Template.xlsx");
    const handleExportExcel = ()=>downloadExcelFile("download", "StandardPOS_Export.xlsx");
    /* ---------- table ---------- */ const columns = [
        {
            name: "SL",
            selector: (r)=>r.sl,
            width: "80px"
        },
        {
            name: "Purpose",
            selector: (r)=>r.purpose,
            style: {
                minWidth: 150
            }
        },
        {
            name: "Config Date",
            selector: (r)=>r.configdate,
            style: {
                minWidth: 130
            }
        },
        {
            name: "TID",
            selector: (r)=>r.tid,
            style: {
                minWidth: 100
            }
        },
        {
            name: "MID",
            selector: (r)=>r.mid,
            style: {
                minWidth: 150
            }
        },
        {
            name: "DBA Name",
            selector: (r)=>r.dba_name,
            style: {
                minWidth: 200
            },
            wrap: true
        },
        {
            name: "Address",
            selector: (r)=>r.address,
            style: {
                minWidth: 220
            },
            wrap: true
        },
        {
            name: "City",
            selector: (r)=>r.city,
            style: {
                minWidth: 150
            }
        },
        {
            name: "Location",
            selector: (r)=>r.location,
            style: {
                minWidth: 150
            }
        },
        {
            name: "POS Serial",
            selector: (r)=>r.pos_serial,
            style: {
                minWidth: 150
            }
        },
        {
            name: "Engineer Name",
            selector: (r)=>r.engineer_name,
            style: {
                minWidth: 200
            }
        },
        {
            name: "Remarks",
            selector: (r)=>r.app_version,
            style: {
                minWidth: 150
            }
        },
        {
            name: "Created Time",
            selector: (r)=>r.create_time,
            style: {
                minWidth: 180
            }
        }
    ];
    /* ---------- render ---------- */ if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-20",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
        lineNumber: 201,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-center mt-20",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
        lineNumber: 202,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "SDBL LIVE TERMINALS"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-gray-700 text-center",
                children: [
                    "Total Terminals: ",
                    records.length
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full max-w-7xl mb-6 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExportExcel,
                        className: "px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] transition-all font-semibold",
                        children: "⬇️ Export Excel"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowUploadModal(true),
                        className: "px-6 py-3 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_#ffffff] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_#ffffff] transition-all font-semibold",
                        children: "📂 Upload Excel"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 max-w-7xl w-full px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "MID",
                        value: midFilter,
                        onChange: (e)=>setMidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "City",
                        value: cityFilter,
                        onChange: (e)=>setCityFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "POS Serial",
                        value: posSerialFilter,
                        onChange: (e)=>setPosSerialFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMidFilter("");
                            setTidFilter("");
                            setCityFilter("");
                            setPosSerialFilter("");
                        },
                        className: "px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
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
                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4 text-center",
                            children: "📤 Upload Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".xlsx,.xls",
                            onChange: (e)=>{
                                var _e_target_files;
                                var _e_target_files_;
                                return setExcelFile((_e_target_files_ = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) !== null && _e_target_files_ !== void 0 ? _e_target_files_ : null);
                            },
                            className: "border rounded-2xl w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 mt-2 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 275,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadTemplate,
                                    className: "text-blue-600 underline font-semibold",
                                    children: "📥 Download Template"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "bg-gray-300 px-4 py-2 rounded-2xl font-semibold",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s(StandardPOSPage, "cGOueq5ez+YdzgYDCBlEkMNUry0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StandardPOSPage;
var _c;
__turbopack_context__.k.register(_c, "StandardPOSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_standardbank_page_tsx_b4fe6523._.js.map