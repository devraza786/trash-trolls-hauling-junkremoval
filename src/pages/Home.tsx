import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sofa, Package, Wrench, Trees, HardHat, Building2, Phone, Mail, ArrowRight, Star } from "lucide-react";
import { SITE, HERO_BG } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

const services = [
  { icon: Sofa, title: "Old Furniture", desc: "Couches, mattresses, dressers — gone." },
  { icon: Package, title: "Household Junk", desc: "Boxes, bags, basement clutter." },
  { icon: Wrench, title: "Garage Clutter", desc: "Tools, tires, the works." },
  { icon: Trees, title: "Yard Debris", desc: "Branches, leaves, landscape waste." },
  { icon: HardHat, title: "Construction Debris", desc: "Drywall, lumber, renovation waste." },
  { icon: Building2, title: "Full Property Cleanouts", desc: "Estates, evictions, foreclosures." },
];

const reviews = [
  { name: "Jasmine R.", text: "Showed up the same day and cleared my whole garage. Worth every penny." },
  { name: "Marcus T.", text: "Fair quote, friendly guys, no surprises. Will definitely call again." },
  { name: "Priya K.", text: "They hauled away an old hot tub other companies wouldn't touch." },
  { name: "Dwayne B.", text: "Cleaned out my rental in under 2 hours. Super professional." },
  { name: "Ana G.", text: "Texted a photo, got a price, done by lunch. Highly recommend." },
];

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Junk Removal Durham, Raleigh, Roxboro & Hillsborough NC | Trash Trolls Hauling</title>
        <meta name="description" content="Same-day junk removal in Durham, Raleigh, Roxboro & Hillsboro. Furniture, garage cleanouts, yard & construction debris. Call 984-327-1411 for a free quote." />
        <meta property="og:title" content="Junk Removal Durham NC & Raleigh NC | Trash Trolls" />
        <meta property="og:description" content="Fast, affordable junk hauling across the Triangle area." />
        <link rel="canonical" href={SITE.url} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <img src={HERO_BG} alt="" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="diagonal-stripe absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-accent text-yellow">
            Durham · Raleigh · Roxboro · Hillsborough
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
            We Haul It. <span className="text-yellow">You Forget It.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 max-w-2xl text-lg text-white/80">
            Durham & Raleigh's go-to junk removal team — fast, affordable, and reliable.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-yellow px-6 py-4 font-accent text-ink transition-transform hover:scale-105">
              <Phone className="h-5 w-5" /> Call {SITE.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border-2 border-yellow px-6 py-4 font-accent text-yellow transition-colors hover:bg-yellow hover:text-ink">
              Get a Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="font-accent text-sm text-charcoal/70">Our Services</p>
            <h2 className="mt-1 font-display text-4xl md:text-6xl">What We Haul Away</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, rotateY: 60, y: 30 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-xl border-2 border-ink bg-ink p-7 text-white transition-transform hover:-translate-y-1"
              >
                <s.icon className="h-10 w-10 text-yellow" />
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 text-center text-ink md:grid-cols-2">
          <div>
            <p className="font-display text-6xl">Same-Day</p>
            <p className="mt-2 font-accent">Service Available</p>
          </div>
          <div>
            <p className="font-display text-6xl">5 Main Cities</p>
            <p className="mt-2 font-accent">Areas Covered</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="font-accent text-sm text-charcoal/70">How It Works</p>
            <h2 className="mt-1 font-display text-4xl md:text-6xl">Three Steps. Done.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: 1, t: "Call or Request a Quote", d: "Tell us what's gotta go. We'll give you a fair price." },
              { n: 2, t: "We Come to You & Haul It Away", d: "Our crew shows up on time, loads it all, sweeps up." },
              { n: 3, t: "Done — Your Space Is Clear", d: "Pay only after the job's done. That simple." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="rounded-xl border-2 border-ink p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow font-display text-3xl text-ink">{s.n}</div>
                  <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-charcoal">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials marquee */}
      <section className="overflow-hidden bg-ink py-16">
        <div className="mx-auto mb-8 max-w-7xl px-4">
          <p className="font-accent text-sm text-yellow">Reviews</p>
          <h2 className="mt-1 font-display text-4xl text-white md:text-5xl">Triangle Folks Love Us</h2>
        </div>
        <div className="marquee">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-80 shrink-0 rounded-xl border border-charcoal bg-charcoal p-6 text-white">
              <div className="flex gap-1 text-yellow">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow" />
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">"{r.text}"</p>
              <p className="mt-3 font-accent text-yellow">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-display text-5xl text-yellow md:text-7xl">Ready to Clear the Clutter?</h2>
          <p className="mt-4 text-white/80">Call or text {SITE.phone} — we serve Durham, Raleigh, and surrounding areas.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-yellow px-6 py-4 font-accent text-ink">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-md border-2 border-yellow px-6 py-4 font-accent text-yellow hover:bg-yellow hover:text-ink">
              <Mail className="h-5 w-5" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
