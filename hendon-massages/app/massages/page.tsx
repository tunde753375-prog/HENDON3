import Link from "next/link";
import { areas } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage in North London | Hendon Massages - All Areas",
  description:
    "Women-only massage therapy available across North London. Hendon, Colindale, Golders Green, Mill Hill, Edgware and Brent Cross. Book with Jayne today.",
};

export default function MassagesPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", paddingTop: "72px" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #f5ede3, #e8d9c8)",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#8b6f4e", textTransform: "uppercase", marginBottom: "0.8rem" }}>
          Coverage
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 400, marginBottom: "1rem", color: "#2c2316" }}>
          Areas We Serve
        </h1>
        <p style={{ color: "#7a6a57", maxWidth: "520px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.8 }}>
          Jayne is based in Hendon NW4 and provides professional women-only massage therapy across all surrounding North London areas. Select your area below to learn more.
        </p>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {areas.map((a) => (
            <Link key={a.slug} href={`/massages/${a.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#fff",
                  padding: "2.8rem 2.2rem",
                  borderRadius: "4px",
                  border: "1px solid #e8ddd0",
                  boxShadow: "0 2px 16px rgba(44,35,22,0.05)",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#2c2316" }}>{a.name}</h2>
                  <span
                    style={{
                      background: "#f5ede3",
                      color: "#8b6f4e",
                      padding: "0.25rem 0.7rem",
                      fontSize: "0.75rem",
                      borderRadius: "100px",
                      fontWeight: 600,
                    }}
                  >
                    {a.postcode}
                  </span>
                </div>
                <p style={{ color: "#6b5a47", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {a.description.substring(0, 120)}...
                </p>
                <p style={{ color: "#8b6f4e", fontSize: "0.85rem", fontWeight: 600 }}>View massages in {a.name} →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
