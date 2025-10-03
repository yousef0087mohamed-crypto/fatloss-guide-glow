import { Target, TrendingUp, Calendar, Heart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Klare Ziele",
    description: "Setze realistische Ziele und tracke deinen Fortschritt täglich"
  },
  {
    icon: TrendingUp,
    title: "Wissenschaftlich",
    description: "Basiert auf aktuellen Ernährungswissenschaften und Studien"
  },
  {
    icon: Calendar,
    title: "14-Tage System",
    description: "Strukturierter Plan für nachhaltige Gewohnheiten"
  },
  {
    icon: Heart,
    title: "Motivation",
    description: "Tägliche Motivationsimpulse für maximalen Erfolg"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Warum unser Planner funktioniert
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Über 15.000 Menschen haben bereits ihre Ziele erreicht
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-[var(--shadow-bold)] h-full">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-[var(--shadow-float)] animate-float group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
