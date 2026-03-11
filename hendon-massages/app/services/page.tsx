import Link from "next/link";
import { services } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage Services & Prices | Hendon Massages",
  description:
    "Browse all massage treatments offered by Jayne at Hendon Massages. Swedish, Sports & Deep Tissue, Pregnancy, Hot Stone, and Aromatherapy massages for women in North London.",
};

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", paddingTop: "72px" }}>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #f5ede3, #e8d9c8)",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#8b6f4e", textTransform: "uppercase", marginBottom: "0.8rem" }}>
          Treatments
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 400, marginBottom: "1rem", color: "#2c2316" }}>
          Our Services
        </h1>
        <p style={{ color: "#7a6a57", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.8 }}>
          All treatments are women-only and fully tailored to your needs. Based in Hendon NW4.
        </p>
      </section>

      {/* Services list */}
      <section style={{ maxWidth: "950px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
          {services.map((s) => (
            <div
              key={s.slug}
              style={{
                background: "#fff",
                padding: "2.8rem",
                borderRadius: "4px",
                border: "1px solid #e8ddd0",
                boxShadow: "0 2px 16px rgba(44,35,22,0.05)",
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "3rem", flexShrink: 0, lineHeight: 1 }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.8rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2c2316" }}>{s.name}</h2>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#8b6f4e", lineHeight: 1 }}>£{s.price}</div>
                    <div style={{ fontSize: "0.8rem", color: "#a89b8a", marginTop: "2px" }}>{s.duration}</div>
                  </div>
                </div>
                <p style={{ color: "#6b5a47", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
                  {s.fullDesc}
                </p>
                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.6rem" }}>
                    Benefits
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {s.benefits.map((b) => (
                      <span
                        key={b}
                        style={{
                          background: "#f5ede3",
                          color: "#6b5a47",
                          padding: "0.3rem 0.9rem",
                          fontSize: "0.78rem",
                          borderRadius: "100px",
                          border: "1px solid #e0d0bc",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    background: "#8b6f4e",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "0.75rem 2rem",
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    borderRadius: "2px",
                  }}
                >
                  Book This Treatment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
