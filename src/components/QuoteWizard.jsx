import React, { useState } from "react";
import { commodities } from "../data/commodities";
import { globalPorts } from "../data/ports";

export const QuoteWizard = () => {
  const [direction, setDirection] = useState("export");
  const [selectedCommodity, setSelectedCommodity] = useState(commodities[0].name);
  const [destination, setDestination] = useState("Rotterdam");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="relative px-4 py-28 md:px-10 md:py-36 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Copy */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            Instant Landed-Cost Calculation
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tighter leading-tight text-bone">
            Ready to <br />
            <span className="serif-i text-signal-2">set sail?</span>
          </h2>
          <p className="mt-6 text-mute text-base leading-relaxed max-w-lg">
            Share your commodity, volume, and destination port. Our desk computes sea freight, export duties, insurance, and local port terminal handling charges into a transparent landed cost.
          </p>

          <div className="mt-10 space-y-4 font-mono text-xs text-mute">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span>Quotes dispatched within 24 business hours</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span>Live WhatsApp trade desk support at +91 98200 00000</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span>Zero hidden demurrage or document courier fees</span>
            </div>
          </div>
        </div>

        {/* Right Form Wizard */}
        <div className="rounded-3xl border border-fg/10 bg-ink-2 p-8 md:p-10 shadow-2xl">
          <div className="flex items-center justify-between font-mono text-xs text-mute mb-8 pb-4 border-b border-fg/10">
            <span className="text-bone font-semibold">Landed-cost quote</span>
            <span className="text-signal">Step {step} / 3</span>
          </div>

          {!submitted ? (
            <div className="space-y-6">
              {/* Trade Direction */}
              <div>
                <label className="text-xs font-mono text-mute block mb-3 uppercase tracking-wider">
                  Trade Flow Direction
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["export", "import"].map((dir) => (
                    <button
                      key={dir}
                      type="button"
                      onClick={() => setDirection(dir)}
                      className={`py-3 rounded-2xl font-mono text-xs uppercase tracking-widest border transition-all ${
                        direction === dir
                          ? "bg-signal text-night font-bold border-signal"
                          : "bg-ink border-fg/10 text-mute hover:text-bone"
                      }`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>
              </div>

              {/* Commodity Chips */}
              <div>
                <label className="text-xs font-mono text-mute block mb-3 uppercase tracking-wider">
                  Select Product Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {commodities.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCommodity(c.name)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono border transition-all ${
                        selectedCommodity === c.name
                          ? "border-signal text-signal bg-signal/10 font-semibold"
                          : "border-fg/10 text-mute hover:text-bone bg-ink"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination Port */}
              <div>
                <label className="text-xs font-mono text-mute block mb-3 uppercase tracking-wider">
                  Destination Port
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-xl bg-ink border border-fg/10 px-4 py-3 text-xs font-mono text-bone focus:border-signal focus:outline-none"
                >
                  {globalPorts.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} ({p.country}) · Approx {p.days} Days
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="w-full mt-4 py-4 rounded-full bg-signal text-night font-bold text-sm tracking-wide hover:bg-signal-2 transition-colors shadow-lg shadow-signal/20"
              >
                Calculate Landed Cost
              </button>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-sea/20 border border-sea flex items-center justify-center mx-auto text-sea text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-bone">Inquiry Dispatched to Trade Desk</h3>
              <p className="text-sm text-mute font-mono max-w-sm mx-auto">
                Requested quote for {selectedCommodity} to {destination}. A logistics broker is compiling carrier space and tariffs.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-mono text-xs text-signal underline pt-4"
              >
                Submit another inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
