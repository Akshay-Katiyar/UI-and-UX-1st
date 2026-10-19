import React, { useState } from "react";
import { commodities } from "../data/commodities";

export const CommoditiesCatalog = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="products" className="relative px-4 py-28 md:px-10 md:py-36 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
          03 · What we trade
        </div>
        <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold tracking-tighter leading-tight text-bone max-w-3xl">
          Sourced across India. <br />
          <span className="serif-i text-signal-2">Sold across the globe.</span>
        </h2>
        <p className="mt-4 text-mute max-w-xl text-sm md:text-base leading-relaxed">
          Tap any card to flip it — every category comes with its verified HS code, origin belt, minimum order volume, and export packing specifications.
        </p>
      </div>

      {/* Grid of 3D Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {commodities.map((item, index) => {
          const isFlipped = flippedIndex === index;
          return (
            <div
              key={item.name}
              onClick={() => toggleFlip(index)}
              className="group h-[380px] perspective cursor-pointer"
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-3d transition-transform rounded-3xl ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-3xl border border-fg/10 bg-ink-2 p-6 flex flex-col justify-between overflow-hidden shadow-md">
                  {/* Top tags */}
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs mb-3">
                      <span className="text-signal font-semibold">{item.hs}</span>
                      <span className="text-mute">{`0${index + 1}/08`}</span>
                    </div>
                    <div className="text-xs text-mute font-mono">{item.origin}</div>
                    <h3 className="text-xl font-bold text-bone mt-2">{item.name}</h3>
                  </div>

                  {/* Photo representation */}
                  <div
                    className="h-36 w-full rounded-2xl bg-cover bg-center border border-fg/5 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/${item.photo}?auto=format&fit=crop&w=500&q=70')`,
                      backgroundColor: item.tone
                    }}
                  />

                  {/* Flip Prompt */}
                  <div className="flex items-center justify-between text-xs font-mono text-mute pt-3 border-t border-fg/5">
                    <span>Spec sheet</span>
                    <span className="text-signal group-hover:translate-x-1 transition-transform">Flip card →</span>
                  </div>
                </div>

                {/* Back Side (Spec Sheet) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl border border-signal/30 bg-ink-3 p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-mute mb-2">
                      <span className="text-signal font-semibold">Specification</span>
                      <span>← Back</span>
                    </div>
                    <h4 className="text-lg font-bold text-bone mb-4">{item.name}</h4>

                    <div className="space-y-3 text-xs font-mono">
                      <div>
                        <div className="text-mute">HS CODE</div>
                        <div className="text-bone font-semibold">{item.hs}</div>
                      </div>
                      <div>
                        <div className="text-mute">ORIGIN STATE</div>
                        <div className="text-bone font-semibold">{item.origin}</div>
                      </div>
                      <div>
                        <div className="text-mute">MINIMUM ORDER (MOQ)</div>
                        <div className="text-signal-2 font-semibold">{item.moq}</div>
                      </div>
                      <div>
                        <div className="text-mute">EXPORT PACKING</div>
                        <div className="text-bone font-semibold">{item.pack}</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#quote"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full text-center py-2.5 rounded-full bg-signal text-night font-semibold text-xs tracking-wide hover:bg-signal-2 transition-colors"
                  >
                    Request quota & samples
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
