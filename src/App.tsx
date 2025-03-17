import React from 'react';
import './App.css';
import Streetsign from './Streetsign';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Featured from './Featured/Featured';
import DesignElements from './DesignElements/DesignElements';
import Guestbook from './Guestbook/Guestbook';
import Interior from './Interior/Interior';

function App() {
  return (
    <BrowserRouter>
      <div className="menu">
        <Link to="/">
          <Streetsign>Homepage</Streetsign>
        </Link>
        <Link to="/featured-buildings">
          <Streetsign>Featured Buildings</Streetsign>
        </Link>
        <Link to="/interior">
          <Streetsign>Interior Design</Streetsign>
        </Link>
        <Link to="/design-elements">
          <Streetsign>Design Elements</Streetsign>
        </Link>
        <Link to="/guestbook">
          <Streetsign>Guestbook</Streetsign>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="featured-buildings" element={<Featured/>}/>
        <Route path="interior" element={<Interior/>}/>
        <Route path="design-elements" element={<DesignElements/>}/>
        <Route path="guestbook" element={<Guestbook/>}/>
        {/*Todo: 404*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
