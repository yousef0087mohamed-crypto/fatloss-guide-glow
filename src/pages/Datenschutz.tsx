import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-bold mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
              Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="font-semibold mt-4">Wie erfassen wir Ihre Daten?</p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei 
              kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. 
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser 
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="font-semibold mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-semibold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu 
              verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen 
              Aufsichtsbehörde zu.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter 
              der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
              Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und 
              Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige 
              Daten, die über eine Website generiert werden, handeln.
            </p>
            <p>
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren 
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse 
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch 
              einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-bold mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden 
              können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und 
              wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der 
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der 
              Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die 
              Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf 
              unberührt.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen 
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das 
              Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder 
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
              gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte 
              Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, 
              soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Auskunft, Löschung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren 
              Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf 
              Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema 
              personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen 
              Adresse an uns wenden.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen 
              Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in 
              folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten 
                bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer 
                der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer 
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, 
                können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur 
                Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie 
                das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer 
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine 
                Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht 
                feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der 
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-bold mb-3">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p>
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der 
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files 
              erfasst werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Zahlungsanbieter</h2>
            
            <h3 className="text-xl font-bold mb-3">Gumroad</h3>
            <p>
              Wir nutzen auf dieser Website Gumroad als Zahlungsdienstleister. Anbieter ist Gumroad, 
              Inc., 548 Market St PMB 45933, San Francisco, CA 94104, USA.
            </p>
            <p>
              Wenn Sie sich für eine Zahlung via Gumroad entscheiden, werden die von Ihnen 
              eingegebenen Zahlungsdaten an Gumroad übermittelt. Die Datenübertragung erfolgt auf 
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO 
              (Verarbeitung zur Erfüllung eines Vertrags).
            </p>
            <p>
              Details entnehmen Sie der Datenschutzerklärung von Gumroad:{" "}
              <a 
                href="https://gumroad.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://gumroad.com/privacy
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
