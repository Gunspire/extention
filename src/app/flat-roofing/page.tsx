import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, ClipboardList, Layers, Shield, Timer } from "lucide-react";

import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { Reveal } from "../../components/Reveal";
import { SectionHeading } from "../../components/SectionHeading";
import { ServiceHero } from "../../components/ServiceHero";
import { BottomCtaSection } from "../../sections/BottomCtaSection";
import { Footer } from "../../sections/Footer";
import { ProjectsSection } from "../../sections/ProjectsSection";
import { ReviewsSection } from "../../sections/ReviewsSection";
import { ServiceAreaSection } from "../../sections/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Flat Roofing | EliteGuard Roofing",
  description:
    "Flat roofing installation and replacement across the UK. EPDM rubber, GRP fibreglass and felt systems with clean detailing and clear written quotes. Get a free quote today.",
  alternates: { canonical: "/flat-roofing" },
  openGraph: {
    title: "Flat Roofing | EliteGuard Roofing",
    description:
      "Modern flat roofs for garages and extensions—EPDM, GRP and felt systems installed properly with tidy workmanship.",
    type: "website",
    url: "/flat-roofing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flat Roofing | EliteGuard Roofing",
    description: "EPDM, GRP and felt flat roofing installed properly. Get a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function FlatRoofingPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Flat Roofing"
        headline="Modern flat roofing—watertight, durable, and finished cleanly"
        description="We install and replace flat roofs using EPDM rubber, GRP fibreglass, and high-performance felt systems. Correct detailing at edges and outlets is what stops leaks—so we focus on the details."
        backgroundImageSrc="/service-flat-roof.png"
        defaultServiceNeeded="Flat Roofing (EPDM/Felt)"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/service-flat-roof.png"
                  alt="Flat roof installation in progress"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["EPDM", "GRP", "Torch-on felt"].map((t) => (
                      <span
                        key={t}
                        className="text-xs font-extrabold tracking-wide text-white/95 rounded-full bg-slate-950/25 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/gallery-2.png"
                    alt="Flat roof edge detailing"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/gallery-3.png"
                    alt="Roofing materials and workmanship detail"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Flat roofing">
                What’s included in a flat roof installation
              </SectionHeading>

              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                Flat roofs fail at the details—edges, outlets, upstands and junctions. We build the
                system correctly so water sheds properly and the roof stays watertight for the long
                term.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Survey-led system choice",
                    d: "We recommend EPDM, GRP or felt based on the roof size, usage, and access.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Deck prep and build-up",
                    d: "We prepare the deck and build the roof correctly so the membrane performs.",
                    i: <Layers className="w-5 h-5" />,
                  },
                  {
                    t: "Edge & outlet detailing",
                    d: "Drip edges, trims, outlets and upstands detailed properly—common leak points.",
                    i: <CheckCircle2 className="w-5 h-5" />,
                  },
                  {
                    t: "Tidy finish & aftercare",
                    d: "Clean site, clear handover, and simple guidance to keep the roof in good condition.",
                    i: <Shield className="w-5 h-5" />,
                  },
                ].map((c) => (
                  <div key={c.t} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900">
                        {c.i}
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">{c.t}</div>
                        <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">{c.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                    <Timer className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Designed for extensions & garages</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      Perfect for warm roof upgrades, bay roofs, porches, garages and extensions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/quote">
                  Build a Quote
                </Button>
                <Button as="a" href="/#projects" variant="outline">
                  View recent work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeading subtitle="Our process">
                How we install a flat roof (step by step)
              </SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                Flat roofing is all about preparation and detailing. This is how we keep it clean,
                predictable, and watertight.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Survey & specification",
                      d: "We confirm the roof size, condition, and recommend EPDM/GRP/felt based on performance needs.",
                    },
                    {
                      n: "2",
                      t: "Preparation & protection",
                      d: "Deck prep, trims, insulation (if required), and protective measures for a clean install.",
                    },
                    {
                      n: "3",
                      t: "Install membrane/system",
                      d: "System installed to spec with proper bonding/laminating and tidy edge work.",
                    },
                    {
                      n: "4",
                      t: "Detailing & checks",
                      d: "Outlets, upstands and joints checked carefully—then handover and aftercare guidance.",
                    },
                  ].map((s) => (
                    <li key={s.n}>
                      <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <div className="absolute top-4 right-4 h-8 w-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold">
                          {s.n}
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">{s.t}</div>
                        <p className="mt-2 text-sm font-semibold text-slate-600 leading-relaxed">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/quote">
                  Get a quote
                </Button>
                <Button as="a" href="/#services" variant="outline">
                  See all services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/service-flat-roof.png"
                  alt="Completed flat roof with clean edge detailing"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Pro tip</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Most flat roof leaks come from edges and outlets—so we obsess over the details.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Clean lines</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">Neat trims and tidy joints.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Watertight finish</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">Built to shed water properly.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" center>
            Flat roofing FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Which flat roof system is best—EPDM, GRP or felt?"
              answer="It depends on roof size, detailing complexity, and budget. EPDM is durable and flexible, GRP is seamless and rigid, and felt can be a great value option when installed properly."
            />
            <FAQItem
              question="Can you install a warm roof (insulated) flat roof?"
              answer="Yes. Where appropriate, we can upgrade insulation as part of the installation to improve comfort and reduce condensation risk."
            />
            <FAQItem
              question="How long should a flat roof last?"
              answer="Lifespan varies by system and detailing, but a properly installed modern flat roof should last many years. We’ll advise on the best option for longevity."
            />
            <FAQItem
              question="Do flat roofs need maintenance?"
              answer="Minimal maintenance helps: keep outlets clear, remove debris, and check seals occasionally—especially after storms."
            />
            <FAQItem
              question="Do you provide written quotes?"
              answer="Yes—clear written scope and pricing, so you know exactly what’s included."
            />
          </div>
        </div>
      </section>

      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Reveal>
        <ServiceAreaSection />
      </Reveal>
      <Reveal>
        <BottomCtaSection />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}


