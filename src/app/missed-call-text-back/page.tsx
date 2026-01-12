import type { Metadata } from "next";
import React from "react";

import { Footer } from "../../sections/Footer";
import { MissedCallTextBackSection } from "../../sections/MissedCallTextBackSection";

export const metadata: Metadata = {
  title: "Missed Call Text-Back | EliteGuard Roofing",
  description: "Demo: automatically text customers back when you miss their call.",
};

export default function MissedCallTextBackPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main>
        <MissedCallTextBackSection />
      </main>
      <Footer />
    </div>
  );
}


