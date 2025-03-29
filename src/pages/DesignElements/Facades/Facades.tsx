import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import image from './1.jpg';
import image1 from '../../Home/2big.jpeg';
import ExternalLink from '../../../components/ExternalLink';

export default function Facades() {
  return (
    <div>
      <h2>Facades</h2>

      <p>
        To counteract the gray monotony of the old tenement housing, facades were often brightly colored. This was not
        only aesthetic but also a symbolic break from the past and the old German empire.
      </p>

      <p>
        The facades themselves remained simple, typically finished with plain plaster, either smooth or with
        &raquo;Münchner Rauputz&laquo;, a rough-textured plaster that was particularly popular.
      </p>

      <Gallery>
        <WindowImage
          label="Hauptfeuerwache Leipzig with the reconstructed 1928-1930 facade"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Hauptfeuerwehrhaus.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Hauptfeuerwehrhaus.jpg/1280px-Hauptfeuerwehrhaus.jpg" alt=""/>
        </WindowImage>

        <WindowImage
          label="Bold colors of Siedlung Italienischer Garten (Celle)"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Celle,_Siedlung_Italienischer_Garten,_Nr._7,_Hauseingang,_2008.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Celle%2C_Siedlung_Italienischer_Garten%2C_Nr._7%2C_Hauseingang%2C_2008.jpg" alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        1920s facades often followed a strictly uniform design across all stories. Windows and decorative elements were
        usually aligned symmetrically. This emphasis on repetition and clarity reflected the ideals of the era:
        functionality, efficiency, and a rejection of overly ornate designs.
      </p>

      <Gallery>
        <WindowImage label="Uniformly structured facade in Valleystraße (Munich)">
          <img src={image} alt=""/>
        </WindowImage>

        <WindowImage label="Theodor-Neubauer-Straße (Leipzig)">
          <img src={image1} alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
