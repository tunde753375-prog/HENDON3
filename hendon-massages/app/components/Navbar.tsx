"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/massages", label: "Areas" },
  { href: "/contact", label: "Book Now" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        background: scrolled ? "rgba(250,248,245,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e8e0d4" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ fontSize: "1.4rem", letterSpacing: "0.12em", fontWeight: 400, color: "#8b6f4e", lineHeight: 1 }}>
          HENDON
        </div>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#b8a48c", marginTop: "1px" }}>
          MASSAGES
        </div>
      </Link>

      {/* Desktop */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              textDecoration: "none",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: pathname === l.href ? "#8b6f4e" : "#7a6a57",
              borderBottom: pathname === l.href ? "1px solid #8b6f4e" : "1px solid transparent",
              paddingBottom: "2px",
              transition: "all 0.2s",
              fontFamily: "Georgia, serif",
              ...(l.label === "Book Now"
                ? {
                    background: "#8b6f4e",
                    color: "#fff",
                    border: "none",
                    padding: "0.55rem 1.3rem",
                    borderRadius: "2px",
                    borderBottom: "none",
                  }
                : {}),
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
