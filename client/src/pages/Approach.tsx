/**
 * Approach refinement — a calm, human, and practical engagement journey.
 * Each stage answers a visitor’s question: what do I bring, what happens next, and what do I leave with?
 * The page makes method feel reassuringly simple without diluting Trustcore’s Quiet Authority.
 */
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ClipboardCheck, Compass, Handshake, Target } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";
import "./approach-refined.css";
import "./approach-polish.css";

const steps = [
  {
    number: "01", title: "Start with the real question", label: "What you bring", icon: Compass,
    copy: "A challenge, a pattern you are noticing, or an improvement you want to make. The starting point does not need to be perfectly defined.",
    output: "A clearer understanding of what needs attention first.",
  },
  {
    number: "02", title: "See the operating picture", label: "What we focus on", icon: ClipboardCheck,
    copy: "Look at the guest or customer journey alongside the practical conditions behind it: people, habits, procedures, handovers, and pressures.",
    output: "A shared view of the underlying opportunity—not only the visible symptom.",
  },
  {
    number: "03", title: "Set the practical priorities", label: "What we shape", icon: Target,
    copy: "Turn insight into focused next steps, whether that means an operational review, service standards, team coaching, or readiness guidance.",
    output: "A sensible path forward that fits the real rhythm of the business.",
  },
  {
    number: "04", title: "Help progress hold", label: "How it lasts", icon: Handshake,
    copy: "Make improvements usable by the people responsible for carrying them forward—not just impressive in a written recommendation.",
    output: "More confidence, clarity, and consistency in day-to-day work.",
  },
];

const principles = [
  "Designed around the business you have—not an off-the-shelf consulting template.",
  "Grounded in real operating conditions, team capacity, and guest expectations.",
  "Focused on changes that are clear enough to be used on the next shift.",
];

export default function Approach() {
  return <SiteShell tone="dark"><main className="approach-refined"><div className="ap-trustline" aria-hidden="true"><i /><span className="ap-trustline__one">01</span><span className="ap-trustline__two">02</span><span className="ap-trustline__three">03</span><span className="ap-trustline__four">04</span></div>
    <section className="ap-hero" aria-labelledby="ap-heading"><div className="ap-hero__media"><img src="/manus-storage/trustcore-advisory-workspace_0516e71b.jpg" alt="Hospitality professionals reviewing a practical service plan together" /><div /></div><div className="ap-hero__inner page-shell motion-reveal"><PageEyebrow chapter="03">The approach</PageEyebrow><h1 id="ap-heading">Practical change begins with a <em>clearer view.</em></h1><p>TRUSTCORE creates the space to understand what is really happening, focus on what matters most, and make progress that works in the real world.</p><a href="#how-it-works" className="ap-hero__cue">See how it works <ArrowDown /></a></div></section>

    <section id="how-it-works" className="ap-orientation page-shell" aria-labelledby="ap-orientation-heading"><div className="motion-reveal"><PageEyebrow chapter="A">In one glance</PageEyebrow><h2 id="ap-orientation-heading">Bring the question. Get the clarity. <em>Move with purpose.</em></h2></div><div className="ap-orientation__map motion-reveal"><span>What is happening now?</span><i /><span>What needs attention?</span><i /><span>What will make the difference?</span></div></section>

    <section className="ap-steps" aria-labelledby="ap-steps-heading"><div className="page-shell"><div className="ap-steps__head motion-reveal"><PageEyebrow chapter="B">The working process</PageEyebrow><h2 id="ap-steps-heading">A measured way to turn <em>attention into action.</em></h2><p>Each engagement is shaped around your context, but the process remains clear, collaborative, and focused on what can be used.</p></div><div className="ap-step-list">{steps.map((step, index) => { const Icon = step.icon; return <article className="ap-step motion-reveal" style={{ transitionDelay: `${index * 90}ms` }} key={step.number}><div className="ap-step__number"><span>{step.number}</span><Icon /></div><div className="ap-step__main"><span>{step.label}</span><h3>{step.title}</h3><p>{step.copy}</p></div><div className="ap-step__outcome"><span>The result</span><p>{step.output}</p></div></article>; })}</div></div></section>

    <section className="ap-principles"><div className="ap-principles__image"><img src="/manus-storage/trustcore-service-teams_91a3aa03.jpg" alt="Hospitality team coordinating a workflow before service" /></div><div className="ap-principles__content motion-reveal"><img className="ap-principles__seal" src="/manus-storage/trustcore-monogram_7213fa8a.png" alt="Trustcore Advisory monogram" /><PageEyebrow chapter="C">Built for real operations</PageEyebrow><h2>Good advisory work should create clarity <em>without adding complexity.</em></h2><p>The goal is never to create a more complicated system. It is to help the existing business work with more confidence, consistency, and focus.</p><ul>{principles.map((principle) => <li key={principle}><Check />{principle}</li>)}</ul></div></section>

    <section className="ap-fit page-shell"><div className="motion-reveal"><PageEyebrow chapter="D">A useful first step</PageEyebrow><h2>The best place to begin is with the operating question that is <em>already asking for attention.</em></h2><p>Service inconsistency. Team uncertainty. A recurring guest issue. A procedure that no longer feels clear. The first conversation helps bring the right focus into view.</p></div><div className="ap-fit__actions motion-reveal"><Link href="/services" className="ap-button ap-button--dark">Explore the service pathways <ArrowRight /></Link><Link href="/contact" className="ap-fit__text-link">Start a conversation <ArrowUpRight /></Link></div></section>

    <section className="ap-quote"><div className="page-shell motion-reveal"><p>“The purpose of the process is not more paperwork. It is a clearer way for people to do good work.”</p><span>Eva Kyriakou · TRUSTCORE ADVISORY</span></div></section>
  </main></SiteShell>;
}
