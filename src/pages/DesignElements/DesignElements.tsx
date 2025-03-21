import React from 'react';
import './DesignElements.css';
import { Link } from 'react-router-dom';

export default function DesignElements() {
  return (
    <>
      <div className="intro">
        <h1>Design Elements</h1>

        <p>
          Have a look at this stereotypical multi-family house that might have been
          constructed in 1920s Germany.
          Click on one of the highlighted design elements to learn more about it and see exmples.
        </p>
      </div>

      <div className="details">
        <div className="example-house">
          House
        </div>

        <div className="detail-labels">
          <Link to="roofs" className="detail-link">Roofs</Link>
          <Link to="facades" className="detail-link">Facades</Link>
          <Link to="windows" className="detail-link">Windows</Link>
          <Link to="ornamentation" className="detail-link">Ornamentation</Link>
          <Link to="interiors" className="detail-link">Interiors</Link>
          <Link to="materials" className="detail-link">Materials</Link>
        </div>
      </div>
    </>
  );
}
