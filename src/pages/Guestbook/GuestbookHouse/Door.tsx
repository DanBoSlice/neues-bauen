import React from 'react';

export interface DoorProps {
  width: number;
  height: number;
  x: number;
  y: number;
  facadeColor: number;
}

export default function Door({ width, height, x, y, facadeColor }: DoorProps) {
  const windowWidth = 10;
  const windowHeight = 3;
  const windowDistance = 4;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        className="door"
        width={width}
        height={height}
      />

      {facadeColor === 2 && (
        <g transform={`translate(0, 14)`}>
          <rect
            className="door-window"
            width={windowWidth}
            height={windowHeight}
            x={(width - windowWidth) / 2}
            y={0}
          />

          <rect
            className="door-window"
            width={windowWidth}
            height={windowHeight}
            x={(width - windowWidth) / 2}
            y={windowHeight + windowDistance}
          />

          <rect
            className="door-window"
            width={windowWidth}
            height={windowHeight}
            x={(width - windowWidth) / 2}
            y={2 * (windowHeight + windowDistance)}
          />
        </g>
      )}
    </g>
  );
}
