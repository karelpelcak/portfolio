import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="section wrap" id="work">
      <Reveal className="section-head">
        <span className="eyebrow">Experience — 02 / 05</span>
        <h2>Časová osa</h2>
      </Reveal>
      <div className="tl">
        {timeline.map((row) => (
          <Reveal className="tl-row" key={row.when}>
            <div className="tl-when">{row.when}</div>
            <div>
              <div className="tl-role">{row.role}</div>
              <div className="tl-co">{row.co}</div>
              <p className="tl-desc">{row.desc}</p>
              <div className="tl-tags">
                {row.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`tag ${tag.accent ? "tag-accent" : "tag-neutral"}`}
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
