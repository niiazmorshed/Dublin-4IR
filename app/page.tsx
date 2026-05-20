import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurWorks from "@/components/OurWorks";
import PartnerLogos from "@/components/PartnerLogos";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <ServicesSection />
      <OurWorks />
      <TechStack />
      <ContactSection />
    </>
  );
}
