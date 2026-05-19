import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerLogos from "@/components/PartnerLogos";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <TechStack />
    </>
  );
}
