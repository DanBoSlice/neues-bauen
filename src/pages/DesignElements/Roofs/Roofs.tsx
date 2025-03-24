import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import zehlendorf from './zehlendorf.jpg';

export default function Roofs() {
  return (
    <div>
      <h2>Roofs</h2>

      <p>
        At the time, buildings in Germany had hip or gable roofs.
        Very simple, or even flat roof. Otherwise simple V roof

        Nach der Verunsicherung durch Krieg und Revolution suchte die eine Richtung Zuflucht in der Rückwendung auf eine
        tradierte und bewährte Formensprache, wie sie z. B. Goethes Gartenhaus in Weimar verkörperte. Die andere
        Richtung suchte eine neue, dem Stand der Wissenschaft und Technologie entsprechende Ästhetik, obwohl beide
        Richtungen an einem gemeinsamen Punkt begannen: der Ablehnung des Stadtmodells des 19. Jahrhunderts und des
        Lebens in der Mietskaserne.
      </p>

      <p>
        Er entbrannte in Zehlendorf, wo die Onkel-Tom-Siedlung und die Siedlung Fischtalgrund, auf engstem Raum für zwei
        unterschiedliche ästhetische (vielleicht auch politische) Richtungen in der Architektur standen.
        Zehlendorfer Dächerstreit (Zehlendorf roof dispute)
        Die Gegner des Spitzdaches sahen in ihm das Symbol für die Sehnsucht nach einer dörflichen Idylle, der
        Verweigerung der urbanen Gegenwart mit drängender Wohnungsnot und ein Beispiel für flächenraubendes Bauen.

        Onkel-Tom-Siedlung finished first, in the Villenviertel of Zehlendorf. As a protest, the Siedlung am Fischtalgrund
        had as a requirement for architects to use gable roofs, and was finished a little later in 1928.
      </p>

      <Gallery>
        <WindowImage
          src={zehlendorf}
          label="Gable roofs of Onkel-Tom-Siedlung (left) and flat roofs of Siedlung am Fischtalgrund (right)"
          source="Foto: Arthur Köster, © VG Bild-Kunst"
        />
      </Gallery>

      <p>
        Die Verfechter des Flachdaches können in ihrer Berufsbiographie durchaus geneigte Satteldächer vorweisen – so auch Bruno Taut.

        Siedlung Bornheimer Hang:
        In der Florstädter Straße und der Pestalozzistraße sowie am Pestalozziplatz entstanden zur besseren optischen
        Anpassung an die umliegende Bebauung anderer Bauträger für Ernst May untypische Häuser mit Spitzgiebel-Dächern,
        im Gegensatz zu den sonst üblichen Flachdächern.
      </p>

      <Gallery>
        <WindowImage
          src="https://www.tip-berlin.de/wp-content/uploads/2022/04/imago0088797419h-scaled.jpg"
          label="Waldsiedlung Zehlendorf"
        />
        <WindowImage
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wilski_Ecke_Riemeister_Taut.jpeg"
          label="Onkel Toms Hütte"
        />
      </Gallery>
    </div>
  );
}
