import Reveal from "@/components/Reveal";
import { bandStats } from "@/lib/content";

export default function StatBand() {
  return (
    <div className="band">
      <Reveal className="wrap">
        <span className="eyebrow band-eyebrow">By the numbers</span>
        <div className="band-grid">
          {bandStats.map((s) => (
            <div key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
