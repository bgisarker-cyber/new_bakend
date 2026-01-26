module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityReplacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/react-data-table-component/dist/index.es.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const API_BASE = "http://127.0.0.1:8000/city_replace";
function CityReplacePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRecords, setFilteredRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [midFilter, setMidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationFilter, setLocationFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [posSerialFilter, setPosSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingRow, setEditingRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [counterTerminal, setCounterTerminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = localStorage.getItem("access_token");
        if (!t) router.push("/login");
        else setToken(t);
    }, [
        router
    ]);
    const fetchRecords = async ()=>{
        try {
            setLoading(true);
            if (!token) throw new Error("Please log in.");
            const res = await fetch(`${API_BASE}/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            const data = json.data || json;
            setRecords(data);
            setFilteredRecords(data);
            setCounterTerminal(data.length);
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (token) fetchRecords();
    }, [
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = records.filter((r)=>{
            const mid = String(r.MID ?? "").toLowerCase();
            const tid = String(r.TID ?? "").toLowerCase();
            const city = String(r.CITY ?? "").toLowerCase();
            const loc = String(r.LOCATION ?? "").toLowerCase();
            const pos = String(r["POS SERIAL"] ?? "").toLowerCase();
            return mid.includes(midFilter.toLowerCase()) && tid.includes(tidFilter.toLowerCase()) && city.includes(cityFilter.toLowerCase()) && loc.includes(locationFilter.toLowerCase()) && pos.includes(posSerialFilter.toLowerCase());
        });
        setFilteredRecords(filtered);
    }, [
        midFilter,
        tidFilter,
        cityFilter,
        locationFilter,
        posSerialFilter,
        records
    ]);
    const handleDelete = async (sl)=>{
        if (!confirm("Delete this record?")) return;
        try {
            const res = await fetch(`${API_BASE}/delete/${sl}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error("Delete failed");
            await fetchRecords();
            alert("🗑️ Record deleted.");
        } catch (err) {
            alert(err.message);
        }
    };
    const handleEditSave = async ()=>{
        if (!editingRow) return;
        try {
            const res = await fetch(`${API_BASE}/edit/${editingRow.SL}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error("Update failed");
            await fetchRecords();
            setEditingRow(null);
            alert("✅ Updated.");
        } catch (err) {
            alert("❌ " + err.message);
        }
    };
    const handleUploadExcel = async ()=>{
        if (!excelFile) return alert("Select a file!");
        try {
            const form = new FormData();
            form.append("file", excelFile);
            const res = await fetch(`${API_BASE}/upload`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: form
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.detail || "Upload failed");
            setUploadMsg("✅ Upload successful!");
            await fetchRecords();
            setShowUploadModal(false);
        } catch (e) {
            setUploadMsg("❌ " + e.message);
        }
    };
    const handleDownloadTemplate = async ()=>{
        try {
            const res = await fetch(`${API_BASE}/template`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "City_Replace_Template.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed: " + err.message);
        }
    };
    const handleExportExcel = async ()=>{
        try {
            const res = await fetch(`${API_BASE}/download`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "City_Replace_Data.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Export failed: " + err.message);
        }
    };
    const columns = [
        {
            name: "SL",
            selector: (r)=>r.SL,
            width: "70px"
        },
        {
            name: "Config Date",
            selector: (r)=>r.CONFIGDATE,
            style: {
                width: "120px"
            }
        },
        {
            name: "TID",
            selector: (r)=>r.TID,
            style: {
                minWidth: "100px"
            }
        },
        {
            name: "MID",
            selector: (r)=>r.MID,
            style: {
                minWidth: "140px"
            }
        },
        {
            name: "Merchant Name",
            selector: (r)=>r["MERCHANT NAME"],
            style: {
                minWidth: "200px"
            },
            wrap: true
        },
        {
            name: "City",
            selector: (r)=>r.CITY,
            style: {
                width: "140px"
            }
        },
        {
            name: "Location",
            selector: (r)=>r.LOCATION,
            style: {
                width: "140px"
            }
        },
        {
            name: "POS Serial",
            selector: (r)=>r["POS SERIAL"],
            style: {
                minWidth: "150px"
            }
        },
        {
            name: "Actions",
            cell: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setEditingRow(r);
                                setFormData(r);
                            },
                            className: "bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500",
                            children: "✏️"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDelete(r.SL),
                            className: "bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500",
                            children: "🗑️"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-20",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
        lineNumber: 243,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500 text-center mt-20",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
        lineNumber: 244,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#e6e9ef] p-6 flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-800 mb-2 text-center",
                        children: "CBL Replace Records"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-700 text-center",
                        children: [
                            "Total Terminals: ",
                            counterTerminal
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mb-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExportExcel,
                            className: "px-6 py-3 rounded-2xl bg-[#e6e9ef]   shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]   hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]   transition-all font-semibold text-gray-800",
                            children: "⬇️ Export Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/citybank"),
                                className: "px-6 py-3 rounded-2xl bg-[#e6e9ef]   shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]   hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]   transition-all font-semibold text-gray-800",
                                children: "🔵 Live"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUploadModal(true),
                                className: "px-6 py-3 rounded-2xl bg-[#e6e9ef]   shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]   hover:shadow-[4px_4px_12px_rgba(0,0,0,0.22),-4px_-4px_#ffffff]   transition-all font-semibold text-gray-800",
                                children: "📂 Upload Excel"
                            }, void 0, false, {
                                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 max-w-7xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "MID",
                        value: midFilter,
                        onChange: (e)=>setMidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "City",
                        value: cityFilter,
                        onChange: (e)=>setCityFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Location",
                        value: locationFilter,
                        onChange: (e)=>setLocationFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "POS Serial",
                        value: posSerialFilter,
                        onChange: (e)=>setPosSerialFilter(e.target.value),
                        className: "px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMidFilter("");
                            setTidFilter("");
                            setCityFilter("");
                            setLocationFilter("");
                            setPosSerialFilter("");
                        },
                        className: "px-4 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-md p-2 overflow-x-auto w-full max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    data: filteredRecords,
                    pagination: true,
                    striped: true,
                    highlightOnHover: true,
                    dense: true,
                    persistTableHead: true
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            editingRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg w-full max-w-lg max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-3",
                            children: [
                                "✏️ Edit Record SL ",
                                editingRow.SL
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this),
                        Object.keys(editingRow).map((key)=>key === "SL" || key === "created_at" || key === "updated_at" ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold",
                                        children: key
                                    }, void 0, false, {
                                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData[key] || "",
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                [key]: e.target.value
                                            }),
                                        className: "border w-full p-2 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleEditSave,
                                    className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingRow(null),
                                    className: "bg-gray-300 px-4 py-2 rounded",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, this),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#e6e9ef] p-6 rounded-2xl w-full max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.18),-6px_-6px_#ffffff]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4 text-center",
                            children: "📤 Upload Excel"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".xlsx,.xls",
                            onChange: (e)=>setExcelFile(e.target.files?.[0] || null),
                            className: "border rounded-2xl w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadExcel,
                            className: "bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 w-full font-semibold mb-2",
                            children: "Upload"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this),
                        uploadMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-2 mt-2 rounded text-sm",
                            children: uploadMsg
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 370,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadTemplate,
                                    className: "text-blue-600 underline font-semibold",
                                    children: "📥 Download Template"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "bg-gray-300 px-4 py-2 rounded-2xl font-semibold",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                    lineNumber: 356,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
                lineNumber: 355,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/citybank/city-replace/page.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b550e84c._.js.map