import React from 'react';
import Gallery from '../../../components/Gallery';
import WindowImage from '../../../components/WindowImage';

export default function CityPlanning() {
  return (
    <div>
      <h2>City Planning</h2>

      <p>
        Zeilenbauweise
      </p>

      <Gallery>
        <WindowImage>
          <img src="https://pika-production.s3.us-east-2.amazonaws.com/xm02oakq0maaonh6j02mh6h15luo?response-content-disposition=inline%3B%20filename%3D%22Neues%20Projekt-5.jpg%22%3B%20filename%2A%3DUTF-8%27%27Neues%2520Projekt-5.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5AMA2RE2FOFBT4WP%2F20250321%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210134Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=aa7e5edec3eface5ac65a1885b8c0031516ac772d3e847f7420c44d309f6a608" alt=""/>
        </WindowImage>
      </Gallery>

      <p>
        Licht und Luft
      </p>
    </div>
  );
}
