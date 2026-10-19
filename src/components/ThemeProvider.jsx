import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "light" ? "#f2efe8" : "#06080f");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = useCallback((e) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const applyTheme = () => setTheme(nextTheme);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      applyTheme();
      return;
    }

    const x = e?.clientX ?? window.innerWidth - 60;
    const y = e?.clientY ?? 32;
    const maxDistance = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--vt-x", `${x}px`);
    rootStyle.setProperty("--vt-y", `${y}px`);
    rootStyle.setProperty("--vt-r", `${maxDistance}px`);

    document.startViewTransition(applyTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
