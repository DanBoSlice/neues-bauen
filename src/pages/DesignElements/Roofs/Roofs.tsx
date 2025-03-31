import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import rundling from './rundling.jpg';
import zehlendorf from './zehlendorf.jpg';
import mixedRoof from './mixed-roof.jpg';
import ExternalLink from '../../../components/ExternalLink';

export default function Roofs() {
  return (
    <div>
      <h2>Roofs</h2>

      <p>
        With the availability of new building materials such as concrete and steel, German architecture saw a shift
        in roof design. While traditional hip and gable roofs remained dominant, modernist movements increasingly
        introduced flat roofs as an alternative.
      </p>

      <p>
        This shift in roof design was not uniform across the modernist architecture in the Weimar Republic and brought
        with it a deeper cultural debate.
      </p>

      <ul>
        <li>
          Critics of pitched roofs viewed them as a symbol of nostalgia for rural life, rejecting urban modernity and
          the pressing need for efficient housing. They argued that steep roofs wasted valuable space and represented an
          outdated, space-consuming approach to construction.
        </li>

        <li>
          Critics of flat roofs, on the other hand, saw them as a foreign influence, detached from local building
          styles. They called for a return to familiar, proven forms.
        </li>
      </ul>

      <p>
        One of the most notable manifestations of this debate took place in Zehlendorf (Berlin), where two contrasting
        housing projects were developed in close proximity:
      </p>

      <ul>
        <li>
          <strong>Onkel-Tom-Siedlung</strong>, designed between 1926-1931, embraced flat roofs as a modern and
          functional choice. It sparked controversy as Zehlendorf at the time was characterized by historicist
          mansions and traditional suburban architecture.
        </li>

        <li>
          <strong>Siedlung am Fischtalgrund</strong>, built in 1928, mandated the use of gable roofs, explicitly
          opposing the flat-roofed aesthetic. It represented a deliberate counterpoint not only to the
          Onkel-Tom-Siedlung but also the radical modernism of the 1927{' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Weissenhof_Estate">Weissenhof Estate</ExternalLink>
          {' '}in Stuttgart.
        </li>
      </ul>

      <p>
        A similar debate took place in Leipzig during the planning of the{' '}
        <ExternalLink href="https://en.wikipedia.org/wiki/Rundling_(Leipzig)">Rundling</ExternalLink>.
        Initially, the use of flat roofs faced resistance and the architect was only able to convince the planning
        committee after proving that flat roofs were more cost-effective than steep ones.
      </p>

      <Gallery>
        <WindowImage
          label="Gable roofs of Siedlung am Fischtalgrund (left) and flat roofs of Onkel-Tom-Siedlung (right)"
          source="Foto: Arthur Köster, © VG Bild-Kunst"
        >
          <img src={zehlendorf} alt="Gable roofs of Siedlung am Fischtalgrund (left) and flat roofs of Onkel-Tom-Siedlung (right)"/>
        </WindowImage>

        <WindowImage
          label="Rundling (1929-1930) in Leipzig"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:AHW_Wohnanlage_Rundling_Leipzig_1930.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src={rundling} alt="Rundling (1929-1930) in Leipzig"/>
        </WindowImage>
      </Gallery>

      <p>
        Interestingly, even leading proponents of flat roofs, such as Bruno Taut (Onkel-Tom-Siedlung) or Ernst May
        (Neues Frankfurt), were not rigid in their approach.
        In some cases, pitched roofs were incorporated to better integrate with the surrounding architecture.
        One example is Bornheimer Hang in Frankfurt, where Ernst May’s otherwise flat-roofed developments featured
        steep gable roofs where necessary.
        {/*Bruno-Taut Siedlung in Eichwalde*/}
      </p>

      <p>
        In general, flat roofs were primarily seen in new housing estates on the outskirts of the cities, where there were
        fewer architectural constraints and therefore less resistance. In contrast, developments closer to existing
        urban centers often adapted to the surrounding roofscape, blending modernist ideals with the more traditional forms.
      </p>

      <Gallery>
        <WindowImage label="Apartment building from 1930 in Friedrich-Dittes-Straße (Leipzig) with a mix of gable and flat roofs">
          <img src={mixedRoof} alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
