import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { company } from "../data/company";

export const BootLoader = ({ onDone }) => {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Remove static fallback #boot if present
    const staticBoot = document.getElementById("boot");
    if (staticBoot) staticBoot.remove();

    const state = { value: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setFinished(true);
          onDone?.();
        }
      });

      tl.to(state, {
        value: 100,
        duration: 1.1,
        ease: "power2.inOut",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = String(Math.round(state.value)).padStart(3, "0");
          }
        }
      })
      .to(".pl-bar", {
        scaleX: 1,
        duration: 1.1,
        ease: "power2.inOut"
      }, 0)
      .to(".pl-inner", {
        yPercent: -30,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.in"
      })
      .to(".pl-shutter", {
        scaleY: 0,
        duration: 0.8,
        ease: "expo.inOut",
        stagger: 0.05,
        transformOrigin: "top"
      }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, [onDone]);

  if (finished) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col justify-center items-center font-sans overflow-hidden">
      {/* 5 Vertical Shutters */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="pl-shutter h-full bg-ink-2"
            style={{ boxShadow: "inset -1px 0 0 rgba(255,255,255,0.06)" }}
          />
        ))}
      </div>

      {/* Center Counter & Progress */}
      <div className="pl-inner relative z-10 flex flex-col items-center justify-center px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-mute">
          Loading manifest
        </div>

        <div className="mt-6 flex items-end gap-3">
          <div className="text-[clamp(4rem,14vw,9rem)] font-medium leading-none tracking-tighter text-bone">
            <span ref={numberRef}>000</span>
          </div>
          <div className="mb-2 font-mono text-sm text-signal font-semibold">%</div>
        </div>

        <div className="mt-6 h-px w-64 bg-fg/10 relative overflow-hidden">
          <div className="pl-bar h-full origin-left scale-x-0 bg-signal transition-transform duration-75" />
        </div>

        <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-mute">
          MRDU 482193 · 7 — {company.name} {company.suffix}
        </div>
      </div>
    </div>
  );
};
