import React from 'react';

export interface FacadeProps {
  houseWidth: number;
  houseHeight: number;
  roofHeight: number;
  baseHeight: number;
  facadeColor: number;
}

export default function Facade({ houseWidth, houseHeight, roofHeight, baseHeight, facadeColor }: FacadeProps) {
  const shingleWidth = 12;
  const shingleHeight = 6;

  const brickWidth = 8;
  const brickHeight = 3;

  const broadFacadeTopWidth = 76;
  const broadFacadeTopHeight = 10;
  const narrowFacadeTopWidth = 48;
  const narrowFacadeTopHeight = 10;

  const brickSeparatorHeight = 2;

  const stuccoPattern = facadeColor === 1 || facadeColor === 2 ? 'rauputzPuttern' : 'stuccoPattern';

  const patterns = (
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

      <pattern id="rauputzPuttern" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="3" r="0.4" className="raufaser"/>
        <circle cx="12" cy="4.4" r="0.3" className="raufaser"/>
        <circle cx="3" cy="8" r="0.5" className="raufaser"/>
        <circle cx="10" cy="10" r="0.35" className="raufaser"/>
        <circle cx="14" cy="13" r="0.45" className="raufaser"/>
        <circle cx="6" cy="14" r="0.3" className="raufaser"/>
        <circle cx="1" cy="12" r="0.4" className="raufaser"/>
        <circle cx="9" cy="5" r="0.35" className="raufaser"/>
      </pattern>

      <pattern
        id="brickPattern"
        width={6 * brickWidth}
        height={6 * brickHeight}
        patternUnits="userSpaceOnUse"
      >
        {[
          [0, 1, 2, 0, 2, 1],
          [2, 0, 1, 2, 1, 0],
          [1, 1, 0, 1, 0, 2],
          [0, 2, 1, 0, 1, 2],
          [1, 0, 2, 1, 2, 0],
          [2, 1, 0, 2, 0, 1],
        ].map((row, i) =>
          row.map((brickType, j) => (
            <rect
              key={`${i}-${j}`}
              width={brickWidth}
              height={brickHeight}
              x={j * brickWidth}
              y={i * brickHeight}
              className={`brick brick-${brickType}`}
            />
          )),
        )}
      </pattern>
    </defs>
  );

  return (
    <>
      {patterns}

      <rect
        fill="url(#shinglePattern)"
        width={houseWidth}
        height={roofHeight}
      />

      <rect
        className="facade"
        width={houseWidth}
        height={houseHeight - roofHeight - baseHeight}
        y={roofHeight}
      />
      <rect
        fill={`url(#${stuccoPattern})`}
        width={houseWidth}
        height={houseHeight - roofHeight - baseHeight}
        y={roofHeight}
      />
      <rect
        fill="url(#brickPattern)"
        width={houseWidth}
        height={brickSeparatorHeight}
        y={roofHeight - brickSeparatorHeight}
      />

      <rect
        className="facade"
        width={broadFacadeTopWidth}
        height={broadFacadeTopHeight}
        x={(houseWidth - broadFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight}
      />
      <rect
        fill={`url(#${stuccoPattern})`}
        width={broadFacadeTopWidth}
        height={broadFacadeTopHeight}
        x={(houseWidth - broadFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight}
      />
      <rect
        fill="url(#brickPattern)"
        width={broadFacadeTopWidth}
        height={brickSeparatorHeight}
        x={(houseWidth - broadFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight - brickSeparatorHeight}
      />

      <rect
        className="facade"
        width={narrowFacadeTopWidth}
        height={narrowFacadeTopHeight}
        x={(houseWidth - narrowFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight}
      />
      <rect
        fill={`url(#${stuccoPattern})`}
        width={narrowFacadeTopWidth}
        height={narrowFacadeTopHeight}
        x={(houseWidth - narrowFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight}
      />
      <rect
        fill="url(#brickPattern)"
        width={narrowFacadeTopWidth}
        height={brickSeparatorHeight}
        x={(houseWidth - narrowFacadeTopWidth) / 2}
        y={roofHeight - broadFacadeTopHeight - narrowFacadeTopHeight - brickSeparatorHeight}
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
