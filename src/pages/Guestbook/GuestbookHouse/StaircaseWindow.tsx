import React from 'react';

export interface StaircaseWindowProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

export default function StaircaseWindow({ width, height, x, y }: StaircaseWindowProps) {
  const bars = 20;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        className="window"
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
          />
        ))}
    </g>
  );
}
