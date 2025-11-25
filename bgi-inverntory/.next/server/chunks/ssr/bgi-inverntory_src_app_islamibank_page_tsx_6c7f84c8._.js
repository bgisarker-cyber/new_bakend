module.exports = [
"[project]/bgi-inverntory/src/app/islamibank/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
// ==========================
// Component
// ==========================
const IslamibankPage = ()=>{
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredDevices, setFilteredDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Filters
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationFilter, setLocationFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [posSerialFilter, setPosSerialFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [modelFilter, setModelFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Modals
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form Data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        tid: "",
        mid: "",
        merchant_name: "",
        pos_serial: "",
        model: "",
        city: "",
        location: "",
        merchant_address: "",
        telephone: ""
    });
    // Editing Device
    const [editingDevice, setEditingDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Excel
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadMsg, setUploadMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // ==========================
    // Fetch Devices
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchDevices = async ()=>{
            setLoading(true);
            setError("");
            const token = localStorage.getItem("access_token"); // ✅ Get token
            if (!token) {
                setError("Unauthorized: No access token found. Please login.");
                setLoading(false);
                return;
            }
            try {
                const response = await fetch("http://127.0.0.1:8000/islami/all", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 401) {
                    setError("Unauthorized: Invalid or expired token.");
                    setLoading(false);
                    return;
                }
                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.detail || `HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDevices(data.data);
                setFilteredDevices(data.data);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        fetchDevices();
    }, []);
    // ==========================
    // Filtering Logic
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = devices.filter((dev)=>{
            const matchTid = dev.tid.toLowerCase().includes(tidFilter.toLowerCase());
            const matchCity = dev.city.toLowerCase().includes(cityFilter.toLowerCase());
            const matchLocation = dev.location.toLowerCase().includes(locationFilter.toLowerCase());
            const matchPosSerial = dev.pos_serial.toLowerCase().includes(posSerialFilter.toLowerCase());
            const matchModel = dev.model.toLowerCase().includes(modelFilter.toLowerCase());
            return matchTid && matchCity && matchLocation && matchPosSerial && matchModel;
        });
        setFilteredDevices(filtered);
    }, [
        tidFilter,
        cityFilter,
        locationFilter,
        posSerialFilter,
        modelFilter,
        devices
    ]);
    // ==========================
    // Add / Edit / Delete / Upload
    // ==========================
    const getAuthHeaders = ()=>{
        const token = localStorage.getItem("access_token");
        return token ? {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        } : {};
    };
    const handleAddDevice = async ()=>{
        const emptyField = Object.entries(formData).find(([_, value])=>value.trim() === "");
        if (emptyField) {
            alert(`❌ Please fill the "${emptyField[0].replace("_", " ")}" field before saving.`);
            return;
        }
        try {
            const response = await fetch("http://127.0.0.1:8000/islami/device", {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to add Terminal");
            }
            alert("✅ Terminal added successfully!");
            setShowAddModal(false);
            setFormData({
                tid: "",
                mid: "",
                merchant_name: "",
                pos_serial: "",
                model: "",
                city: "",
                location: "",
                merchant_address: "",
                telephone: ""
            });
            const updated = await fetch("http://127.0.0.1:8000/islami/all", {
                headers: getAuthHeaders()
            });
            const newData = await updated.json();
            setDevices(newData.data);
            setFilteredDevices(newData.data);
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    const handleEditClick = (device)=>{
        setEditingDevice(device);
        setShowAddModal(true);
        setFormData({
            ...device
        });
    };
    const handleUpdateDevice = async ()=>{
        if (!editingDevice) return;
        const emptyField = Object.entries(formData).find(([_, value])=>value.trim() === "");
        if (emptyField) {
            alert(`❌ Please fill the "${emptyField[0].replace("_", " ")}" field before saving.`);
            return;
        }
        try {
            const response = await fetch(`http://127.0.0.1:8000/islami/device/${editingDevice.id}`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to update Terminal");
            }
            alert("✅ Terminal updated successfully!");
            setShowAddModal(false);
            setEditingDevice(null);
            const updated = await fetch("http://127.0.0.1:8000/islami/all", {
                headers: getAuthHeaders()
            });
            const newData = await updated.json();
            setDevices(newData.data);
            setFilteredDevices(newData.data);
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    const handleDelete = async (id, pos_serial)=>{
        const confirm = window.confirm(`Are you sure you want to delete device with POS Serial: ${pos_serial}?`);
        if (!confirm) return;
        try {
            const response = await fetch(`http://127.0.0.1:8000/islami/device/${id}`, {
                method: "DELETE",
                headers: getAuthHeaders()
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Failed to delete Terminal");
            }
            alert("✅ Terminal deleted successfully!");
            setDevices((prev)=>prev.filter((dev)=>dev.id !== id));
            setFilteredDevices((prev)=>prev.filter((dev)=>dev.id !== id));
        } catch (e) {
            alert("❌ " + e.message);
        }
    };
    const handleUploadExcel = async ()=>{
        if (!excelFile) {
            alert("Please select an Excel file first!");
            return;
        }
        const token = localStorage.getItem("access_token");
        const form = new FormData();
        form.append("file", excelFile);
        try {
            const response = await fetch("http://127.0.0.1:8000/islami/upload", {
                method: "POST",
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {},
                body: form
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.detail || "Upload failed");
            setUploadMsg("✅ Upload complete successfully!");
            setExcelFile(null);
            const updated = await fetch("http://127.0.0.1:8000/islami/all", {
                headers: getAuthHeaders()
            });
            const newData = await updated.json();
            setDevices(newData.data);
            setFilteredDevices(newData.data);
        } catch (err) {
            setUploadMsg("❌ " + err.message);
        }
    };
    // ==========================
    // Table Columns
    // ==========================
    const columns = [
        {
            name: "SL",
            selector: (_row, i)=>i + 1,
            width: "60px"
        },
        {
            name: "TID",
            selector: (row)=>row.tid,
            sortable: true
        },
        {
            name: "MID",
            selector: (row)=>row.mid,
            sortable: true
        },
        {
            name: "Merchant Name",
            selector: (row)=>row.merchant_name,
            sortable: true
        },
        {
            name: "POS Serial",
            selector: (row)=>row.pos_serial
        },
        {
            name: "Model",
            selector: (row)=>row.model
        },
        {
            name: "City",
            selector: (row)=>row.city
        },
        {
            name: "Location",
            selector: (row)=>row.location
        },
        {
            name: "Address",
            selector: (row)=>row.merchant_address
        },
        {
            name: "Telephone",
            selector: (row)=>row.telephone
        },
        {
            name: "Created Date",
            selector: (row)=>new Date(row.created_at).toLocaleDateString("en-CA"),
            sortable: true
        },
        {
            name: "Created Time",
            selector: (row)=>new Date(row.created_at).toLocaleTimeString("en-GB"),
            sortable: true
        },
        {
            name: "Actions",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleEditClick(row),
                            className: "bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500",
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDelete(row.id, row.pos_serial),
                            className: "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
        lineNumber: 307,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
        lineNumber: 308,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold mb-4",
            children: "IslamiBank Terminals"
        }, void 0, false, {
            fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
            lineNumber: 312,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/bgi-inverntory/src/app/islamibank/page.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IslamibankPage;
}),
];

//# sourceMappingURL=bgi-inverntory_src_app_islamibank_page_tsx_6c7f84c8._.js.map