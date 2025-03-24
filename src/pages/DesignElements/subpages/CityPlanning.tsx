import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';

export default function CityPlanning() {
  return (
    <div>
      <h2>City Planning</h2>

      <p>
        Zeilenbauweise
        Gartenstadt
      </p>

      <Gallery>
        <WindowImage label="Zeilenbauweise of the Krochsiedlung (1929-1930) in Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Krochsiedlung.jpg" alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        Licht und Luft
      </p>
    </div>
  );
}
