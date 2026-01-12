import type { Metadata } from "next";
import React from "react";

import { Reveal } from "../../components/Reveal";
import { SectionHeading } from "../../components/SectionHeading";
import { ProjectsGallery, type ProjectGalleryItem } from "../../components/ProjectsGallery";
import { ProjectsHero } from "../../components/ProjectsHero";
import { BottomCtaSection } from "../../sections/BottomCtaSection";
import { Footer } from "../../sections/Footer";
import { ReviewsSection } from "../../sections/ReviewsSection";

export const metadata: Metadata = {
  title: "Projects | Convert Extend",
  description:
    "Explore recent home improvement projects by Convert Extend: house extensions, loft conversions, and full property renovations — delivered with tidy workmanship and clear results.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Convert Extend",
    description:
      "Explore recent home improvement projects—extensions, loft conversions and renovations—completed with tidy workmanship and clear results.",
    type: "website",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Convert Extend",
    description: "Explore recent projects and request a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function ProjectsPage() {
  const projectsAll: ProjectGalleryItem[] = [
    {
      src: "/picture%201.jpg",
      alt: "Completed home improvement project exterior",
      title: "Rear extension",
      location: "Cotswolds",
      date: "Aug 2025",
      duration: "12 weeks",
      tags: ["Extension", "Open-plan", "Finishes"],
    },
    {
      src: "/picture%202.jpg",
      alt: "Completed home renovation project",
      title: "Loft conversion",
      location: "Surrey",
      date: "Jul 2025",
      duration: "9 weeks",
      tags: ["Loft", "Layout", "Comfort"],
    },
    {
      src: "/picture%203.jpg",
      alt: "Completed residential renovation exterior",
      title: "Full property renovation",
      location: "South London",
      date: "Sep 2025",
      duration: "10–14 weeks",
      tags: ["Renovation", "Trades", "Handover"],
    },
  ];
  const projects = [...projectsAll.slice(0, 3), ...projectsAll.slice(0, 3)];

  return (
    <main className="font-sans">
      <ProjectsHero />

      {/* 3x3 project gallery */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Portfolio" center>
            Recent projects
          </SectionHeading>

          <ProjectsGallery items={projects} />
        </div>
      </section>

      <Reveal>
        <ReviewsSection />
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


