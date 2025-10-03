import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, Sparkles } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

const benefits = [
  "10 wissenschaftlich bewiesene Abnehm-Strategien",
  "Detaillierte Schritt-für-Schritt Anleitungen",
  "Meal-Prep Tipps für maximale Effizienz",
  "Psychologische Motivation-Hacks",
  "Langfristige Gewohnheiten aufbauen"
];

const EbookSection = () => {
  const handlePurchase = () => {
    // Gumroad product link - replace with actual product URL
    window.open("https://gumroad.com/l/abnehm-ebook", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4 text-sm px-4 py-1.5">
              <Sparkles className="w-4 h-4 mr-1" />
              Premium E-Book
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Gehe den nächsten Schritt
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Vertiefe dein Wissen mit unserem exklusiven E-Book
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-card/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[var(--shadow-bold)] border border-accent/20">
            <div className="animate-fade-in-delay-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <img 
                  src={ebookCover}
                  alt="10 Wissenschaftlich Bewiesene Abnehm-Tipps E-Book"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground font-bold text-lg px-6 py-3 rounded-full shadow-lg rotate-12">
                  50% OFF
                </div>
              </div>
            </div>

            <div className="animate-fade-in-delay-2">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                10 Wissenschaftlich Bewiesene Abnehm-Tipps
              </h3>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold text-accent">4,99€</span>
                  <span className="text-2xl text-muted-foreground line-through">9,99€</span>
                </div>
                <p className="text-muted-foreground">Einmalzahlung • Sofortiger Download • Lebenslanger Zugriff</p>
              </div>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handlePurchase}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold py-6 shadow-[var(--shadow-float)] hover:scale-105 transition-all"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Jetzt für 4,99€ kaufen
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
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
