import React from 'react';
import DoorStyle2 from './doors/DoorStyle2';
import DoorStyle0 from './doors/DoorStyle0';

export interface DoorProps {
  width: number;
  height: number;
  x: number;
  y: number;
  doorStyle: number;
}

export default function Door({ width, height, x, y, doorStyle }: DoorProps) {
  const doorWidth = 26;
  const doorHeight = 52;

  return (
    <g transform={`translate(${x}, ${y})`} className={'door-style-' + doorStyle}>
      <rect
        className="door-frame"
        width={width}
        height={height}
      />

      <g transform={`translate(0, ${height - doorHeight})`}>
        <rect
          className="door"
          width={doorWidth}
          height={doorHeight}
          x={(width - doorWidth) / 2}
        />

        {doorStyle === 0 && <DoorStyle0 width={width}/>}
        {doorStyle === 2 && <DoorStyle2 width={width}/>}
      </g>
    </g>
  );
}
