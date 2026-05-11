export type Product = {
  id: string;
  index: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  accent: "steel" | "cyan" | "amber" | "rust";
};

export const products: Product[] = [
  {
    id: "cutting",
    index: "01",
    name: "AXIO-C420",
    category: "Cutting Machine",
    tagline: "Heat-free sectioning at the precise crystallographic plane.",
    description:
      "Abrasive cut-off saw engineered for low-deformation sectioning of metallographic specimens. Closed-loop coolant management protects the microstructure from thermal artefacts.",
    specs: [
      { label: "Cutting capacity", value: "Ø 80 mm" },
      { label: "Wheel diameter", value: "250 – 305 mm" },
      { label: "Spindle speed", value: "400 – 3200 rpm" },
      { label: "Motor", value: "2.2 kW · 3-phase" },
    ],
    highlights: [
      "Programmable feed",
      "Pulse / continuous cut",
      "Coolant recirculation",
    ],
    accent: "steel",
  },
  {
    id: "mounting",
    index: "02",
    name: "PRESS-M30",
    category: "Mounting Press",
    tagline: "Hot mounting with sub-degree thermal uniformity.",
    description:
      "Hydraulic hot-mounting press with dual-cylinder design for parallel mount production. Touchscreen recipes preserve repeatable encapsulation for irregular specimens.",
    specs: [
      { label: "Mould diameters", value: "25 / 30 / 40 / 50 mm" },
      { label: "Max pressure", value: "350 bar" },
      { label: "Heating range", value: "120 – 200 °C" },
      { label: "Cycle time", value: "~6 min" },
    ],
    highlights: ["Dual cylinder", "Recipe memory ×64", "Touchscreen UI"],
    accent: "amber",
  },
  {
    id: "polishing",
    index: "03",
    name: "POLI-GP250",
    category: "Grinding & Polishing",
    tagline: "Twin-platen surface preparation with adaptive load.",
    description:
      "Programmable grinder/polisher with individual specimen pressure control. Closed-loop torque feedback eliminates rounded edges and preserves second-phase particles.",
    specs: [
      { label: "Platen size", value: "Ø 250 / 300 mm" },
      { label: "Platen speed", value: "30 – 600 rpm" },
      { label: "Head speed", value: "30 – 150 rpm" },
      { label: "Specimens", value: "Up to 6 × 30 mm" },
    ],
    highlights: ["Twin platens", "Individual load", "Auto-dosing slurry"],
    accent: "cyan",
  },
  {
    id: "etching",
    index: "04",
    name: "ETCH-E10",
    category: "Etching Equipment",
    tagline: "Electrolytic & chemical etching in one fume-safe station.",
    description:
      "Bench-top electrolytic etcher with programmable voltage profiles and integrated extraction. Etches stainless, titanium and superalloys without contaminating the specimen surface.",
    specs: [
      { label: "Voltage range", value: "0 – 60 V DC" },
      { label: "Current", value: "0 – 5 A" },
      { label: "Time control", value: "0.1 – 999 s" },
      { label: "Profiles", value: "32 stored programs" },
    ],
    highlights: ["Programmable ramp", "Integrated extraction", "PTFE cell"],
    accent: "rust",
  },
  {
    id: "microscope",
    index: "05",
    name: "META-Scope X9",
    category: "Metallurgical Microscope",
    tagline: "Inverted brightfield, darkfield, DIC & polarised in one stage.",
    description:
      "Trinocular inverted metallurgical microscope with infinity-corrected optics. Motorised nosepiece, koehler illumination, and CMOS imaging path tuned for grain-size analysis.",
    specs: [
      { label: "Magnification", value: "50× – 1000×" },
      { label: "Illumination", value: "12 V / 100 W halogen + LED" },
      { label: "Stage", value: "Motorised XY · 75 × 50 mm" },
      { label: "Imaging", value: "20 MP CMOS, USB 3.0" },
    ],
    highlights: ["Infinity optics", "Motorised stage", "Image analysis suite"],
    accent: "cyan",
  },
  {
    id: "hardness",
    index: "06",
    name: "DURO-Vickers V250",
    category: "Hardness Tester",
    tagline: "Automatic Vickers / Knoop micro-hardness with optical CMM.",
    description:
      "Closed-loop loadcell hardness tester with motorised turret. Live optical measurement and grid mapping export hardness profiles directly to your QA report.",
    specs: [
      { label: "Test loads", value: "10 gf – 50 kgf" },
      { label: "Indenters", value: "Vickers · Knoop · Brinell" },
      { label: "Optics", value: "10× / 50× turret" },
      { label: "Mapping", value: "Auto grid, polyline" },
    ],
    highlights: ["Closed-loop load", "Auto indent reading", "QA export"],
    accent: "steel",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  body: string;
  tag: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    tag: "Section",
    title: "Sectioning",
    body: "Specimens are isolated with abrasive or precision cutting. We minimise mechanical and thermal damage so the microstructure that reaches the microscope is the microstructure that was in the part.",
  },
  {
    index: "02",
    tag: "Mount",
    title: "Mounting",
    body: "Irregular geometries are encapsulated in conductive or transparent resin. Hot or cold mounting is chosen per specimen — both preserve edge retention for hardened cases and coatings.",
  },
  {
    index: "03",
    tag: "Grind",
    title: "Grinding & Polishing",
    body: "A staged abrasion path removes deformation layer by layer. Adaptive load and slurry dosing recover the true surface without smearing soft phases or rounding edges.",
  },
  {
    index: "04",
    tag: "Etch",
    title: "Etching",
    body: "Chemical or electrolytic etching reveals grain boundaries, phases and inclusions. Recipes are calibrated per alloy family — from carbon steels to nickel superalloys.",
  },
  {
    index: "05",
    tag: "Image",
    title: "Imaging & Analysis",
    body: "Brightfield, darkfield, DIC and polarised light combine with a motorised stage and image analysis to deliver grain size, phase fraction and inclusion ratings traceable to standards.",
  },
];

export type SpecCallout = {
  label: string;
  value: string;
  unit?: string;
  hint: string;
};

export const stats: SpecCallout[] = [
  {
    label: "Resolution",
    value: "0.2",
    unit: "µm",
    hint: "Lateral optical resolution at 1000× DIC",
  },
  {
    label: "Flatness",
    value: "<1",
    unit: "µm",
    hint: "Across Ø30 mm polished specimen",
  },
  {
    label: "Throughput",
    value: "48",
    unit: "specimens / day",
    hint: "Automated prep cycle, single operator",
  },
  {
    label: "Calibration",
    value: "ISO",
    unit: "17025",
    hint: "Traceable certificates included",
  },
];

export const trustedBy: { name: string; sub: string }[] = [
  { name: "STEELWORKS", sub: "Heavy Industry" },
  { name: "AEROCAST", sub: "Aerospace Foundry" },
  { name: "POLY-INSTITUTE", sub: "Materials Research" },
  { name: "NUCLEONIX", sub: "Power Generation" },
  { name: "TRANSAXLE", sub: "Automotive QA" },
  { name: "RAILMETAL", sub: "Rolling Stock" },
  { name: "ORTHOSTEEL", sub: "Medical Alloys" },
  { name: "BLADEFORGE", sub: "Tooling & Dies" },
];
