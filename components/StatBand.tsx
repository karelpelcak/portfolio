import Reveal from "@/components/Reveal";
import { bandStats } from "@/lib/content";

export default function StatBand() {
  return (
    <div className="wrap" style={{ paddingBottom: 8 }}>
      <Reveal className="metrics">
        {bandStats.map((s) => (
          <div className="metric" key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
