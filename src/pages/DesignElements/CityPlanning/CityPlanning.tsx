import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import satellite from './satellite.png';

export default function CityPlanning() {
  return (
    <div>
      <h2>City Planning</h2>

      <p>
        Zeilenbauweise
        Gartenstadt
      </p>

      <p>
        Licht und Luft
      </p>

      <Gallery>
        <WindowImage label="Zeilenbauweise of the Krochsiedlung (1929-1930) in Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Krochsiedlung.jpg" alt=""/>
        </WindowImage>

        <WindowImage label="Rundling (1929-1930) in Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rundling_01.jpg/1280px-Rundling_01.jpg"
               alt=""/>
        </WindowImage>

        <WindowImage label="Zeilenbauweise at the top next to Blockrand">
          <img src={satellite} alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
