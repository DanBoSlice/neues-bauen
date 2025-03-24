import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import image from './1.jpg';

export default function Facades() {
  return (
    <div>
      <h2>Facades</h2>

      <p>
        Facades were usually brightly colored in pastel tones.
        Pastel colors, but also bold
      </p>

      <Gallery>
        <WindowImage>
          <img src={image} alt=""/>
        </WindowImage>
        <WindowImage>
          <img src={image} alt=""/>
        </WindowImage>
      </Gallery>

      <p>Simple plaster, Münchner Rauputz</p>
      <p>Stories usually very uniform</p>

      <p>
        Im Kontrast zu den Putzflächen wurden Teile der Fassade mit rotem Sichtmauerwerk gestaltet.
        Bei allen Häusern findet sich diese Gestaltung im Sockelbereich. Des Weiteren gibt es ebenfalls
        Lisenen sowie Fenster und Türeinfassungen aus rotem Sichtmauerwerk.
      </p>

      <Gallery>
        <WindowImage label="Hauptfeuerwache Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Hauptfeuerwehrhaus.jpg/1280px-Hauptfeuerwehrhaus.jpg" alt=""/>
        </WindowImage>

        <WindowImage label="Siedlung Italienischer Garten in Celle">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Celle%2C_Siedlung_Italienischer_Garten%2C_Nr._7%2C_Hauseingang%2C_2008.jpg" alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
