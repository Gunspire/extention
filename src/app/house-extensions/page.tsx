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
  title: "House Extensions | Convert Extend",
  description:
    "Design and build house extensions with clear written quotes, tidy sites, and a smooth end-to-end process. Get a free quote from Convert Extend.",
  alternates: { canonical: "/house-extensions" },
  openGraph: {
    title: "House Extensions | Convert Extend",
    description:
      "Add space with a well-designed extension. Convert Extend manage design, planning support, build, and finishing — with clear timelines and tidy workmanship.",
    type: "website",
    url: "/house-extensions",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Extensions | Convert Extend",
    description: "Design & build house extensions with clear quotes and great finishes. Free quote available.",
  },
  robots: { index: true, follow: true },
};

export default function HouseExtensionsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="House Extensions"
        headline="Add the space you need—designed to fit your home"
        description="Rear, side and wraparound extensions designed around how you live. We manage the build end-to-end with clear written quotes, tidy sites, and communication you don’t have to chase."
        backgroundImageSrc="/picture%201.jpg"
        defaultServiceNeeded="House Extension"
      />

      {/* Section 1: Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/picture%201.jpg"
                  alt="Completed home extension exterior"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Rear & side extensions", "Open-plan living", "Kitchens & bifolds"].map((t) => (
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
                    src="/picture%202.jpg"
                    alt="Home improvement project detail"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/picture%203.jpg"
                    alt="Finished home renovation exterior"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="House extensions">What’s included in a well-run extension</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                Great results come from good planning and sequencing. We focus on structure, weather-tightness,
                and finishes — and keep the scope clear so there are no surprises.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Survey, layout & feasibility",
                    d: "We assess your home and goals, then advise on layout, access, and the best use of space.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Structure & build",
                    d: "Foundations, steels, walls and roof structure delivered safely and correctly.",
                    i: <Hammer className="w-5 h-5" />,
                  },
                  {
                    t: "Trades coordination",
                    d: "Electrics, plumbing, plastering and joinery sequenced properly for a smooth finish.",
                    i: <Wrench className="w-5 h-5" />,
                  },
                  {
                    t: "Finishing & handover",
                    d: "Snagging, final checks, and a clean handover so you can enjoy the space immediately.",
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
                    <div className="text-sm font-extrabold text-slate-900">Clear, written scope</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      We keep scope, inclusions, and assumptions written and easy to understand — so you can approve
                      confidently and budget properly.
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
              <SectionHeading subtitle="Our process">How your extension works (step by step)</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                We keep the process calm and predictable — survey, clear scope, a sensible build program, and a clean
                handover.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Initial visit & feasibility",
                      d: "We discuss goals, assess constraints, and outline the best options for space, layout and budget.",
                    },
                    {
                      n: "2",
                      t: "Design, scope & written quote",
                      d: "Clear inclusions, realistic timeline, and what to expect — so you can plan with confidence.",
                    },
                    {
                      n: "3",
                      t: "Build & coordination",
                      d: "We manage sequencing, quality checks, and a tidy site so the build runs smoothly.",
                    },
                    {
                      n: "4",
                      t: "Snagging & handover",
                      d: "Final checks, snag list, and a clean finish — ready for you to move into the new space.",
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
                  src="/picture%204.jpg"
                  alt="A finished family home"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Typical timeline</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Many extensions complete in <span className="text-white font-extrabold">8–16 weeks</span> depending
                      on size, access and finishes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Tidy site</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">Daily clean-up and respectful access.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Quality checks</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">Key stage inspections and snagging.</div>
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
            House extension FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Do I need planning permission for an extension?"
              answer="Sometimes. Many projects fall under permitted development, but it depends on size, location and constraints. We’ll help you understand what applies to your home."
            />
            <FAQItem
              question="How much does a house extension cost?"
              answer="It depends on size, structure, and finishes. We provide clear written quotes with a defined scope so you can budget properly."
            />
            <FAQItem
              question="Can we live in the house during the build?"
              answer="Often, yes. We’ll explain what to expect, how we protect access/routes, and how we minimise disruption."
            />
            <FAQItem
              question="Do you manage multiple trades?"
              answer="Yes — we coordinate trades and sequencing so the project runs smoothly and finishes properly."
            />
            <FAQItem
              question="How do I get started?"
              answer="Use the form at the top of the page or the quote builder and we’ll arrange a quick call/visit to understand your project."
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


