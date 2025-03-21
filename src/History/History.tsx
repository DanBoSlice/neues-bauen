import React from 'react';
import './History.css';
import WindowImage from '../WindowImage';
import image from '../Home/image.jpeg';
import Gallery from '../Gallery';

export default function History() {
  return (
    <>
      <h1>History</h1>

      <p>Before, Gründerzeit</p>

      <Gallery>
        <WindowImage src={image}/>
        <WindowImage src={image}/>
      </Gallery>

      <p>After, Plattenbau</p>
    </>
  );
}
