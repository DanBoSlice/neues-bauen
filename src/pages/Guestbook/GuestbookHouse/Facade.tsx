import React from 'react';

export interface FacadeProps {
  houseWidth: number;
  houseHeight: number;
  roofHeight: number;
  baseHeight: number;
}

export default function Facade({ houseWidth, houseHeight, roofHeight, baseHeight }: FacadeProps) {
  const shingleWidth = 12;
  const shingleHeight = 6;

  const brickWidth = 8;
  const brickHeight = 3;
  const brickRows = 3;

  return (
    <>
      <defs>
        <pattern
          id="shinglePattern"
          width={shingleWidth}
          height={shingleHeight}
          patternUnits="userSpaceOnUse"
        >
          <rect width={shingleWidth} height={shingleHeight} className="shingle"/>
          <rect x={-shingleWidth / 2} y={shingleHeight / 2} width={shingleWidth} height={shingleHeight}
                className="shingle"/>
        </pattern>

        <pattern id="stuccoPattern" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M2,2 l8,6 M6,10 l8,6 M10,4 l6,8" className="stucco stucco-0"/>
          <path d="M14,2 l4,10 M2,14 l10,4" className="stucco stucco-1"/>
        </pattern>

        <pattern
          id="brickPattern"
          width={3 * brickWidth}
          height={brickRows * brickHeight}
          patternUnits="userSpaceOnUse"
        >
          {[...Array(brickRows)].map((_, i) => {
            return (
              <g key={i}>
                <rect
                  width={brickWidth}
                  height={brickHeight}
                  x={0}
                  y={i * brickHeight}
                  className={'brick brick-' + (i % 3)}
                />
                <rect
                  width={brickWidth}
                  height={brickHeight}
                  x={brickWidth}
                  y={i * brickHeight}
                  className={'brick brick-' + ((i + 1) % 3)}
                />
                <rect
                  width={brickWidth}
                  height={brickHeight}
                  x={2 * brickWidth}
                  y={i * brickHeight}
                  className={'brick brick-' + ((i + 2) % 3)}
                />
              </g>
            );
          })}
        </pattern>
      </defs>

      <rect
        fill="url(#shinglePattern)"
        x="0"
        y="0"
        width={houseWidth}
        height={roofHeight}
      />

      <rect
        className="facade"
        width={houseWidth}
        height={houseHeight - roofHeight}
        y={roofHeight}
      />

      <rect
        fill="url(#stuccoPattern)"
        width={houseWidth}
        height={houseHeight}
        y={roofHeight}
      />

      <rect
        fill="url(#brickPattern)"
        x={0}
        y={houseHeight - baseHeight}
        width={houseWidth}
        height={baseHeight}
      />
    </>
  );
}
