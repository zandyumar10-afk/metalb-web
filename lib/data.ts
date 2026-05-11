import type { Lang } from "@/lib/i18n";

export type LocalizedText = { id: string; en: string };

export type LocalizedSpec = { label: LocalizedText; value: string };

export type Product = {
  id: string;
  index: string;
  name: string;
  category: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  longDescription: LocalizedText;
  specs: LocalizedSpec[];
  highlights: LocalizedText[];
  useCases: LocalizedText[];
  accent: "steel" | "cyan" | "amber" | "rust";
};

export function pick<T extends LocalizedText>(t: T, lang: Lang): string {
  return t[lang];
}

export const products: Product[] = [
  {
    id: "cutting",
    index: "01",
    name: "AXIO-C420",
    category: { id: "Mesin Pemotong", en: "Cutting Machine" },
    tagline: {
      id: "Sectioning bebas panas pada bidang kristalografi yang tepat.",
      en: "Heat-free sectioning at the precise crystallographic plane.",
    },
    description: {
      id: "Abrasive cut-off saw yang direkayasa untuk sectioning spesimen metalografi dengan deformasi rendah. Closed-loop coolant management melindungi microstructure dari artefak termal.",
      en: "Abrasive cut-off saw engineered for low-deformation sectioning of metallographic specimens. Closed-loop coolant management protects the microstructure from thermal artefacts.",
    },
    longDescription: {
      id: "AXIO-C420 menggunakan roda abrasif diameter 250–305 mm dengan kontrol feed yang dapat diprogram. Sistem coolant sirkulasi tertutup dengan filter aluminium oxide menjaga temperatur spesimen di bawah 40 °C selama pemotongan — penting untuk paduan yang sensitif terhadap panas seperti baja perlakuan dingin dan superalloy nikel.",
      en: "AXIO-C420 uses 250–305 mm abrasive wheels with programmable feed control. The closed-loop coolant system with aluminium-oxide filtration keeps specimen temperature below 40 °C during cutting — critical for heat-sensitive alloys such as cold-treated steels and nickel superalloys.",
    },
    specs: [
      { label: { id: "Kapasitas potong", en: "Cutting capacity" }, value: "Ø 80 mm" },
      { label: { id: "Diameter roda", en: "Wheel diameter" }, value: "250 – 305 mm" },
      { label: { id: "Kecepatan spindle", en: "Spindle speed" }, value: "400 – 3200 rpm" },
      { label: { id: "Motor", en: "Motor" }, value: "2.2 kW · 3-phase" },
    ],
    highlights: [
      { id: "Feed dapat diprogram", en: "Programmable feed" },
      { id: "Pulse / continuous cut", en: "Pulse / continuous cut" },
      { id: "Resirkulasi coolant", en: "Coolant recirculation" },
    ],
    useCases: [
      { id: "Sectioning baja struktural & paduan tool steel", en: "Sectioning structural steel & tool steel alloys" },
      { id: "Preparasi spesimen las dan brazing", en: "Welded and brazed specimen preparation" },
      { id: "Cutoff sample heat-treated tanpa anil ulang", en: "Cutoff of heat-treated samples without re-annealing" },
    ],
    accent: "steel",
  },
  {
    id: "mounting",
    index: "02",
    name: "PRESS-M30",
    category: { id: "Mounting Press", en: "Mounting Press" },
    tagline: {
      id: "Hot mounting dengan keseragaman termal sub-derajat.",
      en: "Hot mounting with sub-degree thermal uniformity.",
    },
    description: {
      id: "Hydraulic hot-mounting press dengan desain dual-cylinder untuk produksi mount paralel. Touchscreen recipe menjaga enkapsulasi spesimen tidak beraturan tetap reproducible.",
      en: "Hydraulic hot-mounting press with dual-cylinder design for parallel mount production. Touchscreen recipes preserve repeatable encapsulation for irregular specimens.",
    },
    longDescription: {
      id: "PRESS-M30 menyediakan dua silinder paralel sehingga dua spesimen dengan profil termal berbeda bisa di-mount serempak. Recipe library berisi 64 program dengan kurva pemanasan, soak time, dan profil pendinginan yang independen untuk resin bakelite, epoxy konduktif, dan transparan akrilik.",
      en: "PRESS-M30 provides two parallel cylinders so two specimens with different thermal profiles can be mounted simultaneously. The recipe library holds 64 programs with independent heating curves, soak times, and cooling profiles for bakelite, conductive epoxy, and clear acrylic resins.",
    },
    specs: [
      { label: { id: "Diameter mould", en: "Mould diameters" }, value: "25 / 30 / 40 / 50 mm" },
      { label: { id: "Tekanan maksimum", en: "Max pressure" }, value: "350 bar" },
      { label: { id: "Range pemanasan", en: "Heating range" }, value: "120 – 200 °C" },
      { label: { id: "Cycle time", en: "Cycle time" }, value: "~6 min" },
    ],
    highlights: [
      { id: "Dual cylinder", en: "Dual cylinder" },
      { id: "Memori resep ×64", en: "Recipe memory ×64" },
      { id: "UI Touchscreen", en: "Touchscreen UI" },
    ],
    useCases: [
      { id: "Mounting spesimen kecil tidak beraturan", en: "Mounting small irregular specimens" },
      { id: "Edge retention untuk lapisan tipis & coating", en: "Edge retention for thin layers & coatings" },
      { id: "Spesimen konduktif untuk SEM/EBSD", en: "Conductive specimens for SEM/EBSD" },
    ],
    accent: "amber",
  },
  {
    id: "polishing",
    index: "03",
    name: "POLI-GP250",
    category: { id: "Grinding & Polishing", en: "Grinding & Polishing" },
    tagline: {
      id: "Preparasi permukaan twin-platen dengan beban adaptif.",
      en: "Twin-platen surface preparation with adaptive load.",
    },
    description: {
      id: "Grinder/polisher dapat diprogram dengan kontrol tekanan tiap spesimen secara individual. Closed-loop torque feedback meniadakan rounded edge dan menjaga partikel second-phase.",
      en: "Programmable grinder/polisher with individual specimen pressure control. Closed-loop torque feedback eliminates rounded edges and preserves second-phase particles.",
    },
    longDescription: {
      id: "POLI-GP250 mempunyai dua platen Ø250 atau Ø300 mm dengan kepala individual yang menekan tiap spesimen secara independen. Sistem auto-dosing slurry mengelola suplai abrasif diamond, alumina, dan kolloidal silika tanpa menghentikan siklus — menghasilkan permukaan yang true tanpa smearing pada fasa lunak.",
      en: "POLI-GP250 carries two Ø250 or Ø300 mm platens with individual heads that load each specimen independently. The auto-dosing slurry system manages diamond, alumina, and colloidal silica abrasive supplies without stopping the cycle — yielding a true surface with no smearing of soft phases.",
    },
    specs: [
      { label: { id: "Ukuran platen", en: "Platen size" }, value: "Ø 250 / 300 mm" },
      { label: { id: "Kecepatan platen", en: "Platen speed" }, value: "30 – 600 rpm" },
      { label: { id: "Kecepatan kepala", en: "Head speed" }, value: "30 – 150 rpm" },
      { label: { id: "Spesimen", en: "Specimens" }, value: "Up to 6 × 30 mm" },
    ],
    highlights: [
      { id: "Twin platen", en: "Twin platens" },
      { id: "Beban individual", en: "Individual load" },
      { id: "Auto-dosing slurry", en: "Auto-dosing slurry" },
    ],
    useCases: [
      { id: "Preparasi grain size & inclusion rating", en: "Grain size & inclusion rating prep" },
      { id: "Polish akhir untuk DIC dan polarised light", en: "Final polish for DIC and polarised light" },
      { id: "Spesimen multi-fasa tanpa smearing", en: "Multi-phase specimens without smearing" },
    ],
    accent: "cyan",
  },
  {
    id: "etching",
    index: "04",
    name: "ETCH-E10",
    category: { id: "Peralatan Etsa", en: "Etching Equipment" },
    tagline: {
      id: "Etsa elektrolitik & kimia dalam satu stasiun fume-safe.",
      en: "Electrolytic & chemical etching in one fume-safe station.",
    },
    description: {
      id: "Bench-top electrolytic etcher dengan profil tegangan yang dapat diprogram dan ekstraksi terintegrasi. Mengetsa stainless, titanium, dan superalloy tanpa mengontaminasi permukaan spesimen.",
      en: "Bench-top electrolytic etcher with programmable voltage profiles and integrated extraction. Etches stainless, titanium and superalloys without contaminating the specimen surface.",
    },
    longDescription: {
      id: "ETCH-E10 mengeksekusi profil voltase yang diprogram dengan ramp-up halus dan tahap holding, ideal untuk material seperti stainless duplex yang membutuhkan beberapa fasa etsa berurutan. Sel PTFE menghindari ion-leaching, dan ekstraksi fume di bagian belakang membuat instrumen ini aman dipakai di benchtop tanpa fume hood eksternal.",
      en: "ETCH-E10 executes programmed voltage profiles with smooth ramp-up and holding stages, ideal for materials such as duplex stainless that require multiple sequential etch phases. The PTFE cell avoids ion leaching, and rear fume extraction makes the instrument safe to operate on a benchtop without an external fume hood.",
    },
    specs: [
      { label: { id: "Range voltase", en: "Voltage range" }, value: "0 – 60 V DC" },
      { label: { id: "Arus", en: "Current" }, value: "0 – 5 A" },
      { label: { id: "Kontrol waktu", en: "Time control" }, value: "0.1 – 999 s" },
      { label: { id: "Profil", en: "Profiles" }, value: "32 stored programs" },
    ],
    highlights: [
      { id: "Ramp dapat diprogram", en: "Programmable ramp" },
      { id: "Ekstraksi terintegrasi", en: "Integrated extraction" },
      { id: "Sel PTFE", en: "PTFE cell" },
    ],
    useCases: [
      { id: "Reveal grain boundary pada stainless duplex", en: "Reveal grain boundaries in duplex stainless" },
      { id: "Etsa selektif coating PVD/CVD", en: "Selective etching of PVD/CVD coatings" },
      { id: "Analisa fasa pada superalloy nickel", en: "Phase analysis in nickel superalloys" },
    ],
    accent: "rust",
  },
  {
    id: "microscope",
    index: "05",
    name: "META-Scope X9",
    category: { id: "Mikroskop Metalurgi", en: "Metallurgical Microscope" },
    tagline: {
      id: "Brightfield, darkfield, DIC & polarised inverted dalam satu stage.",
      en: "Inverted brightfield, darkfield, DIC & polarised in one stage.",
    },
    description: {
      id: "Mikroskop metalurgi inverted trinokular dengan optik infinity-corrected. Nosepiece motorised, iluminasi koehler, dan jalur imaging CMOS yang disetel untuk analisa ukuran butir.",
      en: "Trinocular inverted metallurgical microscope with infinity-corrected optics. Motorised nosepiece, koehler illumination, and CMOS imaging path tuned for grain-size analysis.",
    },
    longDescription: {
      id: "META-Scope X9 menggabungkan empat modalitas observasi dalam satu instrumen — brightfield untuk grain size, darkfield untuk inklusi kecil, DIC untuk topografi, dan polarised untuk material anisotropic. Stage motorised XY dengan resolusi 0.5 µm dapat memetakan spesimen Ø50 mm dengan stitching otomatis, dan sensor CMOS 20 MP merekam serta menyalurkan ke suite analisa citra terintegrasi.",
      en: "META-Scope X9 combines four observation modalities in one instrument — brightfield for grain size, darkfield for fine inclusions, DIC for topography, and polarised for anisotropic materials. The motorised XY stage with 0.5 µm resolution can map Ø50 mm specimens via automatic stitching, and the 20 MP CMOS sensor captures and streams to the integrated image analysis suite.",
    },
    specs: [
      { label: { id: "Magnifikasi", en: "Magnification" }, value: "50× – 1000×" },
      { label: { id: "Iluminasi", en: "Illumination" }, value: "12 V / 100 W halogen + LED" },
      { label: { id: "Stage", en: "Stage" }, value: "Motorised XY · 75 × 50 mm" },
      { label: { id: "Imaging", en: "Imaging" }, value: "20 MP CMOS, USB 3.0" },
    ],
    highlights: [
      { id: "Optik infinity", en: "Infinity optics" },
      { id: "Stage motorised", en: "Motorised stage" },
      { id: "Suite analisa citra", en: "Image analysis suite" },
    ],
    useCases: [
      { id: "Analisa ukuran butir ASTM E112", en: "Grain size analysis to ASTM E112" },
      { id: "Inclusion rating ASTM E45 / EN 10247", en: "Inclusion rating to ASTM E45 / EN 10247" },
      { id: "Imaging fasa pada baja duplex", en: "Phase imaging in duplex steels" },
    ],
    accent: "cyan",
  },
  {
    id: "hardness",
    index: "06",
    name: "DURO-Vickers V250",
    category: { id: "Hardness Tester", en: "Hardness Tester" },
    tagline: {
      id: "Vickers / Knoop micro-hardness otomatis dengan CMM optik.",
      en: "Automatic Vickers / Knoop micro-hardness with optical CMM.",
    },
    description: {
      id: "Hardness tester closed-loop loadcell dengan turret motorised. Pengukuran optik live dan grid mapping mengekspor profil hardness langsung ke laporan QA.",
      en: "Closed-loop loadcell hardness tester with motorised turret. Live optical measurement and grid mapping export hardness profiles directly to your QA report.",
    },
    longDescription: {
      id: "DURO-Vickers V250 mendukung beban dari 10 gf hingga 50 kgf melalui closed-loop loadcell dengan akurasi ±0.5%. Turret motorised secara otomatis bergantian antara indenter dan obyektif pengukuran, sementara modul image analysis mendeteksi diagonal indentasi secara real-time. Hasil mapping grid bisa diekspor langsung ke CSV atau PDF QA dengan watermark sertifikat kalibrasi.",
      en: "DURO-Vickers V250 supports loads from 10 gf to 50 kgf via closed-loop loadcell with ±0.5% accuracy. The motorised turret automatically rotates between indenter and measurement objectives, while the image analysis module detects indentation diagonals in real time. Grid-mapping results can be exported directly to CSV or QA-stamped PDF with the calibration certificate watermark.",
    },
    specs: [
      { label: { id: "Beban uji", en: "Test loads" }, value: "10 gf – 50 kgf" },
      { label: { id: "Indenter", en: "Indenters" }, value: "Vickers · Knoop · Brinell" },
      { label: { id: "Optik", en: "Optics" }, value: "10× / 50× turret" },
      { label: { id: "Mapping", en: "Mapping" }, value: "Auto grid, polyline" },
    ],
    highlights: [
      { id: "Beban closed-loop", en: "Closed-loop load" },
      { id: "Pembacaan indent otomatis", en: "Auto indent reading" },
      { id: "Ekspor QA", en: "QA export" },
    ],
    useCases: [
      { id: "Profil case-hardening pada baja karbon", en: "Case-hardening profiles in carbon steels" },
      { id: "Hardness mapping pada zona las (HAZ)", en: "Hardness mapping in weld HAZ" },
      { id: "Micro-hardness coating tipis", en: "Micro-hardness of thin coatings" },
    ],
    accent: "steel",
  },
];

