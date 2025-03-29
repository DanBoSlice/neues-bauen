import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import image1 from './1.jpg';
import ExternalLink from '../../../components/ExternalLink';

export default function UrbanPlanning() {
  return (
    <div>
      <h2>Urban Planning</h2>

      <p>
        One of the key goals of new housing developments in the Weimar Republic was to break away from the dense,
        overcrowded <em>Mietskasernen</em> (tenement blocks) of the 19th century, which were notorious for their poor
        living conditions. Instead of being built around dark, cramped courtyards, apartment buildings were designed
        to provide lots of light, fresh air, and green surroundings.
      </p>

      <p>
        A fundamental principle in achieving this was the linear block layout (Zeilenbauweise), where buildings were
        arranged in parallel rows with space in between. This ensured that every apartment received maximum
        sunlight exposure and allowed for cross-ventilation, meaning that each unit had windows on opposite sides for
        better airflow.
      </p>

      <Gallery>
        <WindowImage
          label="Linear rows of the Krochsiedlung (1929-1930) in Leipzig"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Krochsiedlung.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Krochsiedlung.jpg" alt=""/>
        </WindowImage>

        <WindowImage
          label="Rundling (1929-1930) in Leipzig"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Rundling_01.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rundling_01.jpg/1280px-Rundling_01.jpg" alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        As a response to the overcrowded and heavily industrialized cities, green spaces also became an essential
        element of modern urban planning. Ernst May, the architect behind{' '}
        <ExternalLink href="https://en.wikipedia.org/wiki/New_Frankfurt">Neues Frankfurt</ExternalLink>,
        envisioned a garden for each home, allowing residents to grow their own vegetables and become more
        self-sufficient. However, he acknowledged that this idea was difficult to implement in an urban reality
        where space was limited and the demand for housing was high.
      </p>

      <p>
        Even in more densely populated areas, urban planners found ways to introduce greenery. One common approach was
        to set buildings slightly back, giving space for small front gardens, which provided additional green space
        close to existing urban developments.
      </p>

      <Gallery>
        <WindowImage label="Set back houses from 1930 with a small front garden in Leipzig">
          <img src={image1} alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
