import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, ClipboardList, Shield, Siren, Timer, Wrench } from "lucide-react";

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
  title: "Emergency Call-outs | EliteGuard Roofing",
  description:
    "24/7 emergency roofing call-outs across the UK. Fast make-safe, tarping, leak control and storm damage repairs with clear written follow-up quotes. Call now.",
  alternates: { canonical: "/emergency-call-outs" },
  openGraph: {
    title: "Emergency Call-outs | EliteGuard Roofing",
    description:
      "24/7 emergency roofing call-outs for leaks and storm damage. Fast make-safe work to protect your property.",
    type: "website",
    url: "/emergency-call-outs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Call-outs | EliteGuard Roofing",
    description: "24/7 emergency roofing call-outs for leaks and storm damage. Call now.",
  },
  robots: { index: true, follow: true },
};

export default function EmergencyCallOutsPage() {
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName="Emergency Call-outs"
        headline="24/7 emergency roofing—make-safe fast, protect your home"
        description="If you’ve got active leaks or storm damage, we prioritise making the roof safe and watertight to prevent further damage. Then we’ll provide a clear written plan for any permanent repairs."
        backgroundImageSrc="/service-emergency.png"
        defaultServiceNeeded="Emergency Call-out"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/45 via-slate-900/20 to-transparent" />
                <img
                  src="/service-emergency.png"
                  alt="Emergency roof tarping in bad weather"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    {["Make-safe", "Tarping", "Leak control"].map((t) => (
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
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">24/7 response</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Prioritised for active leaks and storm damage.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Protect your property</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Make-safe first, then permanent repair options.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading subtitle="Emergency roofing">
                What’s included in an emergency call-out
              </SectionHeading>

              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-2xl">
                Emergencies are about preventing further damage. We focus on safe access, a watertight
                temporary solution, and a clear plan for the permanent fix.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Fast assessment",
                    d: "Quick diagnosis and a safe plan of action based on weather and access.",
                    i: <ClipboardList className="w-5 h-5" />,
                  },
                  {
                    t: "Make-safe & temporary weatherproofing",
                    d: "Tarping and temporary sealing to stop water ingress and reduce damage risk.",
                    i: <Shield className="w-5 h-5" />,
                  },
                  {
                    t: "Storm damage repairs",
                    d: "Re-secure loose materials, replace missing tiles where possible, and stabilise vulnerable areas.",
                    i: <Wrench className="w-5 h-5" />,
                  },
                  {
                    t: "Clear written follow-up",
                    d: "After make-safe, we provide a written plan and quote for the permanent repair.",
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
                    <Timer className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Make-safe first</div>
                    <p className="mt-1 text-sm font-semibold text-slate-600 leading-relaxed">
                      The goal is to stop water ingress and secure the roof—then plan the permanent fix properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/quote">
                  Request a quote
                </Button>
                <Button as="a" href="/#services" variant="outline">
                  See all services
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
                What happens on an emergency call-out (step by step)
              </SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                We keep it simple: assess, make-safe, prevent further damage, then provide a clear plan for the permanent repair.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {[
                    {
                      n: "1",
                      t: "Call & dispatch",
                      d: "We confirm the issue and prioritise active leaks and storm damage.",
                    },
                    {
                      n: "2",
                      t: "On-site assessment",
                      d: "We assess access and safety, then identify the best make-safe approach.",
                    },
                    {
                      n: "3",
                      t: "Make-safe & weatherproof",
                      d: "Temporary sealing or tarping to stop water ingress and stabilise the roof.",
                    },
                    {
                      n: "4",
                      t: "Plan the permanent fix",
                      d: "Written scope and options for a permanent repair once conditions allow.",
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
                  src="/service-emergency.png"
                  alt="Emergency roofing response"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-white font-extrabold text-sm">
                      <Siren className="w-4 h-4" /> Emergency priority
                    </div>
                    <div className="mt-1 text-white/90 text-sm font-semibold">
                      Active leaks and storm damage are prioritised for fast make-safe work.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Safety first</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Work planned around access and conditions.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Prevent damage</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Stop ingress quickly to reduce interior damage.
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
            Emergency call-out FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            <FAQItem
              question="What counts as a roofing emergency?"
              answer="Active water ingress, storm damage, missing tiles/sections, and anything that risks further damage to the property are all considered emergencies."
            />
            <FAQItem
              question="Do you do temporary tarping?"
              answer="Yes. Tarping and temporary weatherproofing are common make-safe solutions to stop water ingress quickly."
            />
            <FAQItem
              question="Will you also do the permanent repair?"
              answer="Yes. After make-safe work, we’ll provide a written plan and quote for the permanent repair and schedule it as soon as practical."
            />
            <FAQItem
              question="Can you attend in bad weather?"
              answer="We’ll always prioritise safety. If conditions are unsafe, we’ll advise the safest next steps and attend as soon as conditions allow."
            />
            <FAQItem
              question="How do I request an emergency call-out?"
              answer="Call the number at the top of the page or submit the form—select “Emergency Call-out” to help us prioritise."
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


