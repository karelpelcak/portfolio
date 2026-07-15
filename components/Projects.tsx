import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="section wrap" id="projects">
      <Reveal className="section-head">
        <span className="eyebrow">Selected work — 03 / 05</span>
        <h2>Vybrané projekty</h2>
      </Reveal>
      <div className="proj-grid">
        {projects.map((p) => (
          <Reveal as="article" className="card proj" key={p.num}>
            <div className="img-wrap">
              <div className="proj-shot">
                <Image
                  src={p.image}
                  alt={p.screenshot}
                  fill
                  sizes="(max-width: 900px) 90vw, 560px"
                />
              </div>
            </div>
            <span className="proj-num">{p.num}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag tag-outline" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="go">
              <a href={p.href}>
                Case study <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
