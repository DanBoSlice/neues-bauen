import React from 'react';
import './Home.css';
import WindowImage from '../../components/WindowImage';
import { Link } from 'react-router-dom';
import BuildersPlaque from '../../components/BuildersPlaque';
import Gallery from '../../components/Gallery';
import image1 from './IMG_0424.jpeg';
import image2 from './IMG_0442.jpeg';

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
          Neues Bauen is German for &raquo;New Building&laquo; or &raquo;New Constructing&laquo;
          and refers to the new methods and principles of Weimar Republic architecture.
        </p>
        <p>
          Moving away from the ornate styles of the past, this era focused on functionality and simplicity,
          and improving living conditions through well-designed spaces.
        </p>
        <p>
          What sets these buildings apart from later modern architecture is the attention to subtle details.
          They capture the spirit of the time—optimistic and forward-thinking.
          Here, we’ll explore these distinct design elements of 1920s architecture.
        </p>
      </div>

      <div className="home-images">
        <Gallery>
          <WindowImage src={image1}/>
          <WindowImage src={image2}/>
          <WindowImage src={image1}/>
        </Gallery>
      </div>

      <hr />

      <div className="home-end">
        <div>
          <p>
            I started this little old-school niche website to share my interest and fascination about
            the architecture of these buildings, and bring back some of the fun of the old internet.
            More content will follow soon!
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
