import React from 'react';
import './DesignElements.css';
import { Link } from 'react-router-dom';

export default function DesignElements() {
  return (
    <>
      <h1>Design Elements</h1>

      <p>
        Have a look at this stereotypical multi-family house that might have been
        constructed in 1920s Germany.
        Click on one of the highlighted design elements to learn more about it and see exmples.
      </p>

      <Link to="roofs" className="detail-link">Roofs</Link>
    </>
  );
}
