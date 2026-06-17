import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCallBar() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 bg-yellow py-3 font-accent text-ink shadow-lg lg:hidden"
    >
      <Phone className="h-4 w-4" /> Call Now: {SITE.phone}
    </a>
  );
}
