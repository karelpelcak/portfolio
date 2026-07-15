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
    <section className="section wrap" id="contact">
      <div className="contact-grid">
        <Reveal>
          <span className="eyebrow">Contact — 05 / 05</span>
          <h2>
            Máte projekt
            <br />
            na hraně?
          </h2>
          <p className="lede">
            Beru omezený počet zakázek. Napište mi pár řádků o tom, co stavíte —
            ozvu se do 24 hodin.
          </p>
          <div className="contact-meta">
            {contactMeta.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href}>
                <Icon size={22} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal
          as="form"
          className="card elev-md"
          style={{ padding: 28 }}
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
            <div className="seg" role="group" style={{ width: "100%" }}>
              {budgets.map((b) => (
                <label
                  key={b}
                  className="seg-opt"
                  style={{ flex: 1, justifyContent: "center" }}
                >
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
              placeholder="Co stavíte?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* honeypot — skrytý před uživateli, chytá boty */}
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
          >
            {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
          </button>

          {status === "success" && (
            <p
              role="status"
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 14,
                color: "var(--color-accent-300)",
              }}
            >
              Díky! Zpráva odešla, ozvu se do 24 hodin.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 14,
                color: "var(--color-neutral-300)",
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
