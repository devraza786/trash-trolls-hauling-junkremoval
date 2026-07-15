import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { Check } from "lucide-react";

const tiers = [
  { t: "Small Load", d: "Perfect for single items or a few bags of junk.", f: ["1–2 items", "Quick pickup", "Same-day available"] },
  { t: "Medium Load", d: "Half-truck worth of furniture or junk.", f: ["Half-trailer load", "Garage or room clear-out", "Crew loads everything"], featured: true },
  { t: "Full Load", d: "Full truck cleanouts and large property jobs.", f: ["Full trailer load", "Whole-property cleanouts", "Construction debris OK"] },
];

export default function Pricing() {
  return (
    <div>
      <Helmet>
        <title>Junk Removal Pricing — Durham & Raleigh NC | Trash Trolls</title>
        <meta name="description" content="Transparent junk removal pricing in Durham & Raleigh. Small, medium, and full-load options. Free quotes — call 984-327-1411." />
        <meta property="og:title" content="Transparent Pricing — Trash Trolls" />
        <meta property="og:description" content="Three load sizes. No hidden fees. Free estimates." />
        <link rel="canonical" href={`${SITE.url}/pricing`} />
      </Helmet>
      <PageHero kicker="Pricing" title="Transparent Pricing — No Surprises">
        <p>Pay for what you haul. Free quotes, fair rates, no hidden fees.</p>
      </PageHero>
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.t} delay={i * 0.1}>
              <div className={`flex h-full flex-col rounded-xl p-8 ${tier.featured ? "border-4 border-yellow bg-ink text-white" : "border-2 border-ink bg-ink text-white"}`}>
                {tier.featured && <p className="font-accent text-xs text-yellow">Most Popular</p>}
                <h3 className="mt-1 font-display text-3xl">{tier.t}</h3>
                <p className="mt-2 text-sm text-white/70">{tier.d}</p>
                <p className="mt-6 font-display text-4xl text-yellow">Call for Quote</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.f.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-yellow" />{f}</li>
                  ))}
                </ul>
                <a href={SITE.phoneHref} className="mt-8 inline-flex justify-center rounded-md bg-yellow px-5 py-3 font-accent text-ink">
                  Call {SITE.phone}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl px-4 text-center text-sm text-charcoal">
          Final price depends on volume and type of junk. Call {SITE.phone} for a free estimate.
        </p>
      </section>
    </div>
  );
}
