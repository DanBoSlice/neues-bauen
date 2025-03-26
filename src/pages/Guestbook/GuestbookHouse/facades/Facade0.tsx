import React from 'react';

export interface Facade0Props {
  houseWidth: number;
  houseHeight: number;
}

export default function Facade0({ houseWidth, houseHeight }: Facade0Props) {
  const roofHeight = 55;
  const staircaseWidth = 39;
  const triangleHeight = 18;
  const baseHeight = 21;
  const doorHeight = 61;

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

  const trianglePoints = `${staircaseWidth / 2},0 ${staircaseWidth},${triangleHeight} 0,${triangleHeight}`;
  const roofTriangle = (
    <g transform={`translate(${(houseWidth - staircaseWidth) / 2},${roofHeight - triangleHeight})`}>
      <polygon
        className="facade"
        points={trianglePoints}
      />
      <polygon
        className="facade-pattern"
        points={trianglePoints}
      />
      <path
        className="brick-lining"
        d={`M0,${triangleHeight} L${staircaseWidth / 2},0 L${staircaseWidth},${triangleHeight}`}
      />
    </g>
  );

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

  const staircaseLiningWidth = staircaseWidth - 2; // to compensate for 4px stroke which is drawn center on the edge
  const staircaseLiningHeight = houseHeight - roofHeight - doorHeight;
  const staircaseLining = (
    <g transform={`translate(${(houseWidth - staircaseLiningWidth) / 2}, ${roofHeight})`}>
      <path
        d={`M0,0 L0,${staircaseLiningHeight}`}
        className="brick-lining"
      />
      <path
        d={`M${staircaseLiningWidth},0 L${staircaseLiningWidth},${staircaseLiningHeight}`}
        className="brick-lining"
      />
    </g>
  );

  const windowRadius = 9;
  const windows = 4;
  const windowY = 20;
  const windowOffset = 64;

  const staircaseWindows = (
    <g transform={`translate(${houseWidth / 2}, ${roofHeight + windowY})`}>
      {[...Array(windows)].map((_, i) => (
        <g key={i} transform={`translate(0,${i * windowOffset})`}>
          <circle
            key={i}
            className="window"
            r={windowRadius}
          />
          <path
            className="window-cross-bar"
            d={`M0,${-windowRadius} L0,${windowRadius}`}
          />
          <path
            className="window-cross-bar"
            d={`M${-windowRadius},0 L${windowRadius},0`}
          />
        </g>
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

  const doorFrameWidth = staircaseWidth + 3; // to compensate for the stroke
  const doorFrame = (
    <rect
      className="base"
      width={doorFrameWidth}
      height={doorHeight - baseHeight}
      x={(houseWidth - doorFrameWidth) / 2}
      y={houseHeight - doorHeight}
    />
  );

  return (
    <>
      {roof}
      {roofTriangle}

      {facade}
      {staircaseLining}
      {staircaseWindows}
      {doorFrame}

      {base}
    </>
  );
}