export type ProcessStep = {
  index: string;
  title: LocalizedText;
  body: LocalizedText;
  tag: LocalizedText;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    tag: { id: "Section", en: "Section" },
    title: { id: "Sectioning", en: "Sectioning" },
    body: {
      id: "Spesimen diisolasi dengan pemotongan abrasif atau presisi. Kami meminimalkan kerusakan mekanis dan termal sehingga microstructure yang sampai ke mikroskop adalah microstructure yang ada di dalam part.",
      en: "Specimens are isolated with abrasive or precision cutting. We minimise mechanical and thermal damage so the microstructure that reaches the microscope is the microstructure that was in the part.",
    },
  },
  {
    index: "02",
    tag: { id: "Mount", en: "Mount" },
    title: { id: "Mounting", en: "Mounting" },
    body: {
      id: "Geometri tidak beraturan dienkapsulasi dalam resin konduktif atau transparan. Hot atau cold mounting dipilih per spesimen — keduanya menjaga edge retention untuk lapisan keras dan coating.",
      en: "Irregular geometries are encapsulated in conductive or transparent resin. Hot or cold mounting is chosen per specimen — both preserve edge retention for hardened cases and coatings.",
    },
  },
  {
    index: "03",
    tag: { id: "Grind", en: "Grind" },
    title: { id: "Grinding & Polishing", en: "Grinding & Polishing" },
    body: {
      id: "Jalur abrasi bertingkat menghilangkan lapisan deformasi sedikit demi sedikit. Beban adaptif dan dosing slurry memulihkan permukaan sebenarnya tanpa smearing fasa lunak atau rounding edge.",
      en: "A staged abrasion path removes deformation layer by layer. Adaptive load and slurry dosing recover the true surface without smearing soft phases or rounding edges.",
    },
  },
  {
    index: "04",
    tag: { id: "Etch", en: "Etch" },
    title: { id: "Etching", en: "Etching" },
    body: {
      id: "Etsa kimia atau elektrolitik mengungkap batas butir, fasa, dan inklusi. Resep dikalibrasi per keluarga paduan — dari baja karbon hingga superalloy nikel.",
      en: "Chemical or electrolytic etching reveals grain boundaries, phases and inclusions. Recipes are calibrated per alloy family — from carbon steels to nickel superalloys.",
    },
  },
  {
    index: "05",
    tag: { id: "Image", en: "Image" },
    title: { id: "Imaging & Analysis", en: "Imaging & Analysis" },
    body: {
      id: "Brightfield, darkfield, DIC, dan polarised digabung dengan stage motorised serta image analysis untuk menghasilkan ukuran butir, fraksi fasa, dan rating inklusi yang tertelusur ke standar.",
      en: "Brightfield, darkfield, DIC and polarised light combine with a motorised stage and image analysis to deliver grain size, phase fraction and inclusion ratings traceable to standards.",
    },
  },
];

export type SpecCallout = {
  key: "Resolution" | "Flatness" | "Throughput" | "Calibration";
  value: string;
  unit?: string;
};

export const stats: SpecCallout[] = [
  { key: "Resolution", value: "0.2", unit: "µm" },
  { key: "Flatness", value: "<1", unit: "µm" },
  { key: "Throughput", value: "48", unit: "specimens / day" },
  { key: "Calibration", value: "ISO", unit: "17025" },
];

export const trustedBy: { name: string; subKey: string }[] = [
  { name: "STEELWORKS", subKey: "STEELWORKS" },
  { name: "AEROCAST", subKey: "AEROCAST" },
  { name: "POLY-INSTITUTE", subKey: "POLY-INSTITUTE" },
  { name: "NUCLEONIX", subKey: "NUCLEONIX" },
  { name: "TRANSAXLE", subKey: "TRANSAXLE" },
  { name: "RAILMETAL", subKey: "RAILMETAL" },
  { name: "ORTHOSTEEL", subKey: "ORTHOSTEEL" },
  { name: "BLADEFORGE", subKey: "BLADEFORGE" },
];
