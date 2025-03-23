import React from 'react';
import './DesignElements.css';
import { Link } from 'react-router-dom';
import ExampleHouse from './ExampleHouse';

export default function DesignElements() {
  return (
    <>
      <div className="intro">
        <h1>Design Elements</h1>

        <p>
          Have a look at this stereotypical multi-family house that might have been
          constructed in 1920s Germany.
          Click on one of the highlighted design elements to learn more about it.
        </p>

        <p>
          More design elements will be added soon!
        </p>
      </div>

      <div className="details">
        <div className="example-house">
          <ExampleHouse/>
        </div>

        <p className="detail-labels">
          <Link to="/design-elements/roofs" className="detail-link">Roofs</Link>
          <Link to="/design-elements/facades" className="detail-link">Facades</Link>
          <Link to="/design-elements/windows" className="detail-link">Windows</Link>
          <Link to="/design-elements/ornamentation" className="detail-link">Ornamentation</Link>
          <Link to="/design-elements/interiors" className="detail-link">Interiors</Link>
          <Link to="/design-elements/materials" className="detail-link">Materials</Link>
          <Link to="/design-elements/city-planning" className="detail-link">City Planning</Link>
        </p>
      </div>
    </>
  );
}
