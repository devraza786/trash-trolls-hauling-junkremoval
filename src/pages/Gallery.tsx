import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY, SITE } from "@/lib/site";

export default function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Gallery — Junk Removal Jobs in Durham & Raleigh | Trash Trolls</title>
        <meta name="description" content="Before-and-after photos from real Trash Trolls junk removal jobs around Durham, Raleigh, and the Triangle area." />
        <meta property="og:title" content="Job Gallery — Trash Trolls" />
        <meta property="og:description" content="Real jobs, real results." />
        <link rel="canonical" href={`${SITE.url}/gallery`} />
      </Helmet>
      <PageHero kicker="Gallery" title="Real Jobs. Real Results.">
        <p>A look at recent hauls across the Triangle — from single items to full property cleanouts.</p>
      </PageHero>
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.url} delay={(i % 6) * 0.05}>
              <figure className="overflow-hidden rounded-xl border-2 border-ink">
                {g.type === "video" ? (
                  <video controls preload="metadata" className="aspect-square w-full bg-ink object-cover">
                    <source src={g.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={g.url} alt={g.caption} loading="lazy" className="aspect-square w-full object-cover transition-transform hover:scale-105" />
                )}
                <figcaption className="bg-ink p-3 font-accent text-sm text-yellow">{g.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
