import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle 
              Verträge über die Bereitstellung und Nutzung digitaler Inhalte (insbesondere E-Books 
              und digitale Planner) zwischen [Firmenname] (nachfolgend "Anbieter") und dem Nutzer 
              (nachfolgend "Kunde").
            </p>
            <p>
              (2) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft 
              zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer 
              selbstständigen beruflichen Tätigkeit zugerechnet werden können.
            </p>
            <p>
              (3) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der 
              Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 2 Vertragsgegenstand</h2>
            <p>
              (1) Gegenstand des Vertrages ist die Bereitstellung digitaler Inhalte zum Download. 
              Der Anbieter stellt dem Kunden digitale Produkte (E-Books, Planner, etc.) in 
              elektronischer Form zum Download zur Verfügung.
            </p>
            <p>
              (2) Die konkreten Leistungsmerkmale und Funktionen der digitalen Inhalte ergeben sich 
              aus der jeweiligen Produktbeschreibung auf der Website.
            </p>
            <p>
              (3) Der Anbieter behält sich das Recht vor, die bereitgestellten Inhalte jederzeit zu 
              aktualisieren und zu verbessern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 3 Vertragsschluss</h2>
            <p>
              (1) Die Darstellung der Produkte auf der Website stellt kein rechtlich bindendes 
              Angebot dar, sondern eine Aufforderung zur Abgabe einer Bestellung.
            </p>
            <p>
              (2) Durch Anklicken des Buttons "Jetzt kaufen" oder ähnlicher Schaltflächen gibt der 
              Kunde ein verbindliches Angebot zum Erwerb der digitalen Inhalte ab.
            </p>
            <p>
              (3) Der Vertragsschluss erfolgt durch die Bestätigung der Bestellung durch den 
              Anbieter. Dies geschieht in der Regel durch Zusendung einer Bestätigungs-E-Mail oder 
              durch Bereitstellung des Download-Links.
            </p>
            <p>
              (4) Die Abwicklung der Bestellung und Übermittlung aller im Zusammenhang mit dem 
              Vertragsschluss erforderlichen Informationen erfolgt über den Zahlungsdienstleister 
              Gumroad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
            <p>
              (1) Alle Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer.
            </p>
            <p>
              (2) Die Zahlung erfolgt über den Zahlungsdienstleister Gumroad. Es gelten die 
              Zahlungsbedingungen von Gumroad.
            </p>
            <p>
              (3) Der Kaufpreis wird mit Vertragsschluss fällig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 5 Bereitstellung und Nutzungsrechte</h2>
            <p>
              (1) Nach vollständiger Bezahlung erhält der Kunde Zugriff auf die erworbenen digitalen 
              Inhalte über einen Download-Link.
            </p>
            <p>
              (2) Der Kunde erwirbt ein einfaches, nicht übertragbares, nicht ausschließliches Recht 
              zur privaten Nutzung der digitalen Inhalte. Eine gewerbliche Nutzung oder 
              Weiterverbreitung ist nicht gestattet.
            </p>
            <p>
              (3) Der Kunde ist nicht berechtigt, die digitalen Inhalte zu vervielfältigen, zu 
              verbreiten, öffentlich zugänglich zu machen oder zu bearbeiten, es sei denn, dies ist 
              für die private Nutzung erforderlich.
            </p>
            <p>
              (4) Alle Urheber- und Leistungsschutzrechte verbleiben beim Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 6 Widerrufsrecht</h2>
            <p className="font-semibold">Widerrufsbelehrung</p>
            <p className="font-semibold mt-4">Widerrufsrecht</p>
            <p>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu 
              widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
            </p>
            <p>
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung 
              (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen 
              Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte 
              Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
            </p>
            <p>
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die 
              Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>

            <p className="font-semibold mt-4">Folgen des Widerrufs</p>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen 
              erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag 
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns 
              eingegangen ist.
            </p>

            <p className="font-semibold mt-4">Vorzeitiges Erlöschen des Widerrufsrechts</p>
            <p>
              Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von nicht auf einem 
              körperlichen Datenträger befindlichen digitalen Inhalten vorzeitig, wenn der Anbieter 
              mit der Ausführung des Vertrags begonnen hat, nachdem der Verbraucher ausdrücklich 
              zugestimmt hat, dass der Anbieter mit der Ausführung des Vertrags vor Ablauf der 
              Widerrufsfrist beginnt, und der Verbraucher seine Kenntnis davon bestätigt hat, dass 
              er durch seine Zustimmung mit Beginn der Ausführung des Vertrags sein Widerrufsrecht 
              verliert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 7 Gewährleistung</h2>
            <p>
              (1) Es gelten die gesetzlichen Gewährleistungsrechte.
            </p>
            <p>
              (2) Der Anbieter gewährleistet, dass die digitalen Inhalte bei Bereitstellung frei von 
              Sach- und Rechtsmängeln sind.
            </p>
            <p>
              (3) Bei Vorliegen eines Mangels hat der Kunde zunächst Anspruch auf Nacherfüllung. Die 
              Nacherfüllung erfolgt nach Wahl des Anbieters durch Beseitigung des Mangels oder durch 
              Lieferung mangelfreier digitaler Inhalte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 8 Haftung</h2>
            <p>
              (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des 
              Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen 
              Pflichtverletzung des Anbieters oder einer vorsätzlichen oder fahrlässigen 
              Pflichtverletzung eines gesetzlichen Vertreters oder Erfüllungsgehilfen des Anbieters 
              beruhen.
            </p>
            <p>
              (2) Für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen 
              Pflichtverletzung des Anbieters oder auf einer vorsätzlichen oder grob fahrlässigen 
              Pflichtverletzung eines gesetzlichen Vertreters oder Erfüllungsgehilfen des Anbieters 
              beruhen, haftet der Anbieter nach den gesetzlichen Bestimmungen.
            </p>
            <p>
              (3) Die Haftung für die leicht fahrlässige Verletzung wesentlicher Vertragspflichten 
              ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 9 Schlussbestimmungen</h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des 
              UN-Kaufrechts.
            </p>
            <p>
              (2) Sofern es sich beim Kunden um einen Kaufmann, eine juristische Person des 
              öffentlichen Rechts oder um ein öffentlich-rechtliches Sondervermögen handelt, ist 
              Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen zwischen dem Kunden 
              und dem Anbieter der Sitz des Anbieters.
            </p>
            <p>
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
              Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
            </p>
          </section>

          <section className="mt-8 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AGB;
