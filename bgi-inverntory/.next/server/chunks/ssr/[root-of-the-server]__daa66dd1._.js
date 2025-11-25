module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/e-receipt/src/app/receipts/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/e-receipt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/e-receipt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/e-receipt/node_modules/react-data-table-component/dist/index.es.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const TransactionsPage = ()=>{
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredTransactions, setFilteredTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Filter states
    const [merchantFilter, setMerchantFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tidFilter, setTidFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // ==========================
    // Fetch Transactions from API
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTransactions = async ()=>{
            try {
                const response = await fetch("http://127.0.0.1:8000/transactions"); // Replace with your endpoint
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setTransactions(data.data);
                setFilteredTransactions(data.data);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        fetchTransactions();
    }, []);
    // ==========================
    // Filter Logic
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = transactions.filter((txn)=>{
            const matchMerchant = txn.merchant_name.toLowerCase().includes(merchantFilter.toLowerCase());
            const matchTid = txn.tid.toString().includes(tidFilter);
            const matchDate = txn.txn_date.includes(dateFilter);
            return matchMerchant && matchTid && matchDate;
        });
        setFilteredTransactions(filtered);
    }, [
        merchantFilter,
        tidFilter,
        dateFilter,
        transactions
    ]);
    // ==========================
    // Table Columns
    // ==========================
    const columns = [
        {
            name: "ID",
            selector: (row)=>row.id,
            sortable: true,
            width: "60px"
        },
        {
            name: "Merchant",
            selector: (row)=>row.merchant_name,
            sortable: true
        },
        {
            name: "Address",
            selector: (row)=>row.merchant_address
        },
        {
            name: "Date",
            selector: (row)=>row.txn_date,
            sortable: true
        },
        {
            name: "Time",
            selector: (row)=>row.txn_time
        },
        {
            name: "TID",
            selector: (row)=>row.tid.toString(),
            sortable: true
        },
        {
            name: "Card Number",
            selector: (row)=>row.pan_number
        },
        {
            name: "Amount",
            selector: (row)=>row.amount.toFixed(2),
            sortable: true
        },
        {
            name: "Email",
            selector: (row)=>row.email
        },
        {
            name: "Mobile",
            selector: (row)=>row.mobile.toString()
        }
    ];
    // ==========================
    // Compact Table Styles
    // ==========================
    const customStyles = {
        rows: {
            style: {
                minHeight: "32px",
                paddingTop: "2px",
                paddingBottom: "2px"
            }
        },
        headCells: {
            style: {
                padding: "8px",
                fontWeight: "bold",
                backgroundColor: "#f3f4f6"
            }
        },
        cells: {
            style: {
                padding: "6px 8px"
            }
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading transactions..."
    }, void 0, false, {
        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
        lineNumber: 122,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
        lineNumber: 123,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    // ==========================
    // UI Rendering
    // ==========================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "E-Voucher"
            }, void 0, false, {
                fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by Merchant",
                        value: merchantFilter,
                        onChange: (e)=>setMerchantFilter(e.target.value),
                        className: "border border-gray-300 rounded px-3 py-2 w-full"
                    }, void 0, false, {
                        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Filter by TID",
                        value: tidFilter,
                        onChange: (e)=>setTidFilter(e.target.value),
                        className: "border border-gray-300 rounded px-3 py-2 w-full"
                    }, void 0, false, {
                        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        placeholder: "Filter by Date",
                        value: dateFilter,
                        onChange: (e)=>setDateFilter(e.target.value),
                        className: "border border-gray-300 rounded px-3 py-2 w-full"
                    }, void 0, false, {
                        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMerchantFilter("");
                            setTidFilter("");
                            setDateFilter("");
                        },
                        className: "bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 font-medium",
                        children: "Clear Filters"
                    }, void 0, false, {
                        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$e$2d$receipt$2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    data: filteredTransactions,
                    pagination: true,
                    highlightOnHover: true,
                    striped: true,
                    dense: true,
                    persistTableHead: true,
                    customStyles: customStyles
                }, void 0, false, {
                    fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/e-receipt/src/app/receipts/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TransactionsPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__daa66dd1._.js.map