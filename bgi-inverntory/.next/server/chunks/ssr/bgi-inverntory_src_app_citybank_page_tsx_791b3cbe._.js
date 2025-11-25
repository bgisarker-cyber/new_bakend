module.exports = [
"[project]/bgi-inverntory/src/app/citybank/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/* ----------------------------- Helper: Log User Action ----------------------------- */ const logUserAction = async (action, details = "")=>{
    try {
        await fetch("http://127.0.0.1:8000/user-log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action,
                details
            })
        });
    } catch (e) {
        console.error("User log failed:", e);
    }
};
/* ----------------------------- Main Component ----------------------------- */ const CityPOSPage = ()=>{
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [counter_terminal, setCounter_terminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [midFilter, setMidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [posSerialFilter, setPosSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationFilter, setLocationFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ----------------------------- Fetch Data ----------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch("http://127.0.0.1:8000/city/all");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                setCounter_terminal(json.data.length);
                const mapped = (json.data || json).map((r)=>({
                        id: r.id,
                        sl: r["SL"] ?? "",
                        purpose: r["PURPOSE"] ?? "",
                        configdate: r["CONFIGDATE"] ?? "",
                        old_mid: r["OLD MID"] ?? "",
                        old_tid: r["OLD TID"] ?? "",
                        mid: r["MID"] ?? "",
                        tid: r["TID"] ?? "",
                        merchant_name: r["MERCHANT NAME"] ?? "",
                        dba_name: r["DBA NAME"] ?? "",
                        address: r["ADDRESS"] ?? "",
                        city: r["CITY"] ?? "",
                        location: r["LOCATION"] ?? "",
                        vendor: r["VENDOR"] ?? "",
                        pos_type: r["POS TYPE"] ?? "",
                        pos_model: r["POS MODEL"] ?? "",
                        pos_serial: r["POS SERIAL"] ?? "",
                        old_pos_serial: r["OLD POS SERIAL"] ?? "",
                        old_sim_serial: r["OLD SIM SERIAL"] ?? "",
                        sim_serial_number: r["SIM SERIAL NUMBER"] ?? "",
                        sim_number: r["SIM NUMBER"] ?? "",
                        sim_carrier: r["SIM CARRIER"] ?? "",
                        ip_address: r["IP ADDRESS"] ?? "",
                        port_number: r["PORT NUMBER"] ?? "",
                        reason: r["REASON"] ?? "",
                        special_functionality: r["SPECIAL FUNCTIONALITY"] ?? "",
                        installation_date: r["INSTALLATION DATE"] ?? "",
                        merchant_contact_person: r["MERCHAN CONTACT PERSON"] ?? "",
                        merchant_contact_number: r["MERCHAN CONTACT NUMBER"] ?? "",
                        handover_to: r["HANDOVER TO"] ?? "",
                        handover_date: r["HANDOVER DATE"] ?? "",
                        roll_out_by: r["ROLL OUT BY"] ?? "",
                        roll_out_date: r["ROLL OUT DATE"] ?? "",
                        app_release_date: r["APP RELEASE DATE"] ?? "",
                        qr_code: r["QR CODE"] ?? "",
                        qr_id: r["QR ID"] ?? "",
                        create_time: r["create_time"] ?? ""
                    }));
                setRecords(mapped);
                setFilteredRecords(mapped);
                // Log view
                logUserAction("View All Terminals", `Fetched ${mapped.length} records`);
            } catch (e) {
                setError(e.message);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    /* ----------------------------- Client-side filtering ----------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = records.filter((r)=>r.mid.toLowerCase().includes(midFilter.toLowerCase()) && r.tid.toLowerCase().includes(tidFilter.toLowerCase()) && r.city.toLowerCase().includes(cityFilter.toLowerCase()) && r.location.toLowerCase().includes(locationFilter.toLowerCase()) && r.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase()));
        setFilteredRecords(filtered);
        // Log filter action
        const filters = `MID:${midFilter}, TID:${tidFilter}, City:${cityFilter}, Location:${locationFilter}, POS:${posSerialFilter}`;
        logUserAction("Filter Records", filters);
    }, [
        midFilter,
        tidFilter,
        cityFilter,
        posSerialFilter,
        locationFilter,
        records
    ]);
    /* ----------------------------- Upload Excel ----------------------------- */ const handleUploadExcel = async ()=>{
        if (!excelFile) return alert("Please select an Excel file!");
        const form = new FormData();
        form.append("file", excelFile);
        try {
            const res = await fetch("http://127.0.0.1:8000/city/upload", {
                method: "POST",
                body: form
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.detail || "Upload failed");
            setUploadMsg("✅ Upload completed!");
            setExcelFile(null);
            // Log upload
            logUserAction("Upload Excel", excelFile.name);
            // Refresh data
            const refreshed = await fetch("http://127.0.0.1:8000/city/all");
            const json = await refreshed.json();
            const mapped = (json.data || json).map((r)=>({
                    id: r.id,
                    sl: r["SL"] ?? "",
                    purpose: r["PURPOSE"] ?? "",
                    configdate: r["CONFIGDATE"] ?? "",
                    old_mid: r["OLD MID"] ?? "",
                    old_tid: r["OLD TID"] ?? "",
                    mid: r["MID"] ?? "",
                    tid: r["TID"] ?? "",
                    merchant_name: r["MERCHANT NAME"] ?? "",
                    dba_name: r["DBA NAME"] ?? "",
                    address: r["ADDRESS"] ?? "",
                    city: r["CITY"] ?? "",
                    location: r["LOCATION"] ?? "",
                    vendor: r["VENDOR"] ?? "",
                    pos_type: r["POS TYPE"] ?? "",
                    pos_model: r["POS MODEL"] ?? "",
                    pos_serial: r["POS SERIAL"] ?? "",
                    old_pos_serial: r["OLD POS SERIAL"] ?? "",
                    old_sim_serial: r["OLD SIM SERIAL"] ?? "",
                    sim_serial_number: r["SIM SERIAL NUMBER"] ?? "",
                    sim_number: r["SIM NUMBER"] ?? "",
                    sim_carrier: r["SIM CARRIER"] ?? "",
                    ip_address: r["IP ADDRESS"] ?? "",
                    port_number: r["PORT NUMBER"] ?? "",
                    reason: r["REASON"] ?? "",
                    special_functionality: r["SPECIAL FUNCTIONALITY"] ?? "",
                    installation_date: r["INSTALLATION DATE"] ?? "",
                    merchant_contact_person: r["MERCHAN CONTACT PERSON"] ?? "",
                    merchant_contact_number: r["MERCHAN CONTACT NUMBER"] ?? "",
                    handover_to: r["HANDOVER TO"] ?? "",
                    handover_date: r["HANDOVER DATE"] ?? "",
                    roll_out_by: r["ROLL OUT BY"] ?? "",
                    roll_out_date: r["ROLL OUT DATE"] ?? "",
                    app_release_date: r["APP RELEASE DATE"] ?? "",
                    qr_code: r["QR CODE"] ?? "",
                    qr_id: r["QR ID"] ?? "",
                    create_time: r["create_time"] ?? ""
                }));
            setRecords(mapped);
            setFilteredRecords(mapped);
        } catch (e) {
            setUploadMsg("❌ " + e.message);
        }
    };
    /* ----------------------------- Download helpers ----------------------------- */ const handleDownloadData = ()=>{
        window.open("http://127.0.0.1:8000/city/download", "_blank");
        logUserAction("Download Excel");
    };
    const handleDownloadTemplate = ()=>{
        window.open("http://127.0.0.1:8000/city/template", "_blank");
        logUserAction("Download Template Excel");
    };
    /* ----------------------------- Table Columns ----------------------------- */ const columns = [
        {
            name: "SL",
            selector: (r)=>r.sl,
            width: "70px"
        },
        {
            name: "TID",
            selector: (r)=>r.tid
        },
        {
            name: "MID",
            selector: (r)=>r.mid,
            minWidth: "150px"
        },
        {
            name: "Merchant Name",
            selector: (r)=>r.merchant_name,
            wrap: true,
            minWidth: "200px"
        },
        {
            name: "DBA Name",
            selector: (r)=>r.dba_name,
            wrap: true,
            minWidth: "200px"
        },
        {
            name: "Address",
            selector: (r)=>r.address,
            wrap: true,
            minWidth: "250px"
        },
        {
            name: "City",
            selector: (r)=>r.city
        },
        {
            name: "Location",
            selector: (r)=>r.location
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
            minWidth: "110px"
        },
        {
            name: "POS Serial",
            selector: (r)=>r.pos_serial,
            minWidth: "120px"
        },
        {
            name: "SIM Serial",
            selector: (r)=>r.sim_serial_number,
            minWidth: "190px"
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
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
        lineNumber: 264,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
        lineNumber: 265,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative"
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/page.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CityPOSPage;
}),
];

//# sourceMappingURL=bgi-inverntory_src_app_citybank_page_tsx_791b3cbe._.js.map