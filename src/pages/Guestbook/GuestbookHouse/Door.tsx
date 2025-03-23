import React from 'react';

export interface DoorProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

export default function Door({ width, height, x, y }: DoorProps) {
  return (
    <rect
      className="door"
      width={width}
      height={height}
      x={x}
      y={y}
    />
  );
}
