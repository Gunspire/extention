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
  title: "Projects | EliteGuard Roofing",
  description:
    "Explore recent roofing projects across the UK. Roof repairs, flat roofing, chimney work and new roof installations with tidy workmanship and clear results.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | EliteGuard Roofing",
    description:
      "Explore recent roofing projects—repairs, replacements and flat roofing—completed with tidy workmanship and clear results.",
    type: "website",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | EliteGuard Roofing",
    description: "Explore recent roofing projects and request a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function ProjectsPage() {
  const projectsAll: ProjectGalleryItem[] = [
    {
      src: "/hero-2.png",
      alt: "Completed slate roof replacement on a UK home",
      title: "Slate roof replacement",
      location: "Cotswolds",
      date: "Aug 2025",
      duration: "4 days",
      tags: ["Natural slate", "Leadwork", "Ridges"],
    },
    {
      src: "/hero-1.png",
      alt: "New tiled roof installation completed on a residential property",
      title: "New tiled roof + ventilation",
      location: "Surrey",
      date: "Jul 2025",
      duration: "3 days",
      tags: ["New tiles", "Dry verge", "Ventilation"],
    },
    {
      src: "/hero-bg.png",
      alt: "Roof repair project completed after storm damage",
      title: "Storm damage repair",
      location: "South London",
      date: "Sep 2025",
      duration: "48 hours",
      tags: ["Make-safe", "Tile repair", "Watertight"],
    },
    {
      src: "/service-flat-roof.png",
      alt: "Flat roof installation with clean edge detailing",
      title: "Flat roof installation",
      location: "Greater London",
      date: "Jun 2025",
      duration: "2 days",
      tags: ["EPDM/GRP", "Trims", "Outlets"],
    },
    {
      src: "/service-chimney.png",
      alt: "Chimney flashing and roof junction detail",
      title: "Chimney leadwork repair",
      location: "Kent",
      date: "May 2025",
      duration: "1 day",
      tags: ["Lead flashing", "Repointing", "Junctions"],
    },
    {
      src: "/service-repairs.png",
      alt: "Roof repair work in progress",
      title: "Leak diagnosis + repair",
      location: "Essex",
      date: "Apr 2025",
      duration: "Same day",
      tags: ["Leak repair", "Tiles", "Flashings"],
    },
    {
      src: "/service-fascias.png",
      alt: "New uPVC fascias and soffits on a home",
      title: "Fascias & soffits upgrade",
      location: "Hertfordshire",
      date: "Mar 2025",
      duration: "1–2 days",
      tags: ["uPVC", "Guttering", "Roofline"],
    },
    {
      src: "/before.png",
      alt: "Roof before repair showing visible damage",
      title: "Before: damaged section",
      location: "Berkshire",
      date: "Feb 2025",
      duration: "—",
      tags: ["Before", "Damage", "Assessment"],
    },
    {
      src: "/after.png",
      alt: "Roof after repair with a clean, watertight finish",
      title: "After: watertight finish",
      location: "Berkshire",
      date: "Feb 2025",
      duration: "—",
      tags: ["After", "Watertight", "Clean finish"],
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


