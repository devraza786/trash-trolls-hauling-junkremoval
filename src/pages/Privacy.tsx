import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";

export default function Privacy() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy — Trash Trolls Hauling & Junk Removal</title>
        <meta name="description" content="How Trash Trolls Hauling & Junk Removal handles your information." />
        <meta property="og:title" content="Privacy Policy" />
        <link rel="canonical" href={`${SITE.url}/privacy`} />
      </Helmet>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-charcoal">
          <p>We respect your privacy. This page explains what info we collect and how we use it.</p>
          <h2 className="font-display text-2xl text-ink">Information We Collect</h2>
          <p>When you contact us, we receive the name, phone number, email, and any job details you share so we can give you a quote and schedule service.</p>
          <h2 className="font-display text-2xl text-ink">How We Use It</h2>
          <p>Only to respond to your request and provide service. We don't sell or rent your information.</p>
          <h2 className="font-display text-2xl text-ink">Cookies</h2>
          <p>We use minimal cookies to remember your preferences (like dismissing the cookie banner). No third-party advertising trackers.</p>
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p>Questions? Email <a href={`mailto:${SITE.email}`} className="text-ink underline">{SITE.email}</a> or call {SITE.phone}.</p>
        </div>
      </section>
    </div>
  );
}
