# Portfolio — Karel Pelčák

Osobní portfolio full-stack vývojáře. Jednostránkový web s tmavým „Nocturne"
designem, sekce Hero → O mně → Statistiky → Zkušenosti → Projekty → Tech stack →
Kontakt s funkčním kontaktním formulářem.

## Stack

- **Next.js** (App Router, React Server Components)
- **Tailwind CSS** v4
- **Inter** přes `next/font/google`
- **Phosphor Icons** (`@phosphor-icons/react`)
- **Resend** pro odesílání e-mailů z kontaktního formuláře
- Nasazeno na **Vercel**

## Vývoj

```bash
bun install
bun run dev
```

App poběží na [http://localhost:3000](http://localhost:3000).

## Proměnné prostředí

Zkopíruj `.env.example` do `.env.local` a vyplň:

| Proměnná         | Popis                                                        |
| ---------------- | ------------------------------------------------------------ |
| `RESEND_API_KEY` | API klíč z [resend.com](https://resend.com) (začíná `re_`)   |
| `CONTACT_FROM`   | Odesílatel na ověřené doméně, např. `Portfolio <noreply@…>`  |
| `CONTACT_TO`     | Adresa, kam se doručí poptávky z formuláře                   |

Kontaktní formulář posílá `POST` na `app/api/contact/route.ts`, který přes Resend
odešle e-mail (s reply-to na adresu odesílatele). Bez nastavených proměnných
endpoint vrátí `500` a nic neodešle.

## Struktura

```
app/            layout, page, globals.css, api/contact route handler
components/     Nav, Hero, About, StatBand, Timeline, Projects, TechStack, Contact, Footer, Reveal
lib/content.ts  veškerý text a data sekcí jako typed konstanty
reference/      původní návrhové reference (HTML/CSS) designu Nocturne
```

## Build

```bash
bun run build
```
