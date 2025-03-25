import React from 'react';
import './styles/staircase-window.css';
import Window from './Window';

export interface StaircaseWindowProps {
  height: number;
  houseWidth: number;
  roofHeight: number;
}

export default function StaircaseWindow0({ height, houseWidth, roofHeight }: StaircaseWindowProps) {
  const windowWidth = 20;
  const windowHeight = 8;
  const windows = 4;
  const windowY = 15;
  const windowOffset = 64;

  const staircaseWidth = 41;

  const x= (houseWidth - staircaseWidth) / 2;

  return (
    <g transform={`translate(${x}, ${roofHeight})`}>
      <path
        d={`M0,0 L0,${height}`}
        className="brick-lining"
      />
      <path
        d={`M${staircaseWidth},0 L${staircaseWidth},${height}`}
        className="brick-lining"
      />

      {[...Array(windows)].map((_, i) => (
        <Window
          width={windowWidth}
          height={windowHeight}
          bars={0}
          x={(staircaseWidth - windowWidth) / 2}
          y={windowY + i * windowOffset}
        />
      ))}
    </g>
  );
}
