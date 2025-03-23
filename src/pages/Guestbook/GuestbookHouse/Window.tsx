import React from 'react';

export interface WindowProps {
  width: number;
  height: number;
  bars: number;
  x: number;
  showBorder?: boolean;
  blindsClosed?: number;
}

export default function Window({ width, height, bars, x, showBorder = true, blindsClosed }: WindowProps) {
  return (
    <>
      <defs>
        <pattern id="blindsPattern" width="1" height="3" patternUnits="userSpaceOnUse">
          <rect width="1" height="3" className="blinds"/>
          <line x1="0" y1="3" x2="1" y2="2" className="blinds-separator"/>
        </pattern>
      </defs>

      <g transform={`translate(${x}, 0)`}>
        {showBorder && (
          <rect
            className="window-frame"
            width={width}
            height={height}
          />
        )}

        <rect
          className="window"
          width={width}
          height={height}
        />

        <path
          d={`M${width / 2},0 L${width / 2},${height}`}
          className="window-center-bar"
        />

        {[...Array(bars)]
          .map((_, i) => (i + 1) * height / (bars + 1))
          .map((y) => (
            <path
              key={y}
              d={`M0,${y} L${width},${y}`}
              className="window-cross-bar"
            />
          ))}

        {blindsClosed && (
          <rect
            fill="url(#blindsPattern)"
            width={width + 2}
            height={blindsClosed * height}
            x={-1}
            y={-1}
          ></rect>
        )}
      </g>
    </>
  );
}
