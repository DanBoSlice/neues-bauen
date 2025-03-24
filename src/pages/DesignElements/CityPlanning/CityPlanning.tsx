import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import satellite from './satellite.png';

export default function CityPlanning() {
  return (
    <div>
      <h2>City Planning</h2>

      <p>
        The Neues Bauen movement sought to revolutionize urban planning by prioritizing light, air, and open spaces.
        This contrasted sharply with the dense, cramped Mietskasernen of the 19th century. Two key approaches shaped the
        new urban landscape:
      </p>

      <p>
        Licht und Luft
      </p>

      <h2>Linear Block Layout (Zeilenbauweise)</h2>

      <p>
        One of the defining principles of modernist city planning was Zeilenbauweise (linear block layout), where
        buildings were arranged in parallel rows with generous spacing in between. This design ensured:
      </p>

      <ul>
        <li>Maximum sunlight exposure for each apartment</li>
        <li>Improved ventilation, reducing the spread of diseases</li>
        <li>Green courtyards and shared spaces for recreation</li>
      </ul>

      <p>
        Unlike traditional perimeter block developments, which enclosed courtyards and limited airflow, Zeilenbau
        embraced open layouts to enhance urban living conditions.
      </p>

      <Gallery>
        <WindowImage label="Zeilenbauweise of the Krochsiedlung (1929-1930) in Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Krochsiedlung.jpg" alt=""/>
        </WindowImage>

        <WindowImage label="Rundling (1929-1930) in Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rundling_01.jpg/1280px-Rundling_01.jpg"
               alt=""/>
        </WindowImage>
      </Gallery>

      <h2>Garden City</h2>

      <ul>
        <li>A balance of housing, green spaces, and local infrastructure</li>
        <li>Small-scale housing units integrated with gardens</li>
        <li>A rejection of overcrowded, industrial urban centers</li>
      </ul>

      <p>Ernst May wollte fuer jeden Hof. Bauhaus, im Erdgeschoss Vieh</p>
    </div>
  );
}
