import React from 'react';
import './App.css';
import Streetsign from './Streetsign';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Featured from './Featured/Featured';
import DesignElements from './DesignElements/DesignElements';
import Guestbook from './Guestbook/Guestbook';
import Interior from './Interior/Interior';
import BuildersPlaque from './BuildersPlaque';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <span className="logo">
            Portal des Neues Bauens
          </span>

          <div className="menu">
            <Link to="/">
              <Streetsign>Homepage</Streetsign>
            </Link>
            {/*<Link to="/featured-buildings">*/}
            {/*  <Streetsign>Featured Buildings</Streetsign>*/}
            {/*</Link>*/}
            {/*<Link to="/interior">*/}
            {/*  <Streetsign>Interior Design</Streetsign>*/}
            {/*</Link>*/}
            <Link to="/design-elements">
              <Streetsign>Design Elements</Streetsign>
            </Link>
            <Link to="/guestbook">
              <Streetsign>Guestbook</Streetsign>
            </Link>
          </div>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="featured-buildings" element={<Featured/>}/>
            <Route path="interior" element={<Interior/>}/>
            <Route path="design-elements" element={<DesignElements/>}/>
            <Route path="guestbook/*" element={<Guestbook/>}/>
            {/*Todo: 404*/}
          </Routes>
        </div>

        <div className="footer">
          <a href="https://danbos.de" target="_blank" rel="noreferrer">
            <BuildersPlaque/>
          </a>
        </div>

        sidewalk

        <div className="note">
          <h4>Why does this website look so 1990s?</h4>
          <p>
            Because the internet was so much more fun back then. I say bring back the random niche websites!
            Do you have a fun website like this? <a href="mailto:hello@danbos.de">Send it to me</a> and I'll add
            your banner here (no joke).
          </p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
