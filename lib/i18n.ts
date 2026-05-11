export type Lang = "id" | "en";

export const LANGS: Lang[] = ["id", "en"];

export type Dict = {
  nav: {
    products: string;
    process: string;
    specs: string;
    about: string;
    requestQuote: string;
    menu: string;
    close: string;
    theme: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleAccent: string;
    subhead: string;
    browse: string;
    talk: string;
    scroll: string;
    est: string;
    iso: string;
    countries: string;
    seriesTag: string;
    live: string;
    sample: string;
    sampleMag: string;
    surfaceRa: string;
    mm: string;
    grain: string;
    grainValue: string;
  };
  trust: {
    label: string;
    certs: string;
    sub: Record<string, string>;
  };
  products: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    description: string;
    requestDatasheet: string;
    viewDetail: string;
    catalogue: string;
  };
  process: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    description: string;
    step: string;
    grindAccent: string;
    livePreview: string;
    stage: string;
    focus: string;
    rec: string;
  };
  specs: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    description: string;
    stats: Record<
      "Resolution" | "Flatness" | "Throughput" | "Calibration",
      { label: string; hint: string }
    >;
    certHeader: string;
    certTitle: string;
    envelopeHeader: string;
    envelopeTitle: string;
    envelopeBody: string;
    unitSpecimensDay: string;
  };
  about: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    description: string;
    philosophyA: string;
    philosophyAccent: string;
    philosophyB: string;
    founded: string;
    engineers: string;
    installs: string;
    pillars: Record<"A" | "B" | "C" | "D", { title: string; body: string }>;
  };
  cta: {
    tag: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    sub: string;
    labels: {
      name: string;
      company: string;
      email: string;
      instruments: string;
      message: string;
    };
    placeholders: {
      name: string;
      company: string;
      email: string;
      message: string;
      select: string;
    };
    options: {
      full: string;
      cutting: string;
      mounting: string;
      polishing: string;
      etching: string;
      microscope: string;
      hardness: string;
    };
    terms: string;
    submit: string;
    sent: string;
    demo: string;
  };
  footer: {
    blurb: string;
    start: string;
    columns: Record<"instruments" | "studio" | "resources", string>;
    links: Record<string, string>;
    tagline: string;
  };
  detail: {
    back: string;
    overview: string;
    specs: string;
    highlights: string;
    useCases: string;
    relatedTitle: string;
    relatedSub: string;
    requestCta: string;
    datasheet: string;
    catalogueIndex: string;
  };
};

