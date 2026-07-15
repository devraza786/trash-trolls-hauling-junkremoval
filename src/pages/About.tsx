import { Helmet } from "react-helmet-async";
import { Zap, DollarSign, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY, SITE } from "@/lib/site";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About Trash Trolls — Local Junk Removal in Durham & Raleigh</title>
        <meta name="description" content="Meet the local Triangle crew behind Trash Trolls Hauling & Junk Removal. Fast, affordable, reliable junk removal across Durham and Raleigh NC." />
        <meta property="og:title" content="About Trash Trolls" />
        <meta property="og:description" content="Local Triangle-area junk removal crew." />
        <link rel="canonical" href={`${SITE.url}/about`} />
      </Helmet>
      <PageHero kicker="About Us" title="We're the Trolls That Haul">
        <p>Locally owned. Triangle proud. Built to clear out anything you don't want anymore.</p>
      </PageHero>
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">Our Story</h2>
            <p className="mt-4 text-charcoal">
              Trash Trolls started with a beat-up trailer, two strong backs, and a
              simple promise to our Durham and Raleigh neighbors — when you call, we
              show up. We grew up in the Triangle and we run our business the way we'd
              want one run for our own family: honest quotes, on-time arrivals, and
              clean work sites when we leave.
            </p>
            <p className="mt-4 text-charcoal">
              From a single old couch to a full estate cleanout, we treat every job
              like it matters. Because to you, it does.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.slice(0, 4).map((g) => (
              <img key={g.url} src={g.url} alt={g.caption} className="aspect-square w-full rounded-xl object-cover" />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal><h2 className="font-display text-4xl text-yellow md:text-5xl">What We Stand For</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { i: Zap, t: "Fast", d: "Same-day & next-day appointments across the Triangle." },
              { i: DollarSign, t: "Affordable", d: "Transparent pricing. No hidden fees, ever." },
              { i: ShieldCheck, t: "Reliable", d: "Insured, on-time, and respectful of your property." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="rounded-xl border-2 border-yellow p-7">
                  <v.i className="h-10 w-10 text-yellow" />
                  <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
                  <p className="mt-2 text-sm text-white/70">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
