import BrickPattern from '../../../components/BrickPattern';
import React from 'react';

export default function GuestbookHousePatterns() {
  const shingleWidth = 12;
  const shingleHeight = 6;

  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" width={0} height={0} style={{ position: 'absolute' }}>
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

        <pattern id="blindsPattern" width="1" height="3" patternUnits="userSpaceOnUse">
          <rect width="1" height="3" className="blinds"/>
          <line x1="0" y1="3" x2="1" y2="2" className="blinds-separator"/>
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
    </svg>
  );
}
