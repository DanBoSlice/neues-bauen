import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import fourPanes from './four-panes.jpg';
import fourPanesSmall from './four-panes-small.jpg';
import fivePanes from './five-panes.jpg';
import fivePanesSmall from './five-panes-small.jpg';
import metalBars from './metal-bars.jpg';
import metalBarsSmall from './metal-bars-small.jpg';
import manyPanes from './many-panes.jpg';
import manyPanesSmall from './many-panes-small.jpg';
import blueDoor from './blue-door.jpg';
import blueDoorSmall from './blue-door-small.jpg';
import woodDoor from './wood-door.jpg';
import woodDoorSmall from './wood-door-small.jpg';
import React from 'react';
import CuratorsTake from '../../../components/CuratorsTake';
import ExternalLink from '../../../components/ExternalLink';

export default function Doors() {
  return (
    <>
      <h2>Front Doors</h2>

      <p>
        The most common materials for front doors were wood, glass, and metal (typically steel), chosen for their
        availability and affordability. PVC had not yet been invented, and aluminum was too expensive.
      </p>

      <p>
        Wood was by far the dominant material, especially for residential buildings, due to Germany’s strong forestry
        resources, which made it both cheap and practical. While front doors had traditionally been made of wood, they
        became a lot less ornate in the 1920s. Flat surfaces replaced heavy ornamentation, and horizontal and vertical
        slats added structure and reinforcement.
      </p>

      <Gallery>
        <WindowImage label="Wooden front door from around 1930 in Leipzig">
          <a href={fivePanes}>
            <img src={fivePanesSmall} alt=""/>
          </a>
        </WindowImage>

        <WindowImage label="Wood door at Alte Heide (Munich)">
          <a href={woodDoor}>
            <img src={woodDoorSmall} alt=""/>
          </a>
        </WindowImage>
      </Gallery>

      <p>
        To protect against the elements, the wood was often stained, keeping its natural appearance intact.
        However, some doors, especially in more experimental housing projects, featured bright colors, similar to the
        facades.
      </p>

      <Gallery>
        <WindowImage
          label="Colorful front doors of Hufeisensiedlung (Berlin)"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Hufeisensiedlung_Tueren_Details_divStrassen_2011.jpg">Wikimedia Commons</ExternalLink>}
        >
          <a href={'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hufeisensiedlung_Tueren_Details_divStrassen_2011.jpg'}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hufeisensiedlung_Tueren_Details_divStrassen_2011.jpg'} alt=""/>
          </a>
        </WindowImage>
      </Gallery>

      <p>
        Glass panes were common feature, reinforcing the principle of &raquo;light and sun&laquo;. Large glass panes
        were still difficult to produce and therefore expensive, so most doors used smaller panes divided by wooden frames.
      </p>

      <Gallery>
        <WindowImage label="Stockwerksiedlung (Munich)">
          <a href={fourPanes}>
            <img src={fourPanesSmall} alt=""/>
          </a>
        </WindowImage>

        <WindowImage label="Stockwerksiedlung (Munich)">
          <a href={manyPanes}>
            <img src={manyPanesSmall} alt=""/>
          </a>
        </WindowImage>
      </Gallery>

      <p>
        Occasionally, metal (typically steel), was used for decoration and reinforcement. Metal bars could provide
        a subtle ornamental touch, especially in expressionist designs, while also adding security.
      </p>

      <Gallery>
        <WindowImage label="Wood separating glass panes and decorative metal bars">
          <a href={metalBars}>
            <img src={metalBarsSmall} alt=""/>
          </a>
        </WindowImage>

        <WindowImage label="Blue painted wood and metal bar ornamentation">
          <a href={blueDoor}>
            <img src={blueDoorSmall} alt=""/>
          </a>
        </WindowImage>
      </Gallery>

      <CuratorsTake>
        <p>
          Even under the guiding principle of form follows function, form was never entirely forgotten. Rather than
          being purely flat and featureless, these doors incorporate subtle structural elements that enhance both
          durability and aesthetics. They are simple, but not boring.
        </p>

        <p>
          The material choices weren’t just about aesthetics but also practical. Wood was widely used because it was
          cheap and easy to work with. But necessity led to elegance, and that’s why I find early modernism more
          compelling than later developments. While they adhered to the same principles, the increasing availability of
          materials like aluminum led to doors that felt more industrial. The warmth and sense of craftsmanship of
          these earlier designs was gradually lost.
        </p>
      </CuratorsTake>
    </>
  );
}
