import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { heroMeta } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div style={{ maxWidth: 860 }}>
          <span className="hero-kicker reveal in">
            Full-Stack Developer · Cloudflare Stack
          </span>

          <h1 className="reveal in" style={{ transitionDelay: "80ms" }}>
            Stavím
            <br />
            rychlé
            <br />
            produkty
            <br />
            na <em>hraně</em> sítě.
          </h1>

          <p className="hero-lede reveal in" style={{ transitionDelay: "140ms" }}>
            Full-stack vývojář se specializací na edge computing. Od návrhu API
            po pixel-perfect UI — Next.js, Hono a Cloudflare Workers. Based in
            Zlín, working worldwide.
          </p>

          <div
            className="hero-actions reveal in"
            style={{ transitionDelay: "180ms" }}
          >
            <a className="btn btn-primary lg" href="#contact">
              Napište mi <ArrowRight size={16} weight="bold" />
            </a>
            <a className="btn btn-ghost lg" href="#projects">
              Vybrané projekty <ArrowUpRight size={16} />
            </a>
          </div>

          <div
            className="hero-metrics reveal in"
            style={{ transitionDelay: "220ms" }}
          >
            {heroMeta.map((m) => (
              <div className="hero-metric" key={m.l}>
                <div className="n">{m.n}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
