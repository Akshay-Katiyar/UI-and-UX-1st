import React, { useState } from "react";
import { testimonials } from "../data/testimonials";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section className="relative px-4 py-28 md:px-10 md:py-36 bg-ink-2/40 border-y border-fg/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
              06 · Partners say
            </div>
            <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold tracking-tighter leading-tight text-bone">
              Trusted by importers on <br />
              <span className="serif-i text-signal-2">five continents.</span>
            </h2>
          </div>

          {/* Overall Score */}
          <div className="flex items-center gap-6">
            <div>
              <div className="font-mono text-3xl font-bold text-bone">4.9/5</div>
              <div className="text-xs text-mute font-mono">average across 380+ shipments</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-fg/15 flex items-center justify-center text-bone hover:bg-fg/10 transition-colors"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-fg/15 flex items-center justify-center text-bone hover:bg-fg/10 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Quote Card */}
        <div className="rounded-3xl border border-fg/10 bg-ink-2 p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="font-serif text-6xl text-signal/20 absolute top-6 left-8 pointer-events-none">
            “
          </div>
          <p className="text-xl md:text-3xl text-bone font-medium leading-relaxed max-w-4xl relative z-10">
            "{active.quote}"
          </p>

          <div className="mt-10 pt-6 border-t border-fg/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-signal/15 border border-signal/30 flex items-center justify-center font-mono font-bold text-signal">
                {active.initials}
              </div>
              <div>
                <div className="text-bone font-semibold">{active.name}</div>
                <div className="text-xs text-mute font-mono">
                  {active.role} · {active.company} ({active.country})
                </div>
              </div>
            </div>
            <div className="font-mono text-xs text-sea">
              Verified Consignee Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
