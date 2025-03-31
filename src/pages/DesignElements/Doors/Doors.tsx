import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import fourPanes from './four-panes.jpg';
import fivePanes from './five-panes.jpg';
import metalBars from './metal-bars.jpg';
import manyPanes from './many-panes.jpg';
import blueDoor from './blue-door.jpg';
import woodDoor from './wood-door.jpg';
import React from 'react';

export default function Doors() {
  return (
    <>
      <h2>Front Doors</h2>

      <p>
        The primary materials for front doors were wood, glass, metal.
        Wood was the most common material, especially for residential buildings.
        It was easily available and affordable since Germany had strong forestry resources.
      </p>

      <Gallery>
        <WindowImage label="Picture of wooden front door with 5 smaller vertical glass panes from Leipzig">
          <img src={fivePanes} alt=""/>
        </WindowImage>

        <WindowImage label="Picture of minimal wood door with some horizontal wood bars and no windows from Munich">
          <img src={woodDoor} alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        Glass panes to build on the "light, air, and sun" principle.
        More glass = more expensive, so usually smaller panes.
        However, big glass panes were expensive as they were hard to produce back then, so usually smaller glass panes
        were used, with wood frames keeping them in place and dividing them from the other glass panes.
      </p>

      <Gallery>
        <WindowImage label="Picture of wood door with 4 small glass panes and multilpe horizontal wood slabs, otherwise minimal">
          <img src={fourPanes} alt=""/>
        </WindowImage>

        <WindowImage label="Picture of wood door with many small glass panes">
          <img src={manyPanes} alt=""/>
        </WindowImage>
      </Gallery>


      <p>
        Sometimes also metal (usually steel) was used to add some simple ornamentation to the door.
      </p>

      <Gallery>
        <WindowImage label="Picture of wood framed door with big glass panes and metal bars for decoration">
          <img src={metalBars} alt=""/>
        </WindowImage>

        <WindowImage label="Picture of blue painted wood door with metal bars for ornamentation">
          <img src={blueDoor} alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        The wood was often stained to protect against weather. In some cases it was also painted in bright colors,
        similarly to the facades.
      </p>

      <Gallery>
        <WindowImage label="Front doors of Hufeisensiedlung (Berlin)">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Hufeisensiedlung_Tueren_Details_divStrassen_2011.jpg"
            alt=""/>
        </WindowImage>
      </Gallery>

      <div>
        <h3>Curator's Take</h3>

        <p>
          I like the warmth the wood gives, and the overall minimalist design. It still shows the craftsmanship
          of the time and makes the whole architecture more human, as it uses natural materials.
        </p>

        <p>
          It was however, mostly an economical decision decision to use wood and these materials, as they were the
          cheapest option and quickly manufactured. That's why I like early modern architecture more than the later ones
          because they still show craftsmanship, and natural materials.
        </p>
      </div>
    </>
  );
}
