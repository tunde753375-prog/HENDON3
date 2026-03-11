import Link from "next/link";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | Hendon Massages`,
    description: service.fullDesc.substring(0, 155),
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== params.slug);

  return (
    <div style={{ fontFamily: "Georgia, serif", paddingTop: "72px" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #f5ede3, #e8d9c8)",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{service.icon}</div>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#8b6f4e", textTransform: "uppercase", marginBottom: "0.8rem" }}>
          Hendon Massages
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "1rem", color: "#2c2316" }}>
          {service.name}
        </h1>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "2rem" }}>
          <span style={{ fontSize: "1.8rem", fontWeight: 700, color: "#8b6f4e" }}>£{service.price}</span>
          <span style={{ fontSize: "1rem", color: "#8b7a68", alignSelf: "center" }}>{service.duration}</span>
        </div>
        <Link
          href="/contact"
          style={{
            background: "#8b6f4e",
            color: "#fff",
            textDecoration: "none",
            padding: "1rem 2.8rem",
            fontSize: "0.82rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            borderRadius: "2px",
          }}
        >
          Book This Treatment
        </Link>
      </section>

      <section style={{ maxWidth: "750px", margin: "0 auto", padding: "5rem 2rem" }}>
        <p style={{ fontSize: "1.05rem", color: "#5a4a39", lineHeight: 1.95, marginBottom: "3rem" }}>
          {service.fullDesc}
        </p>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 400, marginBottom: "1.2rem", color: "#2c2316" }}>
          Benefits
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "3rem" }}>
          {service.benefits.map((b) => (
            <div key={b} style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <span style={{ color: "#8b6f4e", fontWeight: 700 }}>✓</span>
              <span style={{ color: "#6b5a47", fontSize: "0.95rem" }}>{b}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#f5ede3",
            padding: "2rem 2.5rem",
            borderRadius: "4px",
            borderLeft: "3px solid #8b6f4e",
            marginBottom: "3rem",
          }}
        >
          <p style={{ color: "#5a4a39", lineHeight: 1.8, marginBottom: "1rem", fontStyle: "italic" }}>
            All treatments are women-only and take place in a calm, professional environment. Jayne is based in Hendon NW4 and serves clients from Colindale, Golders Green, Mill Hill, Edgware and Brent Cross.
          </p>
          <Link href="/contact" style={{ color: "#8b6f4e", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
            Book your {service.name} →
          </Link>
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 400, marginBottom: "1.5rem", color: "#2c2316" }}>
          Other Treatments
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "4px",
                  border: "1px solid #e8ddd0",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#2c2316", marginTop: "0.5rem", marginBottom: "0.3rem" }}>
                  {s.name}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#8b6f4e", fontWeight: 600 }}>£{s.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
