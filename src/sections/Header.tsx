"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, Star, X } from "lucide-react";

import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement | null>(null);
  const featuresRef = React.useRef<HTMLDivElement | null>(null);
  const closeTimerFeaturesRef = React.useRef<number | null>(null);
  const closeTimerServicesRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (featuresRef.current && !featuresRef.current.contains(target)) setIsFeaturesOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(target)) setIsServicesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFeaturesOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const openServices = () => {
    if (closeTimerServicesRef.current) {
      window.clearTimeout(closeTimerServicesRef.current);
      closeTimerServicesRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesSoon = () => {
    if (closeTimerServicesRef.current) window.clearTimeout(closeTimerServicesRef.current);
    closeTimerServicesRef.current = window.setTimeout(() => setIsServicesOpen(false), 180);
  };

  const openFeatures = () => {
    if (closeTimerFeaturesRef.current) {
      window.clearTimeout(closeTimerFeaturesRef.current);
      closeTimerFeaturesRef.current = null;
    }
    setIsFeaturesOpen(true);
  };

  const closeFeaturesSoon = () => {
    if (closeTimerFeaturesRef.current) window.clearTimeout(closeTimerFeaturesRef.current);
    closeTimerFeaturesRef.current = window.setTimeout(() => setIsFeaturesOpen(false), 180);
  };

  const mainNavItems = [
    { label: "Projects", href: "/projects" },
    { label: "Reviews", href: "/reviews" },
  ];

  const servicesItems = [
    {
      label: "All Services",
      href: onHome ? "#services" : "/#services",
      desc: "Explore our core design & build services",
    },
    {
      label: "House Extensions",
      href: "/house-extensions",
      desc: "Design & build rear, side and wraparound extensions",
    },
    { label: "Loft Conversions", href: "/loft-conversions", desc: "Add space with dormer and hip-to-gable conversions" },
    { label: "Full Renovations", href: "/full-renovations", desc: "End-to-end property renovations and refurbishments" },
  ];

  const featureItems = [
    { label: "Quote Builder", href: "/quote", desc: "Generate a quote summary PDF" },
    { label: "Leave a Review", href: "/review", desc: "Star-gated review flow" },
    { label: "Missed Call Text‑Back", href: "/missed-call-text-back", desc: "Auto SMS follow-up demo" },
    { label: "Leads to App", href: "/leads-to-app", desc: "Form submissions go to your phone" },
    { label: "SEO + Content", href: "/seo-content", desc: "Rank higher with better on-page SEO" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Logo className="h-[36px] sm:h-[42px]" />
              <span className="sr-only">Convert Extend</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                onClick={() => (isServicesOpen ? setIsServicesOpen(false) : openServices())}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-[360px] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesSoon}
                >
                  <div className="p-2">
                    {servicesItems.map((it) => (
                      <a
                        key={it.href}
                        href={it.href}
                        role="menuitem"
                        className="block rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-sm font-extrabold text-slate-900">{it.label}</div>
                        <div className="text-xs font-semibold text-slate-500 mt-1">{it.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div
              ref={featuresRef}
              className="relative"
              onMouseEnter={openFeatures}
              onMouseLeave={closeFeaturesSoon}
            >
              <button
                type="button"
                onClick={() => (isFeaturesOpen ? setIsFeaturesOpen(false) : openFeatures())}
                aria-haspopup="menu"
                aria-expanded={isFeaturesOpen}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Features
                <ChevronDown className="w-4 h-4" />
              </button>

              {isFeaturesOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-[340px] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
                  onMouseEnter={openFeatures}
                  onMouseLeave={closeFeaturesSoon}
                >
                  <div className="p-2">
                    {featureItems.map((it) => (
                      <a
                        key={it.href}
                        href={it.href}
                        role="menuitem"
                        className="block rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors"
                        onClick={() => setIsFeaturesOpen(false)}
                      >
                        <div className="text-sm font-extrabold text-slate-900">{it.label}</div>
                        <div className="text-xs font-semibold text-slate-500 mt-1">{it.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
              <div className="flex items-center gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700 tabular-nums">4.9</span>
              <div className="h-4 w-px bg-slate-200" aria-hidden="true" />
              <img src="/google-g.png" alt="Google" className="w-4 h-4" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-slate-500 font-medium">Design &amp; build team</span>
              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                0800 123 4567
              </a>
            </div>
            <Button as="a" href={onHome ? "#contact" : "/#contact"}>
              Get a Free Quote
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2">
              <div className="text-xs font-extrabold tracking-wider text-slate-500 uppercase mb-2">
                Services
              </div>
              <div className="flex flex-col">
                {servicesItems.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-extrabold tracking-wider text-slate-500 uppercase mb-2">
                Features
              </div>
              <div className="flex flex-col">
                {featureItems.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="tel:08001234567"
              className="flex items-center gap-2 text-blue-600 font-bold py-2"
            >
              <Phone className="w-5 h-5" /> 0800 123 4567
            </a>
            <Button as="a" href={onHome ? "#contact" : "/#contact"} className="w-full">
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
