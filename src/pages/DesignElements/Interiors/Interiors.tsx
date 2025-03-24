import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import kitchen from './kitchen.jpg';
import colors from './colors.png';

export default function Interiors() {
  return (
    <div>
      <h2>Interiors</h2>

      <p>
        How people furnished these modern homes.
        The idea of "light, air, sun" in modernist living.
        Bauhaus-style furniture (simple, functional, tubular steel).
        Examples of interior color schemes (pastel walls, bright accents).
      </p>

      <Gallery>
        <WindowImage
          label="Kitchen in Onkel Toms Hütte with Gas/Kohleherd, Klapptisch und Spüle"
          source="© Bildarchiv Foto Marburg (fm1171685)"
        >
          <img src={kitchen} alt=""/>
        </WindowImage>
      </Gallery>

      <p>Terrazzoböden in Küche und Bad sowie Holzdielen in den Wohnräumen</p>

      <Gallery>
        <WindowImage>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/TautesHeim_Ferienhaus_in_Hufeisensiedlung_2011_%C2%A9Promo_www.tautes-heim.de.jpg" alt=""/>
        </WindowImage>
        <WindowImage
          label="Wand- und Deckenfarben in Onkel Toms Hütte"
          source="Landesdenkmalamt Berlin"
        >
          <img src={colors} alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
