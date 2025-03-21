import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';

export default function Roofs() {
  return (
    <div>
      <h2>Roofs</h2>

      <p>Very simple, or even flat roof. Otherwise simple V roof</p>
      <p>Zehlendorfer Dächerkrieg (Zehlendorf roof war)</p>

      <Gallery>
        <WindowImage
          src="https://www.tip-berlin.de/wp-content/uploads/2022/04/imago0088797419h-scaled.jpg"
          label="Waldsiedlung Zehlendorf"
        />
        <WindowImage
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wilski_Ecke_Riemeister_Taut.jpeg"
          label="Onkel Toms Hütte"
        />
      </Gallery>
    </div>
  );
}
