import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import zehlendorf from './zehlendorf.jpg';

export default function Roofs() {
  return (
    <div>
      <h2>Roofs</h2>

      <p>
        With the availability of new building materials such as concrete and steel, architecture saw a shift in roof
        design.
        Traditional hip and gable roofs were used almost exclusively in Germany at the time, but the emerging modernist
        movements introduced flat roofs as alternatives.
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
          Critics of flat roofs, on the other hand, saw them as a foreign architectural influence, detached from
          traditional local building styles. They called for a return to familiar, proven forms.
        </li>
      </ul>

      <p>
        One of the most notable manifestations of this debate took place in Zehlendorf, Berlin, where two contrasting
        housing projects were developed in close proximity:
      </p>

      <ul>
        <li>
          <strong>Onkel-Tom-Siedlung</strong>, designed by Bruno Taut and completed first, embraced flat roofs as a
          modern and functional choice.
        </li>

        <li>
          <strong>Siedlung am Fischtalgrund</strong>, built in response, mandated the use of gable roofs, explicitly
          opposing the flat-roofed aesthetic. It was finished in 1928 and represented a deliberate counterpoint
          to the Onkel-Tom-Siedlung.
        </li>
      </ul>

      <p>
        A similar debate took place in Leipzig during the planning of the{' '}
        <a href="https://en.wikipedia.org/wiki/Rundling_(Leipzig)" target="_blank" rel="noreferrer">Rundling</a>.
        Initially, the use of flat roofs faced resistance. Architect Hubert Ritter was only able to convince the
        planning committee after proving that flat roofs were more cost-effective than steep ones.
        This practical argument ultimately swayed the decision in favor of modernist design.
      </p>

      <Gallery>
        <WindowImage
          label="Gable roofs of Siedlung am Fischtalgrund (left) and flat roofs of Onkel-Tom-Siedlung (right)"
          source="Foto: Arthur Köster, © VG Bild-Kunst"
        >
          <img src={zehlendorf}
               alt="Gable roofs of Siedlung am Fischtalgrund (left) and flat roofs of Onkel-Tom-Siedlung (right)"/>
        </WindowImage>

        <WindowImage label="Rundling (1929-1930) in Leipzig">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/AHW_Wohnanlage_Rundling_Leipzig_1930.jpg"
               alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        Despite their differences, both projects rejected 19th-century urban planning models and the cramped, unhealthy
        living conditions of traditional tenement blocks (Mietskasernen).
      </p>

      <p>
        Interestingly, even leading proponents of flat roofs, such as Bruno Taut, were not rigid in their approach. In
        some cases, such as in the Bornheimer Hang estate in Frankfurt, pitched roofs were incorporated to better
        integrate with the surrounding architecture. In Florstädter Straße and Pestalozziplatz, Ernst May’s otherwise
        flat-roofed developments featured steep gable roofs where necessary, showing that functionality often took
        precedence over ideological purity.
      </p>

      <p>
        And especially houses built in Lücken of existing Wohnblocks they usually adept to the surrounding landscape
        by not using a flat roof.
      </p>
    </div>
  );
}
