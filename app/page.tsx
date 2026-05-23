import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import OurWorks from "@/components/OurWorks";
import PartnerLogos from "@/components/PartnerLogos";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerLogos />
      <ServicesSection />
      <OurWorks />
      <TechStack />
      <HowWeWork />
      <ContactSection />
    </>
  );
}
