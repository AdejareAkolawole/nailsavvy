import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import HomeServiceSection from "@/components/HomeServiceSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <SocialProofSection />
        <HomeServiceSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
