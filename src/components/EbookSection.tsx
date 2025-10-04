import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, Sparkles, BookOpen } from "lucide-react";

const benefits = [
  "10 wissenschaftlich bewiesene Abnehm-Strategien",
  "Detaillierte Schritt-für-Schritt Anleitungen",
  "Meal-Prep Tipps für maximale Effizienz",
  "Psychologische Motivation-Hacks",
  "Langfristige Gewohnheiten aufbauen"
];

const EbookSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePurchase = () => {
    window.open("https://gumroad.com/l/abnehm-ebook", "_blank");
  };

  return (
    <section 
      id="ebook-section"
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in px-4">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-3 sm:mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Premium E-Book
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Gehe den nächsten Schritt
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Vertiefe dein Wissen mit unserem exklusiven E-Book
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-[var(--shadow-bold)] border border-accent/20">
            <div className="flex items-start justify-between mb-5 sm:mb-6">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-accent/80 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[var(--shadow-float)] animate-float">
                <BookOpen className="w-7 h-7 sm:w-10 sm:h-10 text-accent-foreground" />
              </div>
              <div className="bg-destructive text-destructive-foreground font-bold text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg">
                50% OFF
              </div>
            </div>

            <div className="animate-fade-in-delay-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                10 Wissenschaftlich Bewiesene Abnehm-Tipps
              </h3>
              
              <div className="mb-5 sm:mb-6">
                <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold text-accent">4,99€</span>
                  <span className="text-xl sm:text-2xl text-muted-foreground line-through">9,99€</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Einmalzahlung • Sofortiger Download • Lebenslanger Zugriff</p>
              </div>

              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handlePurchase}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg font-bold py-5 sm:py-6 shadow-[var(--shadow-float)] hover:scale-105 transition-all"
              >
                <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Jetzt für 4,99€ kaufen
              </Button>

              <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4">
                💳 Sichere Zahlung über Gumroad • 30-Tage Geld-zurück-Garantie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
