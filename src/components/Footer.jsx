import React, { useState, useEffect } from "react";
import { company, tradingDesks } from "../data/company";

export const Footer = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      tradingDesks.forEach(({ city, tz }) => {
        newTimes[city] = new Intl.DateTimeFormat("en-GB", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(new Date());
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-fg/10 bg-ink-2 px-4 py-20 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-fg/10">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-signal" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#0a0d16" />
                <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M16 7v18M7 16h18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-xl font-bold text-bone">{company.name} {company.suffix}</span>
            </div>
            <p className="text-sm text-mute max-w-md leading-relaxed mb-6">
              {company.tagline}. Licensed customs broker and global freight forwarder moving Indian cargo across 120+ international ports.
            </p>
            <div className="font-mono text-xs text-mute space-y-1">
              <div>Email: <a href={`mailto:${company.email}`} className="text-bone hover:text-signal">{company.email}</a></div>
              <div>Phone: <span className="text-bone">{company.phone}</span></div>
              <div>HQ: <span className="text-bone">{company.address}</span></div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="font-mono text-xs text-signal uppercase tracking-wider mb-4 font-semibold">
              Operations
            </div>
            <ul className="space-y-2 text-sm text-mute">
              <li><a href="#services" className="hover:text-bone transition-colors">Sea & Air Freight</a></li>
              <li><a href="#container" className="hover:text-bone transition-colors">Container Telemetry</a></li>
              <li><a href="#products" className="hover:text-bone transition-colors">Commodities Catalog</a></li>
              <li><a href="#journey" className="hover:text-bone transition-colors">Export Lifecycle</a></li>
              <li><a href="#track" className="hover:text-bone transition-colors">Shipment Tracker</a></li>
            </ul>
          </div>

          {/* Global Desks */}
          <div>
            <div className="font-mono text-xs text-signal uppercase tracking-wider mb-4 font-semibold">
              Live Trading Desks
            </div>
            <div className="space-y-3 font-mono text-xs">
              {tradingDesks.map(({ city }) => (
                <div key={city} className="flex items-center justify-between">
                  <span className="text-mute">{city}</span>
                  <span className="text-bone font-medium">{times[city] || "--:--:--"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mute">
          <div>© {new Date().getFullYear()} {company.name} {company.suffix}. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#quote" className="hover:text-bone">Incoterms 2026</a>
            <a href="#quote" className="hover:text-bone">Port Compliance</a>
            <a href="#quote" className="hover:text-bone">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
