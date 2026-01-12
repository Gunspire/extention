import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, ClipboardList, Hammer, Shield, Wrench } from "lucide-react";

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
  title: "Chimney Work | EliteGuard Roofing",
  description:
    "Chimney repairs and leadwork across the UK. Repointing, flashing repairs, capping and removals done safely with clear written quotes. Get a free quote today.",
  alternates: { canonical: "/chimney-work" },
  openGraph: {
    title: "Chimney Work | EliteGuard Roofing",
    description:
      "Chimney repointing, lead flashing repairs and chimney maintenance done properly and safely.",
    type: "website",
    url: "/chimney-work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Work | EliteGuard Roofing",
    description: "Chimney repairs, repointing and leadwork. Get a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function ChimneyWorkPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Chimney Work"
        headline="Safe, watertight chimney repairs—repointing, leadwork and maintenance"
        description="Chimneys are a common leak point. We repair brickwork, renew lead flashing, and address loose pots or caps so your roof junctions stay secure and watertight."
        backgroundImageSrc="/service-chimney.png"
        defaultServiceNeeded="Chimney Repair"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/service-chimney.png"
                  alt="Chimney flashing and roof junction detail"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Repointing", "Lead flashing", "Capping"].map((t) => (
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
                    src="/gallery-1.png"
                    alt="Roofline and chimney area"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/gallery-2.png"
                    alt="Workmanship detail on roof junctions"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Chimney repairs">
                What’s included in chimney work
              </SectionHeading>

              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                Chimney leaks often come from failing mortar and flashing. We focus on stabilising the
                masonry, restoring weatherproofing, and finishing the roof junctions properly.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Inspection & written scope",
                    d: "We assess the stack, flashing, pots, and junctions and outline the best fix.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Repointing & brickwork repairs",
                    d: "Replace failed mortar and repair loose bricks to keep the chimney stable and safe.",
                    i: <Hammer className="w-5 h-5" />,
                  },
                  {
                    t: "Lead flashing repairs",
                    d: "Repair or renew flashing at abutments—one of the most common chimney leak points.",
                    i: <Wrench className="w-5 h-5" />,
                  },
                  {
                    t: "Weatherproof finish",
                    d: "Capping, sealing and tidy finishes to reduce water ingress and prolong service life.",
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
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Leak prevention focus</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      We prioritise the junction details—because that’s where chimney leaks usually start.
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
                How chimney repairs work (step by step)
              </SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                We keep chimney work safe and structured—from diagnosis to flashing and tidy handover.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Inspection",
                      d: "We assess mortar, brickwork, lead flashing, and any movement or cracking.",
                    },
                    {
                      n: "2",
                      t: "Plan & written quote",
                      d: "Clear scope and options (repoint, renew flashing, cap/secure pots, partial rebuild if needed).",
                    },
                    {
                      n: "3",
                      t: "Repair & weatherproof",
                      d: "Repoint/repair brickwork and renew leadwork at junctions for a watertight finish.",
                    },
                    {
                      n: "4",
                      t: "Checks & tidy handover",
                      d: "Final checks on junctions and stability, then a tidy finish and aftercare guidance.",
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
                  src="/service-chimney.png"
                  alt="Chimney work and flashing detail"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Common leak points</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Failed flashing, cracked mortar, and gaps around pots/caps are the usual culprits.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Safe access</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Work planned for safe access and clean execution.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Watertight junctions</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Proper leadwork where chimney meets roof.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" center>
            Chimney work FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Do chimney leaks usually come from the bricks or the flashing?"
              answer="Often the flashing (leadwork) or the mortar joints. We inspect both and repair the root cause, not just the symptoms."
            />
            <FAQItem
              question="Can you repoint a chimney without replacing tiles?"
              answer="In many cases, yes. We’ll advise what access and protection is needed and keep disruption minimal."
            />
            <FAQItem
              question="Do you replace lead flashing?"
              answer="Yes. If the lead is split, poorly detailed, or failing at joints, replacement is often the most reliable fix."
            />
            <FAQItem
              question="Can you cap or remove an unused chimney?"
              answer="We can advise on capping, ventilating, or partial removal depending on the chimney and local requirements."
            />
            <FAQItem
              question="Do you provide written quotes?"
              answer="Yes—clear scope and pricing in writing."
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


