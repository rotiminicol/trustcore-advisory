/**
 * Quiet Authority shared shell — persistent Trustcore seal, editorial navigation,
 * and measured route transitions keep every dedicated page in one visual universe.
 */
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { SocialLinks } from "./SocialLinks";

const navItems = [
  ["Expertise", "/expertise"],
  ["Services", "/services"],
  ["Approach", "/approach"],
  ["About Eva", "/about"],
];

function Mark({ className = "" }: { className?: string }) {
  return <img className={className} src="/manus-storage/trustcore-monogram_7213fa8a.png" alt="Trustcore Advisory monogram" />;
}

export function BrandLockup() {
  return <Link href="/" className="brand-lockup" aria-label="Trustcore Advisory home"><Mark className="brand-lockup__mark" /><span className="brand-lockup__name">TRUSTCORE</span><span className="brand-lockup__sub">Advisory</span></Link>;
}

export function SiteShell({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setOpen(false);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".motion-reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [location]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className={`site-shell route-${tone}`}>
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner"><BrandLockup />
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <Link href={href} className={location === href ? "is-active" : ""} key={href}>{label}</Link>)}</nav>
        <Link href="/contact" className={`header-cta ${location === "/contact" ? "is-active" : ""}`}>Start a conversation <ArrowUpRight /></Link>
        <button type="button" className="mobile-menu-trigger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-hidden={!open}>
      <div className="mobile-nav__content"><span className="eyebrow eyebrow--gold">Navigate</span>{navItems.map(([label, href], index) => <Link key={href} href={href} className="mobile-nav__link" style={{ transitionDelay: `${80 + index * 50}ms` }}>{label}<ArrowUpRight /></Link>)}<Link href="/contact" className="mobile-nav__cta">Start a conversation <ArrowUpRight /></Link></div>
    </div>
    {children}
    <footer className="site-footer"><div className="site-footer__top"><BrandLockup /><div className="site-footer__summary"><p>Hospitality operations · customer experience · security advisory · business consulting</p><SocialLinks /></div><Link href="/contact">Start a conversation <ArrowUpRight /></Link></div><div className="site-footer__bottom"><span>© {new Date().getFullYear()} TRUSTCORE ADVISORY</span><span>Eva Kyriakou · Remote consulting worldwide</span><span><Globe2 /> Cyprus & global</span></div></footer>
  </div>;
}

export function PageEyebrow({ chapter, children }: { chapter: string; children: ReactNode }) {
  return <span className="eyebrow"><b>{chapter}</b>{children}</span>;
}
