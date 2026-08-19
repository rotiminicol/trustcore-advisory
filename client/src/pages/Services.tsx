/**
 * Services refinement — a visual-first flagship conversion experience.
 * The navigator lets visitors recognise their problem in seconds, select a service with intent,
 * and understand scope, outcomes, and next steps without reading a wall of text.
 */
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ClipboardCheck, Compass, HeartHandshake, Layers3, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";
import "./services-refined.css";

const serviceProfiles = [
  {
    id: "operations", number: "01", label: "Hospitality operations", icon: Compass,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/lWIWTbVIiiGPBubF.jpg",
    imageAlt: "Prepared luxury hospitality breakfast service before guest arrival",
    promise: "Make the day-to-day operation easier to run.",
    summary: "Bring more structure to the routines, handovers, standards, and service rhythm that guests feel without ever seeing.",
    bestFor: "Hotels, restaurants, cafés, and service-led venues where consistency needs more attention.",
    includes: ["Operational review and observation", "Service standards and working procedures", "Restaurant and café performance", "Daily rhythm and team handovers"],
    outcomes: ["More dependable service", "Clearer team coordination", "A calmer operating rhythm"],
  },
  {
    id: "experience", number: "02", label: "Guest & customer experience", icon: Sparkles,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/qhpkNrrLNyGFifBM.jpg",
    imageAlt: "Hotel host offering attentive guest support in a refined lounge",
    promise: "Turn everyday interactions into a reason to return.",
    summary: "Improve the details of communication, attention, and service recovery that give guests confidence in the people behind the brand.",
    bestFor: "Businesses that want to make customer interactions more consistent, attentive, and memorable.",
    includes: ["Guest journey review", "Customer service improvement", "Service recovery habits", "Client and guest relations"],
    outcomes: ["More confident guest interaction", "Clearer service behaviour", "A stronger return experience"],
  },
  {
    id: "readiness", number: "03", label: "Security & risk readiness", icon: ShieldCheck,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/QOSIOrfakvPVihqN.jpg",
    imageAlt: "Discreet hospitality readiness tools in a secure back-of-house environment",
    promise: "Create a calmer, more prepared working environment.",
    summary: "Strengthen the awareness, procedures, and shared judgement that support people, protect the environment, and keep the business ready.",
    bestFor: "Hospitality and business environments where procedures, awareness, or response readiness need a practical review.",
    includes: ["Workplace and hospitality review", "Risk and incident procedures", "Emergency readiness guidance", "Security awareness coordination"],
    outcomes: ["Greater staff confidence", "Clearer response procedures", "More practical readiness"],
  },
  {
    id: "teams", number: "04", label: "Teams & business improvement", icon: UsersRound,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/xYwqognPEzoZaXIt.jpg",
    imageAlt: "Hospitality team collaborating around a service workflow before operations begin",
    promise: "Help people, process, and purpose move in the same direction.",
    summary: "Give teams the coaching, clarity, and operating habits that make good performance feel repeatable—not dependent on a few individuals.",
    bestFor: "Businesses facing uneven performance, team uncertainty, or an opportunity to make quality easier to maintain.",
    includes: ["Staff coaching and development", "Team leadership support", "Business process improvement", "Communication and promotion strategy"],
    outcomes: ["More capable teams", "Clearer ownership", "Improvement that lasts"],
  },
];

