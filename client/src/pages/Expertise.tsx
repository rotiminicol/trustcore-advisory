/**
 * Expertise refinement — Quiet Authority with practical direction.
 * Visitors can quickly identify their operating question, understand each discipline’s scope,
 * and navigate toward a service conversation without interpreting abstract visual language.
 */
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";
import "./expertise-refined.css";
import "./expertise-polish.css";

const disciplines = [
  {
    id: "operations", number: "01", label: "Hospitality & operations", icon: Compass,
    title: "Make the day-to-day operation easier to run.",
    summary: "The guest experience begins long before a guest arrives. It is shaped by the standards, handovers, routines, and small decisions that make service feel consistent.",
    when: "When service quality varies between shifts, roles are unclear, or the operation feels more reactive than controlled.",
    focus: ["Hotel operational reviews", "Restaurant and café performance", "Service standards and procedures", "Daily rhythm, handovers, and coordination"],
    note: "Look first at the rhythm between briefing, delivery, and handover—not only the visible guest moment.",
    outcome: "A more consistent operating rhythm that gives teams a clearer way to deliver good service.",
  },
  {
    id: "experience", number: "02", label: "Guest & customer experience", icon: Sparkles,
    title: "Turn everyday interactions into a reason to return.",
    summary: "Strong service is not about scripted perfection. It is about helping people notice what matters, communicate with confidence, and respond well when a moment needs care.",
    when: "When feedback repeats the same themes, guest interactions feel uneven, or retention needs more attention.",
    focus: ["Guest experience optimisation", "Customer service improvement", "Client and guest relations", "Service recovery and communication habits"],
    note: "Listen for recurring friction, not isolated complaints—the small patterns usually reveal the real opportunity.",
    outcome: "A guest journey that feels more attentive, more reliable, and more recognisably yours.",
  },
  {
    id: "readiness", number: "03", label: "Security & risk readiness", icon: ShieldCheck,
    title: "Create a calmer, more prepared working environment.",
    summary: "Good readiness is rarely visible—but it shapes how confidently a team works. Clear procedures and shared awareness make it easier to prevent issues and respond well when needed.",
    when: "When workplace procedures need review, awareness is inconsistent, or safety and security responsibilities are unclear.",
    focus: ["Hospitality and workplace security reviews", "Risk and incident procedures", "Emergency and evacuation readiness", "Security awareness and team coordination"],
    note: "Make readiness visible at the point of action: access, handover, escalation, incident, and recovery.",
    outcome: "Practical readiness that supports people, protects the business, and fits the pace of real operations.",
  },
];

export default function Expertise() {
  return <SiteShell><main className="expertise-refined"><div className="ex-trustline" aria-hidden="true"><i /><span className="ex-trustline__one">01</span><span className="ex-trustline__two">02</span><span className="ex-trustline__three">03</span><span className="ex-trustline__four">04</span></div>
    <section className="ex-hero" aria-labelledby="ex-heading"><div className="ex-hero__image"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/SEeDTTRbTmmIlpOs.jpg" alt="Service standards and hospitality operation tools" /><div /></div><div className="ex-hero__inner page-shell motion-reveal"><PageEyebrow chapter="01">Expertise</PageEyebrow><h1 id="ex-heading">The systems behind a <em>trusted experience.</em></h1><p>TRUSTCORE brings together hospitality operations, guest experience, and security readiness to help service-led businesses work with more clarity and confidence.</p><a href="#quick-guide" className="ex-hero__scroll">Find your focus <ArrowDown /></a></div></section>

    <section id="quick-guide" className="ex-guide page-shell" aria-labelledby="guide-heading"><div className="motion-reveal"><PageEyebrow chapter="02">Start here</PageEyebrow><h2 id="guide-heading">Which part of the business needs <em>attention now?</em></h2><p>Choose the statement that feels closest to your current challenge. You can explore each area in more detail below.</p></div><nav className="ex-guide__cards motion-reveal" aria-label="Expertise quick guide">{disciplines.map((discipline) => { const Icon = discipline.icon; return <a href={`#${discipline.id}`} key={discipline.id}><span>{discipline.number}</span><Icon /><h3>{discipline.label}</h3><small>Field-guide prompt</small><p>{discipline.when}</p><ArrowRight /></a>; })}</nav></section>

    <section className="ex-disciplines" aria-label="Trustcore expertise areas">{disciplines.map((discipline, index) => { const Icon = discipline.icon; return <section id={discipline.id} className={`ex-discipline ex-discipline--${index + 1}`} key={discipline.id}><div className="page-shell ex-discipline__inner"><div className="ex-discipline__side motion-reveal"><span>{discipline.number}</span><Icon /><p>{discipline.label}</p></div><div className="ex-discipline__main motion-reveal"><p className="ex-discipline__eyebrow">Core discipline</p><h2>{discipline.title}</h2><p className="ex-discipline__summary">{discipline.summary}</p><div className="ex-discipline__detail"><div><span>When this helps</span><p>{discipline.when}</p></div><div><span>What we focus on</span><ul>{discipline.focus.map((item) => <li key={item}><Check />{item}</li>)}</ul></div></div><p className="ex-discipline__note"><span>Field note</span>{discipline.note}</p><p className="ex-discipline__outcome"><b>What this can create:</b> {discipline.outcome}</p><Link href="/services" className="ex-discipline__link">See related consulting support <ArrowUpRight /></Link></div></div></section>; })}</section>

    <section className="ex-connection"><div className="ex-connection__image"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/ZeBCkOFhqRAIMavR.jpg" alt="Hospitality professionals collaborating in a considered workspace" /></div><div className="ex-connection__content motion-reveal"><img className="ex-connection__seal" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663721754241/CHiFlJTUXbrdWsiH.png" alt="Trustcore Advisory monogram" /><PageEyebrow chapter="03">One connected system</PageEyebrow><h2>People. Procedures. Guest experience. <em>They work together.</em></h2><p>Guest confidence is built in the connection between capable people, clear procedures, and everyday operational awareness. Improving one area makes the others stronger.</p><div className="ex-connection__chain"><span>Clearer operations</span><i /><span>More confident teams</span><i /><span>Better guest experience</span></div></div></section>

    <section className="ex-next page-shell"><div className="motion-reveal"><PageEyebrow chapter="04">What happens next</PageEyebrow><h2>You do not need to have the answer. You only need a <em>clear question to begin.</em></h2><p>Whether the priority is service consistency, customer experience, operating procedures, or readiness, the first conversation helps identify the right focus.</p></div><div className="ex-next__actions motion-reveal"><Link href="/services" className="ex-button ex-button--dark">View consulting services <ArrowRight /></Link><Link href="/contact" className="ex-next__text-link">Start a conversation <ArrowUpRight /></Link></div></section>
  </main></SiteShell>;
}
