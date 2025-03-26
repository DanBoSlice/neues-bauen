import React from 'react';
import WindowImage from '../../../components/WindowImage';
import Gallery from '../../../components/Gallery';

export default function Ornamentation() {
  return (
    <div>
      <h2>Ornamentation</h2>

      <p>
        Die Architektur sollte nicht durch verlogene Verzierungen leben, sondern durch ihre einfachen Formen wirken
      </p>

      <p>
        In the decades before, the predominant architecture style in the German empire was Gründerzeit architecture.
        It sprung out of the rapid industrialization and quickly changing living conditions, and therefore a longing for
        stability. The facades where therefore richly ornamented with historical elements from simpler times.
      </p>

      <p>
        Adolf Loos: Ornamentation is disingenuous. Who kicked off the end of historicism with the 1912
        finished <a href="https://en.wikipedia.org/wiki/Looshaus" target="_blank" rel="noreferrer">Looshaus</a> in Vienna.
      </p>

      <Gallery>
        <WindowImage label="Tagblatt-Turm in Stuttgart">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Bundesarchiv_Bild_102-00543%2C_Stuttgart%2C_Tagblatt-Turm.jpg" alt=""/>
        </WindowImage>
      </Gallery>

      <p>no or minimal ornamentation</p>
      <p>clinker expressionism</p>
      <p>Straight lines, geometric shapes</p>

      <p>
        Während parallel die neue Sachlichkeit des Bauhauses für eine Abschaffung des Ornamentalen eintrat, entwickelten
        die Architekten des Expressionismus quasi zeitgleich eine ornamentale Formensprache mit rauen, kantigen, oft
        spitzen Elementen. Auch die horizontale Fassadengliederung durch abwechselnd vor und zurückgesetzten
        Backsteinreihen sind typisch für diese Bauten. Die Stilelemente sollten die Dynamik der Zeit, aber auch ihre
        Heftigkeit und ihre Spannungen zum Ausdruck bringen.
      </p>
    </div>
  );
}
