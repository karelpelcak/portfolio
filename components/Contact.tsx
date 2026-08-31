"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { contactMeta } from "@/lib/content";

const budgets = ["< 5k €", "5–20k €", "20k €+"] as const;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState<(typeof budgets)[number]>("5–20k €");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, budget, message, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Zprávu se nepodařilo odeslat.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setBudget("5–20k €");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.");
    }
  }

  return (
    <section className="section wrap contact" id="contact">
      <div className="contact-grid">
        <Reveal>
          <div className="section-label">
            <b>Kontakt</b> — Let&apos;s build
          </div>
          <h2>
            Máte projekt
            <br />
            na hraně?
          </h2>
          <p className="lede">
            Beru omezený počet zakázek. Napište mi pár řádků o tom, co stavíte —
            ozvu se do 24 hodin s dalším krokem.
          </p>

          <div className="contact-meta">
            {contactMeta.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <span className="contact-icon">
                  <Icon size={16} weight="bold" />
                </span>
                {label}
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "var(--steel-dim)",
            }}
          >
            <i
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: "#1ed760",
                boxShadow: "0 0 0 4px rgba(30,215,96,.14)",
                display: "inline-block",
              }}
            />
            Odpovídám do 24 h · průměr 4 h
          </div>
        </Reveal>

        <Reveal
          as="form"
          className="form-card"
          onSubmit={onSubmit}
        >
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Jméno</label>
              <input
                id="name"
                className="input"
                placeholder="Vaše jméno"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="vy@firma.cz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label>Rozpočet</label>
            <div className="seg" role="group">
              {budgets.map((b) => (
                <label key={b} className="seg-opt">
                  <input
                    type="radio"
                    name="b"
                    checked={budget === b}
                    onChange={() => setBudget(b)}
                  />
                  {b}
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Zpráva</label>
            <textarea
              id="message"
              className="input"
              placeholder="Co stavíte? Stack, deadline, rozpočet…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* honeypot */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
            <label htmlFor="company">Firma</label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={status === "sending"}
            style={{ marginTop: 6 }}
          >
            {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
          </button>

          <p
            style={{
              marginTop: 10,
              fontSize: 11,
              color: "var(--steel-dim)",
              textAlign: "center",
              fontFamily: "var(--font-mono)",
            }}
          >
            Odesláním souhlasíte se zpracováním údajů pro odpověď.
          </p>

          {status === "success" && (
            <p
              role="status"
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "#1ed760",
                background: "rgba(30,215,96,.08)",
                border: "1px solid rgba(30,215,96,.18)",
                padding: "10px 12px",
                borderRadius: 10,
                lineHeight: 1.5,
              }}
            >
              Díky! Zpráva odešla — ozvu se do 24 hodin.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "var(--signal-soft)",
                background: "var(--signal-faint)",
                border: "1px solid rgba(255,59,31,.18)",
                padding: "10px 12px",
                borderRadius: 10,
                lineHeight: 1.5,
              }}
            >
              {error}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
