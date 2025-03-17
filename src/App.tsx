import React from 'react';
import './App.css';
import Streetsign from './Streetsign';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Featured from './Featured/Featured';

function App() {
  return (
    <BrowserRouter>
      <div className="menu">
        <Link to="/">
          <Streetsign>Homepage</Streetsign>
        </Link>
        <Link to="/featured">
          <Streetsign>Featured Buildings</Streetsign>
        </Link>
        <Link to="/">
          <Streetsign>Interior Design</Streetsign>
        </Link>
        <Link to="/">
          <Streetsign>Design Elements</Streetsign>
        </Link>
        <Link to="/">
          <Streetsign>Guestbook</Streetsign>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="featured" element={<Featured/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
