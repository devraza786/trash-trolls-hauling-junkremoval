import { Link } from "react-router-dom";
import { NAV, SITE } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-ink border-t-2 border-yellow">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={SITE.logo} alt="Trash Trolls" className="h-20 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm text-ink/70">
            Fast, affordable, and reliable junk removal across the Triangle.
            We haul it. You forget it.
          </p>
        </div>
        <div>
          <h4 className="font-accent text-ink">Navigate</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink/80 hover:text-yellow">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-ink/80 hover:text-yellow">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-accent text-ink">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-ink/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-yellow" />
              <a href={SITE.phoneHref} className="hover:text-yellow">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-yellow" />
              <a href={`mailto:${SITE.email}`} className="hover:text-yellow break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-yellow" />
              <span>{SITE.area}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-ink/60 md:flex-row">
          <p>© {new Date().getFullYear()} Trash Trolls Hauling & Junk Removal. All rights reserved.</p>
          <p>
            Made By{" "}
            <a
              href="https://thelinkagedigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent text-ink/80 transition-colors hover:text-yellow"
            >
              The Linkage Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
