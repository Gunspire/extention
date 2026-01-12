import type { Metadata } from "next";
import React from "react";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

import { Button } from "../../components/Button";
import { SectionHeading } from "../../components/SectionHeading";
import { ReviewsSection } from "../../sections/ReviewsSection";
import { TrustStrip } from "../../sections/TrustStrip";
import { BottomCtaSection } from "../../sections/BottomCtaSection";
import { Footer } from "../../sections/Footer";

export const metadata: Metadata = {
  title: "Reviews | EliteGuard Roofing",
  description:
    "Read genuine customer reviews and testimonials for EliteGuard Roofing across Google and other trusted platforms.",
  alternates: { canonical: "/reviews" },
};

const GOOGLE_REVIEWS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ??
  "https://www.google.com/search?q=EliteGuard%20Roofing%20reviews";

export default function ReviewsPage() {
  return (
    <main className="font-sans">
      <section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-sky-400 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold tracking-wider text-blue-200 uppercase">
              Reviews & testimonials
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              Trusted local roofers — proven by real customers
            </h1>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed">
              We build trust the old‑fashioned way: show up, communicate clearly, do tidy work, and
              stand behind it. Here’s what homeowners say across trusted review platforms.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as="a" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                View Google reviews
              </Button>
              <Button as="a" href="/review" variant="outline">
                Leave a review
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { t: "4.9 average", i: Star },
                { t: "Verified customers", i: BadgeCheck },
                { t: "Fully insured", i: ShieldCheck },
              ].map((b) => (
                <div
                  key={b.t}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
                >
                  <b.i className="w-4 h-4 text-blue-200" />
                  {b.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="bg-white py-14 sm:py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Trust signals" center>
            Reviewed on the platforms customers actually use
          </SectionHeading>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-7">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <img src="/google-g.png" alt="Google" className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-extrabold">Google</div>
                    <div className="text-sm text-slate-600 font-semibold">Verified reviews</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-slate-900">4.9</div>
                  <div className="flex justify-end items-center gap-0.5 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Most customers find us on Google Maps. Recent 5★ reviews help new homeowners choose
                confidently.
              </p>
              <div className="mt-5">
                <Button as="a" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" size="sm">
                  Open Google reviews
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-7">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <img src="/trustpilot.png" alt="Trustpilot" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-extrabold">Trustpilot</div>
                    <div className="text-sm text-slate-600 font-semibold">Independent platform</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-slate-900">Excellent</div>
                  <div className="text-xs font-semibold text-slate-500">Trusted marketplace</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Homeowners check independent platforms to compare firms. We focus on consistent
                workmanship and clear communication.
              </p>
              <div className="mt-5">
                <Button
                  as="a"
                  href="https://www.trustpilot.com/"
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  variant="outline"
                >
                  Trustpilot
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-7">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <span className="text-xs font-extrabold text-slate-700">CHECKA</span>
                  </div>
                  <div>
                    <div className="text-slate-900 font-extrabold">Checkatrade</div>
                    <div className="text-sm text-slate-600 font-semibold">Trade directory</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-slate-900">Trusted</div>
                  <div className="text-xs font-semibold text-slate-500">Local recommendations</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Many customers want vetted tradespeople and written feedback. We’re happy to provide
                references on request.
              </p>
              <div className="mt-5">
                <Button
                  as="a"
                  href="https://www.checkatrade.com/"
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  variant="outline"
                >
                  Checkatrade
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-slate-900 font-extrabold text-xl">Want to leave feedback?</div>
                <div className="mt-2 text-slate-600 font-semibold">
                  Pick a star rating — happy customers go to Google, otherwise it stays private.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/review">
                  Leave a review
                </Button>
                <Button as="a" href="/#contact" variant="white">
                  Get a free quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <BottomCtaSection />
      <Footer />
    </main>
  );
}


