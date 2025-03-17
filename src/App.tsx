import React from 'react';
import './App.css';
import Streetsign from './Streetsign';

function App() {
  return (
    <>
      <div>
        <a href="asdf">Homepage</a>
        <a href="asdf">Featured buildings</a>
        <a href="asdf">Interior Design</a>
        <a href="asdf">Design Elements</a>
        <a href="asdf">Guestbook</a>
      </div>

      <div className="intro">
        <h2>Weimar Republic Architecture</h2>

        <p>
          Welcome on my little hobby website about architecture of the 1920s in Germany.
        </p>
      </div>

      <div className="windows"></div>

      <p>Viele Elemente auf dieser Seite können angeklickt werden.</p>

      <button>Lorem</button>

      <a href="https://danbos.de" target="_blank">
        <Streetsign>Sitemap</Streetsign>
      </a>
    </>
  );
}

export default App;
