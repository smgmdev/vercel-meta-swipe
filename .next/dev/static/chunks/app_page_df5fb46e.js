(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:csv&gid=1786404372";
const USDT_WALLET = "TVbHjvymscTb8JDk7jHXqHZJGFMWnGEU3o";
function Page() {
    _s();
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("USD");
    const [showCurrencyMenu, setShowCurrencyMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usdToRub, setUsdToRub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const convertPrice = (p)=>currency === "USD" ? p : Math.round(p * usdToRub);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Currency rate fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            async function fetchRate() {
                try {
                    const r = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTRUB");
                    const j = await r.json();
                    if (j.price) setUsdToRub(Number(j.price));
                } catch (e) {
                    console.error(e);
                }
            }
            fetchRate();
        }
    }["Page.useEffect"], [
        currency
    ]);
    // Load products from Google Sheet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            async function loadSheet() {
                console.log("Fetching sheet:", SHEET_URL);
                try {
                    const res = await fetch(SHEET_URL);
                    console.log("Sheet response status:", res.status);
                    const text = await res.text();
                    // Improved row parsing to handle CRLF
                    const cleaned = text.replace(/\r/g, "");
                    const rows = cleaned.split("\n").map({
                        "Page.useEffect.loadSheet.rows": (r)=>{
                            const m = r.match(/(\".*?\"|[^\",]+)(?=,|$)/g);
                            return m || [];
                        }
                    }["Page.useEffect.loadSheet.rows"]);
                    console.log("Parsed rows:", rows.slice(0, 5));
                    console.log("Headers:", rows[0]);
                    console.log("First rows:", rows.slice(1, 5));
                    const headers = rows.shift();
                    const parsed = rows.map({
                        "Page.useEffect.loadSheet.parsed": (row)=>{
                            const obj = {};
                            headers.forEach({
                                "Page.useEffect.loadSheet.parsed": (h, i)=>{
                                    const normalize = {
                                        "Page.useEffect.loadSheet.parsed.normalize": (s)=>s.replace(/^"(.*)"$/, "$1").trim()
                                    }["Page.useEffect.loadSheet.parsed.normalize"];
                                    const key = normalize(h).toLowerCase();
                                    obj[key] = row[i] ? normalize(row[i]) : "";
                                }
                            }["Page.useEffect.loadSheet.parsed"]);
                            return {
                                id: obj.id,
                                title: obj.title,
                                category: obj.category,
                                price: Number(obj.price || 0),
                                image: obj.image,
                                description: obj.description,
                                material: obj.material,
                                size: obj.size,
                                images: obj.images ? obj.images.split("|").map({
                                    "Page.useEffect.loadSheet.parsed": (s)=>s.trim()
                                }["Page.useEffect.loadSheet.parsed"]) : [
                                    obj.image
                                ]
                            };
                        }
                    }["Page.useEffect.loadSheet.parsed"]);
                    setProducts(parsed.filter({
                        "Page.useEffect.loadSheet": (p)=>p.title
                    }["Page.useEffect.loadSheet"]));
                } catch (e) {
                    console.error("Sheet load error", e);
                } finally{
                    setLoading(false);
                }
            }
            loadSheet();
        }
    }["Page.useEffect"], []);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [prevIndex, setPrevIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [popupProduct, setPopupProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [carouselIndex, setCarouselIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [checkoutStep, setCheckoutStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0: product, 1: details, 2: payment, 3: review
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("USDT");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const product = products[index] || {};
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset loader whenever product or image changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setImageLoaded(false);
        }
    }["Page.useEffect"], [
        index,
        carouselIndex
    ]);
    const [zoomImage, setZoomImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSwipe = (direction)=>{
        if (direction === "left") {
            // Next product
            if (index < products.length - 1) {
                setPrevIndex(index);
                setIndex(index + 1);
            } else {
                setPrevIndex(index);
                setIndex(products.length > 0 ? 0 : 0);
            }
        } else {
            // Right = Buy -> open popup
            setPopupProduct(product);
            setCarouselIndex(0);
            setCheckoutStep(0);
            setPaymentMethod("USDT");
        }
    };
    const handleDragEnd = (_, info)=>{
        const swipeThreshold = 120;
        if (info.offset.x > swipeThreshold || info.velocity.x > 500) {
            handleSwipe("right");
        } else if (info.offset.x < -swipeThreshold || info.velocity.x < -500) {
            handleSwipe("left");
        }
    };
    const handleBack = ()=>{
        if (prevIndex === null) return;
        setIndex(prevIndex);
        setPrevIndex(null);
    };
    const handleImageDragEnd = (_, info)=>{
        if (!popupProduct) return;
        const images = popupProduct.images || [
            popupProduct.image
        ];
        const threshold = 60;
        if (info.offset.x < -threshold) {
            setCarouselIndex((prev)=>(prev + 1) % images.length);
        } else if (info.offset.x > threshold) {
            setCarouselIndex((prev)=>(prev - 1 + images.length) % images.length);
        }
    };
    const handleCopyWallet = async ()=>{
        try {
            await navigator.clipboard.writeText(USDT_WALLET);
            alert("Wallet address copied");
        } catch (e) {
            console.error(e);
        }
    };
    // Tinkoff card payment init
    async function handleTinkoffPay(product) {
        try {
            const response = await fetch("/api/tinkoff-init", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: Number(product.price ?? 0),
                    description: product.title,
                    orderId: "order-" + Date.now(),
                    successUrl: window.location.origin + "/success",
                    failUrl: window.location.origin + "/fail"
                })
            });
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
                return true;
            } else {
                alert("Tinkoff error: " + JSON.stringify(data));
                return false;
            }
        } catch (err) {
            alert("Network error: " + err.message);
            return false;
        }
    }
    const handlePlaceOrder = ()=>{
        if (!popupProduct) return;
        console.log("ORDER", {
            product: popupProduct,
            name,
            email,
            phone,
            address,
            paymentMethod
        });
        alert(`Order placed for ${popupProduct.title}. We will contact you within 6–12 hours.`);
        setPopupProduct(null);
    };
    // App loader
    const [appLoading, setAppLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const t = setTimeout({
                "Page.useEffect.t": ()=>setAppLoading(false)
            }["Page.useEffect.t"], 1200);
            return ({
                "Page.useEffect": ()=>clearTimeout(t)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    if (appLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 z-[9999]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
                    className: "w-20 h-20 rounded-full shadow-md animate-[fadeIn_0.6s_ease]"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-48 h-1.5 bg-black/10 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: "-100%"
                        },
                        animate: {
                            x: "100%"
                        },
                        transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "h-full w-1/3 bg-black rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 226,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-white/90 flex items-center justify-center z-[999]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.6,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.6,
                        ease: "easeInOut"
                    },
                    className: "w-10 h-10 rounded-full border-4 border-white/40 border-t-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 248,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#f5f5f7] flex flex-col items-center pt-10 px-5 font-sans text-[#111827]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full max-w-md mb-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.7rem] uppercase tracking-[0.3em] text-black/40",
                                        children: "MULLANABRAND.COM"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[1.4rem] font-semibold tracking-tight",
                                        children: "Swipe to Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowCurrencyMenu(!showCurrencyMenu),
                                                className: "flex items-center gap-2 border border-black/20 rounded-xl px-3 py-1.5 bg-white text-[0.75rem] shadow-sm hover:shadow-md transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: currency
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[0.6rem]",
                                                        children: "▾"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            showCurrencyMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 mt-1 w-28 bg-white border border-black/10 rounded-xl shadow-lg overflow-hidden z-50",
                                                children: [
                                                    "USD",
                                                    "RUB"
                                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setCurrency(c);
                                                            setShowCurrencyMenu(false);
                                                        },
                                                        className: `w-full text-left px-4 py-2 text-[0.75rem] hover:bg-black/5 ${currency === c ? "bg-black/10 font-semibold" : ""}`,
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
                                        alt: "Logo",
                                        className: "w-10 h-10 rounded-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-md h-[430px] flex items-center justify-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -50
                                    },
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeOut"
                                    },
                                    className: "relative w-full h-full rounded-[1.8rem] overflow-hidden shadow-xl bg-black/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCarouselIndex((prev)=>(prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1)),
                                            className: "absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg:white backdrop-blur-md shadow-md w-7 h-7 rounded-full flex items-center justify-center text-black/70",
                                            children: "‹"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            drag: "x",
                                            dragConstraints: {
                                                left: 0,
                                                right: 0
                                            },
                                            dragElastic: 0.2,
                                            onDragEnd: handleDragEnd,
                                            className: "w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white z-30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[0.65rem] uppercase tracking-[0.25em] opacity-90",
                                                            children: product.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium leading-tight",
                                                            children: product.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 349,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm mt-1 opacity-90",
                                                            children: currency === "USD" ? "$" + convertPrice(product.price) : convertPrice(product.price) + " ₽"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 352,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this),
                                                !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex flex-col items-center justify-center bg-black/10 z-40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
                                                            className: "w-14 h-14 rounded-full mb-4 opacity-95"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-32 h-1.5 bg-black/20 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    x: "-100%"
                                                                },
                                                                animate: {
                                                                    x: "100%"
                                                                },
                                                                transition: {
                                                                    duration: 1.1,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut"
                                                                },
                                                                className: "h-full w-1/3 bg-black rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    onLoad: ()=>setImageLoaded(true),
                                                    onClick: ()=>setZoomImage(product.images?.[carouselIndex] || product.image),
                                                    src: product.images?.[carouselIndex] || product.image,
                                                    alt: product.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setCarouselIndex((prev)=>(prev + 1) % (product.images?.length || 1)),
                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white backdrop-blur-md shadow-md w-7 h-7 rounded-full flex items-center justify-center text-black/70",
                                                    children: "›"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 395,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20",
                                                    children: (product.images || [
                                                        product.image
                                                    ]).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `h-1.5 w-3 rounded-full ${i === carouselIndex ? "bg-white" : "bg-white/40"}`
                                                        }, i, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            zoomImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[999] overflow-y-auto",
                                onClick: ()=>setZoomImage(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setCarouselIndex((prev)=>(prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1));
                                        },
                                        className: "absolute left-5 top-1/2 -translate-y-1/2 bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center",
                                        children: "‹"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: product.images?.[carouselIndex] || product.image,
                                        className: "max-w-[95%] max-h-[95%] object-contain my-10"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setCarouselIndex((prev)=>(prev + 1) % (product.images?.length || 1));
                                        },
                                        className: "absolute right-5 top-1/2 -translate-y-1/2 bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center",
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 w-full max-w-md mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: prevIndex === null,
                                onClick: handleBack,
                                className: `px-6 py-3 rounded-full border text-sm tracking-[0.16em] uppercase transition-all ${prevIndex === null ? "border-gray-200 text-gray-300 bg:white/60" : "border-black/20 text-black bg-white hover:border-black hover:bg-black hover:text-white"}`,
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSwipe("right"),
                                className: "px-10 py-3 rounded-full bg-black text-white text-sm tracking-[0.2em] uppercase shadow-lg shadow-black/20 hover:bg-black/90",
                                children: "Buy"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSwipe("left"),
                                className: "px-6 py-3 rounded-full border border-black/20 text-sm tracking-[0.16em] uppercase bg-white hover:border-black",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.7rem] text-black/40 tracking-[0.18em] uppercase",
                        children: "© 2025 Mullana Brand"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: popupProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black/35 backdrop-blur-sm flex items-end md:items:center justify-center z-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: 60,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                exit: {
                                    y: 40,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                },
                                drag: "y",
                                dragConstraints: {
                                    top: 0,
                                    bottom: 0
                                },
                                dragElastic: 0.15,
                                onDragEnd: (e, info)=>{
                                    if (info.offset.y > 120 || info.velocity.y > 800) {
                                        setPopupProduct(null);
                                    }
                                },
                                className: "w-full max-w-lg bg-[#f6f6f6] rounded-t-[2rem] md:rounded-[2rem] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.45)] border border-black/10 flex flex-col max-h-[90vh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-1.5 rounded-full bg-black/15 mx-auto mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this),
                                    checkoutStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.7rem] uppercase tracking-[0.24em] text-black/45",
                                                        children: popupProduct.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 534,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-medium tracking-tight",
                                                        children: popupProduct.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 537,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-black/70 text-sm",
                                                        children: currency === "USD" ? "$" + convertPrice(popupProduct.price) : convertPrice(popupProduct.price) + " ₽"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 540,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 533,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text:black/70 space-y-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: popupProduct.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 548,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: "Material:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 550,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            popupProduct.material
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 549,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "Select size:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 553,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 flex-wrap",
                                                        children: (popupProduct.size || "").split(/[,|]/).map((s)=>s.trim()).filter(Boolean).map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setSelectedSize(s),
                                                                className: `px-3 py-1 rounded-full border text-sm ${selectedSize === s ? "bg-black text-white border-black" : "bg-white text-black border-black/20"}`,
                                                                children: s
                                                            }, i, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 560,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 554,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 547,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-black/10 pt-4 mt-1 flex-1 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    0,
                                                    1,
                                                    2,
                                                    3
                                                ].map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex-1 h-1.5 rounded-full ${checkoutStep >= step ? "bg-black" : "bg-black/15"}`
                                                    }, step, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 582,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 580,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 text-sm text-black/75 overflow-y-auto pr-1 mb-4",
                                                children: [
                                                    checkoutStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.8rem] text-black/60",
                                                        children: "Review the product above. When you are ready, continue to checkout."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 595,
                                                        columnNumber: 23
                                                    }, this),
                                                    checkoutStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[0.75rem] uppercase tracking-[0.2em] text-black/50",
                                                                children: "Your details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 603,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[0.75rem] text-black/60",
                                                                        children: "Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 607,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "w-full rounded-2xl border border-black/15 px-3 py-2 text-[0.8rem] bg-white focus:outline-none focus:ring-2 focus:ring-black/10",
                                                                        placeholder: "Full name",
                                                                        value: name,
                                                                        onChange: (e)=>setName(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 610,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 606,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[0.75rem] text-black/60",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 618,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "w-full rounded-2xl border border-black/15 px-3 py-2 text-[0.8rem] bg-white focus:outline-none focus:ring-2 focus:ring-black/10",
                                                                        placeholder: "you@example.com",
                                                                        type: "email",
                                                                        value: email,
                                                                        onChange: (e)=>setEmail(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 621,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 617,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[0.75rem] text-black/60",
                                                                        children: "Phone / WhatsApp"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 630,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "w-full rounded-2xl border border-black/15 px-3 py-2 text-[0.8rem] bg-white focus:outline-none focus:ring-2 focus:ring-black/10",
                                                                        placeholder: "+358 ...",
                                                                        value: phone,
                                                                        onChange: (e)=>setPhone(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 633,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 629,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[0.75rem] text-black/60",
                                                                        children: "Shipping address"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 641,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        className: "w-full rounded-2xl border border-black/15 px-3 py-2 text-[0.8rem] bg-white min-h-[60px] focus:outline-none focus:ring-2 focus:ring-black/10",
                                                                        placeholder: "Street, city, country",
                                                                        value: address,
                                                                        onChange: (e)=>setAddress(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 644,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 640,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 602,
                                                        columnNumber: 23
                                                    }, this),
                                                    checkoutStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[0.75rem] uppercase tracking-[0.2em] text-black/50",
                                                                children: "Payment method"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 656,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    "USDT",
                                                                    "Tinkoff"
                                                                ].map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setPaymentMethod(method),
                                                                        className: `flex-1 py-2 rounded-2xl border text-[0.8rem] transition ${paymentMethod === method ? "bg-black text-white border-black" : "bg-white text-black border-black/20"}`,
                                                                        children: method
                                                                    }, method, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 662,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 660,
                                                                columnNumber: 25
                                                            }, this),
                                                            paymentMethod === "USDT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-3xl border border-black/15 p-3 bg-white flex items-center justify-between gap-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[0.75rem] text-black/60",
                                                                                    children: "Amount"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.js",
                                                                                    lineNumber: 681,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-semibold",
                                                                                    children: [
                                                                                        popupProduct.price,
                                                                                        " USDT",
                                                                                        " ",
                                                                                        currency === "RUB" ? ` (${Math.round(popupProduct.price * usdToRub)} ₽)` : ""
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/page.js",
                                                                                    lineNumber: 684,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[0.7rem] text-black/50 mt-1",
                                                                                    children: "Send only via TRC20 network."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.js",
                                                                                    lineNumber: 692,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 680,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 679,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] text-black/60",
                                                                                children: "USDT wallet address"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 699,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 rounded-2xl bg-white border border-black/15 px-3 py-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 text-[0.7rem] text-black/80 truncate",
                                                                                        children: USDT_WALLET
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.js",
                                                                                        lineNumber: 703,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: handleCopyWallet,
                                                                                        className: "text-[0.7rem] px-2 py-1 rounded-xl bg-black text-white",
                                                                                        children: "Copy"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.js",
                                                                                        lineNumber: 706,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 702,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 698,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[0.7rem] text-black/55",
                                                                        children: "After sending the payment, tap Next to confirm your order."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 716,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 678,
                                                                columnNumber: 27
                                                            }, this),
                                                            paymentMethod === "Tinkoff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3 text-center text-[0.8rem] text-black/70 p-4 bg-white rounded-2xl border border-black/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "https://corporate.stankeviciusgroup.com/assets/swipe/tinkoff.png",
                                                                            alt: "Tinkoff Logo",
                                                                            className: "w-20 mx-auto mb-2 opacity-90"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 726,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium",
                                                                            children: "Tinkoff Payment"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 731,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[0.75rem] text-black/60",
                                                                            children: "You will be redirected to Tinkoff secure payment page."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.js",
                                                                            lineNumber: 734,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 725,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 724,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 655,
                                                        columnNumber: 23
                                                    }, this),
                                                    checkoutStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 text-[0.8rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[0.75rem] uppercase tracking-[0.2em] text-black/50",
                                                                children: "Review"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 746,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-3xl border border-black/15 bg-white p-3 flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: popupProduct.image,
                                                                        alt: popupProduct.title,
                                                                        className: "w-20 h-20 rounded-2xl object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 750,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium",
                                                                                children: popupProduct.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 756,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[0.75rem] text-black/60",
                                                                                children: popupProduct.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 759,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm mt-1",
                                                                                children: currency === "USD" ? "$" + convertPrice(popupProduct.price) + (paymentMethod === "Tinkoff" ? ` (${Math.round(popupProduct.price * usdToRub)} ₽)` : "") : convertPrice(popupProduct.price) + " ₽"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 762,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm mt-1 text-black/70",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-bold",
                                                                                        children: "Selected size:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.js",
                                                                                        lineNumber: 773,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " ",
                                                                                    selectedSize || "-"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 772,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 755,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 749,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Name:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 783,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            name || "-"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 782,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Email:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 787,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            email || "-"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 786,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Phone:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 791,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            phone || "-"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 790,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Address:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 795,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            address || "-"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 794,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Payment:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.js",
                                                                                lineNumber: 799,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            paymentMethod
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.js",
                                                                        lineNumber: 798,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 781,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[0.7rem] text-black/55",
                                                                children: "By placing the order, you confirm that the information is correct and agree to our standard terms of purchase."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 804,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 745,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 593,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-auto flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            if (checkoutStep > 0) {
                                                                setCheckoutStep((prev)=>prev - 1);
                                                            } else {
                                                                setPopupProduct(null);
                                                            }
                                                        },
                                                        className: "flex-1 py-3 rounded-full border border-black/20 bg-white text-black text-[0.8rem] tracking-[0.2em] uppercase hover:border-black",
                                                        children: checkoutStep > 0 ? "Back" : "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 815,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: async ()=>{
                                                            if (checkoutStep === 3) {
                                                                if (paymentMethod === "Tinkoff") {
                                                                    await handleTinkoffPay(popupProduct);
                                                                    return;
                                                                }
                                                                handlePlaceOrder();
                                                            } else {
                                                                setCheckoutStep((prev)=>Math.min(3, prev + 1));
                                                            }
                                                        },
                                                        className: "flex-1 py-3 rounded-full bg-black text-white text-[0.8rem] tracking-[0.2em] uppercase hover:bg-black/90",
                                                        children: checkoutStep === 3 ? "Place order" : "Next"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 829,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 814,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 513,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "UkQ2Hwuh4t4g+wdMYEdKM7i6CCk=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_df5fb46e.js.map