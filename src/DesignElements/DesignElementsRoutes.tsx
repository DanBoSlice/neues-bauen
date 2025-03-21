import React from 'react';
import './DesignElements.css';
import { Route, Routes } from 'react-router-dom';
import DesignElements from './DesignElements';
import Roofs from './Roofs';

export default function DesignElementsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DesignElements/>}/>
      <Route path="roofs" element={<Roofs/>}/>
    </Routes>
  );
}
