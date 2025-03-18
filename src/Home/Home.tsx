import React from 'react';
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="intro">
        <h1>Portal des Neues Bauens</h1>

        <p>
          Welcome to the Portal of <i>Neues Bauen</i> -- German for "New Building", the modernist architecture
          movement around the 1920s in Germany!
        </p>
      </div>

      <div className="windows"></div>
    </>
  );
}
