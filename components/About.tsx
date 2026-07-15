import Reveal from "@/components/Reveal";
import { aboutParagraphs, aboutList } from "@/lib/content";

export default function About() {
  return (
    <section className="section wrap" id="about">
      <Reveal className="section-head">
        <span className="eyebrow">O mně — 01 / 05</span>
        <h2>Inženýr, který doručuje.</h2>
      </Reveal>
      <Reveal className="about-grid">
        <div>
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="about-list">
          {aboutList.map(({ icon: Icon, lead, text }) => (
            <li key={lead}>
              <Icon size={20} />
              <span>
                <b>{lead}</b> {text}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
