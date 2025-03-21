import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';

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
        <WindowImage src="https://upload.wikimedia.org/wikipedia/commons/1/19/TautesHeim_Ferienhaus_in_Hufeisensiedlung_2011_%C2%A9Promo_www.tautes-heim.de.jpg" />
      </Gallery>
    </div>
  );
}
