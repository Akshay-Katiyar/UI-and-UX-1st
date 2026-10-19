import React from "react";
import { exportJourneySteps } from "../data/services";

export const ExportJourney = () => {
  return (
    <section id="journey" className="relative px-4 py-28 md:px-10 md:py-36 bg-ink-2/30 border-t border-fg/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            04 · How it works
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold tracking-tighter leading-tight text-bone max-w-3xl">
            From factory floor <br />
            <span className="serif-i text-signal-2">to your destination warehouse.</span>
          </h2>
          <p className="mt-4 text-mute max-w-xl text-sm md:text-base leading-relaxed">
            A clear, deterministic 6-stage lifecycle for every international consignment with milestone tracking.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exportJourneySteps.map((step) => (
            <div
              key={step.code}
              className="rounded-3xl border border-fg/10 bg-ink-2 p-8 flex flex-col justify-between hover:border-fg/20 transition-colors"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-signal uppercase tracking-widest">
                  Step {step.code} / 06
                </span>
                <h3 className="text-xl font-bold text-bone mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed">
                  {step.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-fg/5 flex items-center justify-between text-xs font-mono text-mute">
                <span>Phase</span>
                <span className="text-bone font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
