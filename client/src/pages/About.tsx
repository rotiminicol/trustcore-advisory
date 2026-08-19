/**
 * About Eva refinement — an honest, credible founder profile for TRUSTCORE ADVISORY.
 * The page makes Eva’s professional background, perspective, and credentials easy to understand
 * without inventing a portrait or turning a career history into a dense CV.
 */
import { ArrowRight, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";
import "./about-refined.css";

const experienceAreas = [
  {
    number: "01", title: "Hospitality & hotel operations", icon: Compass,
    copy: "Hotel breakfast department management, housekeeping floor supervision in five-star hospitality, guest relations, and hospitality team coordination.",
    value: "A first-hand understanding of the operational detail behind a consistent stay.",
  },
  {
    number: "02", title: "Customer experience & communication", icon: Sparkles,
    copy: "Public relations, promotional campaigns, radio and news production, interviewing, events, and long-term client-facing communication.",
    value: "A clear sense of how every interaction shapes confidence, return, and reputation.",
  },
  {
    number: "03", title: "Security & operational readiness", icon: ShieldCheck,
    copy: "Licensed Security Professional in the Republic of Cyprus, with practical knowledge of prevention, response procedures, workplace awareness, and team coordination.",
    value: "A measured approach to keeping people, operations, and environments prepared.",
  },
];

const credentials = [
  ["Professional standing", "Licensed Security Professional", "Republic of Cyprus"],
  ["Working languages", "English & Greek", "Russian & German, conversational"],
  ["Consulting format", "Remote advisory", "Worldwide availability"],
];

export default function About() {
  return <SiteShell><main className="about-refined">
    <section className="ab-hero" aria-labelledby="ab-heading"><div className="page-shell ab-hero__inner"><div className="ab-hero__content motion-reveal"><PageEyebrow chapter="04">Founder profile</PageEyebrow><p className="ab-name">Eva Kyriakou</p><h1 id="ab-heading">Practical perspective shaped <em>at the front line.</em></h1><p className="ab-hero__lead">Hospitality operations · customer experience · business consulting</p><p className="ab-hero__intro">Eva brings more than 20 years of cross-functional experience to the work of making service-led businesses feel clearer, more capable, and more consistent.</p><a href="#experience" className="ab-hero__link">Explore Eva’s experience <ArrowRight /></a></div><aside className="ab-hero__profile motion-reveal"><img className="ab-hero__portrait" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/FZtuHnhyutvjjuml.jpg" alt="Temporary founder portrait placeholder to be replaced with Eva Kyriakou’s supplied photograph" /><div className="ab-hero__portrait-shade" /><div className="ab-hero__profile-content"><img className="ab-hero__profile-mark" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/CHiFlJTUXbrdWsiH.png" alt="Trustcore Advisory monogram" /><div><span>Independent founder</span><strong>20+ years</strong><p>Across hospitality, service, communications, and team leadership.</p></div></div><small>TRUSTCORE ADVISORY<br />Cyprus · Worldwide</small></aside></div></section>

    <section className="ab-perspective"><div className="page-shell ab-perspective__inner"><div className="motion-reveal"><PageEyebrow chapter="A">Eva’s perspective</PageEyebrow><h2>Good service is not only what a guest sees. It is the confidence, clarity, and care that exists <em>behind every moment.</em></h2></div><div className="ab-perspective__support motion-reveal"><p>Eva’s work connects the front line to the bigger operating picture. She understands that a breakfast service, a guest interaction, a staff handover, a safety procedure, or a public-facing message can each build—or weaken—trust.</p><div className="ab-perspective__signals"><span><Check />Operationally grounded</span><span><Check />People-conscious</span><span><Check />Practical by design</span></div></div></div></section>

    <section id="experience" className="ab-experience page-shell" aria-labelledby="experience-heading"><div className="ab-experience__head motion-reveal"><PageEyebrow chapter="B">Where the experience was built</PageEyebrow><h2 id="experience-heading">A career that moves between <em>people, process, and performance.</em></h2><p>These are not separate careers. Together, they shape a distinctive view of how a service business works.</p></div><div className="ab-experience__list">{experienceAreas.map((area, index) => { const Icon = area.icon; return <article className="ab-experience__item motion-reveal" style={{ transitionDelay: `${index * 85}ms` }} key={area.number}><div className="ab-experience__marker"><span>{area.number}</span><Icon /></div><div><h3>{area.title}</h3><p>{area.copy}</p></div><aside><span>What this brings to the work</span><p>{area.value}</p></aside></article>; })}</div></section>

    <section className="ab-context"><div className="ab-context__image"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/xYwqognPEzoZaXIt.jpg" alt="Hospitality professionals in a focused pre-service coordination session" /></div><div className="ab-context__content motion-reveal"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/CHiFlJTUXbrdWsiH.png" alt="Trustcore Advisory monogram" className="ab-context__seal" /><PageEyebrow chapter="C">The work today</PageEyebrow><h2>Advisory that sees the <em>whole operating picture.</em></h2><p>TRUSTCORE supports businesses remotely and worldwide, bringing a practical view of hospitality operations, customer experience, security awareness, team capability, and business improvement.</p><Link href="/expertise" className="ab-context__link">Explore the areas of expertise <ArrowRight /></Link></div></section>

    <section className="ab-credentials page-shell" aria-label="Professional credentials"><div className="motion-reveal"><PageEyebrow chapter="D">Professional details</PageEyebrow><h2>Qualified, connected, and available for <em>the work ahead.</em></h2></div><div className="ab-credentials__list">{credentials.map(([label, primary, secondary], index) => <article className="motion-reveal" style={{ transitionDelay: `${index * 80}ms` }} key={label}><span>{label}</span><strong>{primary}</strong><p>{secondary}</p></article>)}</div></section>

    <section className="ab-cta"><div className="ab-cta__line" aria-hidden="true" /><div className="page-shell ab-cta__inner motion-reveal"><PageEyebrow chapter="E">Start a conversation</PageEyebrow><h2>Bring the operational question. <em>Eva will help bring it into focus.</em></h2><p>Available for remote consulting projects and advisory work with businesses worldwide.</p><Link href="/contact" className="ab-button">Request an introduction <ArrowUpRight /></Link></div></section>
  </main></SiteShell>;
}
