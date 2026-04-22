"use client";

import { useState, useEffect, useRef } from "react";

const phones = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 62000,
    originalPrice: 119000,
    condition: "Excellent",
    storage: "256GB",
    color: "Deep Purple",
    battery: "94%",
    img: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&q=80",
    tag: "Hot Deal",
    tagColor: "#ff4d4d",
    verified: true,
    age: "8 months",
    warranty: "6 months",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Samsung S23 Ultra",
    brand: "Samsung",
    price: 55000,
    originalPrice: 124999,
    condition: "Good",
    storage: "512GB",
    color: "Phantom Black",
    battery: "89%",
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
    tag: "Best Value",
    tagColor: "#00c896",
    verified: true,
    age: "11 months",
    warranty: "3 months",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Google Pixel 8",
    brand: "Google",
    price: 38000,
    originalPrice: 75999,
    condition: "Like New",
    storage: "128GB",
    color: "Hazel",
    battery: "98%",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
    tag: "Like New",
    tagColor: "#7c6af7",
    verified: true,
    age: "2 months",
    warranty: "9 months",
    rating: 4.8,
  },
  {
    id: 4,
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 28000,
    originalPrice: 56999,
    condition: "Good",
    storage: "256GB",
    color: "Titan Black",
    battery: "91%",
    img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80",
    tag: "50% Off",
    tagColor: "#ff8c00",
    verified: false,
    age: "14 months",
    warranty: "1 month",
    rating: 4.5,
  },
  {
    id: 5,
    name: "iPhone 13",
    brand: "Apple",
    price: 42000,
    originalPrice: 79900,
    condition: "Excellent",
    storage: "128GB",
    color: "Midnight",
    battery: "92%",
    img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=80",
    tag: "Fast Seller",
    tagColor: "#ff4d4d",
    verified: true,
    age: "9 months",
    warranty: "4 months",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    price: 32000,
    originalPrice: 79999,
    condition: "Good",
    storage: "256GB",
    color: "Ceramic White",
    battery: "87%",
    img: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&q=80",
    tag: "New Arrival",
    tagColor: "#00c896",
    verified: true,
    age: "6 months",
    warranty: "2 months",
    rating: 4.6,
  },
];

const brands = ["All", "Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
const conditions = ["All", "Like New", "Excellent", "Good"];

const NAV_LINKS = ["Home", "Browse", "Sell", "Verified", "Blog"];

function StarRating({ rating } : { rating: number }) {
  return (
    <span style={{ color: "#f5b301", fontSize: 12, letterSpacing: 1 }}>
      {"★".repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? "½" : ""}
      <span style={{ color: "#444", marginLeft: 4, fontSize: 11, fontFamily: "DM Sans, sans-serif",}}>
        {rating}
      </span>
    </span>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span style={{
      background: color + "22",
      color: color,
      border: `1px solid ${color}44`,
      fontSize: 10,
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: 20,
      textTransform: "uppercase",
      letterSpacing: 1,
      fontFamily: "DM Mono, monospace",
    }}>{text}</span>
  );
}

function PhoneCard({ phone, onClick } : { phone: typeof phones[0]; onClick: (p: typeof phones[0]) => void }) {
  const [hovered, setHovered] = useState(false);
  const discount = Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(phone)}
      style={{
        background: hovered ? "#111319" : "#0d0e13",
        border: hovered ? "1px solid #2a2d3a" : "1px solid #1a1c24",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.28s cubic-bezier(.4,0,.2,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
      }}
    >
      {/* Tag */}
      <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
        <Badge text={phone.tag} color={phone.tagColor} />
      </div>
      {/* Verified */}
      {phone.verified && (
        <div style={{
          position: "absolute", top: 12, right: 12, zIndex: 2,
          background: "#00c89622", border: "1px solid #00c89644",
          borderRadius: 20, padding: "2px 8px",
          fontSize: 10, color: "#00c896", fontWeight: 700,
          fontFamily: "DM Mono, monospace", letterSpacing: 1,
        }}>✓ VERIFIED</div>
      )}

      {/* Image */}
      <div style={{
        height: 200,
        background: "#0a0b0f",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}>
        <img
          src={phone.img}
          alt={phone.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: hovered ? 0.95 : 0.8,
            transition: "all 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            filter: "brightness(0.85)",
          }}
        />
        {/* Discount pill */}
        <div style={{
          position: "absolute", bottom: 10, right: 10,
          background: "#ff4d4d",
          color: "#fff",
          fontSize: 11, fontWeight: 800,
          padding: "3px 10px", borderRadius: 20,
          fontFamily: "DM Mono, monospace",
        }}>-{discount}%</div>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
          <div>
            <div style={{ fontSize: 11, color: "#666", fontFamily: "DM Mono, monospace", letterSpacing: 2, textTransform: "uppercase", marginBottom: 3 }}>{phone.brand}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#eee", fontFamily: "Syne, sans-serif", lineHeight: 1.2 }}>{phone.name}</div>
          </div>
        </div>

        <div style={{ marginTop: 8 }}>
          <StarRating rating={phone.rating} />
        </div>

        {/* Specs row */}
        <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
          {[phone.storage, phone.condition, `🔋 ${phone.battery}`].map((s, i) => (
            <span key={i} style={{
              background: "#161820",
              border: "1px solid #22242f",
              borderRadius: 6,
              padding: "3px 9px",
              fontSize: 11,
              color: "#888",
              fontFamily: "DM Mono, monospace",
            }}>{s}</span>
          ))}
        </div>

        {/* Price */}
        <div style={{ marginTop: 14, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 11, color: "#555", textDecoration: "line-through", fontFamily: "DM Sans, sans-serif" }}>₹{phone.originalPrice.toLocaleString()}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", fontFamily: "Syne, sans-serif", lineHeight: 1 }}>₹{phone.price.toLocaleString()}</div>
          </div>
          <button style={{
            background: hovered ? "#fff" : "#1c1e27",
            color: hovered ? "#0a0b0f" : "#bbb",
            border: "1px solid #2a2d3a",
            borderRadius: 10,
            padding: "8px 16px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "DM Sans, sans-serif",
            transition: "all 0.2s ease",
            letterSpacing: 0.5,
          }}>View Deal →</button>
        </div>
      </div>
    </div>
  );
}

