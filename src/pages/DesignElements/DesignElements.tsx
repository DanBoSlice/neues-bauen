import React from 'react';
import './DesignElements.css';
import ExampleHouse from './ExampleHouse';
import WindowImage from '../../components/WindowImage';

export default function DesignElements() {
  return (
    <>
      <div className="intro">
        <h1>Design Elements</h1>

        <p>
          Have a look at this house in Friedrich-Dittes-Straße in Leipzig. It was finished in 1930 and shows many of the
          characteristics of the time.
        </p>

        <p>
          Click on one of the highlighted design elements to learn more about it.
          {/*More design elements will be added soon!*/}
        </p>
      </div>

      <div className="example-house">
        <WindowImage>
          <ExampleHouse/>
        </WindowImage>
      </div>
    </>
  );
}
