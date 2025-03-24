import React from 'react';

export default function DoorStyle0({ width }: { width: number }) {
  const windowWidth = 14;
  const windowHeight = 20;
  const windowY = 7;

  const protrudingWidth = 14;
  const protrudingHeight = 10;
  const protrudingY = 34;

  const bars = 3;

  return (
    <g>
      <rect
        className="door-window"
        width={windowWidth}
        height={windowHeight}
        x={(width - windowWidth) / 2}
        y={windowY}
      />

      {[...Array(bars)].map((_, i) => {
        const startX = (width - windowWidth) / 2 + 1;
        const endX = (width + windowWidth) / 2 - 1;

        const barOffset = windowHeight / (bars + 1);
        const y = windowY + (i + 1) * barOffset;

        return (
          <path
            key={i}
            d={`M${startX},${y} L${endX},${y}`}
            className="door-window-bar"
          />
        );
      })}

      <rect
        className="door-protruding"
        width={protrudingWidth}
        height={protrudingHeight}
        x={(width - protrudingWidth) / 2}
        y={protrudingY}
      />
    </g>
  );
}
