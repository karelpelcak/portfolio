import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="section wrap" id="work">
      <Reveal className="section-head">
        <div className="section-label">
          <b>Zkušenosti</b> — Timeline
        </div>
        <h2>Časová osa</h2>
        <p>
          Od střední přes RegioJet až po Web3 na hraně. Každý krok — menší tým,
          větší dopad.
        </p>
      </Reveal>

      <div className="tl">
        {timeline.map((row) => (
          <Reveal className="tl-row" key={row.when}>
            <div className="tl-dot" aria-hidden />
            <div className="tl-card">
              <div className="tl-when">{row.when}</div>
              <div className="tl-role">{row.role}</div>
              <div className="tl-co">{row.co}</div>
              <p className="tl-desc">{row.desc}</p>
              <div className="tl-tags">
                {row.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`tag ${tag.accent ? "tag-accent" : "tag-blue"}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
