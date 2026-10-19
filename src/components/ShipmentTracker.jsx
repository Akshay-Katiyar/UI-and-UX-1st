import React, { useState } from "react";

export const ShipmentTracker = () => {
  const [containerId, setContainerId] = useState("MRDU 482193-7");
  const [searched, setSearched] = useState(true);

  return (
    <section id="track" className="relative px-4 py-28 md:px-10 md:py-36 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
          05 · Track a shipment
        </div>
        <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold tracking-tighter leading-tight text-bone max-w-3xl">
          Know where your cargo is. <br />
          <span className="serif-i text-signal-2">Always.</span>
        </h2>
        <p className="mt-4 text-mute max-w-xl text-sm md:text-base leading-relaxed">
          Every client gets a live operations telemetry dashboard: vessel GPS coordinates, customs ICEGATE milestones, reefer temperature logs, and ETA alerts via WhatsApp.
        </p>
      </div>

      {/* Tracking Input Card */}
      <div className="rounded-3xl border border-fg/10 bg-ink-2 p-8 shadow-xl max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            value={containerId}
            onChange={(e) => setContainerId(e.target.value)}
            placeholder="Enter Container or Bill of Lading Number"
            aria-label="Container or B/L number"
            className="flex-1 rounded-full bg-ink px-6 py-3.5 text-sm font-mono text-bone border border-fg/10 focus:border-signal focus:outline-none"
          />
          <button
            onClick={() => setSearched(true)}
            className="rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-night hover:bg-signal-2 transition-colors whitespace-nowrap"
          >
            Track Cargo
          </button>
        </div>

        {searched && (
          <div className="space-y-6 pt-6 border-t border-fg/10 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-mute block">VESSEL & VOYAGE</span>
                <span className="text-bone font-semibold text-sm">MV UI and UX 1st Star · 042W</span>
              </div>
              <div>
                <span className="text-mute block">PORT OF LOADING</span>
                <span className="text-bone font-semibold text-sm">JNPT, Mumbai (IN)</span>
              </div>
              <div>
                <span className="text-mute block">DESTINATION</span>
                <span className="text-bone font-semibold text-sm">Rotterdam (NL)</span>
              </div>
              <div>
                <span className="text-mute block">ESTIMATED ARRIVAL</span>
                <span className="text-signal font-semibold text-sm">22d 04h (On Schedule)</span>
              </div>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 border-t border-fg/5">
              <div className="p-3 rounded-xl bg-ink/60 border border-sea/30">
                <div className="text-sea font-semibold">✓ Gate In & Sealed</div>
                <div className="text-mute text-[11px] mt-1">JNPT Terminal 4</div>
              </div>
              <div className="p-3 rounded-xl bg-ink/60 border border-sea/30">
                <div className="text-sea font-semibold">✓ ICEGATE Cleared</div>
                <div className="text-mute text-[11px] mt-1">LEO Issued (Duty Paid)</div>
              </div>
              <div className="p-3 rounded-xl bg-ink/60 border border-signal/40">
                <div className="text-signal font-semibold">● At Sea (In Transit)</div>
                <div className="text-mute text-[11px] mt-1">Speed: 18.2 kts · Arabian Sea</div>
              </div>
              <div className="p-3 rounded-xl bg-ink/60 border border-fg/5 opacity-60">
                <div className="text-mute">○ Destuffing & Release</div>
                <div className="text-mute text-[11px] mt-1">Rotterdam Delta Terminal</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
