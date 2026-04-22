"use client";
import { useState, useEffect } from "react";

const phones = [
  { id: 1, name: "iPhone 14 Pro", brand: "Apple", price: 62000, originalPrice: 119000, condition: "Excellent", storage: "256GB", color: "Deep Purple", battery: "94%", img: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&q=80", tag: "Hot Deal", accent: "#e11d48", accentBg: "#fff1f2", accentBorder: "#fecdd3", verified: true, age: "8 months", warranty: "6 months", rating: 4.9 },
  { id: 2, name: "Samsung S23 Ultra", brand: "Samsung", price: 55000, originalPrice: 124999, condition: "Good", storage: "512GB", color: "Phantom Black", battery: "89%", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80", tag: "Best Value", accent: "#059669", accentBg: "#f0fdf4", accentBorder: "#bbf7d0", verified: true, age: "11 months", warranty: "3 months", rating: 4.7 },
  { id: 3, name: "Google Pixel 8", brand: "Google", price: 38000, originalPrice: 75999, condition: "Like New", storage: "128GB", color: "Hazel", battery: "98%", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80", tag: "Like New", accent: "#4f46e5", accentBg: "#eef2ff", accentBorder: "#c7d2fe", verified: true, age: "2 months", warranty: "9 months", rating: 4.8 },
  { id: 4, name: "OnePlus 11", brand: "OnePlus", price: 28000, originalPrice: 56999, condition: "Good", storage: "256GB", color: "Titan Black", battery: "91%", img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80", tag: "50% Off", accent: "#d97706", accentBg: "#fffbeb", accentBorder: "#fde68a", verified: false, age: "14 months", warranty: "1 month", rating: 4.5 },
  { id: 5, name: "iPhone 13", brand: "Apple", price: 42000, originalPrice: 79900, condition: "Excellent", storage: "128GB", color: "Midnight", battery: "92%", img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=80", tag: "Fast Seller", accent: "#e11d48", accentBg: "#fff1f2", accentBorder: "#fecdd3", verified: true, age: "9 months", warranty: "4 months", rating: 4.8 },
  { id: 6, name: "Xiaomi 13 Pro", brand: "Xiaomi", price: 32000, originalPrice: 79999, condition: "Good", storage: "256GB", color: "Ceramic White", battery: "87%", img: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&q=80", tag: "New Arrival", accent: "#0284c7", accentBg: "#f0f9ff", accentBorder: "#bae6fd", verified: true, age: "6 months", warranty: "2 months", rating: 4.6 },
];

const brands = ["All", "Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
const conditions = ["All", "Like New", "Excellent", "Good"];
const NAV_LINKS = ["Home", "Browse", "Sell", "Verified", "Blog"];

function StarRating({ rating } : { rating: number }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span style={{ color: "#f59e0b", fontSize: 13 }}>{"★".repeat(Math.floor(rating))}{rating % 1 >= 0.5 ? "½" : ""}</span>
      <span style={{ color: "#94a3b8", fontSize: 11, fontFamily: "var(--fm)" }}>{rating}</span>
    </span>
  );
}

function PhoneCard({ phone, onClick } : { phone: typeof phones[0], onClick: (p: typeof phones[0]) => void }) {
  const [hov, setHov] = useState(false);
  const disc = Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onClick(phone)}
      style={{
        borderRadius: 24, overflow: "hidden", cursor: "pointer", position: "relative",
        transition: "all 0.32s cubic-bezier(.4,0,.2,1)",
        transform: hov ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
        background: hov ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.72)",
        border: hov ? "1px solid rgba(99,102,241,0.22)" : "1px solid rgba(203,213,225,0.7)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        boxShadow: hov
          ? "0 32px 72px rgba(99,102,241,0.13), 0 8px 28px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)"
          : "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* shimmer top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)", zIndex: 3, pointerEvents: "none" }} />

      {/* Image */}
      <div style={{ height: 215, overflow: "hidden", position: "relative", background: "rgba(241,245,249,0.8)" }}>
        <img src={phone.img} alt={phone.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.52s ease", transform: hov ? "scale(1.07)" : "scale(1)", opacity: 0.92 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.45) 100%)" }} />

        {/* Tag */}
        <div style={{ position: "absolute", top: 13, left: 13, background: phone.accentBg, border: `1px solid ${phone.accentBorder}`, backdropFilter: "blur(10px)", color: phone.accent, fontSize: 10, fontWeight: 800, padding: "3px 11px", borderRadius: 20, fontFamily: "var(--fm)", letterSpacing: 1.5, textTransform: "uppercase" }}>{phone.tag}</div>

        {phone.verified && (
          <div style={{ position: "absolute", top: 13, right: 13, background: "#f0fdf4", border: "1px solid #bbf7d0", backdropFilter: "blur(10px)", color: "#059669", fontSize: 10, fontWeight: 800, padding: "3px 11px", borderRadius: 20, fontFamily: "var(--fm)", letterSpacing: 1.5 }}>✓ VERIFIED</div>
        )}

        <div style={{ position: "absolute", bottom: 13, right: 13, background: "#e11d48", color: "#fff", fontSize: 11, fontWeight: 900, padding: "3px 11px", borderRadius: 20, fontFamily: "var(--fm)" }}>-{disc}%</div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 20px" }}>
        <p style={{ fontSize: 10, color: "#94a3b8", fontFamily: "var(--fm)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 3 }}>{phone.brand}</p>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", fontFamily: "var(--fd)", lineHeight: 1.2, marginBottom: 6 }}>{phone.name}</h3>
        <StarRating rating={phone.rating} />

        <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
          {[phone.storage, phone.condition, `🔋 ${phone.battery}`].map((s, i) => (
            <span key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "3px 10px", fontSize: 11, color: "#64748b", fontFamily: "var(--fm)" }}>{s}</span>
          ))}
        </div>

        <div style={{ marginTop: 16, display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderTop: "1px solid rgba(226,232,240,0.7)", paddingTop: 14 }}>
          <div>
            <p style={{ fontSize: 11, color: "#94a3b8", textDecoration: "line-through", fontFamily: "var(--fb)" }}>₹{phone.originalPrice.toLocaleString()}</p>
            <p style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", fontFamily: "var(--fd)", lineHeight: 1 }}>₹{phone.price.toLocaleString()}</p>
          </div>
          <button style={{ background: hov ? "#0f172a" : "#f1f5f9", color: hov ? "#fff" : "#475569", border: "1px solid #e2e8f0", borderRadius: 12, padding: "9px 18px", fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "var(--fb)", transition: "all 0.22s ease", letterSpacing: 0.4 }}>View Deal →</button>
        </div>
      </div>
    </div>
  );
}

