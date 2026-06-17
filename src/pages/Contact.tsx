import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nDate: ${f.get("date")}\n\n${f.get("desc")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("New junk removal request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <div>
      <Helmet>
        <title>Contact Trash Trolls — Free Junk Removal Quotes in Durham & Raleigh</title>
        <meta name="description" content="Get a free junk removal quote in Durham or Raleigh. Call 984-327-1411 or email trashtrollshauling@gmail.com." />
        <meta property="og:title" content="Contact Trash Trolls" />
        <meta property="og:description" content="Free quotes for junk removal across the Triangle." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <PageHero kicker="Contact" title="Get in Touch — We'll Handle the Rest">
        <p>Tell us what's gotta go. We'll call you back with a fair quote.</p>
      </PageHero>
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="rounded-xl border-2 border-ink bg-background p-6 md:p-8">
            <h2 className="font-display text-3xl">Request a Free Quote</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field name="name" label="Name" required />
              <Field name="phone" label="Phone" type="tel" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="date" label="Preferred Date" type="date" />
            </div>
            <label className="mt-4 block">
              <span className="font-accent text-sm">Description of Junk</span>
              <textarea name="desc" rows={5} required className="mt-1 w-full rounded-md border-2 border-ink bg-background p-3 outline-none focus:border-yellow" />
            </label>
            <button type="submit" className="mt-6 inline-flex rounded-md bg-yellow px-6 py-4 font-accent text-ink hover:scale-105 transition-transform">
              Send My Request
            </button>
            {sent && <p className="mt-3 text-sm text-charcoal">Opening your email app…</p>}
          </form>
          <aside className="space-y-6">
            <div className="rounded-xl bg-ink p-6 text-white">
              <h3 className="font-display text-2xl text-yellow">Reach Us Direct</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-yellow" /><a href={SITE.phoneHref} className="hover:text-yellow">{SITE.phone}</a></li>
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-yellow" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-yellow">{SITE.email}</a></li>
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-yellow" />{SITE.area}</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl border-2 border-ink">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Durham,%20NC&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display text-4xl text-yellow md:text-5xl">FAQs</h2>
          <div className="mt-8 space-y-3">
            {[
              { q: "How fast can you come out?", a: "Often same-day or next-day across Durham, Raleigh, and the Triangle." },
              { q: "Do I have to move stuff outside?", a: "Nope. Our crew carries it from anywhere on your property." },
              { q: "What can't you take?", a: "We can't haul hazardous chemicals, but we take almost everything else — call if you're unsure." },
              { q: "How is pricing calculated?", a: "By how much truck space your junk fills. We give you the price before any work starts." },
            ].map((f) => (
              <details key={f.q} className="group rounded-lg border border-charcoal bg-charcoal p-5 open:border-yellow">
                <summary className="cursor-pointer font-accent text-yellow">{f.q}</summary>
                <p className="mt-3 text-sm text-white/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-accent text-sm">{label}</span>
      <input name={name} type={type} required={required} className="mt-1 w-full rounded-md border-2 border-ink bg-background p-3 outline-none focus:border-yellow" />
    </label>
  );
}
