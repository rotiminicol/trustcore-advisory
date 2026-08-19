/**
 * Start a Conversation — front-end enquiry experience for TRUSTCORE ADVISORY.
 * No mail-client hand-off: the visitor completes the brief on-site. submitEnquiry() is the single
 * replacement-ready boundary where the future backend will send the payload through Resend.
 */
import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronRight, ClipboardCheck, Globe2, Send, ShieldCheck, Sparkles } from "lucide-react";
import { PageEyebrow, SiteShell } from "@/components/SiteShell";
import "./contact-refined.css";
import "./contact-polish.css";

const focuses = [
  ["operations", "Hospitality operations", ClipboardCheck],
  ["experience", "Guest & customer experience", Sparkles],
  ["readiness", "Security & risk readiness", ShieldCheck],
  ["teams", "Teams & business improvement", Globe2],
  ["other", "I’m not sure yet", ChevronRight],
];

type Enquiry = { fullName: string; business: string; email: string; focus: string; message: string; };
type Errors = Partial<Record<keyof Enquiry, string>>;

const emptyEnquiry: Enquiry = { fullName: "", business: "", email: "", focus: "", message: "" };

function validate(values: Enquiry): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please add your name.";
  if (!values.business.trim()) errors.business = "Please add your business or organisation.";
  if (!values.email.trim()) errors.email = "Please add your email address.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please use a valid email address.";
  if (!values.focus) errors.focus = "Please select the area you would like to discuss.";
  if (values.message.trim().length < 20) errors.message = "Please share a little more—at least 20 characters.";
  return errors;
}

// Future implementation: POST this payload to /api/enquiries; the backend will use Resend to deliver it to Eva’s business inbox.
async function submitEnquiry(_payload: Enquiry) { return { ok: true }; }

export default function Contact() {
  const [values, setValues] = useState<Enquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: keyof Enquiry) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (errors[field]) setErrors(validate(next));
  };

  const chooseFocus = (focus: string) => {
    const next = { ...values, focus };
    setValues(next);
    if (errors.focus) setErrors(validate(next));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setIsSubmitting(true);
    const result = await submitEnquiry(values);
    setIsSubmitting(false);
    if (result.ok) setSubmitted(true);
  };

  return <SiteShell tone="dark"><main className="conversation-page">
    <section className="cv-hero" aria-labelledby="cv-heading"><div className="cv-hero__rings" aria-hidden="true" /><div className="page-shell cv-hero__inner"><div className="motion-reveal"><PageEyebrow chapter="05">Start a conversation</PageEyebrow><h1 id="cv-heading">A clear way to begin a <em>useful conversation.</em></h1><p>Tell us what is happening, what needs attention, and where you would like to create improvement. Everything starts here, on the site.</p></div><aside className="cv-hero__guide motion-reveal"><span>Simple by design</span><ol><li><b>01</b>Choose your focus</li><li><b>02</b>Share the context</li><li><b>03</b>Send your enquiry</li></ol><p><Globe2 />Remote consulting, worldwide</p></aside></div></section>

    <section className="cv-form-section page-shell" aria-labelledby="cv-form-heading"><div className="cv-form-intro motion-reveal"><PageEyebrow chapter="A">Your introduction</PageEyebrow><h2 id="cv-form-heading">A few details are enough to <em>start well.</em></h2><p>There is no need for a fully written brief. A useful outline of the current context gives TRUSTCORE the right place to begin.</p><div className="cv-form-intro__points"><span><Check />The business and service environment</span><span><Check />The question or operating challenge</span><span><Check />The outcome you would like to see</span></div></div>
      <div className="cv-form-wrap motion-reveal">{submitted ? <Confirmation onReset={() => { setValues(emptyEnquiry); setErrors({}); setSubmitted(false); }} /> : <form className="conversation-form" noValidate onSubmit={handleSubmit}>
        <div className="conversation-form__head"><div><span>Introduction request</span><h3>Tell us about the work in front of you.</h3></div><img src="/manus-storage/trustcore-monogram_7213fa8a.png" alt="Trustcore Advisory monogram" /></div>
        <fieldset className={`conversation-form__fieldset ${errors.focus ? "has-error" : ""}`}><legend>What would you like to discuss?</legend><div className="conversation-focuses">{focuses.map(([value, label, Icon]) => { const SelectedIcon = Icon as typeof ClipboardCheck; const isSelected = values.focus === value; return <button type="button" onClick={() => chooseFocus(value as string)} className={isSelected ? "is-selected" : ""} aria-pressed={isSelected} key={value as string}><SelectedIcon /><span>{label as string}</span></button>; })}</div>{errors.focus && <p className="field-error">{errors.focus}</p>}</fieldset>
        <div className="conversation-form__fields"><label className={errors.fullName ? "has-error" : ""}><span>Your name</span><input value={values.fullName} onChange={update("fullName")} autoComplete="name" placeholder="Full name" aria-invalid={!!errors.fullName} />{errors.fullName && <i>{errors.fullName}</i>}</label><label className={errors.business ? "has-error" : ""}><span>Business or organisation</span><input value={values.business} onChange={update("business")} autoComplete="organization" placeholder="Business name" aria-invalid={!!errors.business} />{errors.business && <i>{errors.business}</i>}</label></div>
        <label className={`conversation-form__single ${errors.email ? "has-error" : ""}`}><span>Email address</span><input value={values.email} onChange={update("email")} type="email" autoComplete="email" placeholder="name@business.com" aria-invalid={!!errors.email} />{errors.email && <i>{errors.email}</i>}</label>
        <label className={`conversation-form__message ${errors.message ? "has-error" : ""}`}><span>What would you like to improve?</span><textarea value={values.message} onChange={update("message")} placeholder="For example: We would like to make our guest experience more consistent across shifts, and improve how the team handles service recovery." aria-invalid={!!errors.message} rows={5} /><small>{values.message.length}/1000</small>{errors.message && <i>{errors.message}</i>}</label>
        <div className="conversation-form__footer"><p><ShieldCheck />Your details stay within TRUSTCORE ADVISORY. Email delivery will be securely connected through Resend in the backend phase.</p><button className="cv-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Preparing your enquiry" : "Send enquiry"}<Send /></button></div>
      </form>}</div>
    </section>

    <section className="cv-reassurance"><div className="page-shell cv-reassurance__inner"><div className="motion-reveal"><PageEyebrow chapter="B">What happens next</PageEyebrow><h2>Your message stays <em>in one place.</em></h2></div><div className="cv-reassurance__steps motion-reveal"><article><span>01</span><p>You send your enquiry directly through this website.</p></article><article><span>02</span><p>Once Resend is connected, Eva receives it at her business email inbox.</p></article><article><span>03</span><p>The conversation continues with the right context already in view.</p></article></div></div></section>
  </main></SiteShell>;
}

function Confirmation({ onReset }: { onReset: () => void }) {
  return <div className="conversation-confirmation" aria-live="polite"><div><CheckCircle2 /><span>Introduction prepared</span><h3>Thank you. Your enquiry is ready for the next step.</h3><p>This is the completed front-end experience. When the Resend delivery connection is added, this same form will send your enquiry directly to Eva’s business inbox—without opening an email application.</p><button type="button" onClick={onReset}>Start another enquiry <ArrowRight /></button></div><img src="/manus-storage/trustcore-monogram_7213fa8a.png" alt="Trustcore Advisory monogram" /></div>;
}
