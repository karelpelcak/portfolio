import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  budget?: unknown;
  message?: unknown;
  // honeypot — must stay empty
  company?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  // Bot trap: real users never fill the hidden field.
  if (asString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const budget = asString(body.budget);
  const message = asString(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Vyplňte prosím jméno, e-mail a zprávu." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Zadejte platnou e-mailovou adresu." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Odesílatel MUSÍ být na doméně ověřené v Resend.
  const from = process.env.CONTACT_FROM ?? "Portfolio <noreply@karelpelcak.eu>";
  const to = process.env.CONTACT_TO ?? "pelcak.karel@gmail.com";

  if (!apiKey) {
    console.error("Contact form: chybí RESEND_API_KEY.");
    return NextResponse.json(
      { error: "Odesílání e-mailů není nakonfigurováno." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const esc = (s: string) =>
    s.replace(/[&<>"]/g, (c) =>
      c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;"
    );

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nová poptávka z portfolia — ${name}`,
    text: [
      `Jméno: ${name}`,
      `E-mail: ${email}`,
      `Rozpočet: ${budget || "neuvedeno"}`,
      "",
      "Zpráva:",
      message,
    ].join("\n"),
    html: `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.6;color:#1a1a1a">
  <h2 style="margin:0 0 16px;font-weight:600">Nová poptávka z portfolia</h2>
  <p style="margin:0 0 4px"><strong>Jméno:</strong> ${esc(name)}</p>
  <p style="margin:0 0 4px"><strong>E-mail:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
  <p style="margin:0 0 16px"><strong>Rozpočet:</strong> ${esc(budget || "neuvedeno")}</p>
  <p style="margin:0 0 6px"><strong>Zpráva:</strong></p>
  <p style="margin:0;white-space:pre-wrap">${esc(message)}</p>
</div>`,
  });

  if (error) {
    console.error("Contact form: Resend selhal", error);
    return NextResponse.json(
      { error: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
