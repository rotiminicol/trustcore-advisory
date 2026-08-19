/**
 * Services page — Quiet Authority field-guide styling with concise operational scope cues.
 * Every service stream reads as a practical advisory note rather than a generic product tile.
 */
import { Check, MoveRight } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";

type ServiceNote = {
  number: string;
  title: string;
  lead: string;
  points: string[];
  startingPoint: string;
};

const services: ServiceNote[] = [
  {
    number: "01",
    title: "Hospitality operations",
    lead: "For hotels, restaurants, cafés, and service-led venues that need the day-to-day engine to run with more clarity.",
    points: ["Hotel operational reviews", "Restaurant & café performance", "Service standards and procedures"],
    startingPoint: "Inconsistent service, unclear handovers, or operations that feel more difficult than they need to.",
  },
  {
    number: "02",
    title: "Guest & customer experience",
    lead: "For organisations that want to notice more, respond more consistently, and build a stronger return experience.",
    points: ["Guest experience optimisation", "Customer service improvement", "Client and guest relations"],
    startingPoint: "Recurring service feedback, uneven interactions, or a need to strengthen retention.",
  },
  {
    number: "03",
    title: "Security & risk readiness",
    lead: "For hospitality and business environments seeking calmer, more prepared operating conditions.",
    points: ["Business and workplace reviews", "Risk and incident procedures", "Emergency and evacuation guidance"],
    startingPoint: "Gaps in awareness, unclear access controls, or readiness that exists only on paper.",
  },
  {
    number: "04",
    title: "Teams & business improvement",
    lead: "For businesses that need their people, procedures, and communication to move in the same direction.",
    points: ["Staff coaching and development", "Operational improvement", "Communication and promotional strategy"],
    startingPoint: "Performance inconsistency, team uncertainty, or an opportunity to make quality more repeatable.",
  },
];

export default function Services() {
  return <SiteShell><main>
    <section className="services-hero page-shell"><div className="motion-reveal"><PageEyebrow chapter="02">Consulting services</PageEyebrow><h1>Focused support for the work that <em>matters now.</em></h1></div><p className="motion-reveal">Each engagement begins with the real operating question—not a preset package. These are the areas in which TRUSTCORE can bring structure, perspective, and practical forward movement.</p></section>
    <section className="service-notes page-shell">{services.map((service, index) => <article className="service-note motion-reveal" style={{ transitionDelay: `${index * 75}ms` }} key={service.number}><div className="service-note__top"><span>{service.number}</span><span>Field guide entry</span></div><div className="service-note__body"><h2>{service.title}</h2><p className="service-note__lead">{service.lead}</p><ul>{service.points.map((point) => <li key={point}><Check />{point}</li>)}</ul></div><div className="service-note__best"><span>Best starting point</span><p>{service.startingPoint}</p></div></article>)}</section>
    <section className="closing-link page-shell motion-reveal"><p>Not sure where your question belongs? The approach begins by clarifying it.</p><Link href="/approach" className="text-link">See the approach <MoveRight /></Link></section>
  </main></SiteShell>;
}
