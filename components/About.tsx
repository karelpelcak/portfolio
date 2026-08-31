import Reveal from "@/components/Reveal";
import { aboutParagraphs, aboutList } from "@/lib/content";

export default function About() {
  return (
    <section className="section wrap" id="about">
      <Reveal className="section-head">
        <div className="section-label">
          <b>O mně</b> — Field notes
        </div>
        <h2>Inženýr, který doručuje.</h2>
        <p>
          Nejsem agentura. Jsem jeden člověk, který vezme nápad od whiteboardu až
          po produkci — a drží ho v provozu.
        </p>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-copy">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal as="ul" className="about-list" style={{ transitionDelay: "80ms" } as React.CSSProperties}>
          {aboutList.map(({ icon: Icon, lead, text }) => (
            <li className="about-item" key={lead}>
              <span className="about-icon">
                <Icon size={20} weight="fill" />
              </span>
              <span>
                <b>{lead}</b>
                <span>{text}</span>
              </span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
