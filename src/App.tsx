import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { PageLoader } from "@/components/site/PageLoader";
import { CookieBanner } from "@/components/site/CookieBanner";
import { RouteTransition } from "@/components/site/RouteTransition";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Gallery from "@/pages/Gallery";
import ServiceArea from "@/pages/ServiceArea";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-yellow">404</h1>
        <h2 className="mt-4 font-accent text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-white/70">That junk doesn't exist. Let's get you home.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-md bg-yellow px-5 py-3 font-accent text-ink">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <PageLoader />
      <Navbar />
      <div className="flex min-h-screen flex-col pt-20">
        <RouteTransition pathname={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteTransition>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
      <MobileCallBar />
      <CookieBanner />
      <div className="h-14 lg:hidden" />
    </>
  );
}
