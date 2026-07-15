import { Diamond } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { stack } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="section wrap" id="stack">
      <Reveal className="section-head">
        <span className="eyebrow">Toolbox — 04 / 05</span>
        <h2>Tech stack</h2>
      </Reveal>
      <Reveal className="stack-grid">
        {stack.map((col) => (
          <div className="stack-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <Diamond size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
