import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import image from './1.jpg';

export default function Facades() {
  return (
    <div>
      <p>
        Facades were usually brightly colored in pastel tones.
        Pastel colors, but also bold
      </p>

      <Gallery>
        <WindowImage src={image}/>
        <WindowImage src={image}/>
        <WindowImage src={image}/>
      </Gallery>

      <p>Simple plaster, Münchner Rauputz</p>

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
