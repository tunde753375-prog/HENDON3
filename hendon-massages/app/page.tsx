import Link from "next/link";
import { services, areas, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #faf8f5 0%, #f0e8dc 55%, #e8d9c8 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "8rem 2rem 4rem",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(139,111,78,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "100px",
            bottom: "-150px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(184,164,140,0.1)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.4em",
              color: "#8b6f4e",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Women-Only Massage Therapy · Hendon, North London
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 1.04,
              fontWeight: 400,
              color: "#2c2316",
              marginBottom: "1.8rem",
              letterSpacing: "-0.01em",
            }}
          >
            Restore.
            <br />
            <em style={{ fontStyle: "italic", color: "#8b6f4e" }}>Renew.</em>
            <br />
            Revive.
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#6b5a47",
              lineHeight: 1.85,
              marginBottom: "2.8rem",
              maxWidth: "500px",
              margin: "0 auto 2.8rem",
            }}
          >
            Professional massage therapy for women in Hendon and surrounding North London areas.
            Whether you&apos;re recovering from injury or simply deserve a moment of peace —{" "}
            <strong>Jayne has you covered.</strong>
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "#8b6f4e",
                color: "#faf8f5",
                textDecoration: "none",
                padding: "1.1rem 2.8rem",
                fontSize: "0.82rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderRadius: "2px",
              }}
            >
              Book a Treatment
            </Link>
            <Link
              href="/services"
              style={{
                background: "transparent",
                color: "#8b6f4e",
                border: "1px solid #8b6f4e",
                textDecoration: "none",
                padding: "1.1rem 2.8rem",
                fontSize: "0.82rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderRadius: "2px",
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section
        style={{
          background: "#2c2316",
          color: "#f0e8dc",
          padding: "3.5rem 2rem",
          textAlign: "center",
        }}
      >
        <p style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.95, letterSpacing: "0.015em" }}>
          Hi, I&apos;m <strong>Jayne</strong> — a fully qualified massage therapist based in Hendon, NW4. I work{" "}
          <em>exclusively with women</em> to provide a safe, comfortable, and deeply therapeutic experience. From sports
          recovery to pure relaxation, every session is tailored entirely to you.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#8b6f4e", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            What We Offer
          </p>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 400 }}>Our Treatments</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "2.2rem 1.8rem",
                  borderRadius: "4px",
                  border: "1px solid #e8ddd0",
                  height: "100%",
                  boxShadow: "0 2px 16px rgba(44,35,22,0.05)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 600, marginBottom: "0.6rem", color: "#2c2316" }}>{s.name}</h3>
                <p style={{ fontSize: "0.82rem", color: "#8b7a68", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                  {s.shortDesc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#8b6f4e", fontWeight: 700, fontSize: "1.05rem" }}>£{s.price}</span>
                  <span style={{ fontSize: "0.75rem", color: "#a89b8a" }}>{s.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/services"
            style={{
              color: "#8b6f4e",
              border: "1px solid #8b6f4e",
              textDecoration: "none",
              padding: "0.9rem 2.2rem",
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "2px",
            }}
          >
            All Services &amp; Pricing →
          </Link>
        </div>
      </section>

      {/* AREAS */}
      <section style={{ background: "#f5ede3", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "950px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#8b6f4e", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Coverage
          </p>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 400, marginBottom: "0.8rem" }}>Areas We Serve</h2>
          <p style={{ color: "#7a6a57", marginBottom: "2.8rem", fontSize: "1rem" }}>
            Based in Hendon NW4, covering all surrounding North London areas
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" }}>
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/massages/${a.slug}`}
                style={{
                  background: "#fff",
                  color: "#6b5a47",
                  border: "1px solid #d4c4b0",
                  textDecoration: "none",
                  padding: "0.75rem 1.8rem",
                  fontSize: "0.88rem",
                  letterSpacing: "0.06em",
                  borderRadius: "100px",
                }}
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#8b6f4e", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Reviews
          </p>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 400 }}>What Clients Say</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                padding: "2.5rem",
                borderRadius: "4px",
                border: "1px solid #e8ddd0",
                boxShadow: "0 2px 16px rgba(44,35,22,0.05)",
              }}
            >
              <div style={{ color: "#c4a882", fontSize: "1.8rem", lineHeight: 1, marginBottom: "1rem" }}>&ldquo;</div>
              <p style={{ fontSize: "0.92rem", color: "#5a4a39", lineHeight: 1.85, marginBottom: "1.5rem", fontStyle: "italic" }}>
                {t.text}
              </p>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "#2c2316" }}>{t.name}</p>
                <p style={{ fontSize: "0.78rem", color: "#a89b8a" }}>{t.area}</p>
                <div style={{ marginTop: "0.4rem", color: "#c4a882", letterSpacing: "0.1em" }}>
                  {"★".repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          background: "linear-gradient(135deg, #2c2316, #4a3728)",
          color: "#faf8f5",
          padding: "6rem 2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#c4a882", textTransform: "uppercase", marginBottom: "1rem" }}>
          Women-Only · Hendon NW4
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "1.2rem" }}>
          Ready to Feel Your Best?
        </h2>
        <p style={{ color: "#c4a882", marginBottom: "3rem", fontSize: "1.05rem", maxWidth: "420px", margin: "0 auto 3rem" }}>
          Book your session today with Hendon&apos;s expert women-only massage therapist.
        </p>
        <Link
          href="/contact"
          style={{
            background: "#c4a882",
            color: "#2c2316",
            textDecoration: "none",
            padding: "1.2rem 3.5rem",
            fontSize: "0.82rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            borderRadius: "2px",
            fontWeight: 700,
          }}
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
