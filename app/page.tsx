import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurWorks from "@/components/OurWorks";
import PartnerLogos from "@/components/PartnerLogos";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <OurWorks />
      <TechStack />
    </>
  );
}
