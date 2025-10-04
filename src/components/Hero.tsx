import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const handleDownload = () => {
    window.open("https://gumroad.com/l/abnehm-planner", "_blank");
  };

  const handleLearnMore = () => {
    window.open("https://gumroad.com/l/abnehm-planner", "_blank");
  };

  const scrollToEbook = () => {
    document.getElementById("ebook-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              100% Kostenlos - Keine Kreditkarte erforderlich
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Dein kostenloser
              <span className="block text-accent">14-Tage</span>
              Abnehm-Planner
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Erreiche deine Traumfigur mit unserem wissenschaftlich erprobten Planner. 
              Strukturiert, motivierend und zu 100% kostenlos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownload}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold px-8 py-6 shadow-[var(--shadow-bold)] hover:scale-105 transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Jetzt Kostenlos Herunterladen
              </Button>
              
              <Button 
                onClick={handleLearnMore}
                size="lg" 
                className="bg-accent/80 hover:bg-accent text-accent-foreground text-lg font-bold px-8 py-6 shadow-[var(--shadow-bold)] hover:scale-105 transition-all"
              >
                Mehr Erfahren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToEbook}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors flex flex-col items-center gap-2 group"
      >
        <span className="text-sm font-medium">Premium E-Book entdecken</span>
        <ArrowRight className="h-5 w-5 rotate-90 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
