import React, { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { BootLoader } from "./components/BootLoader";
import { Navbar } from "./components/Navbar";
import { HeroGlobe } from "./components/HeroGlobe";
import { AccreditationMarquee } from "./components/AccreditationMarquee";
import { ServicesBento } from "./components/ServicesBento";
import { ContainerScroll } from "./components/ContainerScroll";
import { CommoditiesCatalog } from "./components/CommoditiesCatalog";
import { ExportJourney } from "./components/ExportJourney";
import { ShipmentTracker } from "./components/ShipmentTracker";
import { Testimonials } from "./components/Testimonials";
import { QuoteWizard } from "./components/QuoteWizard";
import { Footer } from "./components/Footer";

export function App() {
  const [bootReady, setBootReady] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-ink text-bone font-sans antialiased selection:bg-signal selection:text-night relative grain">
        {/* Boot Sequence Loader */}
        <BootLoader onDone={() => setBootReady(true)} />

        {/* Floating Capsule Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <HeroGlobe />
          <AccreditationMarquee />
          <ServicesBento />
          <ContainerScroll />
          <CommoditiesCatalog />
          <ExportJourney />
          <ShipmentTracker />
          <Testimonials />
          <QuoteWizard />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
