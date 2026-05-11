import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProductsSection } from "@/components/sections/products";
import { ProcessSection } from "@/components/sections/process";
import { SpecsSection } from "@/components/sections/specs";
import { AboutSection } from "@/components/sections/about";
import { CtaSection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <ProcessSection />
      <SpecsSection />
      <AboutSection />
      <CtaSection />
      <FooterSection />
    </>
  );
}
