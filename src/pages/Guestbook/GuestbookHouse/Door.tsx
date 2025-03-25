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

  const style3WindowWidth = 13;
  const style3WindowHeight = 38;
  const style3WindowCrosses = 4;

  const crossHeight = style3WindowHeight / style3WindowCrosses;
  const style3 = (
    <g transform={`translate(${(width - style3WindowWidth) / 2}, ${(doorHeight - style3WindowHeight) / 2})`}>
      <rect
        className="door-window"
        width={style3WindowWidth}
        height={style3WindowHeight}
      />

      {[...Array(style3WindowCrosses)].map((_, i) => (
        <g transform={`translate(0, ${i * crossHeight})`}>
          <path
            className="door-window-bar"
            d={`M0,0 L${style3WindowWidth},${crossHeight}`}
          />
          <path
            className="door-window-bar"
            d={`M0,${crossHeight} L${style3WindowWidth},0`}
          />
        </g>
      ))}
    </g>
  );

  return (
    <g transform={`translate(${x}, ${y})`} className={'door-style-' + doorStyle}>
    <g transform={`translate(0, ${height - doorHeight})`}>
        <rect
          className="door"
          width={doorWidth}
          height={doorHeight}
          x={(width - doorWidth) / 2}
        />

        {doorStyle === 0 && <DoorStyle0 width={width}/>}
        {doorStyle === 2 && <DoorStyle2 width={width}/>}
        {doorStyle === 3 && style3}
      </g>
    </g>
  );
}
