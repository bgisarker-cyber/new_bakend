(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/citybank/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
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
const API_BASE = "http://127.0.0.1:8000/city";
// =============================
// Main Component
// =============================
const CityPOSPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [counter_terminal, setCounter_terminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [midFilter, setMidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationFilter, setLocationFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [posSerialFilter, setPosSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CityPOSPage.useEffect": ()=>{
            const t = localStorage.getItem("access_token");
            if (!t) router.push("/login");
            else setToken(t);
        }
    }["CityPOSPage.useEffect"], [
        router
    ]);
    const getAuthHeaders = ()=>({
            Authorization: "Bearer ".concat(token)
        });
    const mapApiData = (data)=>(data || []).map((r)=>{
            var _r_SL, _r_PURPOSE, _r_CONFIGDATE, _r_OLDMID, _r_OLDTID, _r_MID, _r_TID, _r_MERCHANTNAME, _r_DBANAME, _r_ADDRESS, _r_CITY, _r_LOCATION, _r_VENDOR, _r_POSTYPE, _r_POSMODEL, _r_POSSERIAL, _r_OLDPOSSERIAL, _r_OLDSIMSERIAL, _r_SIMSERIALNUMBER, _r_SIMNUMBER, _r_SIMCARRIER, _r_IPADDRESS, _r_PORTNUMBER, _r_REASON, _r_SPECIALFUNCTIONALITY, _r_INSTALLATIONDATE, _r_MERCHANCONTACTPERSON, _r_MERCHANCONTACTNUMBER, _r_HANDOVERTO, _r_HANDOVERDATE, _r_ROLLOUTBY, _r_ROLLOUTDATE, _r_APPRELEASEDATE, _r_QRCODE, _r_QRID, _r_create_time;
            return {
                id: r.id,
                sl: (_r_SL = r["SL"]) !== null && _r_SL !== void 0 ? _r_SL : "",
                purpose: (_r_PURPOSE = r["PURPOSE"]) !== null && _r_PURPOSE !== void 0 ? _r_PURPOSE : "",
                configdate: (_r_CONFIGDATE = r["CONFIGDATE"]) !== null && _r_CONFIGDATE !== void 0 ? _r_CONFIGDATE : "",
                old_mid: (_r_OLDMID = r["OLD MID"]) !== null && _r_OLDMID !== void 0 ? _r_OLDMID : "",
                old_tid: (_r_OLDTID = r["OLD TID"]) !== null && _r_OLDTID !== void 0 ? _r_OLDTID : "",
                mid: (_r_MID = r["MID"]) !== null && _r_MID !== void 0 ? _r_MID : "",
                tid: (_r_TID = r["TID"]) !== null && _r_TID !== void 0 ? _r_TID : "",
                merchant_name: (_r_MERCHANTNAME = r["MERCHANT NAME"]) !== null && _r_MERCHANTNAME !== void 0 ? _r_MERCHANTNAME : "",
                dba_name: (_r_DBANAME = r["DBA NAME"]) !== null && _r_DBANAME !== void 0 ? _r_DBANAME : "",
                address: (_r_ADDRESS = r["ADDRESS"]) !== null && _r_ADDRESS !== void 0 ? _r_ADDRESS : "",
                city: (_r_CITY = r["CITY"]) !== null && _r_CITY !== void 0 ? _r_CITY : "",
                location: (_r_LOCATION = r["LOCATION"]) !== null && _r_LOCATION !== void 0 ? _r_LOCATION : "",
                vendor: (_r_VENDOR = r["VENDOR"]) !== null && _r_VENDOR !== void 0 ? _r_VENDOR : "",
                pos_type: (_r_POSTYPE = r["POS TYPE"]) !== null && _r_POSTYPE !== void 0 ? _r_POSTYPE : "",
                pos_model: (_r_POSMODEL = r["POS MODEL"]) !== null && _r_POSMODEL !== void 0 ? _r_POSMODEL : "",
                pos_serial: (_r_POSSERIAL = r["POS SERIAL"]) !== null && _r_POSSERIAL !== void 0 ? _r_POSSERIAL : "",
                old_pos_serial: (_r_OLDPOSSERIAL = r["OLD POS SERIAL"]) !== null && _r_OLDPOSSERIAL !== void 0 ? _r_OLDPOSSERIAL : "",
                old_sim_serial: (_r_OLDSIMSERIAL = r["OLD SIM SERIAL"]) !== null && _r_OLDSIMSERIAL !== void 0 ? _r_OLDSIMSERIAL : "",
                sim_serial_number: (_r_SIMSERIALNUMBER = r["SIM SERIAL NUMBER"]) !== null && _r_SIMSERIALNUMBER !== void 0 ? _r_SIMSERIALNUMBER : "",
                sim_number: (_r_SIMNUMBER = r["SIM NUMBER"]) !== null && _r_SIMNUMBER !== void 0 ? _r_SIMNUMBER : "",
                sim_carrier: (_r_SIMCARRIER = r["SIM CARRIER"]) !== null && _r_SIMCARRIER !== void 0 ? _r_SIMCARRIER : "",
                ip_address: (_r_IPADDRESS = r["IP ADDRESS"]) !== null && _r_IPADDRESS !== void 0 ? _r_IPADDRESS : "",
                port_number: (_r_PORTNUMBER = r["PORT NUMBER"]) !== null && _r_PORTNUMBER !== void 0 ? _r_PORTNUMBER : "",
                reason: (_r_REASON = r["REASON"]) !== null && _r_REASON !== void 0 ? _r_REASON : "",
                special_functionality: (_r_SPECIALFUNCTIONALITY = r["SPECIAL FUNCTIONALITY"]) !== null && _r_SPECIALFUNCTIONALITY !== void 0 ? _r_SPECIALFUNCTIONALITY : "",
                installation_date: (_r_INSTALLATIONDATE = r["INSTALLATION DATE"]) !== null && _r_INSTALLATIONDATE !== void 0 ? _r_INSTALLATIONDATE : "",
                merchant_contact_person: (_r_MERCHANCONTACTPERSON = r["MERCHAN CONTACT PERSON"]) !== null && _r_MERCHANCONTACTPERSON !== void 0 ? _r_MERCHANCONTACTPERSON : "",
                merchant_contact_number: (_r_MERCHANCONTACTNUMBER = r["MERCHAN CONTACT NUMBER"]) !== null && _r_MERCHANCONTACTNUMBER !== void 0 ? _r_MERCHANCONTACTNUMBER : "",
                handover_to: (_r_HANDOVERTO = r["HANDOVER TO"]) !== null && _r_HANDOVERTO !== void 0 ? _r_HANDOVERTO : "",
                handover_date: (_r_HANDOVERDATE = r["HANDOVER DATE"]) !== null && _r_HANDOVERDATE !== void 0 ? _r_HANDOVERDATE : "",
                roll_out_by: (_r_ROLLOUTBY = r["ROLL OUT BY"]) !== null && _r_ROLLOUTBY !== void 0 ? _r_ROLLOUTBY : "",
                roll_out_date: (_r_ROLLOUTDATE = r["ROLL OUT DATE"]) !== null && _r_ROLLOUTDATE !== void 0 ? _r_ROLLOUTDATE : "",
                app_release_date: (_r_APPRELEASEDATE = r["APP RELEASE DATE"]) !== null && _r_APPRELEASEDATE !== void 0 ? _r_APPRELEASEDATE : "",
                qr_code: (_r_QRCODE = r["QR CODE"]) !== null && _r_QRCODE !== void 0 ? _r_QRCODE : "",
                qr_id: (_r_QRID = r["QR ID"]) !== null && _r_QRID !== void 0 ? _r_QRID : "",
                create_time: (_r_create_time = r["create_time"]) !== null && _r_create_time !== void 0 ? _r_create_time : ""
            };
        });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CityPOSPage.useEffect": ()=>{
            if (!token) return;
            const fetchData = {
                "CityPOSPage.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const res = await fetch("".concat(API_BASE, "/all"), {
                            headers: getAuthHeaders()
                        });
                        if (res.status === 401) throw new Error("Unauthorized");
                        if (!res.ok) throw new Error("HTTP ".concat(res.status));
                        const json = await res.json();
                        const mapped = mapApiData(json.data || json);
                        setCounter_terminal(mapped.length);
                        setRecords(mapped);
                        setFilteredRecords(mapped);
                    } catch (e) {
                        setError(e.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["CityPOSPage.useEffect.fetchData"];
            fetchData();
        }
    }["CityPOSPage.useEffect"], [
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CityPOSPage.useEffect": ()=>{
            const filtered = records.filter({
                "CityPOSPage.useEffect.filtered": (r)=>r.mid.toLowerCase().includes(midFilter.toLowerCase()) && r.tid.toLowerCase().includes(tidFilter.toLowerCase()) && r.city.toLowerCase().includes(cityFilter.toLowerCase()) && r.location.toLowerCase().includes(locationFilter.toLowerCase()) && r.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase())
            }["CityPOSPage.useEffect.filtered"]);
            setFilteredRecords(filtered);
        }
    }["CityPOSPage.useEffect"], [
        midFilter,
        tidFilter,
        cityFilter,
        locationFilter,
        posSerialFilter,
        records
    ]);
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
            setUploadMsg("✅ Upload completed!");
            setExcelFile(null);
            // refresh
            const updated = await fetch("".concat(API_BASE, "/all"), {
                headers: getAuthHeaders()
            });
            const json = await updated.json();
            const mapped = mapApiData(json.data || json);
            setRecords(mapped);
            setFilteredRecords(mapped);
            setCounter_terminal(mapped.length);
        } catch (e) {
            setUploadMsg("❌ " + e.message);
        }
    };
    const downloadBlob = async (endpoint, filename)=>{
        if (!token) return alert("Authentication required!");
        try {
            const res = await fetch("".concat(API_BASE).concat(endpoint), {
                headers: getAuthHeaders()
            });
            if (!res.ok) throw new Error("HTTP ".concat(res.status));
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed: " + err.message);
        }
    };
    const handleDownloadData = ()=>downloadBlob("/download", "CityPOS_Export.xlsx");
    const handleDownloadTemplate = ()=>downloadBlob("/template", "CityPOS_Template.xlsx");
    const columns = [
        {
            name: "SL",
            selector: (r)=>r.sl,
            width: "70px"
        },
        {
            name: "Config Date",
            selector: (r)=>r.configdate,
            width: "100px"
        },
        {
            name: "TID",
            selector: (r)=>r.tid
        },
        {
            name: "MID",
            selector: (r)=>r.mid,
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "Merchant Name",
            selector: (r)=>r.merchant_name,
            wrap: true,
            style: {
                minWidth: "200px"
            }
        },
        {
            name: "DBA Name",
            selector: (r)=>r.dba_name,
            wrap: true,
            style: {
                minWidth: "200px"
            }
        },
        {
            name: "Address",
            selector: (r)=>r.address,
            wrap: true,
            style: {
                minWidth: "300px"
            }
        },
        {
            name: "City",
            selector: (r)=>r.city,
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "Location",
            selector: (r)=>r.location,
            style: {
                minWidth: "180px"
            }
        },
        {
            name: "Vendor",
            selector: (r)=>r.vendor
        },
        {
            name: "POS Type",
            selector: (r)=>r.pos_type
        },
        {
            name: "POS Model",
            selector: (r)=>r.pos_model,
            style: {
                minWidth: "110px"
            }
        },
        {
            name: "POS Serial",
            selector: (r)=>r.pos_serial,
            style: {
                minWidth: "120px"
            }
        },
        {
            name: "SIM Serial",
            selector: (r)=>r.sim_serial_number,
            style: {
                minWidth: "190px"
            }
        },
        {
            name: "SIM Carrier",
            selector: (r)=>r.sim_carrier
        },
        {
            name: "IP Address",
            selector: (r)=>r.ip_address,
            width: "120px"
        },
        {
            name: "Port Number",
            selector: (r)=>r.port_number
        },
        {
            name: "Installation Date",
            selector: (r)=>r.installation_date,
            width: "150px"
        },
        {
            name: "Handover To",
            selector: (r)=>r.handover_to,
            width: "120px"
        },
        {
            name: "Handover Date",
            selector: (r)=>r.handover_date,
            width: "150px"
        },
        {
            name: "Roll Out By",
            selector: (r)=>r.roll_out_by
        },
        {
            name: "Roll Out Date",
            selector: (r)=>r.roll_out_date
        },
        {
            name: "App Release Date",
            selector: (r)=>r.app_release_date
        },
        {
            name: "Created",
            selector: (r)=>r.create_time,
            width: "180px"
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-20",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
        lineNumber: 236,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-center mt-20",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
        lineNumber: 237,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 bg-[#e6e9ef] flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "CBL LIVE TERMINALS"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-gray-700 text-center",
                children: [
                    "Total Terminals: ",
                    counter_terminal
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row w-full max-w-7xl justify-between items-center mb-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start w-full md:w-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDownloadData,
                            className: "px-6 py-3 rounded-2xl bg-[#e6e9ef]   shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]   hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]   transition-all font-semibold text-gray-800",
                            children: "⬇️ Export Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end w-full md:w-auto gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUploadModal(true),
                                className: "px-6 py-3 rounded-2xl bg-[#e6e9ef]   shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]   hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]   transition-all font-semibold text-gray-800",
                                children: "📂 Upload Excel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/citybank/city-replace"),
                                className: "px-6 py-3 rounded-2xl bg-[#e6e9ef]   shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]   hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]   transition-all font-semibold text-gray-800",
                                children: "🔵 Replace"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-6 gap-4 mb-6 w-full max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "MID",
                        value: midFilter,
                        onChange: (e)=>setMidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "City",
                        value: cityFilter,
                        onChange: (e)=>setCityFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Location",
                        value: locationFilter,
                        onChange: (e)=>setLocationFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "POS Serial",
                        value: posSerialFilter,
                        onChange: (e)=>setPosSerialFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMidFilter("");
                            setTidFilter("");
                            setCityFilter("");
                            setLocationFilter("");
                            setPosSerialFilter("");
                        },
                        className: "px-4 py-2 rounded-2xl bg-[#e6e9ef] shadow-[6px_6px_12px_rgba(0,0,0,0.18),-4px_-4px_#ffffff] hover:shadow-[3px_3px_10px_rgba(0,0,0,0.22),-3px_-3px_#ffffff] font-semibold",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                lineNumber: 287,
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
                    fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-1/2 transform -translate-x-1/2 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Upload via Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".xlsx,.xls",
                            onChange: (e)=>{
                                var _e_target_files;
                                return setExcelFile(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);
                            },
                            className: "border rounded px-3 py-2 mb-3 w-full"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "w-full px-4 py-2 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700 mb-2 transition",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                            lineNumber: 316,
                            columnNumber: 27
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadTemplate,
                                    className: "text-blue-600 underline",
                                    children: "📥 Download Template"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-400 transition",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                    lineNumber: 312,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CityPOSPage, "JKQNd9UJT2E0aDhj9B3JNVyU8zs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CityPOSPage;
const __TURBOPACK__default__export__ = CityPOSPage;
var _c;
__turbopack_context__.k.register(_c, "CityPOSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_citybank_page_tsx_5a96595b._.js.map