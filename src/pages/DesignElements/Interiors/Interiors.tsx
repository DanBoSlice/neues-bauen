import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import kitchen from './kitchen.jpg';
import colors from './colors.png';
import Source from '../../../components/Source';
import ExternalLink from '../../../components/ExternalLink';

export default function Interiors() {
  return (
    <div>
      <h2>Interiors</h2>

      <p>
        Generally, the interiors in the modern houses of the time were considerably smaller than in older the buildings,
        which may seem counterintuitive. However, even though the apartments before were bigger, didn't mean they were
        well thought out, and generally didn't fit the need of the population. Many people sublet rooms in their
        apartments first of all to cover rent, and secondly because not enough housing was available.
      </p>

      <p>
        The Weimar Republic apartments were smaller on purpose to save costs and tackle the extreme housing shortage.
        Similarly, they had much higher quality and amenities than the earlier buildings.
        In the Mietskasernen (tenement housing) of the 19th century, daily life centered around the kitchen as it was
        often the only heated room. Most of the new apartments came gas-heating (instead of coal which was commonly
        used) and some even with central heating.

        maybe some statistics on average apartment size? average rooms?
      </p>

      <h3>Colors and materials</h3>

      <p>Terrazzoböden in Küche und Bad sowie Holzdielen in den Wohnräumen</p>

      <p>Bold colors, for example dark blue in bedroom in Hufeisensiedlung Berlin</p>

      <Gallery>
        <WindowImage>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/TautesHeim_Ferienhaus_in_Hufeisensiedlung_2011_%C2%A9Promo_www.tautes-heim.de.jpg"
            alt=""/>
        </WindowImage>
        <WindowImage
          label="Wand- und Deckenfarben in Onkel Toms Hütte"
          source="Landesdenkmalamt Berlin"
        >
          <img src={colors} alt=""/>
        </WindowImage>
      </Gallery>

      <h3>Furniture</h3>

      <p>
        May schwärmte von "völlig neuzeitlich" eingerichteten Häusern, "mit eingebauten Schränken usw.
      </p>

      <p>
        Big furniture didn't fit in
      </p>

      <h3>Bathrooms</h3>

      <p>
        Bathrooms inside the apartment were equally rare at the time, especially in working class neighborhoods and rear
        buildings.
        Residents shared toilets in between stories in the stairwell, and went to public bathhouses to wash themselves.
        In 1925, still only 26.4% of Berlin's apartments had a private bathroom, and in Düsseldorf, the figure
        was as even lower at 11.5%.<Source num={1}
                                           link={'https://www.berliner-mieterverein.de/magazin/online/mm0715/071524.htm'}/>

        1936 besaß rund ein Drittel aller Berliner Wohnungen ein eigenes Bad.
      </p>

      <p>
        Zentralwäschereien
        Durch zentrale Waschhäuser konnten die Küchen kleiner ausfallen.
      </p>

      <h3>Kitchen</h3>

      <p>
        Frankfurter Kueche gilt als der Urtyp der modernen Einbauküche.
        Wie ein industrieller Arbeitsplatz, das wichtigste mit einem Griff zu erreichen, daher auch klein.
      </p>

      <p>
        Zentralheizung oder Fernwärme lösten Kohleöfen ab, gekocht wurde modern, vorwiegend mit Gas oder elektrisch

        kombinierter Kohle- und Elektroherd, da kochen mit Elektro noch zu teuer war
      </p>

      <p>
        In der Frankfurter Küche wurden verschiedene Hölzer und Metalle eingesetzt; auf damals schon bekannten
        Ersatzstoffe und Imitate wurde verzichtet. Hohe Qualität gewünscht.

        Kostete 500 Mark, 2.250,00 EUR
        <Source num={1}
                link={'https://www.bundesbank.de/resource/blob/615162/4162e577aa9cb1691714327342d6156b/472B63F073F071307366337C94F8C870/kaufkraftaequivalente-historischer-betraege-in-deutschen-waehrungen-data.pdf'}/>
      </p>

      <Gallery>
        <WindowImage
          label="Kitchen in Onkel Toms Hütte with Gas/Kohleherd, Klapptisch und Spüle"
          source="© Bildarchiv Foto Marburg (fm1171685)"
        >
          <img src={kitchen} alt=""/>
        </WindowImage>

        <WindowImage
          label="Frankfurter Küche"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Frankfurterkueche.jpg">Wikimedia
            Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Frankfurterkueche.jpg" alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
