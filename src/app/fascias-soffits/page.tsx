import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, ClipboardList, Shield, Timer, Wrench } from "lucide-react";

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
  title: "Fascias & Soffits | EliteGuard Roofing",
  description:
    "Fascia, soffit and guttering installation across the UK. Low maintenance uPVC upgrades for a cleaner roofline and better drainage. Clear written quotes. Get a free quote today.",
  alternates: { canonical: "/fascias-soffits" },
  openGraph: {
    title: "Fascias & Soffits | EliteGuard Roofing",
    description:
      "Upgrade your roofline with new fascias, soffits and guttering—tidy finish, better drainage and low maintenance.",
    type: "website",
    url: "/fascias-soffits",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fascias & Soffits | EliteGuard Roofing",
    description: "Fascias, soffits and guttering upgrades with tidy workmanship. Get a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function FasciasSoffitsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Fascias & Soffits"
        headline="A cleaner roofline—new fascias, soffits and guttering fitted properly"
        description="We replace tired, rotten or leaking roofline components with durable, low maintenance uPVC fascias, soffits and guttering. Better drainage, improved kerb appeal, and tidy workmanship."
        backgroundImageSrc="/service-fascias.png"
        defaultServiceNeeded="Guttering & Fascias"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/service-fascias.png"
                  alt="New uPVC fascias and soffits on a home"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["uPVC fascias", "Soffits", "Guttering"].map((t) => (
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
                    alt="Roofline detail and finish"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/gallery-3.png"
                    alt="Guttering and fascia alignment detail"
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Roofline upgrades">
                What’s included with fascias & soffits
              </SectionHeading>

              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                A good roofline upgrade improves drainage and protects timber. We replace failing
                components, align gutter falls properly, and finish cleanly for a long-lasting result.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Assessment & written quote",
                    d: "We check the condition of boards, ends, and guttering and give a clear written scope.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Remove and replace safely",
                    d: "Old boards removed carefully; new uPVC components fitted with tidy joins and alignment.",
                    i: <Wrench className="w-5 h-5" />,
                  },
                  {
                    t: "Guttering set to correct falls",
                    d: "Proper alignment to prevent pooling, overflow and staining on walls.",
                    i: <CheckCircle2 className="w-5 h-5" />,
                  },
                  {
                    t: "Low maintenance finish",
                    d: "Durable, wipe-clean uPVC that improves kerb appeal and reduces ongoing maintenance.",
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
                    <div className="text-sm font-extrabold text-slate-900">Better drainage</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      Properly aligned guttering helps prevent damp patches, staining and overflow.
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
                How a roofline upgrade works (step by step)
              </SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                We keep it simple: assess, remove safely, fit accurately, and make sure drainage runs correctly.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Survey & measurements",
                      d: "We measure runs, check timber condition, and plan safe access.",
                    },
                    {
                      n: "2",
                      t: "Remove old components",
                      d: "Old boards and guttering removed cleanly while protecting the roof edge and walls.",
                    },
                    {
                      n: "3",
                      t: "Fit fascias/soffits & guttering",
                      d: "New uPVC fitted and aligned; gutter falls set correctly for drainage.",
                    },
                    {
                      n: "4",
                      t: "Final checks & tidy finish",
                      d: "We test flow, check joins and leave a clean, finished roofline.",
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
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/service-fascias.png"
                  alt="Roofline upgrade with new guttering and fascia"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="text-white font-extrabold text-sm">Why it matters</div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      A good roofline helps protect the roof edge and directs water safely away from your walls.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Neat finish</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Clean lines and tidy joins.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Low maintenance</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Durable uPVC upgrade.
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
            Fascias & soffits FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="Do I need to replace guttering when replacing fascias?"
              answer="Not always, but it’s often recommended if the guttering is leaking, misaligned, or near end-of-life. We’ll advise based on condition and budget."
            />
            <FAQItem
              question="Will new fascias and soffits stop damp patches?"
              answer="If damp is caused by overflow or failing roofline components, improving drainage and replacing rotten boards can help. We’ll also check for roof-related causes."
            />
            <FAQItem
              question="Do you use uPVC?"
              answer="Yes—uPVC fascias, soffits and guttering are durable and low maintenance, and give a clean finish."
            />
            <FAQItem
              question="How long does a roofline upgrade take?"
              answer="Timing depends on the size of the property and access, but many jobs complete quickly. We’ll confirm timeline in the quote."
            />
            <FAQItem
              question="Do you provide written quotes?"
              answer="Yes—clear written scope and pricing so you know what’s included."
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


