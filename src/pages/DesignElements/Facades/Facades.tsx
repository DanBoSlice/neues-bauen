import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import image from './1.jpg';

export default function Facades() {
  return (
    <div>
      <h2>Facades</h2>

      <p>
        Facades were often brightly colored, with pastel tones dominating the palette. However, bolder shades were also
        used, creating a vibrant aesthetic. The most common facade finish was simple plaster, with
        &raquo;Münchner Rauputz&laquo; (a rough-textured plaster) being a particularly popular choice.
      </p>

      <Gallery>
        <WindowImage label="Hauptfeuerwache Leipzig with the reconstructed 1928-1930 facade">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Hauptfeuerwehrhaus.jpg/1280px-Hauptfeuerwehrhaus.jpg" alt=""/>
        </WindowImage>

        <WindowImage label="Bold colors of Siedlung Italienischer Garten (Celle)">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Celle%2C_Siedlung_Italienischer_Garten%2C_Nr._7%2C_Hauseingang%2C_2008.jpg" alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        1920s facades often followed a strictly uniform design across all stories.
        Windows and decorative elements were usually aligned symmetrically.
        This emphasis on repetition and clarity reflected the ideals of the era: functionality, efficiency, and a rejection of overly ornate designs.
      </p>

      <Gallery>
        <WindowImage>
          <img src={image} alt=""/>
        </WindowImage>
        <WindowImage>
          <img src={image} alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
