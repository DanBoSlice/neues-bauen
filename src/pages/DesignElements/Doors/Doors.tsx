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

export default function Doors() {
  return (
    <>
      <h2>Front Doors</h2>

      <p>
        Front doors followed the shift from the more ornate styles of the past to more minimal designs.
        The most common materials were wood, glass, and metal (typically steel), each chosen for their availability and affordability.
        PVC had not yet been invented, and aluminum remained too expensive for widespread use.
      </p>

      <p>
        Nearly every door from this period was made out of wood, especially on residential buildings.
        Germany’s strong forestry resources made it a cheap and simultaneously practical option.
        Up until this point, almost all front doors were made out of wood, but 1920s doors were a lot simpler.
        Doors were often flat, with only horizontal or vertical slats adding structure, or other simple geometric forms,
        equally helping the structure of the door and not useless only optical decorative elements.
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
        To protect against the elements, wood was often stained, keeping its natural appearance intact.
        However, some doors, especially in more experimental housing projects, featured bright colors, similar to the
        facades.
      </p>

      <Gallery>
        <WindowImage label="Colorful front doors of Hufeisensiedlung (Berlin)">
          <a href={'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hufeisensiedlung_Tueren_Details_divStrassen_2011.jpg'}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hufeisensiedlung_Tueren_Details_divStrassen_2011.jpg'} alt=""/>
          </a>
        </WindowImage>
      </Gallery>

      <p>
        Glass panes were another common feature of front doors, reinforcing the principle of "light and sun".
        However, large glass panes were expensive and difficult to produce, so most doors used multiple smaller panes,
        divided by wooden frames.
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
        Occasionally, metal, typically steel, was used for decoration and reinforcement.
        Metal bars could provide a subtle ornamental touch, especially in expressionist designs, while also adding
        security.
      </p>

      <p>
        Metal was less common for full doors due to cost and weight, but steel-framed glass doors were sometimes used in
        commercial or modernist buildings.
      </p>

      <Gallery>
        <WindowImage label="Wood frames between glass panes and decorative metal bars">
          <a href={metalBars}>
            <img src={metalBarsSmall} alt=""/>
          </a>
        </WindowImage>

        <WindowImage label="Blue painted wood and metal bar ornamentation in Munich">
          <a href={blueDoor}>
            <img src={blueDoorSmall} alt=""/>
          </a>
        </WindowImage>
      </Gallery>

      <CuratorsTake>
        <p>
          I like how these doors balance functionality with warmth. The natural materials and handcrafted details make
          early modernist architecture feel more human compared to later, more industrialized designs.
        </p>

        <p>
          Even with the leading principle of form follows function, the form was not forgotten. Instead of using purely
          flat doors, a certain structure can be seen which at the same time improves the sturdiness of the door.
          They are simple, but not boring.
        </p>

        <p>
          These choices weren’t just aesthetic but also practical. Wood was chosen because it was cheap and easy to
          work with, not necessarily because of its beauty. But necessity led to elegance, and that’s why I find early
          modernism more compelling than later iterations—it still carries a sense of craftsmanship and natural
          materials.
        </p>
      </CuratorsTake>
    </>
  );
}
