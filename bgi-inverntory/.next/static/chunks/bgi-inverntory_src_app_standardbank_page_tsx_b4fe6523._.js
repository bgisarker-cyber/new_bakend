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
    /* ---------- fetch ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandardPOSPage.useEffect": ()=>{
            const fetchRecords = {
                "StandardPOSPage.useEffect.fetchRecords": async ()=>{
                    try {
                        if (!token) throw new Error("Please log in.");
                        const res = await fetch("".concat(API_BASE, "/all"), {
                            headers: {
                                Authorization: "Bearer ".concat(token)
                            }
                        });
                        if (!res.ok) {
                            const txt = await res.text();
                            throw new Error("".concat(res.status, "  ").concat(txt));
                        }
                        const json = await res.json();
                        /* ======  defensive: ensure array  ====== */ const data = Array.isArray(json === null || json === void 0 ? void 0 : json.data) ? json.data : [];
                        const mapped = data.map({
                            "StandardPOSPage.useEffect.fetchRecords.mapped": (r)=>{
                                var _r_PURPOSE, _r_CONFIGDATE, _r_MID, _r_TID, _r_DBANAME, _r_ADDRESS, _r_CITY, _r_LOCATION, _r_POSTYPE, _r_POSMODEL, _r_POSSERIAL, _r_APPVERSION, _r_ROLLOUTDATE, _r_ENGINEERNAME, _r_IPADDRESS, _r_PORTNUMBER, _r_CONTACTNUMBER, _r_HANDOVERTO, _r_HANDOVERDATE, _r_create_time;
                                return {
                                    sl: r["SL"],
                                    purpose: (_r_PURPOSE = r["PURPOSE"]) !== null && _r_PURPOSE !== void 0 ? _r_PURPOSE : "",
                                    configdate: (_r_CONFIGDATE = r["CONFIGDATE"]) !== null && _r_CONFIGDATE !== void 0 ? _r_CONFIGDATE : "",
                                    mid: String((_r_MID = r["MID"]) !== null && _r_MID !== void 0 ? _r_MID : ""),
                                    tid: String((_r_TID = r["TID"]) !== null && _r_TID !== void 0 ? _r_TID : ""),
                                    dba_name: (_r_DBANAME = r["DBA NAME"]) !== null && _r_DBANAME !== void 0 ? _r_DBANAME : "",
                                    address: (_r_ADDRESS = r["ADDRESS"]) !== null && _r_ADDRESS !== void 0 ? _r_ADDRESS : "",
                                    city: (_r_CITY = r["CITY"]) !== null && _r_CITY !== void 0 ? _r_CITY : "",
                                    location: (_r_LOCATION = r["LOCATION"]) !== null && _r_LOCATION !== void 0 ? _r_LOCATION : "",
                                    pos_type: (_r_POSTYPE = r["POS TYPE"]) !== null && _r_POSTYPE !== void 0 ? _r_POSTYPE : "",
                                    pos_model: (_r_POSMODEL = r["POS MODEL"]) !== null && _r_POSMODEL !== void 0 ? _r_POSMODEL : "",
                                    pos_serial: (_r_POSSERIAL = r["POS SERIAL"]) !== null && _r_POSSERIAL !== void 0 ? _r_POSSERIAL : "",
                                    app_version: (_r_APPVERSION = r["APP VERSION"]) !== null && _r_APPVERSION !== void 0 ? _r_APPVERSION : "",
                                    roll_out_date: (_r_ROLLOUTDATE = r["ROLL OUT DATE"]) !== null && _r_ROLLOUTDATE !== void 0 ? _r_ROLLOUTDATE : "",
                                    engineer_name: (_r_ENGINEERNAME = r["ENGINEER NAME"]) !== null && _r_ENGINEERNAME !== void 0 ? _r_ENGINEERNAME : "",
                                    ip_address: (_r_IPADDRESS = r["IP ADDRESS"]) !== null && _r_IPADDRESS !== void 0 ? _r_IPADDRESS : "",
                                    port_number: String((_r_PORTNUMBER = r["PORT NUMBER"]) !== null && _r_PORTNUMBER !== void 0 ? _r_PORTNUMBER : ""),
                                    contact_number: String((_r_CONTACTNUMBER = r["CONTACT NUMBER"]) !== null && _r_CONTACTNUMBER !== void 0 ? _r_CONTACTNUMBER : ""),
                                    handover_to: (_r_HANDOVERTO = r["HANDOVER TO"]) !== null && _r_HANDOVERTO !== void 0 ? _r_HANDOVERTO : "",
                                    handover_date: (_r_HANDOVERDATE = r["HANDOVER DATE"]) !== null && _r_HANDOVERDATE !== void 0 ? _r_HANDOVERDATE : "",
                                    create_time: (_r_create_time = r["create_time"]) !== null && _r_create_time !== void 0 ? _r_create_time : ""
                                };
                            }
                        }["StandardPOSPage.useEffect.fetchRecords.mapped"]);
                        setRecords(mapped);
                        setFilteredRecords(mapped);
                    } catch (e) {
                        setError(e.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["StandardPOSPage.useEffect.fetchRecords"];
            if (token) fetchRecords();
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
    /* ---------- upload ---------- */ const handleUploadExcel = async ()=>{
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
            const result = await res.json();
            setUploadMsg("✅ Upload successful!");
            setExcelFile(null);
            setShowUploadModal(false);
            // refresh
            const upd = await fetch("".concat(API_BASE, "/all"), {
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            if (!upd.ok) {
                const txt = await upd.text();
                throw new Error(txt);
            }
            const json = await upd.json();
            const data = Array.isArray(json === null || json === void 0 ? void 0 : json.data) ? json.data : [];
            const mapped = data.map((r)=>{
                var _r_PURPOSE, _r_CONFIGDATE, _r_MID, _r_TID, _r_DBANAME, _r_ADDRESS, _r_CITY, _r_LOCATION, _r_POSTYPE, _r_POSMODEL, _r_POSSERIAL, _r_APPVERSION, _r_ROLLOUTDATE, _r_ENGINEERNAME, _r_IPADDRESS, _r_PORTNUMBER, _r_CONTACTNUMBER, _r_HANDOVERTO, _r_HANDOVERDATE, _r_create_time;
                return {
                    sl: r["SL"],
                    purpose: (_r_PURPOSE = r["PURPOSE"]) !== null && _r_PURPOSE !== void 0 ? _r_PURPOSE : "",
                    configdate: (_r_CONFIGDATE = r["CONFIGDATE"]) !== null && _r_CONFIGDATE !== void 0 ? _r_CONFIGDATE : "",
                    mid: String((_r_MID = r["MID"]) !== null && _r_MID !== void 0 ? _r_MID : ""),
                    tid: String((_r_TID = r["TID"]) !== null && _r_TID !== void 0 ? _r_TID : ""),
                    dba_name: (_r_DBANAME = r["DBA NAME"]) !== null && _r_DBANAME !== void 0 ? _r_DBANAME : "",
                    address: (_r_ADDRESS = r["ADDRESS"]) !== null && _r_ADDRESS !== void 0 ? _r_ADDRESS : "",
                    city: (_r_CITY = r["CITY"]) !== null && _r_CITY !== void 0 ? _r_CITY : "",
                    location: (_r_LOCATION = r["LOCATION"]) !== null && _r_LOCATION !== void 0 ? _r_LOCATION : "",
                    pos_type: (_r_POSTYPE = r["POS TYPE"]) !== null && _r_POSTYPE !== void 0 ? _r_POSTYPE : "",
                    pos_model: (_r_POSMODEL = r["POS MODEL"]) !== null && _r_POSMODEL !== void 0 ? _r_POSMODEL : "",
                    pos_serial: (_r_POSSERIAL = r["POS SERIAL"]) !== null && _r_POSSERIAL !== void 0 ? _r_POSSERIAL : "",
                    app_version: (_r_APPVERSION = r["APP VERSION"]) !== null && _r_APPVERSION !== void 0 ? _r_APPVERSION : "",
                    roll_out_date: (_r_ROLLOUTDATE = r["ROLL OUT DATE"]) !== null && _r_ROLLOUTDATE !== void 0 ? _r_ROLLOUTDATE : "",
                    engineer_name: (_r_ENGINEERNAME = r["ENGINEER NAME"]) !== null && _r_ENGINEERNAME !== void 0 ? _r_ENGINEERNAME : "",
                    ip_address: (_r_IPADDRESS = r["IP ADDRESS"]) !== null && _r_IPADDRESS !== void 0 ? _r_IPADDRESS : "",
                    port_number: String((_r_PORTNUMBER = r["PORT NUMBER"]) !== null && _r_PORTNUMBER !== void 0 ? _r_PORTNUMBER : ""),
                    contact_number: String((_r_CONTACTNUMBER = r["CONTACT NUMBER"]) !== null && _r_CONTACTNUMBER !== void 0 ? _r_CONTACTNUMBER : ""),
                    handover_to: (_r_HANDOVERTO = r["HANDOVER TO"]) !== null && _r_HANDOVERTO !== void 0 ? _r_HANDOVERTO : "",
                    handover_date: (_r_HANDOVERDATE = r["HANDOVER DATE"]) !== null && _r_HANDOVERDATE !== void 0 ? _r_HANDOVERDATE : "",
                    create_time: (_r_create_time = r["create_time"]) !== null && _r_create_time !== void 0 ? _r_create_time : ""
                };
            });
            setRecords(mapped);
            setFilteredRecords(mapped);
        } catch (e) {
            setUploadMsg("❌ " + e.message);
        }
    };
    const handleDownloadTemplate = async ()=>{
        if (!token) return alert("Please log in first.");
        try {
            const res = await fetch("".concat(API_BASE, "/template"), {
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
            a.download = "StandardPOS_Template.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed: " + err.message);
        }
    };
    const handleExportExcel = async ()=>{
        if (!token) return alert("Please log in first.");
        try {
            const res = await fetch("".concat(API_BASE, "/download"), {
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
            a.download = "StandardPOS_Export.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Export failed: " + err.message);
        }
    };
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
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
        lineNumber: 246,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
        lineNumber: 247,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "STANDARD BANK POS RECORDS"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center flex-wrap gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold",
                        children: [
                            "Total Terminals: ",
                            records.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExportExcel,
                                className: "bg-white text-black px-6 py-3 rounded-lg border hover:bg-gray-100",
                                children: "⬇️ Export Excel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUploadModal(true),
                                className: "bg-white text-black px-6 py-3 rounded-lg border hover:bg-gray-100",
                                children: "📂 Upload Excel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "MID",
                        value: midFilter,
                        onChange: (e)=>setMidFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "City",
                        value: cityFilter,
                        onChange: (e)=>setCityFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "POS Serial",
                        value: posSerialFilter,
                        onChange: (e)=>setPosSerialFilter(e.target.value),
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMidFilter("");
                            setTidFilter("");
                            setCityFilter("");
                            setPosSerialFilter("");
                        },
                        className: "bg-gray-200 px-4 py-2 rounded hover:bg-gray-300",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded shadow-md p-2 overflow-x-auto",
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
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "📤 Upload Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".xlsx,.xls",
                            onChange: (e)=>{
                                var _e_target_files;
                                return setExcelFile(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);
                            },
                            className: "border rounded w-full p-2 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 mt-3 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 291,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadTemplate,
                                    className: "text-blue-600 underline",
                                    children: "📥 Download Template"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "bg-gray-300 px-4 py-2 rounded",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/standardbank/page.tsx",
        lineNumber: 250,
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