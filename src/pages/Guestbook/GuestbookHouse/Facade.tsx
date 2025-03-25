import React from 'react';
import BrickPattern from '../../../components/BrickPattern';

export interface FacadeProps {
  houseWidth: number;
  houseHeight: number;
  roofHeight: number;
  facadeStyle: number;
  facadeColor: number;
}

export default function Facade({ houseWidth, houseHeight, roofHeight, facadeStyle, facadeColor }: FacadeProps) {

  const broadFacadeTopWidth = 76;
  const broadFacadeTopHeight = 10;
  const narrowFacadeTopWidth = 48;
  const narrowFacadeTopHeight = 10;

  const bigBaseHeight = 95;
  const smallBaseHeight = 21;
  const baseHeight = facadeStyle === 1 ? bigBaseHeight : smallBaseHeight;

  const brickSeparatorHeight = 2;

  const stuccoPattern = [1, 2, 4].includes(facadeColor) ? 'rauputzPuttern' : 'stuccoPattern';
  const triangleWidth = 36;
  const triangleHeight = 18;

  return (
    <>
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

      {facadeStyle === 0 && (
        <g transform={`translate(${(houseWidth - triangleWidth) / 2},${roofHeight - triangleHeight})`}>
          <polygon
            className="facade"
            points={`${triangleWidth / 2},0 ${triangleWidth},${triangleHeight} 0,${triangleHeight}`}
          />
          <polygon
            fill={`url(#${stuccoPattern})`}
            points={`${triangleWidth / 2},0 ${triangleWidth},${triangleHeight} 0,${triangleHeight}`}
          />
          <path
            fill="transparent"
            stroke={`url(#brickPattern)`}
            strokeWidth={4}
            d={`M0,${triangleHeight} L${triangleWidth / 2},0 L${triangleWidth},${triangleHeight}`}
          />
        </g>
      )}

      {facadeStyle === 1 && (
        <>
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
        </>
      )}

      <rect
        className="base"
        y={houseHeight - baseHeight}
        width={houseWidth}
        height={baseHeight}
      />
    </>
  );
}
