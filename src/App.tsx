import React from 'react';
import './App.css';
import Streetsign from './components/Streetsign';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import GuestbookRoutes from './pages/Guestbook/GuestbookRoutes';
import ScrollToTop from './ScrollToTop';
import History from './pages/History/History';
import DesignElementsRoutes from './pages/DesignElements/DesignElementsRoutes';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to; // Check if this link is active

  return (
    <Link to={to}>
      <Streetsign animated={isActive}>{children}</Streetsign>
    </Link>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="container">
        <div className="roof-header">
          <div className="roof-edge"></div>
          <div className="roof-front"></div>
        </div>

        <div className="roof-header">
          <div className="roof-edge"></div>
          <div className="roof-front">
            <Link to="/" className="logo">
              Portal des Neuen Bauens
            </Link>

            <div className="menu">
              <NavLink to="/">
                Home Str.
              </NavLink>
              <NavLink to="/history">
                History
              </NavLink>
              <NavLink to="/design-elements">
                Design Elements
              </NavLink>
              <NavLink to="/guestbook">
                Guestbook
              </NavLink>
            </div>
          </div>
        </div>

        <div className="roof-header">
          <div className="roof-edge"></div>
          <div className="roof-front"></div>
        </div>

        <div className="roof-header">
          <div className="roof-edge"></div>
          <div className="roof-front">
            <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="design-elements/*" element={<DesignElementsRoutes/>}/>
                <Route path="guestbook/*" element={<GuestbookRoutes/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
              </Routes>
            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