const engagementSteps = [
  ["01", "Start with the context", "Share what is happening now and the improvement you want to see."],
  ["02", "Choose the right focus", "Together, identify the service pathway and level of support that fits."],
  ["03", "Build the practical path", "Move forward with a clear, measured plan designed for real operations."],
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = serviceProfiles[selectedIndex];
  const SelectedIcon = selected.icon;
  const nextService = () => setSelectedIndex((index) => (index + 1) % serviceProfiles.length);
  const previousService = () => setSelectedIndex((index) => (index - 1 + serviceProfiles.length) % serviceProfiles.length);

  return <SiteShell><main className="services-refined">
    <section className="sv-hero" aria-labelledby="sv-heading"><div className="sv-hero__image"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/lWIWTbVIiiGPBubF.jpg" alt="" /><div /></div><div className="sv-hero__inner page-shell motion-reveal"><PageEyebrow chapter="02">Consulting services</PageEyebrow><h1 id="sv-heading">Focused support for the work that <em>matters now.</em></h1><p>Start with the operational question in front of you. Choose a service pathway below to see what it covers, when it helps, and what it can improve.</p><a href="#service-navigator" className="sv-hero__cue">Choose your service <ArrowRight /></a></div></section>

    <section id="service-navigator" className="sv-navigator" aria-labelledby="navigator-heading"><div className="page-shell"><div className="sv-section-head motion-reveal"><PageEyebrow chapter="A">Choose your focus</PageEyebrow><h2 id="navigator-heading">Find the support that fits the <em>work in front of you.</em></h2><p>Use this guide to compare the four ways TRUSTCORE can support your business. Select a pathway to explore it in detail.</p></div>
      <div className="sv-stage motion-reveal"><div className="sv-stage__image"><img src={selected.image} alt={selected.imageAlt} key={selected.id} /><div /><span>{selected.number} / 04</span></div><div className="sv-stage__profile" key={selected.id}><div className="sv-stage__profile-head"><div><SelectedIcon /><span>{selected.label}</span></div><div className="sv-stage__arrows"><button type="button" aria-label="Previous service" onClick={previousService}><ArrowLeft /></button><button type="button" aria-label="Next service" onClick={nextService}><ArrowRight /></button></div></div><h3>{selected.promise}</h3><p className="sv-stage__summary">{selected.summary}</p><div className="sv-stage__fit"><span>Best fit when</span><p>{selected.bestFor}</p></div><Link href="/contact" className="sv-inline-action">Discuss this service <ArrowUpRight /></Link></div></div>
      <div className="sv-selector" role="tablist" aria-label="Service pathways">{serviceProfiles.map((service, index) => { const Icon = service.icon; const isSelected = index === selectedIndex; return <button key={service.id} type="button" role="tab" aria-selected={isSelected} onClick={() => setSelectedIndex(index)} className={isSelected ? "is-selected" : ""}><img src={service.image} alt="" /><span>{service.number}</span><Icon /><strong>{service.label}</strong><ChevronHint active={isSelected} /></button>; })}</div>
      <div className="sv-scope" key={selected.id}><div className="sv-scope__header"><PageEyebrow chapter={selected.number}>Inside this service</PageEyebrow><p>{selected.promise}</p></div><div className="sv-scope__areas"><div><span>What we can work on</span><ul>{selected.includes.map((item) => <li key={item}><Check />{item}</li>)}</ul></div><div><span>Designed to improve</span><div className="sv-outcomes">{selected.outcomes.map((outcome) => <p key={outcome}>{outcome}</p>)}</div></div></div></div>
    </div></section>

    <section className="sv-visual-ledger"><div className="page-shell sv-visual-ledger__inner"><div className="motion-reveal"><PageEyebrow chapter="B">What the work looks like</PageEyebrow><h2>Practical, tailored, and <em>designed to be used.</em></h2></div><div className="sv-visual-ledger__items"><article className="motion-reveal"><ClipboardCheck /><div><h3>Observe the real context</h3><p>Look beyond an isolated issue to understand the operating pattern around it.</p></div></article><article className="motion-reveal"><Layers3 /><div><h3>Make the priorities clear</h3><p>Separate what needs immediate attention from what can be improved over time.</p></div></article><article className="motion-reveal"><HeartHandshake /><div><h3>Support the people doing the work</h3><p>Build recommendations, coaching, and procedures around the teams who will actually use them.</p></div></article></div></div></section>

    <section className="sv-engagement page-shell" aria-labelledby="engagement-heading"><div className="sv-engagement__intro motion-reveal"><PageEyebrow chapter="C">From question to action</PageEyebrow><h2 id="engagement-heading">A simple way to begin a <em>useful conversation.</em></h2><p>You do not need a fully formed brief. Start with the context, the challenge, and the change you want to make.</p></div><div className="sv-engagement__steps">{engagementSteps.map(([number, title, copy], index) => <article className="motion-reveal" style={{ transitionDelay: `${index * 95}ms` }} key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className="sv-cta"><div className="sv-cta__line" aria-hidden="true" /><div className="sv-cta__mark" aria-hidden="true"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/CHiFlJTUXbrdWsiH.png" alt="" /></div><div className="page-shell sv-cta__inner motion-reveal"><PageEyebrow chapter="D">Start a conversation</PageEyebrow><h2>Tell us what needs attention.<br /><em>We will find the right way forward.</em></h2><p>Available for remote consulting projects and advisory work with businesses worldwide.</p><Link href="/contact" className="sv-button">Request an introduction <ArrowRight /></Link></div></section>
  </main></SiteShell>;
}

function ChevronHint({ active }: { active: boolean }) { return <span className={`sv-selector__hint ${active ? "is-active" : ""}`}><ArrowRight /></span>; }
