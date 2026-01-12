import type { Metadata } from "next";
import React from "react";

import { Footer } from "../../sections/Footer";
import { InvoiceQuoteSection } from "../../sections/InvoiceQuoteSection";

export const metadata: Metadata = {
  title: "Quote Builder | EliteGuard Roofing",
  description: "Generate a quote summary PDF (demo).",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main>
        <InvoiceQuoteSection />
      </main>
      <Footer />
    </div>
  );
}


