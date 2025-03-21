import React from 'react';
import './DesignElements.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import DesignElements from './DesignElements';
import Roofs from './subpages/Roofs';
import Facades from './Facades/Facades';
import Windows from './subpages/Windows';
import Ornamentation from './subpages/Ornamentation';
import Interiors from './subpages/Interiors';
import Materials from './subpages/Materials';
import CityPlanning from './subpages/CityPlanning';

export default function DesignElementsRoutes() {
  const location = useLocation();
  const isSubpage = location.pathname !== '/design-elements';

  return (
    <>
      <DesignElements/>
      {isSubpage && <hr/>}
      <Routes>
        <Route path="roofs" element={<Roofs/>}/>
        <Route path="facades" element={<Facades/>}/>
        <Route path="windows" element={<Windows/>}/>
        <Route path="ornamentation" element={<Ornamentation/>}/>
        <Route path="interiors" element={<Interiors/>}/>
        <Route path="materials" element={<Materials/>}/>
        <Route path="city-planning" element={<CityPlanning/>}/>
      </Routes>
    </>
  );
}
