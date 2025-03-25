import React from 'react';

export interface WindowProps {
  width: number;
  height: number;
  bars: number;
  x?: number;
  y?: number;
  showBorder?: boolean;
  blindsClosed?: number;
}

export default function Window({ width, height, bars, x, y, showBorder = true, blindsClosed }: WindowProps) {
  return (
    <g transform={`translate(${x ?? 0}, ${y ?? 0})`}>
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
          className="blinds"
          width={width + 2}
          height={blindsClosed * height}
          x={-1}
          y={-1}
        ></rect>
      )}
    </g>
  );
}
