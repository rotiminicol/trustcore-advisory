/** Expertise page — a cinematic, chapter-led point of view on the Trustcore disciplines. */
import { ArrowDown, MoveRight } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";

const chapters = [
  ["01", "Hospitality & operations", "The operational rhythm guests never see—yet feel in every interaction.", "Hotel operations · Restaurant & café operations · Service standards · Operational procedures", "When a service environment feels effortless, the work behind it is precise."],
  ["02", "Guest & customer experience", "Turn the everyday moments of attention, communication, and recovery into a reason to return.", "Guest experience · Customer service · Client relations · Retention", "Loyalty begins long before a review is written."],
  ["03", "Security & risk awareness", "Create prepared environments where procedures support people instead of slowing them down.", "Hospitality security · Workplace readiness · Incident procedures · Emergency planning", "Confidence grows when every team member knows what good judgement looks like."],
];

export default function Expertise() {
  return <SiteShell><main><section className="page-hero page-hero--expertise"><div className="page-hero__image"><img src="/manus-storage/trustcore-operations-detail_e1abcbee.jpg" alt="Service standards and hospitality operation tools" /></div><div className="page-shell page-hero__inner motion-reveal"><PageEyebrow chapter="01">Expertise</PageEyebrow><h1>The systems behind a <em>trusted experience.</em></h1><p>Hospitality, service, and security are not separate disciplines. They are the connected conditions that allow people and businesses to perform with confidence.</p><ArrowDown className="page-hero__down" /></div></section><section className="expertise-chapters">{chapters.map(([number, title, lead, tags, pull], index) => <article className={`expertise-chapter expertise-chapter--${index + 1}`} key={number}><div className="page-shell expertise-chapter__inner motion-reveal"><span className="chapter-number">{number}</span><div><p className="chapter-label">{tags}</p><h2>{title}</h2><p className="chapter-lead">{lead}</p><p className="chapter-pull">“{pull}”</p></div></div></article>)}</section><section className="closing-link page-shell motion-reveal"><p>Explore the advisory support that puts this expertise to work.</p><Link href="/services" className="text-link">View services <MoveRight /></Link></section></main></SiteShell>;
}
