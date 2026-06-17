import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sofa, Package, Wrench, Trees, HardHat, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const items = [
  { i: Sofa, t: "Old Furniture", d: "Couches, recliners, mattresses, bed frames, dressers, dining sets — we'll carry it out of any room, up or down stairs, and load it for you." },
  { i: Package, t: "Household Junk", d: "Boxes of clutter, broken electronics, attic and basement piles. If you don't want it, we'll take it." },
  { i: Wrench, t: "Garage Clutter", d: "Tools, tires, lawn equipment, paint cans, junked bikes — we'll get your garage back so you can park in it again." },
  { i: Trees, t: "Yard Debris", d: "Branches, brush, leaves, old fencing, landscape waste. Perfect for after-storm and seasonal cleanup." },
  { i: HardHat, t: "Construction Debris", d: "Drywall, lumber, flooring, tile, and renovation leftovers from contractors and DIY projects." },
  { i: Building2, t: "Full Property Cleanouts", d: "Estate sales, evictions, foreclosures, hoarding situations — we handle the whole property top to bottom." },
];

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Junk Removal Services — Furniture, Garage, Yard, Construction</title>
        <meta name="description" content="Furniture disposal, garage cleanout, yard waste, construction debris hauling & full property cleanouts in Durham & Raleigh NC." />
        <meta property="og:title" content="Everything We Remove — Trash Trolls" />
        <meta property="og:description" content="Six service categories serving Durham, Raleigh & the Triangle area." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <PageHero kicker="Services" title="Everything We Remove">
        <p>Six core service categories across Durham, Raleigh, and the surrounding Triangle area.</p>
      </PageHero>
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="h-full rounded-xl border-2 border-ink p-7">
                <s.i className="h-10 w-10 text-yellow" />
                <h3 className="mt-4 font-display text-3xl">{s.t}</h3>
                <p className="mt-3 text-charcoal">{s.d}</p>
                <Link to="/contact" className="mt-5 inline-flex rounded-md bg-yellow px-5 py-3 font-accent text-ink hover:scale-105 transition-transform">
                  Get a Quote for This Service
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
