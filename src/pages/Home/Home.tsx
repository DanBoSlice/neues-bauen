import React from 'react';
import './Home.css';
import WindowImage from '../../components/WindowImage';
import image from './image.jpeg';
import { Link } from 'react-router-dom';
import BuildersPlaque from '../../components/BuildersPlaque';
import Gallery from '../../components/Gallery';

export default function Home() {
  return (
    <>
      <div className="intro">
        <p>
          <strong>
            Welcome to the Portal of &raquo;Neues Bauen&laquo;,
            the modernist architecture movement in 1920s Germany!
          </strong>
        </p>

        <p>
          Neues Bauen is German for &raquo;New Building&laquo; or &raquo;New Constructing&laquo;
          and describes the new methods and principles in Weimar Republic architecture.
        </p>
        <p>
          Moving away from the ornate styles of the past, this era focused on functionality and simplicity, and improving
          living conditions through well-designed spaces.
        </p>
        <p>
          What sets these buildings apart from later modern architecture is the attention to subtle details.
          They capture the spirit of the time—optimistic and forward-thinking.
          Here, we’ll explore these distinct design elements of 1920s architecture.
        </p>
      </div>

      <div className="home-images">
        <Gallery>
          <WindowImage src="https://pika-production.s3.us-east-2.amazonaws.com/qzfahprph6yiea02uuzxxzugvhcy?response-content-disposition=inline%3B%20filename%3D%22IMG_0424.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_0424.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5AMA2RE2FOFBT4WP%2F20250321%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T203852Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2befd16bf2b7574915bf1c4670468f8fdd2f59bda358b51f2c0825330c6b6bf1"/>
          <WindowImage src="https://pika-production.s3.us-east-2.amazonaws.com/1vevlv1p8aatph31u4if4nd0ganj?response-content-disposition=inline%3B%20filename%3D%22IMG_0442.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_0442.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5AMA2RE2FOFBT4WP%2F20250321%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T203852Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=37d8e6162071dfab91e8898fc40edf98948333ab1661b02e06dc81367ed244d4"/>
          <WindowImage src="https://pika-production.s3.us-east-2.amazonaws.com/qzfahprph6yiea02uuzxxzugvhcy?response-content-disposition=inline%3B%20filename%3D%22IMG_0424.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_0424.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5AMA2RE2FOFBT4WP%2F20250321%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T203852Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2befd16bf2b7574915bf1c4670468f8fdd2f59bda358b51f2c0825330c6b6bf1"/>
        </Gallery>
      </div>

      <hr />

      <div className="home-end">
        <div>
          <p>
            I started this little old-school niche website to share my interest and fascination about
            the architecture of these buildings.
            More content will follow soon!
          </p>

          <p>
            Have fun exploring the site and learning about Neues Bauen, and make sure to
            add your own house to the <Link to="/guestbook">guestbook</Link>!
          </p>
        </div>

        <a href="https://danbos.de" target="_blank" rel="noreferrer">
          <BuildersPlaque/>
        </a>
      </div>
    </>
  );
}
