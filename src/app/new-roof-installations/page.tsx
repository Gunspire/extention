import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, ClipboardList, Hammer, Shield, Timer } from "lucide-react";

import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { Reveal } from "../../components/Reveal";
import { SectionHeading } from "../../components/SectionHeading";
import { ServiceHero } from "../../components/ServiceHero";
import { Footer } from "../../sections/Footer";
import { BottomCtaSection } from "../../sections/BottomCtaSection";
import { ProjectsSection } from "../../sections/ProjectsSection";
import { ReviewsSection } from "../../sections/ReviewsSection";
import { ServiceAreaSection } from "../../sections/ServiceAreaSection";

export const metadata: Metadata = {
  title: "New Roof Installations | EliteGuard Roofing",
  description:
    "New roof installations across the UK. Tile, slate and flat roofing options with clear, written quotes, tidy workmanship, and strong guarantees. Get a free quote today.",
  alternates: {
    canonical: "/new-roof-installations",
  },
  openGraph: {
    title: "New Roof Installations | EliteGuard Roofing",
    description:
      "Planning a new roof? Get expert installation with clear pricing, quality materials, and a workmanship guarantee. Free quote available.",
    type: "website",
    url: "/new-roof-installations",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Roof Installations | EliteGuard Roofing",
    description:
      "Expert new roof installations with transparent quotes and quality workmanship. Get a free quote.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewRoofInstallationsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="New Roof Installations"
        headline="Replace your roof with confidence—built to last, finished properly"
        description="We install new roofs across the UK with clear, written quotes and quality materials. From strip-out to the finishing details, we keep it tidy, safe, and stress-free."
        backgroundImageSrc="/service-new-roof.png"
        defaultServiceNeeded="New Roof Installation"
      />

      {/* Section 1: Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/gallery-1.png"
                  alt="Completed new roof installation"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Tile", "Slate", "Flat roofing"].map((t) => (
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
                    alt="Roofing workmanship detail"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/gallery-3.png"
                    alt="Roof installation in progress"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <SectionHeading subtitle="New roof installation">
                What’s included in a roof replacement (the full system)
              </SectionHeading>

              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                A modern new roof installation isn’t just a new covering. Long-term performance
                comes from the layers and the details: membrane, ventilation, leadwork, and tidy,
                consistent workmanship. This is what we focus on for durable roof replacements.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Survey-led specification",
                    d: "We measure, check structure, and recommend the right roof build-up for your property.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Strip & rebuild (where required)",
                    d: "Proper removal and rebuild so you’re not patching underlying issues later.",
                    i: <Hammer className="w-5 h-5" />,
                  },
                  {
                    t: "Weatherproof detailing",
                    d: "Flashings, ridges, verges and junctions finished correctly to prevent leaks.",
                    i: <CheckCircle2 className="w-5 h-5" />,
                  },
                  {
                    t: "Membrane + ventilation planning",
                    d: "Breathable membrane and airflow planning to reduce condensation risk.",
                    i: <Timer className="w-5 h-5" />,
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
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Clear, written quote</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      You’ll receive a written scope that’s easy to compare—so you know exactly what’s
                      included in your new roof installation quote.
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

      {/* Section 2: Process */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeading subtitle="Our process">
                How your new roof installation works (step by step)
              </SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                Whether you need a full roof replacement or a new build roof, we keep the process
                clear and predictable—so you know what happens next and why.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Survey & measurements",
                      d: "We inspect the roof, confirm access, and agree the best materials (tile, slate, or flat system).",
                    },
                    {
                      n: "2",
                      t: "Written quote & schedule",
                      d: "Clear scope, realistic timeline, and what’s included—so you can plan with confidence.",
                    },
                    {
                      n: "3",
                      t: "Install & quality checks",
                      d: "Correct detailing at junctions, ridges and flashings. Clean, safe site management throughout.",
                    },
                    {
                      n: "4",
                      t: "Handover & aftercare",
                      d: "Walkthrough and simple aftercare guidance so your new roof performs for the long term.",
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
                  src="/gallery-4.png"
                  alt="Roofing team working on a new installation"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Typical timeline</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Many domestic new roofs complete in <span className="text-white font-extrabold">2–5 days</span>{" "}
                      (size, access and weather dependent).
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Clean site</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Safe access, tidy work areas, end-of-day cleanups.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Quality checks</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Detail checks at junctions, ridges, verges and flashings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: FAQs */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" center>
            New roof installation FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="How long does a new roof installation take?"
              answer="Most domestic roofs can be completed in a few days depending on size, access, weather and whether timbers or insulation upgrades are needed. We’ll give you a realistic timeline after the survey."
            />
            <FAQItem
              question="Do you replace felt/membrane and battens as part of a new roof?"
              answer="In most full roof replacements, yes—membrane and battens are typically renewed so the system performs properly. Your written quote will confirm exactly what’s included for your roof."
            />
            <FAQItem
              question="Can you install tile, slate and flat roofs?"
              answer="Yes. We install pitched roofs (tile/slate) and flat roof systems depending on the property and specification. We’ll recommend the best option for durability and value."
            />
            <FAQItem
              question="Will you help me decide between repair vs replacement?"
              answer="Absolutely. If repairs make more sense, we’ll tell you. If replacement is the safer long-term option, we’ll explain why with clear evidence from the survey."
            />
            <FAQItem
              question="How do I get a quote?"
              answer="Use the quote builder for a quick summary or submit the form at the top of this page. We’ll respond quickly and keep the quote clear and written."
            />
          </div>
        </div>
      </section>

      {/* Same sections as the main page */}
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


