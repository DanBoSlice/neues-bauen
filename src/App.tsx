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
import { ReactComponent as Lamp } from './lamp.svg';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="roof-header"></div>

        <div className="header">
          <Lamp className="lamp"/>

          <div className="header-content">
            <span className="logo">
              Portal des Neuen Bauens
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

          <Lamp className="lamp"/>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
