import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-yellow bg-white text-ink shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={SITE.logo} alt="Trash Trolls logo" className="h-20 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `font-accent text-sm transition-colors ${isActive ? "text-yellow" : "text-ink/80 hover:text-yellow"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-yellow px-4 py-2 font-accent text-sm text-ink transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-accent text-base ${isActive ? "text-yellow" : "text-ink/90"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-yellow px-4 py-3 font-accent text-ink"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
