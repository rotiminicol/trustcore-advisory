/**
 * Choreographed Stillness — an immersive TRUSTCORE ADVISORY experience.
 * Motion is an editorial instrument: a cinematic hospitality film, animated Trustline,
 * scroll-controlled service field guide, and measured typography support quiet authority.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  Globe2,
  Menu,
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
    eyebrow: "Operational foundations",
    statement: "Make every shift more consistent, capable, and ready for the guest experience it creates.",
    points: ["Hotel operational reviews", "Restaurant & café performance", "Service standards & procedures"],
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Guest & customer\nexperience",
    eyebrow: "The felt experience",
    statement: "Turn daily interactions into a clearer reason for guests and clients to come back.",
    points: ["Guest experience optimisation", "Customer service improvement", "Client & guest relations"],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Security &\nrisk readiness",
    eyebrow: "Prepared environments",
    statement: "Strengthen the procedures and awareness that protect people, places, and reputation.",
    points: ["Workplace & hospitality reviews", "Risk and incident procedures", "Emergency preparedness guidance"],
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Teams & business\nimprovement",
    eyebrow: "Capability that lasts",
    statement: "Give your people the coaching, clarity, and operational habits to perform with confidence.",
    points: ["Staff coaching & development", "Operational improvement", "Communication & promotion strategy"],
    icon: UsersRound,
  },
];

const operatingSteps = [
  ["I", "Listen closely", "Find the operating question beneath the surface: what is affecting service, team confidence, safety, or guest trust?"],
  ["II", "See the whole picture", "Connect the guest journey with the handovers, procedures, and pressures behind it."],
  ["III", "Create the practical path", "Turn insight into usable priorities, recommendations, and focused development."],
  ["IV", "Embed what improves", "Design progress to live in daily habits—not only in a report or a meeting room."],
];

const navigation = [
  ["Expertise", "#expertise"],
  ["Services", "#services"],
  ["Approach", "#approach"],
  ["About Eva", "#about"],
];

function TrustcoreMark({ className = "" }: { className?: string }) {
  return <img className={className} src="/manus-storage/trustcore-monogram_7213fa8a.png" alt="Trustcore Advisory monogram" />;
}

function LineArrow() {
  return <MoveRight className="line-arrow" strokeWidth={1.6} aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setLoadingProgress(100);
      setLoaded(true);
      return;
    }
    const timer = window.setInterval(() => {
      setLoadingProgress((value) => {
        const next = Math.min(value + (value < 74 ? 7 : value < 94 ? 3 : 1), 100);
        if (next === 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setLoaded(true), 360);
        }
        return next;
      });
    }, 75);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(window.scrollY / max, 1);
        document.documentElement.style.setProperty("--page-progress", progress.toFixed(4));
        document.documentElement.style.setProperty("--hero-shift", Math.min(window.scrollY * 0.16, 105).toFixed(1));
        setScrolled(window.scrollY > 18);
        const section = servicesRef.current;
        if (section && window.innerWidth > 680) {
          const rect = section.getBoundingClientRect();
          const depth = (window.innerHeight * 0.42 - rect.top) / Math.max(rect.height - window.innerHeight * 0.42, 1);
          setActiveService(Math.max(0, Math.min(serviceTracks.length - 1, Math.floor(depth * serviceTracks.length))));
        }
      });
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [loaded]);

  const activeTrack = serviceTracks[activeService];

  return (
    <div className={`site-shell ${loaded ? "site-shell--loaded" : ""}`}>
      <div className={`preloader ${loaded ? "preloader--exit" : ""}`} aria-hidden={loaded}>
        <div className="preloader__mark"><TrustcoreMark /><span>TRUSTCORE<br /><i>Advisory</i></span></div>
        <div className="preloader__progress"><span style={{ transform: `scaleX(${loadingProgress / 100})` }} /><em>{String(loadingProgress).padStart(2, "0")}</em></div>
        <p>Preparing the field guide</p>
      </div>

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="site-header__inner">
          <a className="brand-lockup" href="#top" aria-label="Trustcore Advisory home">
            <TrustcoreMark className="brand-lockup__mark" />
            <span className="brand-lockup__name">TRUSTCORE</span><span className="brand-lockup__sub">Advisory</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a href="#contact" className="header-cta">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className="mobile-menu-trigger">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav__content">
          <span className="eyebrow eyebrow--light">Navigate</span>
          {navigation.map(([label, href], index) => <a key={href} onClick={() => setMenuOpen(false)} href={href} className="mobile-nav__link" style={{ transitionDelay: `${index * 45 + 80}ms` }}><span>{label}</span><ChevronRight /></a>)}
          <a onClick={() => setMenuOpen(false)} href="#contact" className="mobile-nav__cta">Start a conversation <LineArrow /></a>
        </div>
      </div>

      <main id="top">
        <div className="trustline-continuum" aria-hidden="true"><div className="trustline-continuum__meter" /><span className="trustline-continuum__chapter trustline-continuum__chapter--one">01</span><span className="trustline-continuum__chapter trustline-continuum__chapter--two">02</span><span className="trustline-continuum__chapter trustline-continuum__chapter--three">03</span><span className="trustline-continuum__chapter trustline-continuum__chapter--four">04</span><span className="trustline-continuum__chapter trustline-continuum__chapter--five">05</span></div>

        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__media" aria-hidden="true">
            <video autoPlay muted loop playsInline poster="/manus-storage/trustcore-hero-hospitality_a9aeabee.jpg">
              <source src="/manus-storage/trustcore-hero-motion_3716887a.mp4" type="video/mp4" />
            </video>
            <div className="hero__media-shade" />
          </div>
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__inner">
            <aside className="hero__rail"><span>01 / 05</span><span>Independent advisory</span></aside>
            <div className="hero__content">
              <p className="hero__kicker hero-word-reveal"><span />Hospitality · Security · Business</p>
              <h1 id="hero-heading" className="hero__title">
                <span className="hero-line"><span>Better service is built</span></span>
                <span className="hero-line hero-line--accent"><span><em>behind</em> the scenes.</span></span>
              </h1>
              <div className="hero__lower hero-word-reveal hero-word-reveal--late">
                <p>TRUSTCORE ADVISORY helps hospitality and service businesses turn operational complexity into confident guest experiences, capable teams, and prepared environments.</p>
                <a href="#services" className="button button--light">Enter the field guide <LineArrow /></a>
              </div>
            </div>
            <div className="hero__bottom"><span>Eva Kyriakou</span><span>Remote consulting worldwide</span></div>
          </div>
          <a className="hero__scroll" href="#expertise" aria-label="Scroll to expertise"><span>Scroll to discover</span><ArrowDown /></a>
        </section>

        <section id="expertise" className="manifesto section-shell" aria-labelledby="manifesto-heading">
          <div className="manifesto__side reveal"><span className="eyebrow"><b>01</b> The core of the work</span><span className="manifesto__counter">01—02</span></div>
          <div className="manifesto__content reveal">
            <h2 id="manifesto-heading">Service excellence does not happen by accident. It is the result of <em>clear operations, strong teams, and consistent attention</em> to every detail that clients and guests can feel.</h2>
            <div><p>Led by Eva Kyriakou, TRUSTCORE brings over two decades of experience across hotel operations, food and beverage, customer service, communications, team leadership, and security readiness.</p><a href="#about" className="text-link">Meet Eva <LineArrow /></a></div>
          </div>
        </section>

        <section className="motion-statement" aria-label="Service disciplines">
          <div className="motion-statement__words" aria-hidden="true"><span>Observe</span><span>Align</span><span>Improve</span></div>
          <div className="motion-statement__image"><img src="/manus-storage/trustcore-operations-detail_e1abcbee.jpg" alt="" /></div>
          <div className="motion-statement__copy reveal"><span className="eyebrow eyebrow--light">Three connected disciplines</span><p>Hospitality operations<br /><em>Guest experience</em><br />Security & risk awareness</p><span className="motion-statement__note">The systems behind the experience</span></div>
        </section>

        <section id="services" ref={servicesRef} className="service-sequence" aria-labelledby="services-heading">
          <div className="service-sequence__sticky">
            <div className="service-sequence__label"><span className="eyebrow"><b>02</b> Consulting services</span><span>{String(activeService + 1).padStart(2, "0")} / 04</span></div>
            <div className="service-sequence__active" key={activeTrack.number}>
              <span className="service-sequence__number">{activeTrack.number}</span>
              <p>{activeTrack.eyebrow}</p>
              <h2 id="services-heading">{activeTrack.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2>
              <div className="service-sequence__statement"><activeTrack.icon /><p>{activeTrack.statement}</p></div>
              <ul>{activeTrack.points.map((point) => <li key={point}><Check />{point}</li>)}</ul>
              <a href="#contact" className="text-link">Discuss this focus <LineArrow /></a>
            </div>
            <div className="service-sequence__navigation" aria-label="Service selection">
              {serviceTracks.map((track, index) => <button type="button" onClick={() => setActiveService(index)} className={activeService === index ? "is-active" : ""} key={track.number}><span>{track.number}</span><i>{track.title.replace("\n", " ")}</i></button>)}
            </div>
            <div className="service-sequence__scroll-cue"><span>Scroll</span><i /></div>
          </div>
          <div className="service-sequence__field-notes" aria-hidden="true">
            <span>Field notes</span><p>Observe<br />the operating<br /><em>reality.</em></p><small>Audit · standards · coaching</small>
            <span>Working principle</span><p>What guests feel is shaped by what teams <em>repeat.</em></p><small>Clarity · capability · care</small>
            <span>Advisory scope</span><p>Build systems that are practical enough to use on the <em>next shift.</em></p><small>Procedures · progress · readiness</small>
          </div>
        </section>

        <section id="approach" className="approach" aria-labelledby="approach-heading">
          <div className="approach__visual reveal"><img src="/manus-storage/trustcore-advisory-workspace_0516e71b.jpg" alt="Hospitality professionals in a considered working session" /><span>Operating approach — 03 / 05</span></div>
          <div className="approach__content">
            <span className="eyebrow eyebrow--light reveal"><b>03</b> How the work unfolds</span>
            <h2 id="approach-heading" className="reveal">Practical change begins with a <em>clearer view.</em></h2>
            <p className="approach__intro reveal">Each engagement is shaped around the specific operational question in front of you. The method is calm, collaborative, and grounded in what can be used day to day.</p>
            <div className="operating-steps">
              {operatingSteps.map(([number, title, text]) => <article className="reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="about" className="about section-shell" aria-labelledby="about-heading">
          <div className="about__seal reveal"><TrustcoreMark /><span>Founder profile<br />Eva Kyriakou</span></div>
          <div className="about__content reveal">
            <span className="eyebrow"><b>04</b> About Eva Kyriakou</span>
            <h2 id="about-heading">Experience that connects the <em>front line</em> to the bigger picture.</h2>
            <p className="about__lead">Eva is a hospitality and business professional with over 20 years of cross-functional experience spanning hotel operations, food and beverage, guest relations, public relations, promotions, media, and team management.</p>
            <p>Her perspective is both operational and human: every breakfast service, guest interaction, staff handover, safety procedure, or public-facing message is an opportunity to build confidence and improve how a business performs.</p>
            <div className="about__credentials"><article><span>Licensed professional</span><strong>Security Professional<br />Republic of Cyprus</strong></article><article><span>Working languages</span><strong>English & Greek<br /><i>Russian & German, conversational</i></strong></article><article><span>Consulting format</span><strong>Remote advisory<br />Worldwide availability</strong></article></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-section__orbit" aria-hidden="true" /><div className="contact-section__orbit contact-section__orbit--inner" aria-hidden="true" />
          <div className="contact-section__inner"><div className="contact-section__copy reveal"><span className="eyebrow eyebrow--light"><b>05</b> A considered first step</span><h2 id="contact-heading">Bring an operational question.<br /><em>Leave with a clearer path forward.</em></h2></div><div className="contact-panel reveal"><TrustcoreMark className="contact-panel__mark" /><p className="contact-panel__eyebrow">TRUSTCORE ADVISORY</p><h3>Let’s begin with the work in front of you.</h3><p>Available for remote consulting projects and advisory work with businesses worldwide.</p><a className="button button--brass" href="mailto:?subject=Consultation%20request%20for%20TRUSTCORE%20ADVISORY">Request an introduction <LineArrow /></a><span>A preferred business email can be connected before launch.</span></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-footer__top"><a className="brand-lockup" href="#top"><TrustcoreMark className="brand-lockup__mark" /><span className="brand-lockup__name">TRUSTCORE</span><span className="brand-lockup__sub">Advisory</span></a><p>Hospitality operations · customer experience · security advisory · business consulting</p><a href="#top">Back to top <ArrowUpRight /></a></div><div className="site-footer__bottom"><span>© {new Date().getFullYear()} TRUSTCORE ADVISORY</span><span>Eva Kyriakou · Remote consulting worldwide</span><span><Globe2 /> Cyprus & global</span></div></footer>
    </div>
  );
}
