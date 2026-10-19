import React, { useState } from "react";
import { services } from "../data/services";

export const ServicesBento = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section id="services" className="relative px-4 py-28 md:px-10 md:py-36 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
          01 · What we handle
        </div>
        <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold tracking-tighter leading-tight text-bone max-w-3xl">
          Every <span className="serif-i text-signal-2">link in the chain</span>, handled.
        </h2>
        <p className="mt-4 text-mute max-w-xl text-sm md:text-base leading-relaxed">
          Tap any card — each one is a live view of how our desks work for you, from booking vessel space to stamping the final customs release.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((svc) => (
          <div
            key={svc.id}
            onClick={() => setActiveTab(svc.id)}
            className={`beam-border group cursor-pointer rounded-3xl bg-ink-2 p-8 transition-all duration-300 border border-fg/10 hover:border-fg/20 flex flex-col justify-between ${
              svc.span || ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs text-signal font-semibold tracking-wider">
                  {svc.badge}
                </span>
                <span className="font-mono text-[11px] text-mute uppercase tracking-widest">
                  {svc.kicker}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-bone mb-3 group-hover:text-signal transition-colors">
                {svc.title}
              </h3>

              <p className="text-mute text-sm leading-relaxed mb-6">
                {svc.blurb}
              </p>

              <div className="text-xs text-bone/70 border-t border-fg/10 pt-4 mb-6 leading-normal">
                {svc.detail}
              </div>
            </div>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-mute pt-2 border-t border-fg/5">
              {svc.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
