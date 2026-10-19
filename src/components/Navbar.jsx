import React, { useState, useEffect } from "react";
import { company } from "../data/company";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { id: "top", label: "Home" },
  { id: "services", label: "Services" },
  { id: "container", label: "Container" },
  { id: "products", label: "Products" },
  { id: "journey", label: "Process" },
  { id: "track", label: "Track" },
  { id: "quote", label: "Contact" }
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center gap-2 px-3 pt-3 md:pt-4 transition-transform duration-300">
      <nav className="lg flex w-full max-w-5xl items-center justify-between py-1.5 pl-4 pr-1.5 md:pl-5 rounded-full border border-fg/10">
        <div className="lg-backdrop" />
        <div className="lg-tint" />
        <div className="lg-shine" />

        {/* Logo */}
        <button
          onClick={() => scrollTo("top")}
          className="flex items-center gap-2 text-bone font-medium tracking-tight text-sm focus-visible:outline-none"
        >
          <svg className="w-5 h-5 text-signal" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#0a0d16" />
            <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M16 7v18M7 16h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="font-semibold">{company.name}</span>
          <span className="text-mute font-mono text-xs">{company.suffix}</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive ? "text-bone bg-fg/[0.08]" : "text-mute hover:text-bone"
                  }`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full text-bone hover:bg-fg/10 transition-colors"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path strokeWidth="2" strokeLinecap="round" d="M12 2v2m0 16v2m10-10h-2M4 10H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 4.05L4.636 5.464" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Request Quote CTA */}
          <button
            onClick={() => scrollTo("quote")}
            className="rounded-full bg-bone px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-signal hover:text-night"
          >
            Request quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-fg/[0.06] md:hidden text-bone"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-3 top-20 rounded-2xl bg-ink-2/95 border border-fg/10 p-5 shadow-2xl backdrop-blur-xl">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left py-2 px-3 rounded-lg text-sm text-bone hover:bg-fg/5"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
