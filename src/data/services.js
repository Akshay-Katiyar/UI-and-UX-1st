export const services = [
  {
    id: "sea",
    title: "Sea Freight",
    kicker: "FCL · LCL · Reefer",
    blurb: "Full and shared container loads from every major Indian port, with live vessel tracking.",
    detail: "We book space directly with leading carriers, consolidate LCL cargo at our CFS partners and handle reefer cargo for perishables — with temperature logs you can download.",
    points: [
      "20ft / 40ft / 40HC & reefer",
      "Weekly sailings to 120+ ports",
      "Door-to-door or port-to-port",
      "Live vessel ETA alerts"
    ],
    span: "md:col-span-2",
    badge: "MV UI and UX 1st Star · ETA 22d"
  },
  {
    id: "air",
    title: "Air Cargo",
    kicker: "Express · Charter",
    blurb: "Time-critical freight on the next flight out — samples to full charters.",
    detail: "Priority uplift from BOM, DEL, MAA and BLR with IATA-certified handling for dangerous goods, pharma and perishables.",
    points: [
      "24–72h to most hubs",
      "Pharma & DG handling",
      "Consolidated & direct AWB",
      "Airport-to-door delivery"
    ],
    span: "",
    badge: "BOM → FRA · AWB 176-48219375"
  },
  {
    id: "customs",
    title: "Customs & Compliance",
    kicker: "CHA · Docs · Duty",
    blurb: "Licensed customs brokerage that clears your shipment in hours, not days.",
    detail: "Shipping bills, bills of entry, HS classification, duty drawback, RoDTEP and EPCG — we file it, track it and make sure nothing sits at the port.",
    points: [
      "HS code classification",
      "Duty drawback & RoDTEP",
      "Certificates of origin",
      "ICEGATE e-filing"
    ],
    span: "",
    badge: "ICEGATE · SB 4821937 Cleared"
  },
  {
    id: "sourcing",
    title: "Sourcing & QC",
    kicker: "Vendors · Inspection",
    blurb: "Verified manufacturers and third-party inspection before anything ships.",
    detail: "A network of 300+ audited suppliers across India. Every lot is inspected against your spec with photo and lab reports shared before dispatch.",
    points: [
      "300+ audited suppliers",
      "Pre-shipment inspection",
      "Lab & phytosanitary tests",
      "Private label packing"
    ],
    span: "",
    badge: "Lot #A-2291 · Pass 9/9"
  },
  {
    id: "warehouse",
    title: "Warehousing",
    kicker: "Storage · Packing",
    blurb: "Bonded and open warehousing near JNPT with export-grade packing.",
    detail: "120,000 sq ft of storage with fumigation, palletisation, shrink-wrapping and container stuffing supervised on camera.",
    points: [
      "Bonded & open storage",
      "Fumigation & ISPM-15",
      "Palletising & lashing",
      "Stuffing supervision"
    ],
    span: "",
    badge: "JNPT Hub · 1,180 Pallets"
  }
];

export const exportJourneySteps = [
  { code: "01", title: "Enquiry & quote", text: "Share product, volume and destination. A trade desk replies with landed cost within 24 hours." },
  { code: "02", title: "Sourcing & samples", text: "We shortlist audited suppliers, ship samples and lock specs, pricing and Incoterms." },
  { code: "03", title: "Inspection & packing", text: "Third-party QC, lab tests and export packing — with photos before anything is sealed." },
  { code: "04", title: "Customs & documentation", text: "Shipping bill, COO, phyto and invoice filed digitally. Clearance in under 24 hours." },
  { code: "05", title: "Ocean / air transit", text: "Booked on the fastest reliable carrier. Track the vessel live from your dashboard." },
  { code: "06", title: "Delivered & settled", text: "Destination clearance and last-mile delivery. Documents released, payment closed." }
];
