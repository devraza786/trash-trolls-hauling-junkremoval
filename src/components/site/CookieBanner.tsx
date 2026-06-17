import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("tt-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-16 left-2 right-2 z-50 mx-auto max-w-3xl rounded-lg border-2 border-yellow bg-ink p-4 text-sm text-white shadow-xl lg:bottom-4">
      <p>
        We use cookies to make Trash Trolls work better — no creepy tracking, just
        the basics so the site runs smoothly. Read our{" "}
        <Link to="/privacy" className="text-yellow underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={() => {
            localStorage.setItem("tt-cookies", "ok");
            setShow(false);
          }}
          className="rounded-md bg-yellow px-4 py-2 font-accent text-ink"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
