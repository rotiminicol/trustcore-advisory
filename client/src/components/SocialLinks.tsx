/**
 * TRUSTCORE ADVISORY social-profile configuration.
 * Official Simple Icons marks are used. Add the client’s approved profile URLs below to activate each link.
 */
import { siFacebook, siInstagram, siX, siYoutube } from "simple-icons";
import "./social-links.css";

const siLinkedIn = { path: "M0 1.146C0 .513.526 0 1.175 0h21.65C23.474 0 24 .513 24 1.146v21.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 24 0 23.487 0 22.854V1.146ZM7.15 19.228V9.281H3.56v9.947h3.59ZM5.355 7.922a2.079 2.079 0 1 0 0-4.158 2.079 2.079 0 0 0 0 4.158Zm13.868 11.306v-5.45c0-2.92-1.56-4.278-3.64-4.278-1.68 0-2.43.924-2.85 1.57V9.28H9.14c.047 1.166 0 9.948 0 9.948h3.59v-5.55c0-.297.021-.594.11-.808.24-.595.78-1.21 1.69-1.21 1.19 0 1.665.913 1.665 2.25v5.318h3.59Z" };

const socialProfiles = [
  { label: "Facebook", icon: siFacebook, href: "" },
  { label: "Instagram", icon: siInstagram, href: "" },
  { label: "X", icon: siX, href: "" },
  { label: "LinkedIn", icon: siLinkedIn, href: "" },
  { label: "YouTube", icon: siYoutube, href: "" },
];

export function SocialLinks() {
  return <nav className="social-links" aria-label="Trustcore Advisory social profiles">
    <span className="social-links__label">Connect with TRUSTCORE</span>
    <div className="social-links__icons">{socialProfiles.map((profile) => {
      const icon = <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d={profile.icon.path} fill="currentColor" /></svg>;
      return profile.href ? <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer" aria-label={`Visit TRUSTCORE ADVISORY on ${profile.label}`}>{icon}</a> : <span key={profile.label} className="social-links__placeholder" role="img" aria-label={`${profile.label} profile URL to be connected`}>{icon}</span>;
    })}</div>
  </nav>;
}
