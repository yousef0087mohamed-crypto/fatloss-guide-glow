import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const ProgressStats = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [weightLossProgress, setWeightLossProgress] = useState(0);
  const [motivationProgress, setMotivationProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(progress);
      
      // Animate progress bars based on scroll position
      const statsSection = document.getElementById("progress-stats");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom >= 0;
        
        if (isVisible) {
          const visibleProgress = Math.min(
            100,
            ((windowHeight - rect.top) / windowHeight) * 150
          );
          setWeightLossProgress(Math.min(92, visibleProgress));
          setMotivationProgress(Math.min(96, visibleProgress));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="progress-stats" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Nachgewiesene Erfolgsraten
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Wissenschaftlich fundierte Methoden mit nachweisbaren Resultaten
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-[var(--shadow-bold)] animate-fade-in-delay-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Abnehm-Effizienz</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Durchschnittlicher Gewichtsverlust nach 14 Tagen</p>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">{Math.round(weightLossProgress)}%</div>
            </div>
            <Progress value={weightLossProgress} className="h-3 sm:h-4" />
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Wissenschaftlich bewährte Methoden für optimale Ergebnisse
            </p>
          </div>

          <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-[var(--shadow-bold)] animate-fade-in-delay-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Motivations-Effizienz</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Langfristige Motivation & Durchhaltevermögen</p>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">{Math.round(motivationProgress)}%</div>
            </div>
            <Progress value={motivationProgress} className="h-3 sm:h-4" />
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Langfristige Gewohnheiten für dauerhaften Erfolg
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 max-w-4xl mx-auto">
          {[
            { value: "2.8kg", label: "Ø Gewichtsverlust" },
            { value: "14 Tage", label: "Zum Erfolg" },
            { value: "100%", label: "Kostenlos" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-5 sm:p-6 bg-card/50 rounded-xl border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.15 + 0.6}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressStats;
