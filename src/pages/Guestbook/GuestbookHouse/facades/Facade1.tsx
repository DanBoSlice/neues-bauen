import React from 'react';

export interface Facade1Props {
  houseWidth: number;
  houseHeight: number;
}

export default function Facade1({ houseWidth, houseHeight }: Facade1Props) {
  const roofHeight = 55;
  const broadFacadeTopWidth = 76;
  const broadFacadeTopHeight = 10;
  const narrowFacadeTopWidth = 48;
  const narrowFacadeTopHeight = 10;
  const baseHeight = 95;

  const roof = (
    <>
      <rect
        className="roof"
        width={houseWidth}
        height={roofHeight}
      />
      <path
        className="roof-lining"
        d={`M0,${roofHeight} L${houseWidth},${roofHeight}`}
      />
    </>
  );

  const facadeTopper = (
    <>
      <rect
        className="facade"
        width={broadFacadeTopWidth}
        height={broadFacadeTopHeight}
        x={(houseWidth - broadFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight}
      />
      <rect
        className="facade-pattern"
        width={broadFacadeTopWidth}
        height={broadFacadeTopHeight}
        x={(houseWidth - broadFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight}
      />
      <path
        className="roof-lining"
        d={`M${(houseWidth - broadFacadeTopWidth) / 2},${roofHeight - broadFacadeTopHeight} L${(houseWidth + broadFacadeTopWidth) / 2},${roofHeight - broadFacadeTopHeight}`}
      />

      <rect
        className="facade"
        width={narrowFacadeTopWidth}
        height={narrowFacadeTopHeight}
        x={(houseWidth - narrowFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight}
      />
      <rect
        className="facade-pattern"
        width={narrowFacadeTopWidth}
        height={narrowFacadeTopHeight}
        x={(houseWidth - narrowFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight}
      />
      <path
        className="roof-lining"
        d={`M${(houseWidth - narrowFacadeTopWidth) / 2},${roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight} L${(houseWidth + narrowFacadeTopWidth) / 2},${roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight}`}
      />
    </>
  )

  const facade = (
    <>
      <rect
        className="facade"
        width={houseWidth}
        height={houseHeight - roofHeight - baseHeight}
        y={roofHeight}
      />
      <rect
        className="facade-pattern"
        width={houseWidth}
        height={houseHeight - roofHeight - baseHeight}
        y={roofHeight}
      />
    </>
  );

  const staircaseWidth = 23;
  const staircaseHeight = 210;
  const staircaseY = 54;
  const bars = 20;
  const brickBorder = 2;

  const x = (houseWidth - staircaseWidth) / 2;
  const staircaseWindow = (
    <g transform={`translate(${x}, ${staircaseY})`}>
      <rect
        className="brick-lining"
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

  const base = (
    <rect
      className="base"
      y={houseHeight - baseHeight}
      width={houseWidth}
      height={baseHeight}
    />
  );

  return (
    <>
      {roof}

      {facadeTopper}
      {facade}
      {staircaseWindow}

      {base}
    </>
  );
}
