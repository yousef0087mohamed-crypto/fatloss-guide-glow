import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Abnehm-Planner</h3>
            <p className="text-primary-foreground/80">
              Dein wissenschaftlich fundierter Weg zur Traumfigur. 
              Kostenlos, effektiv und nachhaltig.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
              <li><Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link to="/agb" className="hover:text-accent transition-colors">AGB</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 Abnehm-Planner. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
