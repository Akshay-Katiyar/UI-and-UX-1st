import React from "react";

const steps = [
  {
    num: "01",
    title: "Sealed at source",
    desc: "Bolt seal and GPS e-lock fitted at the factory gate. The seal number travels with your documents and cannot be tampered with in transit."
  },
  {
    num: "02",
    title: "Opened only on camera",
    desc: "Stuffing, customs examination and destuffing are recorded on high-definition video — you see exactly what went in and how it was secured."
  },
  {
    num: "03",
    title: "Delivered intact",
    desc: "Comprehensive warehouse-to-warehouse marine insurance with Lloyd's syndicates. Zero deductible, instant inspection claim settlement."
  }
];

export const ContainerScroll = () => {
  return (
    <section id="container" className="relative px-4 py-28 md:px-10 md:py-36 bg-ink-2/30 border-y border-fg/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
            02 · Inside the box
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold tracking-tighter leading-tight text-bone">
            One container. <span className="serif-i text-signal-2">Zero guesswork.</span>
          </h2>
          <p className="mt-4 text-mute text-sm md:text-base leading-relaxed">
            Every cubic meter of cargo is monitored. From physical high-security bolt seals to real-time IoT temperature logging on reefer containers.
          </p>
        </div>

        {/* 3 Step Verification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st) => (
            <div key={st.num} className="rounded-3xl border border-fg/10 bg-ink-2 p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-signal mb-4 block">
                  {st.num}
                </span>
                <h3 className="text-xl font-semibold text-bone mb-3">
                  {st.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>

              {/* Status indicator */}
              <div className="mt-8 pt-4 border-t border-fg/10 flex items-center justify-between text-xs font-mono text-mute">
                <span>Verification</span>
                <span className="text-sea font-semibold">100% Certified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Telemetry Bar */}
        <div className="mt-12 rounded-2xl border border-fg/10 bg-ink p-6 flex flex-wrap items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sea animate-ping" />
            <span className="text-bone font-semibold">Container Sensor: MRDU 482193-7</span>
          </div>
          <div className="flex flex-wrap gap-8 text-mute">
            <div>Internal Temp: <span className="text-bone font-semibold">-18.4°C (Normal)</span></div>
            <div>Humidity: <span className="text-bone font-semibold">62% RH</span></div>
            <div>GPS Lock: <span className="text-signal font-semibold">Engaged · Red Sea</span></div>
            <div>Battery: <span className="text-bone font-semibold">94%</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
