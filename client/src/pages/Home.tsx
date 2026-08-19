/**
 * Home refinement — Quiet Authority, made legible.
 * Every section answers a visitor question in order: what Trustcore does, where it helps,
 * how the work unfolds, why Eva, and how to begin. Motion supports orientation, never decoration.
 */
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";
import "./home-refined.css";

const pillars = [
  {
    number: "01",
    icon: Compass,
    title: "Run operations with more clarity.",
    copy: "Create the standards, handovers, and working rhythm that allow service to feel controlled rather than reactive.",
    link: "/expertise",
    linkText: "Explore operational expertise",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Make every guest interaction count.",
    copy: "Improve the details of service, communication, and recovery that shape loyalty and reputation.",
    link: "/services",
    linkText: "Explore guest experience support",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Prepare people and places with confidence.",
    copy: "Strengthen awareness, operating procedures, and readiness across hospitality and business environments.",
    link: "/expertise",
    linkText: "Explore security readiness",
  },
];

const process = [
  ["01", "Understand the real issue", "We begin by listening to what is happening in the business—not applying a generic consulting template."],
  ["02", "Focus on what matters most", "A clear view of the guest journey, team habits, and operating pressure reveals where attention will have the greatest impact."],
  ["03", "Turn clarity into practical progress", "The result is a usable path forward: focused recommendations, coaching, standards, or next steps that fit the way you actually work."],
];

export default function Home() {
  return <SiteShell tone="dark"><main className="home-refined">
    <section className="rf-hero" aria-labelledby="rf-home-heading">
      <div className="rf-hero__media" aria-hidden="true"><video autoPlay muted loop playsInline poster="/manus-storage/trustcore-hero-hospitality_a9aeabee.jpg"><source src="/manus-storage/trustcore-hero-motion_3716887a.mp4" type="video/mp4" /></video><div /></div><div className="rf-hero__grain" aria-hidden="true" />
      <div className="rf-hero__inner page-shell">
        <div className="rf-hero__content"><p className="rf-kicker"><i />Hospitality operations · Guest experience · Security advisory</p><h1 id="rf-home-heading"><span>Better service is built</span><span><em>behind</em> the scenes.</span></h1><p className="rf-hero__lead">TRUSTCORE ADVISORY helps hotels, restaurants, cafés, and service-led businesses improve the operations, people, and systems behind every guest experience.</p><div className="rf-hero__actions"><Link href="/services" className="rf-button rf-button--light">Explore consulting services <ArrowRight /></Link><Link href="/approach" className="rf-quiet-link">See how the work unfolds <ArrowDown /></Link></div></div>
        <div className="rf-hero__footer"><span>Independent advisory by Eva Kyriakou</span><span>Available remotely, worldwide</span></div>
      </div>
      <a href="#what-we-do" className="rf-scroll-cue" aria-label="Discover what Trustcore Advisory does">Discover more <ArrowDown /></a>
    </section>

    <section id="what-we-do" className="rf-orientation page-shell">
      <div className="motion-reveal"><PageEyebrow chapter="01">What TRUSTCORE does</PageEyebrow></div>
      <div className="rf-orientation__main motion-reveal"><h2>We turn day-to-day operational pressure into <em>clearer, more confident service.</em></h2><div><p>TRUSTCORE works at the point where guest experience, staff performance, and safe operations meet. The focus is practical: understand what is getting in the way, then make the right improvements usable in the real rhythm of the business.</p><Link href="/expertise" className="text-link">See the areas of expertise <ArrowRight /></Link></div></div>
    </section>

    <section className="rf-pillars" aria-labelledby="rf-pillars-heading"><div className="page-shell"><div className="rf-section-head motion-reveal"><PageEyebrow chapter="02">Where we help</PageEyebrow><h2 id="rf-pillars-heading">Three ways to make the business <em>work better.</em></h2><p>Start with the part of the operation that needs the most attention today.</p></div><div className="rf-pillars__grid">{pillars.map((pillar, index) => { const Icon = pillar.icon; return <article className="rf-pillar motion-reveal" style={{ transitionDelay: `${index * 90}ms` }} key={pillar.number}><div className="rf-pillar__top"><span>{pillar.number}</span><Icon /></div><h3>{pillar.title}</h3><p>{pillar.copy}</p><Link href={pillar.link} className="rf-pillar__link">{pillar.linkText}<ArrowUpRight /></Link></article>; })}</div></div></section>

    <section className="rf-process page-shell" aria-labelledby="rf-process-heading"><div className="rf-process__intro motion-reveal"><PageEyebrow chapter="03">A clear way forward</PageEyebrow><h2 id="rf-process-heading">The work stays <em>simple, focused, and useful.</em></h2><p>There is no unnecessary theatre and no off-the-shelf prescription. Each engagement follows a clear path from attention to action.</p><Link href="/approach" className="text-link">Explore the full approach <ArrowRight /></Link></div><div className="rf-process__steps">{process.map(([number, title, text], index) => <article className="rf-step motion-reveal" style={{ transitionDelay: `${index * 100}ms` }} key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="rf-proof"><div className="rf-proof__image"><img src="/manus-storage/trustcore-operations-detail_e1abcbee.jpg" alt="Hospitality service standards and operations materials" /></div><div className="rf-proof__content motion-reveal"><PageEyebrow chapter="04">Built from the front line</PageEyebrow><h2>Good advice works because it is grounded in <em>real service environments.</em></h2><p>Eva Kyriakou brings more than two decades of experience across hotel operations, food and beverage, guest relations, communications, promotions, team management, and security awareness.</p><ul><li><Check />Hospitality and hotel operations</li><li><Check />Customer experience and team development</li><li><Check />Licensed security professional, Republic of Cyprus</li></ul><Link href="/about" className="rf-proof__link">Meet Eva Kyriakou <ArrowRight /></Link></div></section>

    <section className="rf-fit page-shell"><div className="motion-reveal"><PageEyebrow chapter="05">Is this the right time?</PageEyebrow><h2>You may be ready for a conversation if <em>the current way of working is no longer enough.</em></h2></div><div className="rf-fit__list motion-reveal"><p><span>01</span>Service standards vary from one shift or team member to the next.</p><p><span>02</span>Guest feedback points to issues that have not yet been properly understood.</p><p><span>03</span>Teams need more clarity, coaching, or confidence in how they work.</p><p><span>04</span>Operational procedures or security readiness need a fresh, practical review.</p></div></section>

    <section className="rf-cta"><div className="rf-cta__line" aria-hidden="true" /><div className="rf-cta__ring" aria-hidden="true" /><div className="rf-cta__inner page-shell motion-reveal"><PageEyebrow chapter="06">Start a conversation</PageEyebrow><h2>Bring the operating question.<br /><em>Leave with a clearer path forward.</em></h2><p>Start with the context, the challenge, and the improvement you want to see. We will take it from there.</p><Link href="/contact" className="rf-button rf-button--brass">Request an introduction <ArrowRight /></Link></div></section>
  </main></SiteShell>;
}
