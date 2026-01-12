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
  title: "Roof Repairs | EliteGuard Roofing",
  description:
    "Fast, reliable roof repairs across the UK. Leaks, slipped tiles, storm damage and flashing issues fixed properly with clear written quotes. Get a free quote today.",
  alternates: { canonical: "/roof-repairs" },
  openGraph: {
    title: "Roof Repairs | EliteGuard Roofing",
    description:
      "Roof leaking or missing tiles? Get expert roof repairs with quick response, tidy workmanship and clear written quotes.",
    type: "website",
    url: "/roof-repairs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repairs | EliteGuard Roofing",
    description: "Expert roof repairs for leaks, slipped tiles and storm damage. Get a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function RoofRepairsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Roof Repairs"
        headline="Stop leaks fast—proper roof repairs that last"
        description="From slipped tiles to storm damage and persistent leaks, we diagnose the root cause and fix it properly. Clear written quotes, tidy workmanship, and sensible advice on repair vs replacement."
        backgroundImageSrc="/service-repairs.png"
        defaultServiceNeeded="Roof Repairs"
      />

      {/* Section 1: Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/service-repairs.png"
                  alt="Roof repair work in progress"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Leak repairs", "Slipped tiles", "Storm damage"].map((t) => (
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
                    src="/before.png"
                    alt="Roof issue before repair"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/after.png"
                    alt="Roof after repair"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Roof repairs">
                What’s included in a professional roof repair
              </SectionHeading>

              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                A good repair starts with diagnosis. We trace the source of leaks (often not where
                the water shows inside), then repair the roof system and the details that failed.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Leak diagnosis & pinpointing",
                    d: "We identify the true entry point and the failed detail, not just the visible damp patch.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Tile / slate replacement",
                    d: "Replace broken or missing tiles/slates and secure surrounding areas for a watertight finish.",
                    i: <Hammer className="w-5 h-5" />,
                  },
                  {
                    t: "Lead flashing & junction fixes",
                    d: "Repair flashings, valleys and abutments—common sources of persistent leaks.",
                    i: <Wrench className="w-5 h-5" />,
                  },
                  {
                    t: "Storm damage repairs",
                    d: "Make-safe work and repairs to prevent further ingress and protect your property.",
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
                    <div className="text-sm font-extrabold text-slate-900">Fast response, clear scope</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      We keep the repair scope clear and written—so you understand what’s being fixed
                      and why.
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
              <SectionHeading subtitle="Our process">How we fix your roof (step by step)</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                The best repairs are calm and systematic—identify the root cause, repair the detail,
                and leave the roof watertight.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Inspection & diagnosis",
                      d: "We locate the leak source and identify what failed (tile, flashing, valley, membrane, or fixings).",
                    },
                    {
                      n: "2",
                      t: "Repair plan & written quote",
                      d: "Clear scope, materials, and what to expect—so you can approve confidently.",
                    },
                    {
                      n: "3",
                      t: "Repair & weatherproofing",
                      d: "Replace damaged components and seal critical junctions for a watertight finish.",
                    },
                    {
                      n: "4",
                      t: "Final checks & aftercare",
                      d: "We check the repaired areas and advise on any preventative maintenance worth doing.",
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
                  src="/after.png"
                  alt="Roof after repair with watertight finish"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Common issues</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Slipped tiles, cracked mortar, failing flashing, and storm damage are the most common causes of leaks.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Tidy finish</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Clean work areas and minimal disruption.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Honest advice</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Repair vs replacement guidance based on the survey.
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
            Roof repair FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Can you repair a leaking roof without replacing it?"
              answer="In many cases, yes. If the roof structure is sound and the issue is localised (tiles, flashing, junctions), a targeted repair is often the best value option."
            />
            <FAQItem
              question="How quickly can you attend a roof repair?"
              answer="It depends on workload and weather, but we prioritise active leaks and storm damage. Use the form at the top of the page to request a fast callback."
            />
            <FAQItem
              question="Do you repair flat roofs as well?"
              answer="Yes—flat roof repairs are common. If the flat roof is failing across multiple areas, we may recommend a full replacement for reliability."
            />
            <FAQItem
              question="Will you provide a written quote?"
              answer="Yes. We provide clear written quotes explaining what’s included so you can make an informed decision."
            />
            <FAQItem
              question="How do I know if I need a new roof instead?"
              answer="If multiple areas are failing or the roof is at end-of-life, replacement can be more cost effective than repeated repairs. We’ll advise honestly after inspection."
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


