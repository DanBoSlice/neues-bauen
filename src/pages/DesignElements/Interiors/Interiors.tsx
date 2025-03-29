import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import kitchen from './kitchen.jpg';
import colors from './colors.png';
import Source from '../../../components/Source';

export default function Interiors() {
  return (
    <div>
      <h2>Interiors</h2>

      <p>
        How people furnished these modern homes.
        The idea of "light, air, sun" in modernist living.
        Bauhaus-style furniture (simple, functional, tubular steel).
        Examples of interior color schemes (pastel walls, bright accents).
      </p>

      <Gallery>
        <WindowImage
          label="Kitchen in Onkel Toms Hütte with Gas/Kohleherd, Klapptisch und Spüle"
          source="© Bildarchiv Foto Marburg (fm1171685)"
        >
          <img src={kitchen} alt=""/>
        </WindowImage>
      </Gallery>

      <p>Terrazzoböden in Küche und Bad sowie Holzdielen in den Wohnräumen</p>

      <Gallery>
        <WindowImage>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/TautesHeim_Ferienhaus_in_Hufeisensiedlung_2011_%C2%A9Promo_www.tautes-heim.de.jpg" alt=""/>
        </WindowImage>
        <WindowImage
          label="Wand- und Deckenfarben in Onkel Toms Hütte"
          source="Landesdenkmalamt Berlin"
        >
          <img src={colors} alt=""/>
        </WindowImage>
      </Gallery>

      Die Wohnungen hatten alle ein Bad, Gasbadeöfen, eine Loggia oder einen Balkon, teilweise auch Zentralheizung und Einbaumöbel in der Küche.

      Durch zentrale Waschhäuser konnten die Küchen kleiner ausfallen.

      <p>
        In Mietskasernen: Das Leben spielte sich in der Küche ab – dem einzigen beheizbaren Raum. Die Toilette teilte
        man sich mit mehreren Familien, sie befand sich im Treppenhaus.
      </p>

      <p>
        1875 gab es in 23 Prozent der Wohnungen Schlafgänger!
      </p>

      <p>
        Im Jahr 1925 ergab eine Zählung in Berlin, dass gerade mal 26,4 Prozent aller Wohnungen über Bäder verfügten.
        Wobei die Metropole hierbei noch verhältnismäßig gut abschnitt, denn in Düsseldorf betrug der Anteil zur selben
        Zeit nur 11,5 Prozent. 1936 besaß rund ein Drittel aller Berliner Wohnungen ein eigenes Bad. Für weitere 20 bis
        25 Prozent ergaben sich alternative Badegelegenheiten im Haus, so zum Beispiel in der Küche, Waschküche oder im
        Keller.
        <Source num={1} link={'https://www.berliner-mieterverein.de/magazin/online/mm0715/071524.htm'} />
      </p>
    </div>
  );
}
