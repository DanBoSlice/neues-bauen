import React from 'react';

export interface DoorProps {
  houseWidth: number;
  houseHeight: number;
  doorStyle: number;
}

export default function Door({ houseWidth, houseHeight, doorStyle }: DoorProps) {
  const doorWidth = 26;
  const doorHeight = 52;

  const DoorStyle0 = () => {
    const windowWidth = 14;
    const windowHeight = 20;
    const windowY = 7;

    const protrudingWidth = 14;
    const protrudingHeight = 10;
    const protrudingY = 34;

    const bars = 3;

    return (
      <>
        <rect
          className="door-window"
          width={windowWidth}
          height={windowHeight}
          x={(doorWidth - windowWidth) / 2}
          y={windowY}
        />

        {[...Array(bars)].map((_, i) => {
          const startX = (doorWidth - windowWidth) / 2 + 1;
          const endX = (doorWidth + windowWidth) / 2 - 1;

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
          x={(doorWidth - protrudingWidth) / 2}
          y={protrudingY}
        />
      </>
    );
  };

  const DoorStyle2 = () => {
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
          x={(doorWidth - windowWidth) / 2}
          y={0}
        />

        <rect
          className="door-window"
          width={windowWidth}
          height={windowHeight}
          x={(doorWidth - windowWidth) / 2}
          y={windowHeight + windowDistance}
        />

        <rect
          className="door-window"
          width={windowWidth}
          height={windowHeight}
          x={(doorWidth - windowWidth) / 2}
          y={2 * (windowHeight + windowDistance)}
        />
      </g>
    );
  };

  const DoorStyle3 = () => {
    const windowWidth = 13;
    const windowHeight = 38;
    const windowCrosses = 4;

    const crossHeight = windowHeight / windowCrosses;

    return (
      <g transform={`translate(${(doorWidth - windowWidth) / 2}, ${(doorHeight - windowHeight) / 2})`}>
        <rect
          className="door-window"
          width={windowWidth}
          height={windowHeight}
        />

        {[...Array(windowCrosses)].map((_, i) => (
          <g transform={`translate(0, ${i * crossHeight})`}>
            <path
              className="door-window-bar"
              d={`M0,0 L${windowWidth},${crossHeight}`}
            />
            <path
              className="door-window-bar"
              d={`M0,${crossHeight} L${windowWidth},0`}
            />
          </g>
        ))}
      </g>
    );
  };

  return (
    <g transform={`translate(${(houseWidth - doorWidth) / 2}, ${houseHeight - doorHeight})`} className={'door-style-' + doorStyle}>
      <rect
        className="door"
        width={doorWidth}
        height={doorHeight}
      />

      {doorStyle === 0 && <DoorStyle0/>}
      {doorStyle === 2 && <DoorStyle2/>}
      {doorStyle === 3 && <DoorStyle3/>}
    </g>
  );
}
