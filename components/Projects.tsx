import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="section wrap" id="projects">
      <Reveal className="section-head">
        <div className="section-label">
          <b>Projekty</b> — Selected work
        </div>
        <h2>Vybrané projekty</h2>
        <p>
          Produkty, kde jsem táhl od architektury po launch. Edge-native,
          typově bezpečné, rychlé na každém kontinentu.
        </p>
      </Reveal>

      <div className="proj-grid">
        {projects.map((p) => (
          <Reveal as="article" className="proj" key={p.num}>
            <div className="proj-shot">
              <Image
                src={p.image}
                alt={p.screenshot}
                fill
                sizes="(max-width: 760px) 100vw, 600px"
              />
            </div>
            <div className="proj-body">
              <div className="proj-top">
                <span className="proj-num">{p.num}</span>
                <a
                  className="proj-arrow"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Otevřít ${p.title}`}
                >
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="go">
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <span>Otevřít projekt</span> <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
