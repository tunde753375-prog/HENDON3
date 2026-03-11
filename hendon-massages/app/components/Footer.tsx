import Link from "next/link";
import { areas, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1e170f",
        color: "#c4a882",
        padding: "4rem 2rem 2rem",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid #3a2e22",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontSize: "1.2rem", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
              HENDON MASSAGES
            </div>
            <div style={{ fontSize: "0.75rem", color: "#7a6a57", marginBottom: "1.2rem", letterSpacing: "0.1em" }}>
              Women-Only · North London
            </div>
            <p style={{ fontSize: "0.85rem", color: "#8b7a68", lineHeight: 1.8 }}>
              Professional massage therapy by Jayne, exclusively for women. Based in Hendon NW4, serving all surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", color: "#8b7a68" }}>
              Treatments
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  style={{ color: "#8b7a68", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", color: "#8b7a68" }}>
              Areas
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/massages/${a.slug}`}
                  style={{ color: "#8b7a68", textDecoration: "none", fontSize: "0.85rem" }}
                >
                  Massage in {a.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", color: "#8b7a68" }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "0.85rem", color: "#8b7a68" }}>
              <div>📍 Hendon, NW4, North London</div>
              <div>📞 07XXX XXX XXX</div>
              <div>✉️ jayne@hendonmassages.co.uk</div>
              <div style={{ marginTop: "0.5rem" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    background: "#8b6f4e",
                    color: "#fff",
                    padding: "0.6rem 1.4rem",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: "2px",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.75rem",
            color: "#5a4a39",
          }}
        >
          <div>© {new Date().getFullYear()} Hendon Massages · All rights reserved</div>
          <div>Women-only massage therapy · Hendon NW4 · North London</div>
        </div>
      </div>
    </footer>
  );
}
