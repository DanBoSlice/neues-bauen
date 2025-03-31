import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';
import ExternalLink from '../../../components/ExternalLink';

export default function Windows() {
  return (
    <div>
      <h2>Windows</h2>

      <p>White, wooden, panelled</p>
      <p>Corner windows</p>

      <p>BLEIGLAS! Bleiverglaste Treppenhausfenster</p>

      <Gallery>
        <WindowImage
          label="Eckfenster am Rundling"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Leipzig-Gohlis,_Krochsiedlung_2.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Leipzig-Gohlis%2C_Krochsiedlung_2.jpg" alt=""/>
        </WindowImage>

        <WindowImage
          label="Eckfenster am Rundling"
          source={<ExternalLink href="https://commons.wikimedia.org/wiki/File:Leipzig-Gohlis,_Krochsiedlung_1.jpg">Wikimedia Commons</ExternalLink>}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Leipzig-Gohlis%2C_Krochsiedlung_1.jpg" alt=""/>
        </WindowImage>
      </Gallery>

      <Gallery>
        <WindowImage label="Eckfenster am Rundling">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Loessnig_Nibelungenring_56.jpg/1920px-Loessnig_Nibelungenring_56.jpg" alt=""/>
        </WindowImage>

        <WindowImage label="Glasfassade am Rundling">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Rundling_%28Leipzig%29_2.jpg/1920px-Rundling_%28Leipzig%29_2.jpg" alt=""/>
        </WindowImage>
      </Gallery>
    </div>
  );
}
