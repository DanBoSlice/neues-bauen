import React from 'react';
import "./Home.css";
import WindowImage from '../WindowImage';
import image from './image.jpeg';

export default function Home() {
  return (
    <>
      <div className="intro">
        <p>
          <strong>
            Welcome to the Portal of &raquo;Neues Bauen&laquo;,
            the modernist architecture movement in 1920s Germany
          </strong>
        </p>

        <p>
          I started this little old-school hobby website to share my interest and fascination about the architecture
          of those buildings.
        </p>

        <p>
          Have fun exploring the site and learning about Neues Bauen, and make sure to leave your own house in the guestbook!
        </p>
      </div>

      <div className="images">
        <WindowImage src={image}/>
        <WindowImage src={image}/>
      </div>
    </>
  );
}
