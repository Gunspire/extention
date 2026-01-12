import type { Metadata } from "next";
import React from "react";

import { Footer } from "../../sections/Footer";
import { SeoContentSection } from "../../sections/SeoContentSection";

export const metadata: Metadata = {
  title: "SEO + Content | EliteGuard Roofing",
  description: "Demo: on‑page SEO and content that helps Google understand your services and rank you higher.",
};

export default function SeoContentPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main>
        <SeoContentSection />
      </main>
      <Footer />
    </div>
  );
}