function Modal({ phone, onClose } : { phone: typeof phones[0] | null, onClose: () => void } ) {
  if (!phone) return null;
  const disc = Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(241,245,249,0.72)", backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.2s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: 840, width: "100%", background: "rgba(255,255,255,0.88)", border: "1px solid rgba(203,213,225,0.8)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", borderRadius: 30, overflow: "hidden", display: "flex", flexWrap: "wrap", boxShadow: "0 48px 120px rgba(99,102,241,0.12), 0 16px 48px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)", animation: "slideUp 0.3s cubic-bezier(.4,0,.2,1)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,1),transparent)", zIndex: 5 }} />

        <div style={{ flex: "0 0 320px", minWidth: 240, minHeight: 390, position: "relative", overflow: "hidden" }}>
          <img src={phone.img} alt={phone.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 50%,rgba(255,255,255,0.5) 100%)" }} />
          <div style={{ position: "absolute", bottom: 18, left: 18 }}>
            <span style={{ background: phone.accentBg, border: `1px solid ${phone.accentBorder}`, color: phone.accent, fontSize: 10, fontWeight: 800, padding: "3px 11px", borderRadius: 20, fontFamily: "var(--fm)", letterSpacing: 1.5, textTransform: "uppercase" }}>{phone.tag}</span>
          </div>
          <div style={{ position: "absolute", top: 18, right: 18, background: "#e11d48", color: "#fff", fontSize: 12, fontWeight: 900, padding: "4px 13px", borderRadius: 20, fontFamily: "var(--fm)" }}>-{disc}%</div>
        </div>

        <div style={{ flex: 1, minWidth: 260, padding: "32px 30px" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
            <button onClick={onClose} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", color: "#94a3b8", cursor: "pointer", borderRadius: 10, padding: "5px 13px", fontSize: 13, fontFamily: "var(--fb)" }}>✕ Close</button>
          </div>
          <p style={{ fontSize: 10, color: "#94a3b8", fontFamily: "var(--fm)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 4 }}>{phone.brand}</p>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", fontFamily: "var(--fd)", lineHeight: 1.12, marginBottom: 8 }}>{phone.name}</h2>
          <StarRating rating={phone.rating} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
            {[["Condition", phone.condition], ["Storage", phone.storage], ["Color", phone.color], ["Battery", phone.battery], ["Age", phone.age], ["Warranty", phone.warranty]].map(([k, v]) => (
              <div key={k} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "10px 14px" }}>
                <p style={{ fontSize: 9, color: "#94a3b8", fontFamily: "var(--fm)", letterSpacing: 1.5, textTransform: "uppercase" }}>{k}</p>
                <p style={{ fontSize: 14, color: "#1e293b", fontFamily: "var(--fb)", fontWeight: 600, marginTop: 2 }}>{v}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 22, borderTop: "1px solid #e2e8f0", paddingTop: 20, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through" }}>MRP ₹{phone.originalPrice.toLocaleString()}</p>
              <p style={{ fontSize: 34, fontWeight: 900, color: "#0f172a", fontFamily: "var(--fd)", lineHeight: 1 }}>₹{phone.price.toLocaleString()}</p>
              <p style={{ fontSize: 12, color: "#059669", marginTop: 3, fontFamily: "var(--fb)", fontWeight: 600 }}>You save ₹{(phone.originalPrice - phone.price).toLocaleString()}</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#94a3b8", padding: "12px 16px", borderRadius: 12, fontSize: 18, cursor: "pointer" }}>🤍</button>
              <button style={{ background: "linear-gradient(135deg,#4f46e5,#0284c7)", color: "#fff", border: "none", borderRadius: 12, padding: "12px 30px", fontSize: 14, fontWeight: 900, cursor: "pointer", fontFamily: "var(--fb)", boxShadow: "0 6px 24px rgba(79,70,229,0.35)" }}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoreTechMobile() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedPhone, setSelectedPhone] = useState<typeof phones[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const filtered = phones.filter(p => {
    const bOk = selectedBrand === "All" || p.brand === selectedBrand;
    const cOk = selectedCondition === "All" || p.condition === selectedCondition;
    const sOk = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    return bOk && cOk && sOk;
  });

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden", color: "#0f172a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        :root { --fd:'Cormorant Garamond',serif; --fb:'Outfit',sans-serif; --fm:'Space Mono',monospace; }
        * { box-sizing:border-box; margin:0; padding:0; }
        body { font-family:'Outfit',sans-serif; background:#f0f4ff; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#f8fafc; }
        ::-webkit-scrollbar-thumb { background:#cbd5e1; border-radius:10px; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.06)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-32px,38px) scale(1.08)} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(28px,26px) scale(1.05)} }
        @keyframes drift4 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,-28px) scale(1.04)} }
        @keyframes shimmerSlide { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulseDot { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
        .blob1{animation:drift1 14s ease-in-out infinite;}
        .blob2{animation:drift2 18s ease-in-out infinite;}
        .blob3{animation:drift3 20s ease-in-out infinite;}
        .blob4{animation:drift4 16s ease-in-out infinite;}
        .shimmer-h{background:linear-gradient(90deg,#334155 0%,#0f172a 40%,#334155 80%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmerSlide 5s linear infinite;}
        .pulse-d{animation:pulseDot 2.2s ease-in-out infinite;}
        input::placeholder{color:#94a3b8;}
        input:focus{outline:none;}
        button:active{transform:scale(0.97)!important;}
      `}</style>

      {/* WHITE GRADIENT BACKGROUND */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "linear-gradient(145deg,#ffffff 0%,#f0f4ff 30%,#faf5ff 60%,#f0f9ff 100%)" }} />

      {/* Soft pastel blobs */}
      <div className="blob1" style={{ position: "fixed", top: "-5%", left: "-5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(199,210,254,0.55) 0%,transparent 68%)", zIndex: 0, pointerEvents: "none" }} />
      <div className="blob2" style={{ position: "fixed", top: "25%", right: "-10%", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle,rgba(186,230,253,0.48) 0%,transparent 68%)", zIndex: 0, pointerEvents: "none" }} />
      <div className="blob3" style={{ position: "fixed", bottom: "0%", left: "20%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(233,213,255,0.42) 0%,transparent 68%)", zIndex: 0, pointerEvents: "none" }} />
      <div className="blob4" style={{ position: "fixed", top: "55%", left: "55%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(254,215,170,0.28) 0%,transparent 68%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Subtle dot grid */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle,rgba(148,163,184,0.22) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 44px", transition: "all 0.3s ease", ...(scrolled ? { background: "rgba(255,255,255,0.82)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", borderBottom: "1px solid rgba(203,213,225,0.5)", boxShadow: "0 4px 24px rgba(99,102,241,0.06)" } : {}) }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#4f46e5,#0284c7)", borderRadius: 13, border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#fff", boxShadow: "0 4px 18px rgba(79,70,229,0.28)", fontFamily: "var(--fb)" }}>CT</div>
          <div>
            <p style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: 21, color: "#0f172a", lineHeight: 1.05 }}>CoreTech</p>
            <p style={{ fontFamily: "var(--fm)", fontSize: 8, color: "#94a3b8", letterSpacing: 2.5, textTransform: "uppercase" }}>Mobile Solutions</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map(l => (
            <a key={l} href="#" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, fontFamily: "var(--fb)", fontWeight: 500, transition: "color 0.2s" }}
              onMouseOver={e => (e.target as HTMLElement).style.color = "#0f172a"} onMouseOut={e => (e.target as HTMLElement).style.color = "#64748b"}>{l}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ background: "rgba(255,255,255,0.8)", border: "1px solid #e2e8f0", color: "#475569", padding: "9px 20px", borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--fb)", backdropFilter: "blur(10px)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>Sign In</button>
          <button style={{ background: "linear-gradient(135deg,#4f46e5,#0284c7)", border: "1px solid rgba(99,102,241,0.3)", color: "#fff", padding: "9px 20px", borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "var(--fb)", boxShadow: "0 4px 18px rgba(79,70,229,0.3)" }}>Sell Device</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", zIndex: 2, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 40px 80px", textAlign: "center" }}>
        {/* Eyebrow */}
        <div className="pulse-d" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,0.75)", border: "1px solid rgba(199,210,254,0.9)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: 26, padding: "8px 20px", marginBottom: 32, boxShadow: "0 2px 16px rgba(99,102,241,0.1)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4f46e5", display: "block" }} />
          <span style={{ fontFamily: "var(--fm)", fontSize: 11, color: "#4f46e5", letterSpacing: 2, textTransform: "uppercase" }}>100% Verified · Trusted by 25,000+ Buyers</span>
        </div>

        <h1 style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: "clamp(54px,9vw,110px)", lineHeight: 0.96, letterSpacing: -2.5, marginBottom: 24, maxWidth: 900 }}>
          <span className="shimmer-h">Buy & Sell</span><br />
          <span style={{ color: "#0f172a" }}>Pre-owned{" "}</span>
          <span style={{ background: "linear-gradient(130deg,#4f46e5,#0284c7,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Phones.</span>
        </h1>

        <p style={{ fontSize: 18, color: "#64748b", maxWidth: 500, lineHeight: 1.8, marginBottom: 46, fontWeight: 300, fontFamily: "var(--fb)" }}>
          Every device inspected, graded and certified before listing. Premium phones at up to 60% off retail.
        </p>

        {/* Glass search bar */}
        <div style={{ display: "flex", background: "rgba(255,255,255,0.82)", border: "1px solid rgba(199,210,254,0.8)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderRadius: 20, overflow: "hidden", width: "100%", maxWidth: 600, marginBottom: 52, boxShadow: "0 8px 40px rgba(99,102,241,0.10), inset 0 1px 0 rgba(255,255,255,1)" }}>
          <span style={{ padding: "0 16px", display: "flex", alignItems: "center", fontSize: 18, color: "#c7d2fe" }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search iPhone, Samsung, Pixel..." style={{ flex: 1, background: "none", border: "none", padding: "16px 0", color: "#0f172a", fontSize: 15, fontFamily: "var(--fb)", fontWeight: 400 }} />
          <button style={{ background: "linear-gradient(135deg,#4f46e5,#0284c7)", border: "none", color: "#fff", padding: "0 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "var(--fb)", margin: 7, borderRadius: 13, boxShadow: "0 4px 16px rgba(79,70,229,0.35)" }}>Search</button>
        </div>

        {/* Stats glass pills */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {[["12,000+", "Phones Listed"], ["25k+", "Happy Buyers"], ["4.9★", "Avg Rating"], ["1–3 Days", "Fast Delivery"]].map(([val, label]) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.75)", border: "1px solid rgba(203,213,225,0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: 18, padding: "16px 26px", textAlign: "center", minWidth: 118, boxShadow: "0 4px 20px rgba(99,102,241,0.07), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
              <p style={{ fontFamily: "var(--fd)", fontWeight: 700, fontSize: 26, color: "#0f172a", lineHeight: 1 }}>{val}</p>
              <p style={{ fontFamily: "var(--fm)", fontSize: 9, color: "#94a3b8", letterSpacing: 2, textTransform: "uppercase", marginTop: 5 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <div style={{ position: "relative", zIndex: 2, background: "linear-gradient(90deg,rgba(79,70,229,0.08),rgba(2,132,199,0.08))", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(199,210,254,0.6)", borderBottom: "1px solid rgba(199,210,254,0.6)", padding: "14px 0" }}>
        <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", padding: "0 40px" }}>
          {["🛡️ 50-Point Quality Check", "🔄 7-Day Easy Returns", "📦 1–3 Day Delivery", "💳 EMI Available", "🔋 Battery Report Included", "✅ Genuine Accessories"].map(item => (
            <span key={item} style={{ fontFamily: "var(--fm)", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4f46e5" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* BROWSE */}
      <section style={{ position: "relative", zIndex: 2, padding: "60px 44px 100px", maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "var(--fm)", fontSize: 10, color: "#94a3b8", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8 }}>Featured Deals</p>
            <h2 style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: 40, color: "#0f172a", letterSpacing: -1 }}>Latest Listings</h2>
          </div>
          <a href="#" style={{ color: "#4f46e5", textDecoration: "none", fontSize: 14, fontFamily: "var(--fb)", fontWeight: 600 }}>View all phones →</a>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap", alignItems: "center" }}>
          {brands.map(b => (
            <button key={b} onClick={() => setSelectedBrand(b)} style={{ background: selectedBrand === b ? "linear-gradient(135deg,#4f46e5,#0284c7)" : "rgba(255,255,255,0.75)", border: selectedBrand === b ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(203,213,225,0.7)", color: selectedBrand === b ? "#fff" : "#64748b", padding: "8px 18px", borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--fb)", transition: "all 0.2s ease", backdropFilter: "blur(10px)", boxShadow: selectedBrand === b ? "0 4px 16px rgba(79,70,229,0.28)" : "0 2px 8px rgba(0,0,0,0.04)" }}>{b}</button>
          ))}
          <div style={{ width: 1, height: 28, background: "#e2e8f0", margin: "0 4px" }} />
          {conditions.map(c => (
            <button key={c} onClick={() => setSelectedCondition(c)} style={{ background: selectedCondition === c ? "rgba(255,255,255,0.9)" : "transparent", border: selectedCondition === c ? "1px solid #c7d2fe" : "1px solid rgba(203,213,225,0.6)", color: selectedCondition === c ? "#4f46e5" : "#94a3b8", padding: "8px 18px", borderRadius: 12, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "var(--fm)", transition: "all 0.2s ease", letterSpacing: 0.5 }}>{c}</button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#94a3b8", fontSize: 16, fontFamily: "var(--fb)" }}>No phones found. Try a different filter.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {filtered.map(phone => <PhoneCard key={phone.id} phone={phone} onClick={(phone) => setSelectedPhone(phone )} />)}
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section style={{ position: "relative", zIndex: 2, padding: "80px 44px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--fm)", fontSize: 10, color: "#94a3b8", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>The Process</p>
          <h2 style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: 44, color: "#0f172a", marginBottom: 52, letterSpacing: -1 }}>How CoreTech Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 16 }}>
            {[["🔍","Browse Listings","Filter by brand, condition, price and storage to find your ideal phone."],["✅","Certified Quality","50+ quality checks on every device before listing."],["💳","Secure Purchase","Pay via UPI, card or EMI with 7-day easy returns."],["🚀","Fast Delivery","Delivered to your doorstep in 1–3 business days."]].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.7)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: 22, padding: "30px 22px", boxShadow: "0 4px 24px rgba(99,102,241,0.06), inset 0 1px 0 rgba(255,255,255,1)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,1),transparent)" }} />
                <div style={{ width: 54, height: 54, background: "linear-gradient(135deg,#eef2ff,#e0f2fe)", border: "1px solid #c7d2fe", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 16px" }}>{icon}</div>
                <p style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15, color: "#1e293b", marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELL CTA */}
      <section style={{ position: "relative", zIndex: 2, padding: "100px 44px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", background: "rgba(255,255,255,0.75)", border: "1px solid rgba(199,210,254,0.8)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", borderRadius: 36, padding: "64px 52px", boxShadow: "0 32px 80px rgba(99,102,241,0.12), 0 8px 32px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% -10%, rgba(199,210,254,0.45) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,1),transparent)" }} />
          <p style={{ fontFamily: "var(--fm)", fontSize: 10, color: "#4f46e5", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16, position: "relative" }}>List Your Device</p>
          <h2 style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: "clamp(32px,5vw,56px)", color: "#0f172a", lineHeight: 1.05, letterSpacing: -1.2, marginBottom: 18, position: "relative" }}>
            Got a phone to sell?<br />
            <span style={{ background: "linear-gradient(130deg,#4f46e5,#0284c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Get the best price.</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.75, marginBottom: 42, fontWeight: 300, position: "relative" }}>List your phone in under 5 minutes. AI-powered pricing gives you a fair market valuation instantly.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <button style={{ background: "linear-gradient(135deg,#4f46e5,#0284c7)", border: "none", color: "#fff", padding: "16px 40px", borderRadius: 16, fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "var(--fb)", boxShadow: "0 8px 32px rgba(79,70,229,0.35)", letterSpacing: 0.3 }}>Start Selling →</button>
            <button style={{ background: "rgba(255,255,255,0.8)", border: "1px solid #e2e8f0", color: "#64748b", padding: "16px 32px", borderRadius: 16, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "var(--fb)", backdropFilter: "blur(8px)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>Check Phone Value</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(203,213,225,0.5)", padding: "38px 44px", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(20px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#4f46e5,#0284c7)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, fontFamily: "var(--fb)", color: "#fff" }}>CT</div>
            <div>
              <p style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: 18, color: "#0f172a", lineHeight: 1 }}>CoreTech</p>
              <p style={{ fontFamily: "var(--fm)", fontSize: 8, color: "#94a3b8", letterSpacing: 2.5, textTransform: "uppercase" }}>Mobile Solutions</p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--fm)", fontSize: 11, color: "#cbd5e1" }}>© 2025 CoreTech Mobile Solutions · Built for trust.</p>
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy","Terms","Contact"].map(l => (
              <a key={l} href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13, fontFamily: "var(--fb)", fontWeight: 500, transition: "color 0.2s" }}
                onMouseOver={e => (e.target as HTMLElement).style.color = "#0f172a"} onMouseOut={e => (e.target as HTMLElement).style.color = "#94a3b8"}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

      <Modal phone={selectedPhone} onClose={() => setSelectedPhone(null)} />
    </div>
  );
}