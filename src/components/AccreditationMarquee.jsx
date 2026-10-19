import React from "react";
import { accreditations } from "../data/company";

export const AccreditationMarquee = () => {
  return (
    <div className="relative border-y border-fg/10 bg-ink-2 py-6 overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {[...accreditations, ...accreditations].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            <span className="font-mono text-xs uppercase tracking-widest text-mute hover:text-bone transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
