import React from 'react';
import './styles/staircase-window.css';

export interface StaircaseWindowProps {
  houseWidth: number;
}

export default function StaircaseWindow1({ houseWidth }: StaircaseWindowProps) {
  const staircaseWidth = 23;
  const staircaseHeight = 210;
  const staircaseY = 54;
  const bars = 20;
  const brickBorder = 4;

  const x = (houseWidth - staircaseWidth) / 2;

  return (
    <g transform={`translate(${x}, ${staircaseY})`}>
      <rect
        fill="url(#brickPattern)"
        width={staircaseWidth + 2 * brickBorder}
        height={staircaseHeight + 2 * brickBorder}
        x={-brickBorder}
        y={-brickBorder}
      />

      <rect
        className="staircase-window"
        width={staircaseWidth}
        height={staircaseHeight}
      />

      {[...Array(bars)]
        .map((_, i) => (i + 1) * staircaseHeight / (bars + 1))
        .map((y) => (
          <path
            key={y}
            d={`M0,${y} L${staircaseWidth},${y}`}
            className="window-cross-bar"
            vectorEffect="non-scaling-stroke"
          />
        ))}
    </g>
  );
}
