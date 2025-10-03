import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProgressStats from "@/components/ProgressStats";
import EbookSection from "@/components/EbookSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProgressStats />
      <EbookSection />
      <Footer />
    </div>
  );
};

export default Index;
