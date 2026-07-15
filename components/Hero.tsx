import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { heroMeta } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <span className="eyebrow reveal in">
          Full-Stack Developer · Cloudflare Stack
        </span>
        <h1 className="reveal in">
          Stavím rychlé produkty
          <br />
          na <span className="accent">hraně sítě.</span>
        </h1>
        <p className="lede reveal in">
          Full-stack vývojář se specializací na edge computing. Od návrhu API po
          pixel-perfect UI — NextJS, Hono a Cloudflare Workers. Based in Prague,
          working worldwide.
        </p>
        <div className="hero-actions reveal in">
          <a className="btn btn-primary lg" href="#contact">
            Napište mi <ArrowRight size={16} />
          </a>
          <a className="btn btn-secondary lg" href="#projects">
            Vybrané projekty
          </a>
        </div>
        <div className="hero-meta reveal in">
          {heroMeta.map((m) => (
            <div key={m.l}>
              <div className="n">{m.n}</div>
              <div className="l">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
