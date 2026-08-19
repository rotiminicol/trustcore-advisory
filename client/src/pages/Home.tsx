/** Choreographed Stillness Home — focused cinematic arrival, not a one-page catalogue. */
import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "wouter";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";

const entryPoints = [
  ["Expertise", "A point of view on service, operations, and risk.", "/expertise"],
  ["Services", "Focused advisory for the work that matters now.", "/services"],
  ["Approach", "A practical process built for real operating environments.", "/approach"],
];

export default function Home() {
  return <SiteShell tone="dark"><main>
    <section className="home-hero" aria-labelledby="home-heading"><div className="home-hero__media"><video autoPlay muted loop playsInline poster="/manus-storage/trustcore-hero-hospitality_a9aeabee.jpg"><source src="/manus-storage/trustcore-hero-motion_3716887a.mp4" type="video/mp4" /></video><div /></div><div className="film-grain" />
      <div className="home-hero__inner"><aside><span>01 / 06</span><span>Independent advisory</span></aside><div className="home-hero__content"><p className="hero-kicker"><i />Hospitality · Security · Business</p><h1 id="home-heading"><span>Better service is built</span><span><em>behind</em> the scenes.</span></h1><div className="home-hero__lower"><p>TRUSTCORE ADVISORY helps hospitality and service businesses turn operational complexity into confident guest experiences, capable teams, and prepared environments.</p><Link href="/services" className="button button--light">Enter the field guide <MoveRight /></Link></div></div><div className="home-hero__meta"><span>Eva Kyriakou</span><span>Remote consulting worldwide</span></div></div><a className="scroll-cue" href="#intro">Scroll to discover <ArrowDown /></a>
    </section>
    <section id="intro" className="home-intro page-shell"><div className="motion-reveal"><PageEyebrow chapter="01">The core of the work</PageEyebrow></div><div className="motion-reveal"><h2>Service excellence does not happen by accident. It is the result of <em>clear operations, strong teams, and consistent attention</em> to every detail clients and guests can feel.</h2><p>Led by Eva Kyriakou, TRUSTCORE brings over two decades of experience across hotel operations, food and beverage, customer service, communications, team leadership, and security readiness.</p></div></section>
    <section className="home-disciplines"><div className="home-disciplines__photo"><img src="/manus-storage/trustcore-operations-detail_e1abcbee.jpg" alt="Hospitality operations materials arranged before service" /></div><div className="home-disciplines__content motion-reveal"><PageEyebrow chapter="02">Three connected disciplines</PageEyebrow><p>Hospitality operations<br /><em>Guest experience</em><br />Security & risk awareness</p><Link href="/expertise" className="text-link">Explore expertise <MoveRight /></Link></div></section>
    <section className="home-entries page-shell"><div className="motion-reveal"><PageEyebrow chapter="03">Where to begin</PageEyebrow><h2>Choose the conversation that <em>moves you forward.</em></h2></div><div className="entry-list">{entryPoints.map(([title, detail, href], index) => <Link href={href} className="entry-list__item motion-reveal" style={{ transitionDelay: `${index * 90}ms` }} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowUpRight /></Link>)}</div></section>
    <section className="home-cta"><div className="home-cta__orb" /><div className="page-shell home-cta__inner motion-reveal"><PageEyebrow chapter="04">A considered first step</PageEyebrow><h2>Bring an operational question.<br /><em>Leave with a clearer path forward.</em></h2><Link href="/contact" className="button button--brass">Start a conversation <MoveRight /></Link></div></section>
  </main></SiteShell>;
}
