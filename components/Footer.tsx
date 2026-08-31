export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© 2026 Karel Pelčák — Full-Stack Developer · Zlín</span>
        <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--signal)", display: "inline-block" }} />
          Postaveno na hraně · Cloudflare Workers
        </span>
      </div>
    </footer>
  );
}
