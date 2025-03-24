import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';

export default function Windows() {
  return (
    <div>
      <h2>Windows</h2>

      <p>White, wooden, panelled</p>
      <p>Corner windows</p>

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
