import React from "react";

import { ServiceCard } from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Our Expertise" center>
        Design &amp; Build Home Improvements
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="House Extensions"
          description="Rear, side and wraparound extensions — designed to suit your home, built with care, and finished to a high standard."
          imageSrc="/picture%201.jpg"
          imageAlt="A finished family home exterior after an extension project"
          href="/house-extensions"
          linkLabel="Learn more"
        />
        <ServiceCard
          title="Loft Conversions"
          description="Dormer and hip-to-gable conversions that add bedrooms, offices, and value — with smart layouts and smooth delivery."
          imageSrc="/picture%202.jpg"
          imageAlt="A renovated home with additional usable space"
          href="/loft-conversions"
          linkLabel="Learn more"
        />
        <ServiceCard
          title="Full Property Renovations"
          description="End-to-end refurbishments: structural changes, electrics, plumbing, plastering, kitchens, bathrooms, and finishes."
          imageSrc="/picture%203.jpg"
          imageAlt="A completed residential renovation project"
          href="/full-renovations"
          linkLabel="Learn more"
        />
      </div>
    </section>
  );
}
