import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { company, metrics } from "../data/company";
import { globalPorts } from "../data/ports";

export const HeroGlobe = () => {
  const canvasRef = useRef(null);
  const [selectedPort, setSelectedPort] = useState(globalPorts[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial tilt
    globeGroup.rotation.x = 0.3;
    globeGroup.rotation.y = -1.2;

    // Load land.json coordinates
    fetch("/land.json")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        const count = Math.floor(data.length / 2);
        const positions = new Float32Array(count * 3);

        const latLngToVector3 = (lat, lng, radius = 1) => {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lng + 180) * (Math.PI / 180);
          return new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
          );
        };

        for (let i = 0; i < count; i++) {
          const lat = data[i * 2];
          const lng = data[i * 2 + 1];
          const v = latLngToVector3(lat, lng, 1);
          positions[i * 3] = v.x;
          positions[i * 3 + 1] = v.y;
          positions[i * 3 + 2] = v.z;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
          color: 0x46d6c8,
          size: 0.012,
          transparent: true,
          opacity: 0.6
        });

        const points = new THREE.Points(geometry, material);
        globeGroup.add(points);
      })
      .catch((err) => console.log("Land data loading:", err));

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-4 md:px-10 overflow-hidden">
      {/* 3D WebGL Globe Canvas */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <canvas ref={canvasRef} className="w-full h-full max-w-6xl max-h-[850px]" />
      </div>

      {/* Hero Header Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-fg/10 bg-ink-2/60 px-3.5 py-1.5 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span className="font-mono text-xs text-mute tracking-wider uppercase">
            Global Trade Corridor Active
          </span>
        </div>

        <h1 className="text-[clamp(2.75rem,7vw,6.5rem)] font-semibold tracking-tighter leading-[0.98] text-bone">
          YOUR move <span className="serif-i text-signal-2">India's finest</span> <br />
          to the <span className="serif-i">world.</span>
        </h1>

        <p className="mt-6 text-base md:text-xl text-mute max-w-2xl mx-auto leading-relaxed font-normal">
          One desk. 120+ ports. Direct sourcing, regulatory customs clearance, and temperature-tracked sea and air freight with zero cargo guesswork.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#quote"
            className="rounded-full bg-signal px-7 py-3 text-sm font-semibold text-night transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-signal/20"
          >
            Get a landed-cost quote
          </a>
          <a
            href="#services"
            className="rounded-full border border-fg/15 bg-ink-2/60 px-7 py-3 text-sm font-medium text-bone backdrop-blur-md hover:bg-fg/10 transition-colors"
          >
            Explore services
          </a>
        </div>
      </div>

      {/* Port Transit Route Chips */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-12">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {globalPorts.slice(0, 8).map((port) => (
            <button
              key={port.name}
              onClick={() => setSelectedPort(port)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-mono tracking-wide transition-colors whitespace-nowrap border ${
                selectedPort.name === port.name
                  ? "border-signal text-signal bg-signal/10"
                  : "border-fg/10 text-mute hover:text-bone hover:border-fg/20 bg-ink-2/40"
              }`}
            >
              {port.name} <span className="text-signal-2">· {port.days}d</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Metrics Strip */}
      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-fg/10 mt-8">
        {metrics.map(({ value, suffix, label }) => (
          <div key={label} className="text-center md:text-left">
            <div className="font-mono text-2xl md:text-4xl font-semibold text-bone">
              {value}
              <span className="text-signal">{suffix}</span>
            </div>
            <div className="text-xs md:text-sm text-mute mt-1 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
