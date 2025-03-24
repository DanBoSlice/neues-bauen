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
  const shingleWidth = 12;
  const shingleHeight = 6;

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
        <circle cx="4" cy="3" r="1" className="raufaser"/>
        <circle cx="12" cy="4.4" r="1" className="raufaser"/>
        <circle cx="3" cy="8" r="1" className="raufaser"/>
        <circle cx="10" cy="10" r="1" className="raufaser"/>
        <circle cx="14" cy="13" r="1" className="raufaser"/>
        <circle cx="6" cy="14" r="1" className="raufaser"/>
        <circle cx="1" cy="12" r="1" className="raufaser"/>
        <circle cx="9" cy="5" r="1" className="raufaser"/>
      </pattern>

      <BrickPattern brickWidth={8} brickHeight={3}/>


      <filter id="roughStone" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="4" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.4"/>
      </filter>

      <pattern id="stonePattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <rect width="20" height="20" fill="#b2aeab"/>

        <circle cx="3" cy="5" r="0.5" fill="#868686"/>
        <circle cx="8" cy="12" r="0.4" fill="#7c7c7c"/>
        <circle cx="15" cy="7" r="0.3" fill="#7f7f7f"/>
        <circle cx="17" cy="16" r="0.5" fill="#828282"/>
        <circle cx="6" cy="17" r="0.3" fill="#898989"/>

        <path d="M2,15 Q10,10 18,15" stroke="#7d7d7d" strokeWidth="0.5" fill="none"/>
        <path d="M5,2 Q10,5 15,2" stroke="#868686" strokeWidth="0.4" fill="none"/>
        <path d="M3,10 Q10,12 17,10" stroke="#7a7a7a" strokeWidth="0.3" fill="none"/>

        <rect width="20" height="20" fill="none" filter="url(#stoneNoise)"/>
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
