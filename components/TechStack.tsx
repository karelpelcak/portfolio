import Reveal from "@/components/Reveal";
import { stack } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="section wrap" id="stack">
      <Reveal className="section-head">
        <div className="section-label">
          <b>Stack</b> — Toolbox
        </div>
        <h2>Tech stack</h2>
        <p>Vybrané nástroje, se kterými doručuju nejrychleji a nejspolehlivěji.</p>
      </Reveal>

      <div className="stack-grid">
        {stack.map((col) => (
          <Reveal className="stack-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <i className="stack-dot" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