function Modal({ phone, onClose } : { phone: typeof phones[0] | null; onClose: () => void }) {
  if (!phone) return null;
  const discount = Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(12px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
      animation: "fadeIn 0.2s ease",
    }} onClick={onClose}>
      <div style={{
        background: "#0d0e13",
        border: "1px solid #1e2030",
        borderRadius: 24,
        maxWidth: 820,
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        animation: "slideUp 0.28s cubic-bezier(.4,0,.2,1)",
      }} onClick={e => e.stopPropagation()}>
        {/* Left - Image */}
        <div style={{
          flex: "0 0 340px",
          minWidth: 260,
          background: "#080910",
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 360,
          position: "relative",
          overflow: "hidden",
        }}>
          <img src={phone.img} alt={phone.name} style={{
            width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.85,
            position: "absolute", inset: 0,
          }} />
          <div style={{
            position: "absolute", bottom: 16, left: 16,
          }}>
            <Badge text={phone.tag} color={phone.tagColor} />
          </div>
          <div style={{
            position: "absolute", top: 16, right: 16,
            background: "#ff4d4d", color: "#fff",
            fontSize: 13, fontWeight: 800,
            padding: "4px 12px", borderRadius: 20,
            fontFamily: "DM Mono, monospace",
          }}>-{discount}%</div>
        </div>

        {/* Right - Details */}
        <div style={{ flex: 1, minWidth: 260, padding: "32px 30px" }}>
          <button onClick={onClose} style={{
            float: "right", background: "none", border: "1px solid #2a2d3a",
            color: "#888", cursor: "pointer", borderRadius: 8,
            padding: "4px 10px", fontSize: 14, fontFamily: "DM Sans, sans-serif",
          }}>✕</button>

          <div style={{ fontSize: 11, color: "#555", fontFamily: "DM Mono, monospace", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{phone.brand}</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#f0f0f0", fontFamily: "Syne, sans-serif", lineHeight: 1.15, marginBottom: 8 }}>{phone.name}</div>
          <StarRating rating={phone.rating} />

          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              ["Condition", phone.condition],
              ["Storage", phone.storage],
              ["Color", phone.color],
              ["Battery", phone.battery],
              ["Age", phone.age],
              ["Warranty", phone.warranty],
            ].map(([k, v]) => (
              <div key={k} style={{
                background: "#111319",
                border: "1px solid #1e2030",
                borderRadius: 10,
                padding: "10px 14px",
              }}>
                <div style={{ fontSize: 10, color: "#555", fontFamily: "DM Mono, monospace", letterSpacing: 1.5, textTransform: "uppercase" }}>{k}</div>
                <div style={{ fontSize: 14, color: "#ccc", fontFamily: "DM Sans, sans-serif", fontWeight: 600, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 22, borderTop: "1px solid #1a1c24", paddingTop: 20, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "#555", textDecoration: "line-through", fontFamily: "DM Sans, sans-serif" }}>MRP ₹{phone.originalPrice.toLocaleString()}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", fontFamily: "Syne, sans-serif", lineHeight: 1 }}>₹{phone.price.toLocaleString()}</div>
              <div style={{ fontSize: 12, color: "#00c896", marginTop: 3, fontFamily: "DM Sans, sans-serif" }}>You save ₹{(phone.originalPrice - phone.price).toLocaleString()}</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{
                background: "#111319",
                border: "1px solid #2a2d3a",
                color: "#aaa",
                padding: "12px 18px",
                borderRadius: 12,
                fontSize: 18,
                cursor: "pointer",
              }}>🤍</button>
              <button style={{
                background: "#fff",
                color: "#0a0b0f",
                border: "none",
                borderRadius: 12,
                padding: "12px 28px",
                fontSize: 14,
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: 0.5,
              }}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhoneMarket() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedPhone, setSelectedPhone] = useState<typeof phones[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const filtered = phones.filter(p => {
    const brandOk = selectedBrand === "All" || p.brand === selectedBrand;
    const condOk = selectedCondition === "All" || p.condition === selectedCondition;
    const searchOk = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    return brandOk && condOk && searchOk;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080810",
      fontFamily: "DM Sans, sans-serif",
      color: "#fff",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0d0e13; }
        ::-webkit-scrollbar-thumb { background: #2a2d3a; border-radius: 10px; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity:0; transform: translateY(30px) } to { opacity:1; transform: translateY(0) } }
        @keyframes float { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-10px) } }
        @keyframes pulse { 0%,100% { opacity: 0.6 } 50% { opacity: 1 } }
        .hero-badge { animation: pulse 2.4s ease-in-out infinite; }
        .float-img { animation: float 4s ease-in-out infinite; }
        input::placeholder { color: #444; }
        input:focus { outline: none; border-color: #3a3d50 !important; }
        button:active { transform: scale(0.97) !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1c24" : "none",
        transition: "all 0.3s ease",
        padding: "0 32px",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 34, height: 34,
            background: "linear-gradient(135deg, #7c6af7, #4e9bff)",
            borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 900,
          }}>📱</div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: -0.5 }}>
            Re<span style={{ color: "#7c6af7" }}>Fone</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <a key={l} href="#" style={{
              color: "#888", textDecoration: "none", fontSize: 14,
              fontFamily: "DM Sans, sans-serif", fontWeight: 500,
              transition: "color 0.2s",
              letterSpacing: 0.2,
            }}
              onMouseOver={e => (e.target as HTMLElement).style.color = "#fff"}
              onMouseOut={e => (e.target as HTMLElement).style.color = "#888"}
            >{l}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button style={{
            background: "none", border: "1px solid #2a2d3a",
            color: "#ccc", padding: "8px 18px", borderRadius: 10,
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            fontFamily: "DM Sans, sans-serif",
          }}>Sign In</button>
          <button style={{
            background: "#7c6af7",
            border: "none",
            color: "#fff", padding: "8px 18px", borderRadius: 10,
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            fontFamily: "DM Sans, sans-serif",
          }}>Sell Phone</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 32px 80px",
        textAlign: "center",
      }}>
        {/* Background blobs */}
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "10%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(78,155,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }} />

        <div className="hero-badge" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#7c6af722", border: "1px solid #7c6af744",
          borderRadius: 20, padding: "6px 16px",
          fontSize: 12, color: "#a99af7",
          fontFamily: "DM Mono, monospace", letterSpacing: 2,
          marginBottom: 24,
          textTransform: "uppercase",
        }}>
          ✦ 100% Verified Phones — Trusted by 25,000+ buyers
        </div>

        <h1 style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(42px, 7vw, 88px)",
          fontWeight: 900,
          lineHeight: 1.0,
          color: "#fff",
          marginBottom: 24,
          maxWidth: 780,
          letterSpacing: -2,
        }}>
          Buy & Sell{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c6af7, #4e9bff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Pre-owned
          </span>
          <br />Phones. Smartly.
        </h1>

        <p style={{
          fontSize: 18,
          color: "#666",
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 40,
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 300,
        }}>
          Every phone is inspected, graded and verified before listing. Get premium devices at up to 60% off.
        </p>

        {/* Search bar */}
        <div style={{
          display: "flex",
          background: "#0d0e13",
          border: "1px solid #1e2030",
          borderRadius: 16,
          overflow: "hidden",
          width: "100%", maxWidth: 560,
          marginBottom: 48,
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        }}>
          <span style={{ padding: "0 16px", display: "flex", alignItems: "center", fontSize: 18, color: "#444" }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search iPhone, Samsung, Pixel..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              padding: "16px 0",
              color: "#eee",
              fontSize: 15,
              fontFamily: "DM Sans, sans-serif",
            }}
          />
          <button style={{
            background: "#7c6af7",
            border: "none",
            color: "#fff",
            padding: "0 28px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "DM Sans, sans-serif",
            margin: 6,
            borderRadius: 10,
            letterSpacing: 0.5,
          }}>Search</button>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
          {[["12,000+", "Phones Listed"], ["25k+", "Happy Buyers"], ["4.9★", "Avg Rating"], ["3 Days", "Fast Delivery"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 24, color: "#fff" }}>{val}</div>
              <div style={{ fontSize: 12, color: "#555", fontFamily: "DM Mono, monospace", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BROWSE SECTION */}
      <section style={{ padding: "0 32px 100px", maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: "#555", fontFamily: "DM Mono, monospace", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Featured Deals</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 32, letterSpacing: -1 }}>Latest Listings</h2>
          </div>
          <a href="#" style={{ color: "#7c6af7", textDecoration: "none", fontSize: 14, fontFamily: "DM Sans, sans-serif", fontWeight: 600 }}>View all phones →</a>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
          {/* Brand filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {brands.map(b => (
              <button key={b} onClick={() => setSelectedBrand(b)} style={{
                background: selectedBrand === b ? "#7c6af7" : "#0d0e13",
                border: `1px solid ${selectedBrand === b ? "#7c6af7" : "#1e2030"}`,
                color: selectedBrand === b ? "#fff" : "#666",
                padding: "7px 16px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
                transition: "all 0.2s",
              }}>{b}</button>
            ))}
          </div>

          <div style={{ width: 1, background: "#1a1c24", margin: "0 4px" }} />

          {/* Condition filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {conditions.map(c => (
              <button key={c} onClick={() => setSelectedCondition(c)} style={{
                background: selectedCondition === c ? "#ffffff18" : "none",
                border: `1px solid ${selectedCondition === c ? "#3a3d50" : "#1e2030"}`,
                color: selectedCondition === c ? "#ddd" : "#555",
                padding: "7px 16px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "DM Mono, monospace",
                letterSpacing: 0.5,
                transition: "all 0.2s",
              }}>{c}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#444", fontSize: 16, fontFamily: "DM Sans, sans-serif" }}>
            No phones found. Try a different search.
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {filtered.map(phone => (
              <PhoneCard key={phone.id} phone={phone} onClick={(p) => setSelectedPhone(p)} />
            ))}
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section style={{
        padding: "80px 32px",
        background: "#0a0b10",
        borderTop: "1px solid #111320",
        borderBottom: "1px solid #111320",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#555", fontFamily: "DM Mono, monospace", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>The Process</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 56, letterSpacing: -1 }}>How ReFone Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
            {[
              ["🔍", "Browse Listings", "Filter by brand, condition, price and storage to find your ideal phone."],
              ["✅", "Verified Quality", "Every phone is tested across 50+ quality checks before listing."],
              ["💳", "Secure Purchase", "Pay securely via UPI, card or EMI. 7-day return, no questions."],
              ["🚀", "Fast Delivery", "Phones reach your doorstep within 1–3 business days."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{
                background: "#0d0e13",
                border: "1px solid #1a1c24",
                borderRadius: 16,
                padding: "28px 20px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, color: "#eee", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "DM Sans, sans-serif" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELL CTA */}
      <section style={{
        padding: "100px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, rgba(124,106,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20 }}>
            Got a phone to sell?<br />
            <span style={{ color: "#7c6af7" }}>Get the best price.</span>
          </h2>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.7, marginBottom: 36, fontFamily: "DM Sans, sans-serif" }}>
            List your phone in under 5 minutes. Our AI-powered pricing engine gives you a fair market valuation instantly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              background: "#7c6af7",
              border: "none",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              letterSpacing: 0.3,
            }}>Start Selling →</button>
            <button style={{
              background: "none",
              border: "1px solid #2a2d3a",
              color: "#888",
              padding: "14px 28px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
            }}>Check Phone Value</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #111320",
        padding: "40px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28,
            background: "linear-gradient(135deg, #7c6af7, #4e9bff)",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13,
          }}>📱</div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 17 }}>
            Re<span style={{ color: "#7c6af7" }}>Fone</span>
          </span>
        </div>
        <div style={{ color: "#3a3d50", fontSize: 12, fontFamily: "DM Mono, monospace" }}>© 2025 ReFone · Built for trust.</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Contact"].map(l => (
            <a key={l} href="#" style={{ color: "#444", textDecoration: "none", fontSize: 13, fontFamily: "DM Sans, sans-serif" }}>{l}</a>
          ))}
        </div>
      </footer>

      {/* Modal */}
      <Modal phone={selectedPhone} onClose={() => setSelectedPhone(null)} />
    </div>
  );
}