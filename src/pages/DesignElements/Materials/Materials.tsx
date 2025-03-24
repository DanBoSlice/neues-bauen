import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import entrance from './entrance.jpeg';

export default function Materials() {
  return (
    <div>
      <h2>Materials</h2>

      <p>Das Neue Bauen setzte konsequent auf Backstein, Glas, Stahl und das neue Material Beton.</p>

      <p>
        A brick base is probably one of the most common design elements of houses of that time, although there are also
        some examples using limestone(?) as a base. While concrete was heavily used in the construction of these houses,
        most of them were still built up using bricks, and as a design ethos the construction method should influence
        the appearance, therefore they were not covered up in some parts.
      </p>

      <p>
        To contrast with the smooth plaster surfaces, many buildings incorporated red exposed brickwork in specific
        areas. This was commonly seen:
      </p>

      <ul>
        <li>In the base (Sockel) of the building, grounding the structure visually.</li>
        <li>As pilasters (Lisenen) to emphasize verticality.</li>
        <li>Around windows and door frames, adding depth and definition.</li>
      </ul>

      <Gallery>
        <WindowImage>
          <img src={entrance} alt=""/>
        </WindowImage>

        <WindowImage>
          <img src={entrance} alt=""/>
        </WindowImage>

        <WindowImage>
          <img src={entrance} alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        Plattenbauweise existed and was used in multiple examples, notably
        the <a href="https://en.wikipedia.org/wiki/Krochsiedlung" target="_blank" rel="noreferrer">Krochsiedlung</a> in
        Leipzig.
        However, this type of construction was still more expensive than bricks, because labor was cheap.
      </p>

      <Gallery>
        <WindowImage label="Krochsiedlung in Leipzig constructed in Plattenbauweise">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Leipzig-Gohlis%2C_Krochsiedlung_5.jpg/1920px-Leipzig-Gohlis%2C_Krochsiedlung_5.jpg"
            alt=""/>
        </WindowImage>
      </Gallery>

      <p>Klinkerexpressionismus</p>

      <p>Natürliche Materialien wie Holz</p>
    </div>
  );
}
