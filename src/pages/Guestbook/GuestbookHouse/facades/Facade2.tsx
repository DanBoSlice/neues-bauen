import React from 'react';
import Window from '../Window';

export interface Facade2Props {
  houseWidth: number;
  houseHeight: number;
}

export default function Facade2({ houseWidth, houseHeight }: Facade2Props) {
  const topFloorHeight = 50;
  const baseHeight = 30;

  const topFloorWindowCount = 5;
  const topFloorWindowWidth = 16;
  const topFloorWindowHeight = 10;

  const staircaseWindowCount = 4;
  const staircaseWindowWidth = 20;
  const staircaseWindowHeight = 8;
  const staircaseWindowDistance = 64;
  const staircaseY = 70;

  const doorFrameWidth = 42;
  const doorFrameHeight = 64;

  const topFloor = (
    <>
      <rect
        className="accent-floor"
        width={houseWidth}
        height={topFloorHeight}
      ></rect>
      <rect
        className="facade-pattern"
        width={houseWidth}
        height={topFloorHeight}
      ></rect>
      <path
        className="brick-lining"
        d={`M0,1 L${houseWidth},1`}
      />
      <path
        className="roof-lining"
        d={`M0,${topFloorHeight} L${houseWidth},${topFloorHeight}`}
      />
    </>
  );

  const spaceBetweenTopFloorWindows = houseWidth / topFloorWindowCount;
  const topFloorWindows = (
    <g transform={`translate(0, ${(topFloorHeight - topFloorWindowHeight) / 2})`}>
      {[...Array(topFloorWindowCount)].map((_, i) => {
        return (
          <polygon
            key={i}
            className="window"
            points={`${topFloorWindowWidth / 2},0 ${topFloorWindowWidth},${topFloorWindowHeight}, 0,${topFloorWindowHeight}`}
            transform={`translate(${(i + 0.5) * spaceBetweenTopFloorWindows - (topFloorWindowWidth / 2)}, 0)`}
          />
        );
      })}
    </g>
  );

  const facade = (
    <>
      <rect
        className="facade"
        width={houseWidth}
        height={houseHeight - topFloorHeight - baseHeight}
        y={topFloorHeight}
      />
      <rect
        className="facade-pattern"
        width={houseWidth}
        height={houseHeight - topFloorHeight - baseHeight}
        y={topFloorHeight}
      />
    </>
  );

  const staircaseWindows = (
    <g transform={`translate(${(houseWidth - staircaseWindowWidth) / 2}, ${staircaseY})`}>
      {[...Array(staircaseWindowCount)].map((_, i) => (
        <Window
          width={staircaseWindowWidth}
          height={staircaseWindowHeight}
          bars={0}
          y={i * staircaseWindowDistance}
        />
      ))}
    </g>
  );

  const base = (
    <rect
      className="base"
      y={houseHeight - baseHeight}
      width={houseWidth}
      height={baseHeight}
    />
  );

  const doorFrame = (
    <rect
      className="base"
      x={(houseWidth - doorFrameWidth) / 2}
      y={houseHeight - doorFrameHeight}
      width={doorFrameWidth}
      height={doorFrameHeight - baseHeight}
    />
  );

  return (
    <>
      {topFloor}
      {topFloorWindows}

      {facade}
      {staircaseWindows}

      {base}
      {doorFrame}
    </>
  );
}
