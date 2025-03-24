import React from 'react';

export default function DoorStyle2({ width }: { width: number }) {
  const windowWidth = 8;
  const windowHeight = 2;
  const windowDistance = 4;
  const windowsY = 10;

  return (
    <g transform={`translate(0, ${windowsY})`}>
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
  );
}
