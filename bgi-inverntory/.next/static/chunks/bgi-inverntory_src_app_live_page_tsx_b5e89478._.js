(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bgi-inverntory/src/app/live/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bgi-inverntory/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// =============================
// Neumorphic Card Component
// =============================
function TerminalCard(param) {
    let { title, value, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "   relative   w-full max-w-sm sm:w-80 h-40   rounded-2xl   bg-[#e6e9ef]   flex flex-col items-center justify-center   transition-all duration-300 ease-in-out   shadow-[10px_10px_18px_rgba(0,0,0,0.18),-8px_-8px_16px_#ffffff]   hover:shadow-[6px_6px_14px_rgba(0,0,0,0.22),-6px_-6px_14px_#ffffff]   active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.25),inset_-6px_-6px_12px_#ffffff]   cursor-pointer select-none   focus:outline-none   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-gray-800 text-center mb-2 tracking-wide",
                children: title
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-5xl font-extrabold text-gray-800 tracking-wide",
                children: value !== null && value !== void 0 ? value : "-"
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = TerminalCard;
function HomePage() {
    _s();
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:8000/terminals/counts").then({
                "HomePage.useEffect": (res)=>{
                    setCounts(res.data);
                    setLoading(false);
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": (err)=>{
                    console.error("Error fetching terminal counts:", err);
                    setLoading(false);
                }
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], []);
    const buttons = [
        {
            name: "CityBank Terminals",
            value: counts === null || counts === void 0 ? void 0 : counts.citybank,
            route: "/citybank"
        },
        {
            name: "PBL Terminals",
            value: counts === null || counts === void 0 ? void 0 : counts.pbl,
            route: "/pubalibank"
        },
        {
            name: "IBBL Terminals",
            value: counts === null || counts === void 0 ? void 0 : counts.ibbl,
            route: "/islamibank"
        },
        {
            name: "MTBL Terminals",
            value: counts === null || counts === void 0 ? void 0 : counts.mtb,
            route: "/mtbbank"
        },
        {
            name: "SDBL Terminals",
            value: counts === null || counts === void 0 ? void 0 : counts.sdb,
            route: "/standardbank"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center bg-[#e6e9ef]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full flex flex-col items-center mt-12 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 tracking-wide text-center",
                    children: "BGI LIVE TERMINALS"
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col justify-start items-center w-full p-10",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-lg animate-pulse",
                    children: "Loading terminal data..."
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 max-w-6xl",
                    children: buttons.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TerminalCard, {
                            title: btn.name,
                            value: btn.value,
                            onClick: ()=>router.push(btn.route)
                        }, btn.name, false, {
                            fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full py-8 flex flex-col items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm text-center",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " BGI • All Rights Reserved"
                    ]
                }, void 0, true, {
                    fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bgi-inverntory/src/app/live/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(HomePage, "14XV7konnmDuNhk/hMO7qhVaO0w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bgi$2d$inverntory$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "TerminalCard");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bgi-inverntory_src_app_live_page_tsx_b5e89478._.js.map