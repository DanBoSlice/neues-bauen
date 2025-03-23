import React from 'react';
import './App.css';
import Streetsign from './components/Streetsign';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import GuestbookRoutes from './pages/Guestbook/GuestbookRoutes';
import ScrollToTop from './ScrollToTop';
import History from './pages/History/History';
import DesignElementsRoutes from './pages/DesignElements/DesignElementsRoutes';
import { Analytics } from '@vercel/analytics/react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = (to !== '/' && location.pathname.startsWith(to)) || to === location.pathname;

  return (
    <Link to={to}>
      <Streetsign animated={isActive}>{children}</Streetsign>
    </Link>
  );
};

function App() {
  if (false) {
    return (
      <div style={{ color: 'white', textAlign: 'center' }}>
        Coming soon
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Analytics/>

      <div className="app">
        <div className="container">
          <div className="facade roof-top"></div>

          <div className="facade logo-roof">
            <Link to="/" className="logo">
              Portal des Neuen Bauens
            </Link>

            <div className="menu">
              <NavLink to="/">
                Home Str.
              </NavLink>
              {/*<NavLink to="/history">*/}
              {/*  History*/}
              {/*</NavLink>*/}
              <NavLink to="/design-elements">
                Design Elements
              </NavLink>
              <NavLink to="/guestbook">
                Guestbook
              </NavLink>
            </div>
          </div>

          <div className="facade roof-separator"></div>

          <div className="facade content">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="history" element={<History/>}/>
              <Route path="design-elements/*" element={<DesignElementsRoutes/>}/>
              <Route path="guestbook/*" element={<GuestbookRoutes/>}/>
              <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
          </div>

          <div className="footer"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
