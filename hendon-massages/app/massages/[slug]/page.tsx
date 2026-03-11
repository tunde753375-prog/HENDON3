import Link from "next/link";
import { areas, services } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: `Massage in ${area.name} | Women-Only | Hendon Massages`,
    description: `Professional women-only massage therapy in ${area.name} ${area.postcode}. Swedish, Sports, Pregnancy, Hot Stone and Aromatherapy massages. Book with Jayne at Hendon Massages.`,
  };
}

export default function AreaPage({ params }: Props) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) notFound();

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
          North London · {area.postcode}
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 400, marginBottom: "1rem", color: "#2c2316" }}>
          Massage in {area.name}
        </h1>
        <p style={{ color: "#7a6a57", maxWidth: "580px", margin: "0 auto 2.5rem", fontSize: "1rem", lineHeight: 1.85 }}>
          {area.description}
        </p>
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
          Book in {area.name}
        </Link>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 400, marginBottom: "0.5rem", color: "#2c2316" }}>
          Treatments Available in {area.name}
        </h2>
        <p style={{ color: "#7a6a57", marginBottom: "2.5rem" }}>
          All 5 of Jayne&apos;s treatments are available to clients in {area.name}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem", marginBottom: "3.5rem" }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#fff",
                  padding: "1.8rem",
                  borderRadius: "4px",
                  border: "1px solid #e8ddd0",
                  boxShadow: "0 2px 12px rgba(44,35,22,0.04)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1.6rem" }}>{s.icon}</span>
                  <span style={{ color: "#8b6f4e", fontWeight: 700, fontSize: "1.1rem" }}>£{s.price}</span>
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2c2316", marginBottom: "0.3rem" }}>{s.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#8b7a68" }}>{s.duration}</p>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            background: "#f5ede3",
            padding: "2.5rem 3rem",
            borderRadius: "4px",
            marginBottom: "3rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "1rem", color: "#2c2316" }}>
            Why Choose Hendon Massages in {area.name}?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
            {[
              { icon: "👩", title: "Women-Only", desc: "A safe, comfortable space exclusively for women." },
              { icon: "🎓", title: "Fully Qualified", desc: "Jayne holds professional massage therapy qualifications." },
              { icon: "📍", title: "Local to You", desc: `Just minutes from ${area.name} — quick and easy to reach.` },
              { icon: "✨", title: "Tailored to You", desc: "Every session is personalised to your specific needs." },
            ].map((item) => (
              <div key={item.title}>
                <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#2c2316", marginBottom: "0.3rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#6b5a47", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "#2c2316" }}>
            Also Serving Nearby Areas
          </h3>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            {area.nearby.map((n) => {
              const nearby = areas.find((a) => a.name === n);
              return nearby ? (
                <Link
                  key={n}
                  href={`/massages/${nearby.slug}`}
                  style={{
                    background: "#fff",
                    color: "#6b5a47",
                    border: "1px solid #d4c4b0",
                    textDecoration: "none",
                    padding: "0.55rem 1.3rem",
                    fontSize: "0.82rem",
                    borderRadius: "100px",
                  }}
                >
                  {n}
                </Link>
              ) : null;
            })}
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/massages"
            style={{
              color: "#8b6f4e",
              border: "1px solid #8b6f4e",
              textDecoration: "none",
              padding: "0.8rem 1.8rem",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderRadius: "2px",
            }}
          >
            ← All Areas
          </Link>
          <Link
            href="/contact"
            style={{
              background: "#8b6f4e",
              color: "#fff",
              textDecoration: "none",
              padding: "0.8rem 1.8rem",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderRadius: "2px",
            }}
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
