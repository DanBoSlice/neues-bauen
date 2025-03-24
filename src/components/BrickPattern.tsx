import React from 'react';

export interface BrickPatternProps {
  brickWidth: number;
  brickHeight: number;
}

export default function BrickPattern({ brickWidth, brickHeight }: BrickPatternProps) {
  return (
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
  );
}
