"use client";
import { useState } from "react";
import { services, areas } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "4rem 3rem",
          borderRadius: "4px",
          border: "1px solid #e8ddd0",
          textAlign: "center",
          boxShadow: "0 2px 20px rgba(44,35,22,0.06)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1.2rem" }}>🌿</div>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 400, marginBottom: "0.8rem", color: "#2c2316" }}>
          Thank You!
        </h2>
        <p style={{ color: "#7a6a57", lineHeight: 1.8 }}>
          Your booking request has been received. Jayne will be in touch within 24 hours to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        padding: "3rem",
        borderRadius: "4px",
        border: "1px solid #e8ddd0",
        boxShadow: "0 2px 20px rgba(44,35,22,0.06)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
        {[
          { id: "firstName", label: "First Name", type: "text" },
          { id: "lastName", label: "Last Name", type: "text" },
        ].map((f) => (
          <div key={f.id}>
            <label
              htmlFor={f.id}
              style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.4rem" }}
            >
              {f.label}
            </label>
            <input
              id={f.id}
              type={f.type}
              required
              style={{ width: "100%", padding: "0.85rem", border: "1px solid #d4c4b0", borderRadius: "2px", fontSize: "0.9rem", background: "#faf8f5", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
            />
          </div>
        ))}
      </div>

      {[
        { id: "email", label: "Email Address", type: "email" },
        { id: "phone", label: "Phone Number", type: "tel" },
      ].map((f) => (
        <div key={f.id} style={{ marginBottom: "1.2rem" }}>
          <label htmlFor={f.id} style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.4rem" }}>
            {f.label}
          </label>
          <input
            id={f.id}
            type={f.type}
            required
            style={{ width: "100%", padding: "0.85rem", border: "1px solid #d4c4b0", borderRadius: "2px", fontSize: "0.9rem", background: "#faf8f5", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
          />
        </div>
      ))}

      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="treatment" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.4rem" }}>
          Preferred Treatment
        </label>
        <select
          id="treatment"
          style={{ width: "100%", padding: "0.85rem", border: "1px solid #d4c4b0", borderRadius: "2px", fontSize: "0.9rem", background: "#faf8f5", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
        >
          <option value="">Select a treatment...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name} — £{s.price} ({s.duration})
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="area" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.4rem" }}>
          Your Area
        </label>
        <select
          id="area"
          style={{ width: "100%", padding: "0.85rem", border: "1px solid #d4c4b0", borderRadius: "2px", fontSize: "0.9rem", background: "#faf8f5", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
        >
          <option value="">Select your area...</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name} ({a.postcode})
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <label htmlFor="message" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b7a68", marginBottom: "0.4rem" }}>
          Message / Any Notes
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell Jayne a bit about what you're looking for..."
          style={{ width: "100%", padding: "0.85rem", border: "1px solid #d4c4b0", borderRadius: "2px", fontSize: "0.9rem", background: "#faf8f5", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          background: "#8b6f4e",
          color: "#fff",
          border: "none",
          padding: "1.2rem",
          fontSize: "0.82rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          cursor: "pointer",
          borderRadius: "2px",
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        Send Booking Request
      </button>
    </form>
  );
}