export const dict: Record<Lang, Dict> = {
  id: {
    nav: {
      products: "Produk",
      process: "Proses",
      specs: "Spesifikasi",
      about: "Tentang",
      requestQuote: "Minta Penawaran",
      menu: "Menu",
      close: "Tutup",
      theme: "Tema",
      language: "Bahasa",
    },
    hero: {
      eyebrow: "Katalog 2025 / Edisi VI",
      titleA: "Metalografi,",
      titleB: "diukur hingga",
      titleAccent: "satu mikron.",
      subhead:
        "METALAB merancang dan memproduksi instrumen pemotongan, mounting, grinding, polishing, etsa, dan mikroskopi untuk laboratorium metalurgi. Setiap mesin dikalibrasi terhadap referensi ISO dan ASTM — jadi yang Anda lihat di 1000× adalah kebenaran.",
      browse: "Lihat katalog",
      talk: "Bicara dengan aplikasi engineer",
      scroll: "Gulir untuk lihat pipeline",
      est: "Berdiri 2014",
      iso: "ISO 17025 terkalibrasi",
      countries: "34 negara",
      seriesTag: "Seri enam instrumen",
      live: "Live · Polishing",
      sample: "Sample 247-A",
      sampleMag: "500× DIC",
      surfaceRa: "Surface Ra",
      mm: "mm",
      grain: "Grain G",
      grainValue: "8.7 ASTM",
    },
    trust: {
      label: "Dipercaya di 34 negara —",
      certs: "ASTM E3 · ISO 17025 · GE-S400",
      sub: {
        STEELWORKS: "Industri Berat",
        AEROCAST: "Aerospace Foundry",
        "POLY-INSTITUTE": "Riset Material",
        NUCLEONIX: "Pembangkit Listrik",
        TRANSAXLE: "QA Otomotif",
        RAILMETAL: "Sarana Perkeretaapian",
        ORTHOSTEEL: "Logam Medis",
        BLADEFORGE: "Tooling & Dies",
      } as Record<string, string>,
    },
    products: {
      eyebrow: "02 — Katalog",
      titleA: "Enam instrumen,",
      titleAccent: "satu kebenaran berkelanjutan",
      titleB: "dari billet hingga citra.",
      description:
        "Setiap mesin adalah satu bab dalam pipeline metalografi. Pasangkan, atau jalankan sendiri — kalibrasi mengikuti spesimen.",
      requestDatasheet: "Minta datasheet",
      viewDetail: "Lihat detail produk",
      catalogue: "Katalog",
    },
    process: {
      eyebrow: "03 — Pipeline",
      titleA: "Pipeline lima langkah,",
      titleAccent: "disetel di laboratorium kami",
      titleB: "sebelum keluar pabrik.",
      description:
        "Setiap langkah mempertahankan apa yang langkah sebelumnya raih. Profil kalibrasi ikut bersama instrumen — resep yang sama di bench di Jakarta maupun di Stuttgart.",
      step: "Langkah",
      grindAccent: "permukaan sebenarnya",
      livePreview: "Live preview",
      stage: "Stage",
      focus: "Focus",
      rec: "REC",
    },
    specs: {
      eyebrow: "04 — Engineering",
      titleA: "Setiap mikron memiliki",
      titleAccent: "sertifikat",
      titleB: "di belakangnya.",
      description:
        "Kami mengukur apa yang klien kami ukur. Data kalibrasi disertakan dengan setiap mesin — tidak ada black box, tidak ada angka marketing.",
      stats: {
        Resolution: { label: "Resolusi", hint: "Resolusi optik lateral pada 1000× DIC" },
        Flatness: { label: "Kerataan", hint: "Di seluruh spesimen Ø30 mm yang dipolish" },
        Throughput: { label: "Throughput", hint: "Siklus preparasi otomatis, satu operator" },
        Calibration: { label: "Kalibrasi", hint: "Sertifikat tertelusur disertakan" },
      } as Record<string, { label: string; hint: string }>,
      certHeader: "Sertifikasi · Standar",
      certTitle: "Dibangun berdasarkan kerangka pengukuran paling ketat di industri.",
      envelopeHeader: "Operating envelope",
      envelopeTitle: "Dari microalloy hingga grade medis.",
      envelopeBody:
        "Carbon · stainless · tool steel · superalloy · titanium · aluminium · copper · magnesium · cast iron · komposit.",
      unitSpecimensDay: "spesimen / hari",
    },
    about: {
      eyebrow: "05 — Studio",
      titleA: "Kami datang dari",
      titleAccent: "metalurgi",
      titleB: ", bukan dari marketing.",
      description:
        "Studio kecil berisi metalurgis, mechanical engineer, dan machinist. Kami menjual instrumen yang sama dengan yang kami gunakan di laboratorium QA kami sendiri.",
      philosophyA: "Preparasi spesimen adalah tempat eksperimen",
      philosophyAccent: "dimenangkan atau dikalahkan",
      philosophyB:
        ". Instrumen kami memperlakukan spesimen sebagai data — setiap potongan, setiap pressure ramp, setiap menit polishing tercatat dalam sertifikat yang menyertai part-nya.",
      founded: "Berdiri",
      engineers: "Engineer",
      installs: "Instalasi",
      pillars: {
        A: {
          title: "Service first.",
          body: "Recommissioning di lokasi dan migrasi resep saat Anda pindah bench, site, atau operator.",
        },
        B: {
          title: "Tanpa black box.",
          body: "Setiap setpoint, setiap koefisien terbuka dan bisa diedit. Metalurgis Anda yang punya resep.",
        },
        C: {
          title: "Terkalibrasi untuk ekspor.",
          body: "Crate dikirim bersama file kalibrasi. Colok, login, dan reproduksi citra yang sama di sisi lain dunia.",
        },
        D: {
          title: "Hening secara desain.",
          body: "Siklus di bawah 65 dB. Lab tetap menjadi lab — bahkan saat enam instrumen berjalan paralel.",
        },
      } as Record<string, { title: string; body: string }>,
    },
    cta: {
      tag: "Minta penawaran",
      titleA: "Ceritakan tentang",
      titleAccent: "spesimen Anda",
      titleB:
        ". Kami akan kirim bench, resep, dan rencana kalibrasi.",
      sub: "Application engineer membalas dalam satu hari kerja dengan penawaran yang disesuaikan. Tanpa perantara, tanpa skrip marketing.",
      labels: {
        name: "Nama",
        company: "Perusahaan",
        email: "Email",
        instruments: "Instrumen yang diminati",
        message: "Brief spesimen",
      },
      placeholders: {
        name: "Nama lengkap Anda",
        company: "Opsional",
        email: "anda@lab.com",
        message: "Material, geometri, throughput, standar…",
        select: "Pilih satu",
      },
      options: {
        full: "Pipeline penuh",
        cutting: "Cutting",
        mounting: "Mounting",
        polishing: "Polishing",
        etching: "Etching",
        microscope: "Microscope",
        hardness: "Hardness",
      },
      terms: "Dengan mengirim, Anda menerima ketentuan penawaran kami.",
      submit: "Minta penawaran",
      sent: "Terkirim — kami akan balas segera",
      demo: "Submission demo — hubungkan form ini ke endpoint pilihan Anda.",
    },
    footer: {
      blurb:
        "Instrumen metalografi presisi — dirancang, dikalibrasi, dan dikirim dari satu workshop.",
      start: "Mulai proyek",
      columns: {
        instruments: "Instrumen",
        studio: "Studio",
        resources: "Sumber Daya",
      },
      links: {
        Cutting: "Pemotongan",
        Mounting: "Mounting",
        Polishing: "Polishing",
        Etching: "Etsa",
        Microscopy: "Mikroskopi",
        Hardness: "Hardness",
        About: "Tentang",
        "Engineering team": "Tim Engineering",
        "Calibration lab": "Lab Kalibrasi",
        Careers: "Karier",
        "Catalogue PDF": "Katalog PDF",
        Recipes: "Resep",
        "Service manuals": "Manual Service",
        Publications: "Publikasi",
      } as Record<string, string>,
      tagline: "Dibuat untuk metalurgis",
    },
    detail: {
      back: "Kembali ke katalog",
      overview: "Tinjauan",
      specs: "Spesifikasi teknis",
      highlights: "Keunggulan",
      useCases: "Aplikasi",
      relatedTitle: "Instrumen lain",
      relatedSub: "Pasangkan dengan langkah berikutnya di pipeline.",
      requestCta: "Minta penawaran untuk instrumen ini",
      datasheet: "Datasheet PDF",
      catalogueIndex: "Katalog",
    },
  },

  en: {
    nav: {
      products: "Products",
      process: "Process",
      specs: "Specs",
      about: "About",
      requestQuote: "Request quotation",
      menu: "Menu",
      close: "Close",
      theme: "Theme",
      language: "Language",
    },
    hero: {
      eyebrow: "Catalogue 2025 / Issue VI",
      titleA: "Metallography,",
      titleB: "reduced to",
      titleAccent: "one micron.",
      subhead:
        "METALAB designs and manufactures cutting, mounting, grinding, polishing, etching and microscopy instruments for metallurgical laboratories. Every machine is calibrated against ISO and ASTM references — so what you see at 1000× is the truth.",
      browse: "Browse catalogue",
      talk: "Talk to an application engineer",
      scroll: "Scroll for sample preparation pipeline",
      est: "Est. 2014",
      iso: "ISO 17025 calibrated",
      countries: "34 countries",
      seriesTag: "Series of six instruments",
      live: "Live · Polishing",
      sample: "Sample 247-A",
      sampleMag: "500× DIC",
      surfaceRa: "Surface Ra",
      mm: "mm",
      grain: "Grain G",
      grainValue: "8.7 ASTM",
    },
    trust: {
      label: "Trusted across 34 countries —",
      certs: "ASTM E3 · ISO 17025 · GE-S400",
      sub: {
        STEELWORKS: "Heavy Industry",
        AEROCAST: "Aerospace Foundry",
        "POLY-INSTITUTE": "Materials Research",
        NUCLEONIX: "Power Generation",
        TRANSAXLE: "Automotive QA",
        RAILMETAL: "Rolling Stock",
        ORTHOSTEEL: "Medical Alloys",
        BLADEFORGE: "Tooling & Dies",
      } as Record<string, string>,
    },
    products: {
      eyebrow: "02 — Catalogue",
      titleA: "Six instruments,",
      titleAccent: "one continuous truth",
      titleB: "from billet to image.",
      description:
        "Each machine is a chapter in the metallographic pipeline. Pair them, or run them alone — calibration travels with the specimen.",
      requestDatasheet: "Request datasheet",
      viewDetail: "View product detail",
      catalogue: "Catalogue",
    },
    process: {
      eyebrow: "03 — Pipeline",
      titleA: "The five-step pipeline,",
      titleAccent: "tuned in our laboratory",
      titleB: "before it leaves the factory.",
      description:
        "Each step preserves what the previous step earned. Calibration profiles travel with the instrument — same recipes on the bench in Jakarta and in Stuttgart.",
      step: "Step",
      grindAccent: "the truth surface",
      livePreview: "Live preview",
      stage: "Stage",
      focus: "Focus",
      rec: "REC",
    },
    specs: {
      eyebrow: "04 — Engineering",
      titleA: "Every micron has a",
      titleAccent: "certificate",
      titleB: "behind it.",
      description:
        "We measure the things our clients measure. Calibration data ships with every machine — no black boxes, no marketing numbers.",
      stats: {
        Resolution: { label: "Resolution", hint: "Lateral optical resolution at 1000× DIC" },
        Flatness: { label: "Flatness", hint: "Across Ø30 mm polished specimen" },
        Throughput: { label: "Throughput", hint: "Automated prep cycle, single operator" },
        Calibration: { label: "Calibration", hint: "Traceable certificates included" },
      } as Record<string, { label: string; hint: string }>,
      certHeader: "Certifications · Standards",
      certTitle:
        "Built against the strictest measurement frameworks in the industry.",
      envelopeHeader: "Operating envelope",
      envelopeTitle: "From microalloys to medical grade.",
      envelopeBody:
        "Carbon · stainless · tool steels · superalloys · titanium · aluminum · copper · magnesium · cast iron · composites.",
      unitSpecimensDay: "specimens / day",
    },
    about: {
      eyebrow: "05 — Studio",
      titleA: "We come from",
      titleAccent: "metallurgy",
      titleB: ", not marketing.",
      description:
        "A small studio of metallurgists, mechanical engineers and machinists. We sell the same instruments we use in our own QA laboratory.",
      philosophyA: "Sample preparation is where the experiment is",
      philosophyAccent: "won or lost",
      philosophyB:
        ". Our instruments treat the specimen as data — every cut, every pressure ramp, every polishing minute is recorded against the certificate that ships with the part.",
      founded: "Founded",
      engineers: "Engineers",
      installs: "Installs",
      pillars: {
        A: {
          title: "Service-first.",
          body: "On-site recommissioning and recipe migration when you move benches, sites, or operators.",
        },
        B: {
          title: "No black boxes.",
          body: "Every setpoint, every coefficient is exposed and editable. Your metallurgists own the recipe.",
        },
        C: {
          title: "Calibrated for export.",
          body: "Crates leave with the calibration file. Plug in, log in, and reproduce the same image on the other side of the world.",
        },
        D: {
          title: "Quiet by design.",
          body: "Sub-65 dB cycles. The lab stays the lab — even when six instruments run in parallel.",
        },
      } as Record<string, { title: string; body: string }>,
    },
    cta: {
      tag: "Request quotation",
      titleA: "Tell us about your",
      titleAccent: "specimen",
      titleB: ". We’ll send the bench, the recipe and the calibration plan.",
      sub: "Application engineers reply within one working day with a tailored quotation. No middleman, no marketing scripts.",
      labels: {
        name: "Name",
        company: "Company",
        email: "Email",
        instruments: "Instruments of interest",
        message: "Specimen brief",
      },
      placeholders: {
        name: "Your full name",
        company: "Optional",
        email: "you@lab.com",
        message: "Material, geometry, throughput, standards…",
        select: "Select up to one",
      },
      options: {
        full: "Full pipeline",
        cutting: "Cutting",
        mounting: "Mounting",
        polishing: "Polishing",
        etching: "Etching",
        microscope: "Microscope",
        hardness: "Hardness",
      },
      terms: "By submitting you accept our quotation terms.",
      submit: "Request quotation",
      sent: "Sent — we’ll reply soon",
      demo: "Demo submission — wire this form to your endpoint of choice.",
    },
    footer: {
      blurb:
        "Precision metallography instruments — engineered, calibrated and shipped from a single workshop.",
      start: "Start a project",
      columns: {
        instruments: "Instruments",
        studio: "Studio",
        resources: "Resources",
      },
      links: {
        Cutting: "Cutting",
        Mounting: "Mounting",
        Polishing: "Polishing",
        Etching: "Etching",
        Microscopy: "Microscopy",
        Hardness: "Hardness",
        About: "About",
        "Engineering team": "Engineering team",
        "Calibration lab": "Calibration lab",
        Careers: "Careers",
        "Catalogue PDF": "Catalogue PDF",
        Recipes: "Recipes",
        "Service manuals": "Service manuals",
        Publications: "Publications",
      } as Record<string, string>,
      tagline: "Made for metallurgists",
    },
    detail: {
      back: "Back to catalogue",
      overview: "Overview",
      specs: "Technical specifications",
      highlights: "Highlights",
      useCases: "Applications",
      relatedTitle: "Other instruments",
      relatedSub: "Pair with the next step in the pipeline.",
      requestCta: "Request a quote for this instrument",
      datasheet: "Datasheet PDF",
      catalogueIndex: "Catalogue",
    },
  },
};
