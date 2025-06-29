import React from 'react';
import './DesignElements.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DesignElements from './DesignElements';
import Roofs from './Roofs/Roofs';
import Facades from './Facades/Facades';
import Windows from './Windows/Windows';
import Ornamentation from './Ornamentation/Ornamentation';
import Interiors from './Interiors/Interiors';
import Materials from './Materials/Materials';
import UrbanPlanning from './UrbanPlanning/UrbanPlanning';
import Doors from './Doors/Doors';

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
        <Route path="doors" element={<Doors/>}/>
        <Route path="interiors" element={<Interiors/>}/>
        <Route path="materials" element={<Materials/>}/>
        <Route path="urban-planning" element={<UrbanPlanning/>}/>
        <Route path="*" element={<Navigate to="/design-elements"/>}/>
      </Routes>
    </>
  );
}
