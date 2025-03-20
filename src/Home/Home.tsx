import React from 'react';
import "./Home.css";
import WindowImage from '../WindowImage';
import image from './image.jpeg';
import { Link } from 'react-router-dom';
import BuildersPlaque from '../BuildersPlaque';

export default function Home() {
  return (
    <>
      <div className="intro">
        <p>
          <strong>
            Welcome to the Portal of &raquo;Neues Bauen&laquo;,
            the modernist architecture movement in 1920s Germany!
          </strong>
        </p>

        <p>
          Neues Bauen is German for "New Building" or "New Construction" and is the general term for
          the new methods and principles used in architecture.
        </p>
        <p>
          Bauhaus, Art Deco.
        </p>
      </div>

      <div className="images">
        <WindowImage src={image}/>
        <WindowImage src={image}/>
        <WindowImage src={image}/>
      </div>

      <hr />

      <div className="base">
        <div>
          <p>
            I started this little old-school niche website to share my interest and fascination about
            the architecture of those buildings.
          </p>

          <p>
            Have fun exploring the site and learning about Neues Bauen, and make sure to
            add your own house to the <Link to="/guestbook">guestbook</Link>!
          </p>
        </div>

        <a href="https://danbos.de" target="_blank" rel="noreferrer">
          <BuildersPlaque/>
        </a>
      </div>
    </>
  );
}
