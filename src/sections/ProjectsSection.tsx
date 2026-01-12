import React from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Work" center>
          Recent Projects
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/picture%201.jpg",
              title: "Rear extension + open-plan living",
              loc: "Cotswolds",
              date: "Aug 2025",
              duration: "12 weeks",
              highlights: ["Design-led layout", "Tidy site", "High-end finishes"],
              alt: "Completed rear extension on a family home",
            },
            {
              img: "/picture%202.jpg",
              title: "Dormer loft conversion",
              loc: "Surrey",
              date: "Jul 2025",
              duration: "9 weeks",
              highlights: ["New bedroom", "Storage planning", "Comfort-first build"],
              alt: "Completed loft conversion adding a new room",
            },
            {
              img: "/picture%203.jpg",
              title: "Full property renovation",
              loc: "South London",
              date: "Sep 2025",
              duration: "10–14 weeks",
              highlights: ["Trades coordinated", "Clear milestones", "Clean handover"],
              alt: "Completed full renovation project",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>

              <div className="p-6">
                <h4 className="text-slate-900 text-xl font-extrabold leading-snug">{project.title}</h4>
                <p className="text-slate-600 font-semibold flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-blue-600" /> {project.loc}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button as="a" href="/projects" variant="outline">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
