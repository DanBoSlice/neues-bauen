import React from 'react';

export interface Facade2Props {
  houseWidth: number;
  houseHeight: number;
}

export default function Facade2({ houseWidth, houseHeight }: Facade2Props) {
  const topFloorHeight = 55;
  const baseHeight = 21;

  const topFloor = (
    <>
      <rect
        width={houseWidth}
        height={topFloorHeight}
      ></rect>
    </>
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
      {topFloor}

      {facade}

      {base}
    </>
  );
}
