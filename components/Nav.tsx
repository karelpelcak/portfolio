import { navLinks } from "@/lib/content";

export default function Nav() {
  return (
    <div className="topbar">
      <nav className="nav">
        <span className="nav-brand brand-dot">
          Karel Pelčák<b>.</b>
        </span>
        <div className="topnav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contact">
            Kontakt
          </a>
        </div>
      </nav>
    </div>
  );
}
