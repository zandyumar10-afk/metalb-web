import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { LenisProvider } from "@/components/lenis-provider";
import { NavBar } from "@/components/nav-bar";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

const geistSans = Geist({
  variable: "--font-sans-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metalab.example.com"),
  title: {
    default: "METALAB — Precision Metallography Instruments",
    template: "%s · METALAB",
  },
  description:
    "Engineering-grade cutting, mounting, grinding, polishing, etching and microscopy equipment for metallurgical laboratories.",
  keywords: [
    "metallography",
    "metallurgical microscope",
    "polishing machine",
    "mounting press",
    "etching equipment",
    "laboratory instruments",
  ],
  openGraph: {
    title: "METALAB — Precision Metallography Instruments",
    description:
      "Engineering-grade equipment for metallurgical sample preparation and analysis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Apply persisted theme before React mounts to avoid a flash.
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-svh bg-bg text-ink overflow-x-clip">
        <ThemeProvider>
          <I18nProvider>
            <LenisProvider>
              <ScrollProgress />
              <CursorGlow />
              <NavBar />
              <main>{children}</main>
            </LenisProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
