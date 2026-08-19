/**
 * Quiet Authority — Contemporary editorial private-advisory styling.
 * Cypress Green, limestone surfaces, Cormorant Garamond display type, and measured brass details
 * present operational expertise with composed warmth and clear, conversion-focused hierarchy.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  Globe2,
  Menu,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const serviceTracks = [
  {
    number: "01",
    title: "Hospitality\noperations",
    descriptor: "Build smoother, more consistent service behind every guest-facing moment.",
    points: [
      "Hotel operational reviews",
      "Restaurant & café performance",
      "Service standards & procedures",
    ],
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Guest & customer\nexperience",
    descriptor: "Turn the everyday interactions that shape loyalty into a repeatable strength.",
    points: [
      "Guest experience optimisation",
      "Customer service improvement",
      "Client & guest relations",
    ],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Security &\nrisk readiness",
    descriptor: "Strengthen the quiet systems that keep people, places, and operations prepared.",
    points: [
      "Workplace & hospitality reviews",
      "Risk and incident procedures",
      "Emergency preparedness guidance",
    ],
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Teams & business\nimprovement",
    descriptor: "Give people the clarity, coaching, and operational habits to perform with confidence.",
    points: [
      "Staff coaching & development",
      "Operational improvement",
      "Communication & promotion strategy",
    ],
    icon: UsersRound,
  },
];

const operatingSteps = [
  {
    number: "I",
    title: "Listen closely",
    text: "We begin with the operating question beneath the surface: what is affecting service, team confidence, safety, or guest trust?",
  },
  {
    number: "II",
    title: "See the whole picture",
    text: "A focused review connects the guest journey with the real habits, handovers, procedures, and pressures behind it.",
  },
  {
    number: "III",
    title: "Create the practical path",
    text: "Clear priorities become usable recommendations, supported by coaching, standards, or structured next steps where needed.",
  },
  {
    number: "IV",
    title: "Embed what improves",
    text: "The work is designed to last in the daily rhythm of the business—not only in a report or meeting room.",
  },
];

const navigation = [
  ["Expertise", "#expertise"],
  ["Services", "#services"],
  ["Approach", "#approach"],
  ["About Eva", "#about"],
];

function TrustcoreMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/manus-storage/trustcore-monogram_7213fa8a.png"
      alt="Trustcore Advisory monogram"
    />
  );
}

function LineArrow() {
  return <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell overflow-x-hidden bg-[#f5f0e7] text-[#152520]">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="site-header__inner">
          <a className="brand-lockup" href="#top" aria-label="Trustcore Advisory home">
            <TrustcoreMark className="brand-lockup__mark" />
            <span className="brand-lockup__name">TRUSTCORE</span>
            <span className="brand-lockup__sub">Advisory</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="desktop-nav__link">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="header-cta">
            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="mobile-menu-trigger"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav__content">
          <span className="eyebrow eyebrow--light">Navigate</span>
          {navigation.map(([label, href], index) => (
            <a key={href} onClick={closeMenu} href={href} className="mobile-nav__link" style={{ transitionDelay: `${80 + index * 40}ms` }}>
              <span>{label}</span><ChevronRight className="h-5 w-5" />
            </a>
          ))}
          <a onClick={closeMenu} href="#contact" className="mobile-nav__cta">
            Start a conversation <LineArrow />
          </a>
        </div>
      </div>

      <main id="top">
        <div className="trustline-continuum" aria-hidden="true"><span /></div>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__image-wrap">
            <img
              src="/manus-storage/trustcore-hero-hospitality_a9aeabee.jpg"
              alt="Quietly appointed boutique hotel lobby"
              className="hero__image"
            />
            <div className="hero__image-overlay" />
          </div>
          <div className="hero__inner">
            <div className="hero__rail hero-reveal">
              <span className="hero__index">01 / 05</span>
              <span className="hero__vertical">Independent Advisory</span>
            </div>
            <div className="hero__content">
              <div className="hero__kicker hero-reveal hero-reveal--2">
                <span className="hero__dot" />
                Hospitality · Security · Business
              </div>
              <h1 id="hero-heading" className="hero__title hero-reveal hero-reveal--3">
                Better service is built <em>behind</em> the scenes.
              </h1>
              <div className="hero__lower hero-reveal hero-reveal--4">
                <p className="hero__intro">
                  TRUSTCORE ADVISORY helps hospitality and service businesses turn operational complexity into confident guest experiences, capable teams, and prepared environments.
                </p>
                <a href="#contact" className="button button--light group">
                  Discuss your operations <LineArrow />
                </a>
              </div>
            </div>
            <div className="hero__meta hero-reveal hero-reveal--5">
              <span>Eva Kyriakou</span>
              <span>Remote consulting worldwide</span>
            </div>
          </div>
          <a href="#expertise" aria-label="Discover Trustcore Advisory" className="hero__scroll-indicator">
            <span>Explore</span><ArrowDownRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </section>

        <section id="expertise" className="intro-section section-shell">
          <div className="trust-line" />
          <div className="intro-section__aside">
            <span className="eyebrow">The core of the work</span>
          </div>
          <div className="intro-section__main">
            <p className="display-copy">
              Service excellence does not happen by accident. It is the result of <em>clear operations, strong teams, and consistent attention</em> to every detail that clients and guests can feel.
            </p>
            <div className="intro-section__foot">
              <p>
                Led by Eva Kyriakou, TRUSTCORE brings more than two decades of experience across hotel operations, food and beverage, customer service, communications, team leadership, and security readiness.
              </p>
              <a href="#about" className="text-link group">Meet Eva <LineArrow /></a>
            </div>
          </div>
        </section>

        <section className="disciplines" aria-label="Core disciplines">
          <div className="disciplines__image-wrap">
            <img src="/manus-storage/trustcore-operations-detail_e1abcbee.jpg" className="disciplines__image" alt="Hospitality service standards and operations tools" />
          </div>
          <div className="disciplines__body">
            <div className="disciplines__topline"><span className="eyebrow eyebrow--light">Three connected disciplines</span><span className="disciplines__cross">×</span></div>
            <div className="discipline-list">
              <article className="discipline-item">
                <span className="discipline-item__number">A</span>
                <div><h2>Hospitality<br />& operations</h2><p>From hotel floors to café service, every operational touchpoint shapes the guest’s perception.</p></div>
              </article>
              <article className="discipline-item">
                <span className="discipline-item__number">B</span>
                <div><h2>Guest & customer<br />experience</h2><p>Listen more closely, respond more consistently, and create the reasons clients choose to return.</p></div>
              </article>
              <article className="discipline-item">
                <span className="discipline-item__number">C</span>
                <div><h2>Security & risk<br />awareness</h2><p>Prepared teams and thoughtful procedures help the business protect people, property, and its reputation.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="services section-shell" aria-labelledby="services-heading">
          <div className="services__head">
            <span className="eyebrow"><b className="eyebrow__chapter">02</b> Consulting services</span>
            <div><h2 id="services-heading" className="section-heading">The areas that<br /><em>move a business forward.</em></h2><p className="section-note">Focused guidance for the moments, systems, and people that matter most.</p></div>
          </div>
          <div className="service-grid">
            {serviceTracks.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.number} className="service-card">
                  <div className="service-card__top"><span>{service.number} <i>Field guide</i></span><Icon className="h-5 w-5" strokeWidth={1.45} /></div>
                  <h3>{service.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                  <p>{service.descriptor}</p>
                  <ul>
                    {service.points.map((point) => <li key={point}><Check className="h-3.5 w-3.5" strokeWidth={2.2} />{point}</li>)}
                  </ul>
                  <a href="#contact" className="service-card__link group">Explore this service <LineArrow /></a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="approach" className="approach" aria-labelledby="approach-heading">
          <div className="approach__visual">
            <img src="/manus-storage/trustcore-advisory-workspace_0516e71b.jpg" alt="Hospitality professionals collaborating in a considered workspace" />
            <div className="approach__visual-label"><span>Operating approach</span><span>02 / 05</span></div>
          </div>
          <div className="approach__content">
            <span className="eyebrow">How the work unfolds</span>
            <h2 id="approach-heading" className="section-heading section-heading--light">Practical change begins with a <em>clearer view.</em></h2>
            <p className="approach__intro">Every engagement is shaped around the specific operational question in front of you. The method is calm, collaborative, and grounded in what can be used day to day.</p>
            <div className="operating-steps">
              {operatingSteps.map((step) => <article className="operating-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="about" className="about section-shell" aria-labelledby="about-heading">
          <div className="about__portrait-block">
            <div className="about__initials">EK</div>
            <div className="about__portrait-caption"><span>Professional profile</span><span>03 / 05</span></div>
          </div>
          <div className="about__content">
            <span className="eyebrow">About Eva Kyriakou</span>
            <h2 id="about-heading" className="section-heading">Experience that connects the <em>front line</em> to the bigger picture.</h2>
            <p className="about__lead">Eva is a hospitality and business professional with over 20 years of cross-functional experience spanning hotel operations, food and beverage, guest relations, public relations, promotions, media, and team management.</p>
            <p>Her perspective is both operational and human: the experience behind a morning breakfast service, a guest interaction, a staff handover, a safety procedure, or a public-facing message is never only one thing. It is an opportunity to build confidence and improve the way a business performs.</p>
            <div className="about__credentials">
              <article><span>Licensed professional</span><strong>Security Professional<br />Republic of Cyprus</strong></article>
              <article><span>Working languages</span><strong>English & Greek<br /><i>Russian & German, conversational</i></strong></article>
              <article><span>Consulting format</span><strong>Remote advisory<br />Worldwide availability</strong></article>
            </div>
          </div>
        </section>

        <section className="principles" aria-label="Trustcore Advisory principles">
          <div className="principles__intro"><span className="eyebrow">The TRUSTCORE standard</span><p>Clear thinking. Human service. Safer operations.</p></div>
          <div className="principles__items">
            <article><span>01</span><h3>Notice what guests notice.</h3><p>Small patterns in service, communication, and care often reveal the most valuable opportunities for improvement.</p></article>
            <article><span>02</span><h3>Make standards usable.</h3><p>Procedures work when they fit real shifts, real teams, and the pace of the business—not when they sit untouched in a folder.</p></article>
            <article><span>03</span><h3>Keep people at the centre.</h3><p>Operational excellence comes from teams who understand the purpose behind their role and have the support to succeed.</p></article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-section__ambient" />
          <div className="contact-section__inner">
            <div className="contact-section__copy">
              <span className="eyebrow eyebrow--light">A considered first step</span>
              <h2 id="contact-heading">Bring an operational question.<br /><em>Leave with a clearer path forward.</em></h2>
            </div>
            <div className="contact-panel">
              <TrustcoreMark className="contact-panel__brand" />
              <MessageCircle className="contact-panel__icon h-6 w-6" strokeWidth={1.35} />
              <h3>Let’s start with the work in front of you.</h3>
              <p>TRUSTCORE ADVISORY is available for remote consulting projects and advisory work with businesses worldwide.</p>
              <a className="button button--brass group" href="mailto:?subject=Consultation%20request%20for%20TRUSTCORE%20ADVISORY">
                Request an introduction <LineArrow />
              </a>
              <span className="contact-panel__note">A preferred business email can be connected before launch.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top">
          <a className="brand-lockup brand-lockup--footer" href="#top"><TrustcoreMark className="brand-lockup__mark" /><span className="brand-lockup__name">TRUSTCORE</span><span className="brand-lockup__sub">Advisory</span></a>
          <p>Hospitality operations · customer experience · security advisory · business consulting</p>
          <a href="#top" className="footer-top-link">Back to top <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} TRUSTCORE ADVISORY</span><span>Eva Kyriakou · Remote consulting worldwide</span><span className="footer-location"><Globe2 className="h-3.5 w-3.5" /> Cyprus & global</span></div>
      </footer>
    </div>
  );
}
