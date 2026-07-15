import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const cities = ["Durham", "Raleigh", "Roxboro", "Hillsborough", "Chapel Hill", "Cary", "Apex", "Morrisville", "Garner", "Clayton", "Wake Forest", "Carrboro", "Holly Springs", "Knightdale"];

export default function ServiceArea() {
  return (
    <div>
      <Helmet>
        <title>Service Area — Junk Removal in Durham, Raleigh, Roxboro & Hillsborough</title>
        <meta name="description" content="We serve Durham, Raleigh, Roxboro, Hillsboro, Chapel Hill, Cary, Apex, Morrisville, Garner, Clayton, Wake Forest, and the surrounding Triangle area." />
        <meta property="og:title" content="Service Area — Trash Trolls" />
        <meta property="og:description" content="Triangle-wide junk removal coverage." />
        <link rel="canonical" href={`${SITE.url}/service-area`} />
      </Helmet>
      <PageHero kicker="Service Area" title="We Come to You">
        <p>Serving Durham, Raleigh, and surrounding Triangle area communities.</p>
      </PageHero>
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">Cities We Cover</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {cities.map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-md border-2 border-ink px-4 py-3 font-accent">
                  <MapPin className="h-4 w-4 text-yellow" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-charcoal">Don't see your town? Call us anyway — if we can get there, we'll haul it.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-xl border-2 border-ink">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps?q=Durham,%20NC&output=embed"
                className="h-[500px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
