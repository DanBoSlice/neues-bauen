import React from 'react';
import './History.css';
import WindowImage from '../../components/WindowImage';
import image from '../Home/image.jpeg';
import Gallery from '../../components/Gallery';

export default function History() {
  return (
    <>
      <h1>History</h1>

      <p>Before, Gründerzeit</p>

      <Gallery>
        <WindowImage>
          <img src={image} alt=""/>
        </WindowImage>
        <WindowImage>
          <img src={image} alt=""/>
        </WindowImage>
      </Gallery>

      <p>After, Plattenbau</p>
    </>
  );
}
