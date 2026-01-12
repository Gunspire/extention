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
  title: "Full Property Renovations | Convert Extend",
  description:
    "End-to-end property renovations with clear written quotes, tidy sites, and a smooth process. Convert Extend manage the project from scope to handover.",
  alternates: { canonical: "/full-renovations" },
  openGraph: {
    title: "Full Property Renovations | Convert Extend",
    description:
      "Full property renovations and refurbishments — structure, electrics, plumbing, plastering, kitchens, bathrooms and finishes. Free quote available.",
    type: "website",
    url: "/full-renovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Property Renovations | Convert Extend",
    description: "End-to-end renovations with clear scope and great finishes. Get a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function FullRenovationsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Full Property Renovations"
        headline="Transform your home—planned properly and finished to a high standard"
        description="From structural changes to electrics, plumbing and finishes, we manage full renovations end-to-end. Clear written scopes, sensible sequencing, and a tidy site — so your project stays on track."
        backgroundImageSrc="/picture%203.jpg"
        defaultServiceNeeded="Full Property Renovation"
      />

      {/* Section 1: Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/picture%203.jpg"
                  alt="A completed residential renovation project"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Layout changes", "Kitchens & bathrooms", "Whole-home finishes"].map((t) => (
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
                    src="/picture%201.jpg"
                    alt="Completed home improvement project"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/picture%204.jpg"
                    alt="Finished residential project"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Full renovations">What’s included in an end-to-end renovation</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                Renovations succeed when scope is clear and sequencing is tight. We plan the work, coordinate trades,
                keep the site tidy, and deliver a finish that feels “done”, not “almost”.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Survey & scope definition",
                    d: "We agree goals, constraints, and priorities, then write a clear scope you can understand.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Strip-out & structural works",
                    d: "Safe strip-out, steels/structural changes where needed, and a solid base for the build.",
                    i: <Hammer className="w-5 h-5" />,
                  },
                  {
                    t: "Services & trades",
                    d: "Electrics, plumbing, plastering, carpentry and tiling delivered in the right sequence.",
                    i: <Wrench className="w-5 h-5" />,
                  },
                  {
                    t: "Finishes & snagging",
                    d: "Kitchens, bathrooms, flooring, painting and a proper snagging process before handover.",
                    i: <CheckCircle2 className="w-5 h-5" />,
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
                    <div className="text-sm font-extrabold text-slate-900">Sequencing that avoids rework</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      We plan works to avoid costly rework and delays — the difference between a stressful renovation and
                      a smooth one.
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
              <SectionHeading subtitle="Our process">How a full renovation runs (step by step)</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                Full refurbishments need structure and clarity. We keep scope written, manage trades, and keep you in
                the loop at every stage.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Survey, scope & priorities",
                      d: "We confirm what’s changing, what stays, and any constraints so the program is realistic.",
                    },
                    {
                      n: "2",
                      t: "Written quote & program",
                      d: "Clear inclusions, key milestones, and a sensible schedule you can plan around.",
                    },
                    {
                      n: "3",
                      t: "Build phases",
                      d: "Strip-out → first fix → plastering → second fix → finishes — delivered in the right order.",
                    },
                    {
                      n: "4",
                      t: "Snagging & handover",
                      d: "Final checks, snag list, and a clean finish — so the job feels complete.",
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
                  src="/picture%202.jpg"
                  alt="A completed home improvement project"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Typical timeline</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Renovations vary widely — we’ll agree a realistic program based on your scope and finishes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Clear milestones</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">We track progress by stages.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Respectful access</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">Clean routes, tidy site, good communication.</div>
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
            Full renovation FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Do you do partial refurbishments as well?"
              answer="Yes. We can take on full-home renovations or defined scopes (e.g. ground floor refurb, kitchen + layout changes). We’ll help you define a scope that fits your budget."
            />
            <FAQItem
              question="Can you coordinate electrics and plumbing?"
              answer="Yes — we coordinate trades and sequencing as part of the project, and keep the scope written and clear."
            />
            <FAQItem
              question="How do you keep costs under control?"
              answer="Clear scope, written inclusions, and agreed decisions early. We’ll advise on trade-offs so you can prioritise what matters most."
            />
            <FAQItem
              question="Can we live in the house during a renovation?"
              answer="Sometimes. It depends on the scope and what rooms are affected. We’ll explain options and how we minimise disruption."
            />
            <FAQItem
              question="How do I get a quote?"
              answer="Use the quote builder for a quick summary or submit the form at the top of this page. We’ll respond quickly with a clear, written scope."
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


