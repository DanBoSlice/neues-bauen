import React from 'react';
import './styles/staircase-window.css';

export interface StaircaseWindowProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

export default function StaircaseWindow({ width, height, x, y }: StaircaseWindowProps) {
  const bars = 20;

  const brickBorder = 4;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        fill="url(#brickPattern)"
        width={width + 2 * brickBorder}
        height={height + 2 * brickBorder}
        x={-brickBorder}
        y={-brickBorder}
      />

      <rect
        className="staircase-window"
        width={width}
        height={height}
      />

      {[...Array(bars)]
        .map((_, i) => (i + 1) * height / (bars + 1))
        .map((y) => (
          <path
            key={y}
            d={`M0,${y} L${width},${y}`}
            className="window-cross-bar"
            vectorEffect="non-scaling-stroke"
          />
        ))}
    </g>
  );
}
