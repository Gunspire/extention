import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, ClipboardList, Hammer, Shield, Timer, Wrench } from "lucide-react";

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
  title: "Loft Conversions | Convert Extend",
  description:
    "Design and build loft conversions with clear written quotes, tidy sites, and a smooth end-to-end process. Get a free quote from Convert Extend.",
  alternates: { canonical: "/loft-conversions" },
  openGraph: {
    title: "Loft Conversions | Convert Extend",
    description:
      "Create a new bedroom, office or master suite with a loft conversion. Convert Extend manage design, planning support, build, and finishing — start with a free quote.",
    type: "website",
    url: "/loft-conversions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loft Conversions | Convert Extend",
    description: "Loft conversions with clear quotes, tidy workmanship and great finishes. Free quote available.",
  },
  robots: { index: true, follow: true },
};

export default function LoftConversionsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Loft Conversions"
        headline="Unlock space you already own—done safely and finished beautifully"
        description="Dormer and hip-to-gable loft conversions that add real, usable rooms. We handle structure, insulation, stairs, electrics and finishes with a clear scope and tidy workmanship."
        backgroundImageSrc="/picture%202.jpg"
        defaultServiceNeeded="Loft Conversion"
      />

      {/* Section 1: Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/picture%202.jpg"
                  alt="A finished home with added usable space"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Dormers", "Hip-to-gable", "Ensuites & storage"].map((t) => (
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
                    src="/picture%203.jpg"
                    alt="Renovated home exterior"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/picture%204.jpg"
                    alt="Completed residential project"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Loft conversions">What’s included in a loft conversion</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                A great loft conversion is about structure, insulation, and a comfortable finished space. We build it
                properly, keep the site tidy, and communicate clearly throughout.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Feasibility & layout planning",
                    d: "We assess head height, access, stairs options, and the best layout for your new room.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Structural work",
                    d: "Floors, steels and framing delivered safely and inspected at key stages.",
                    i: <Hammer className="w-5 h-5" />,
                  },
                  {
                    t: "Insulation & comfort",
                    d: "Insulation, ventilation, and sound considerations so the room feels like part of the home.",
                    i: <Timer className="w-5 h-5" />,
                  },
                  {
                    t: "Finishes & services",
                    d: "Electrics, plumbing (if needed), plastering, joinery and finishing — ready to use.",
                    i: <Wrench className="w-5 h-5" />,
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
                      You’ll receive a written scope covering structure, finishes and assumptions — so you know exactly
                      what’s included.
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
              <SectionHeading subtitle="Our process">How your loft conversion works (step by step)</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                A smooth loft conversion comes from good sequencing — survey, a clear scope, structural works, then
                finishes and handover.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Survey & feasibility",
                      d: "We confirm constraints (head height, structure, stairs position) and propose the best conversion type.",
                    },
                    {
                      n: "2",
                      t: "Design, approvals & written quote",
                      d: "We help with planning/building regs where needed and confirm scope and timeline in writing.",
                    },
                    {
                      n: "3",
                      t: "Structure, insulation & services",
                      d: "Floors, steels, framing, insulation and first-fix electrics/plumbing are completed in the right order.",
                    },
                    {
                      n: "4",
                      t: "Finishes & handover",
                      d: "Plastering, joinery, second fix, snagging and clean handover — ready to furnish.",
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
                  src="/picture%201.jpg"
                  alt="A completed residential project"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Typical timeline</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Many loft conversions complete in <span className="text-white font-extrabold">6–12 weeks</span>{" "}
                      depending on scope and finishes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Minimised disruption</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">We plan access and keep things tidy.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Comfort-first</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">Insulation and ventilation done properly.</div>
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
            Loft conversion FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Do I need planning permission for a loft conversion?"
              answer="Many loft conversions fall under permitted development, but not all. We’ll explain what applies to your home and help with approvals where needed."
            />
            <FAQItem
              question="Will I lose a lot of space to the stairs?"
              answer="Stairs placement is one of the biggest design decisions. We’ll propose options that keep flow practical and minimise impact on existing rooms."
            />
            <FAQItem
              question="Can I stay in the house during works?"
              answer="Often, yes. We’ll talk you through the sequence and how we minimise disruption and maintain safe access."
            />
            <FAQItem
              question="Can you add an ensuite?"
              answer="Yes — where feasible. We’ll assess plumbing routes and layout, then include it in the written scope if it’s the right fit."
            />
            <FAQItem
              question="How do I get started?"
              answer="Use the form at the top of the page or the quote builder and we’ll arrange a quick call/visit to understand your loft conversion."
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


