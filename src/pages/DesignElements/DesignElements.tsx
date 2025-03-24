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
          Have a look at this stereotypical multi-family house that might have been
          constructed in 1920s Germany.
          Click on one of the highlighted design elements to learn more about it.
        </p>

        <p>
          More design elements will be added soon!
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
