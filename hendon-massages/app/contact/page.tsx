import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book a Massage | Hendon Massages",
  description:
    "Book a women-only massage in Hendon, North London. Contact Jayne to arrange your Swedish, Sports, Pregnancy, Hot Stone or Aromatherapy massage treatment.",
};

const contactCards = [
  { icon: "📍", label: "Location", val: "Hendon, NW4\nNorth London" },
  { icon: "📞", label: "Phone", val: "07XXX XXX XXX" },
  { icon: "✉️", label: "Email", val: "jayne@hendonmassages.co.uk" },
];

export default function ContactPage() {
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
          Get In Touch
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 400, marginBottom: "1rem", color: "#2c2316" }}>
          Book a Session
        </h1>
        <p style={{ color: "#7a6a57", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.8 }}>
          Fill in the form below and Jayne will get back to you within 24 hours to confirm your appointment.
        </p>
      </section>

      <section style={{ maxWidth: "750px", margin: "0 auto", padding: "5rem 2rem" }}>
        <ContactForm />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          {contactCards.map((c) => (
            <div
              key={c.label}
              style={{
                background: "#fff",
                padding: "1.8rem 1.2rem",
                borderRadius: "4px",
                border: "1px solid #e8ddd0",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(44,35,22,0.04)",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{c.icon}</div>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.4rem" }}>
                {c.label}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#2c2316", whiteSpace: "pre-line" }}>{c.val}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
