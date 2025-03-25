import Window from './Window';
import React from 'react';

export interface GuestbookHouseWindowProps {
  houseWidth: number;
  facadeStyle: number;
  accentColor: number;
}

export default function GuestbookHouseWindows({ houseWidth, facadeStyle, accentColor }: GuestbookHouseWindowProps) {
  const stories = [270, 205, 140, 75];
  const windowBars = 3;

  const windowBigWidth = 30;
  const windowSmallWidth = 24;
  const windowHeight = 32;

  const outerWindowMarginX = 14;
  const innerWindowMarginX = 63;

  const blinds = [
    [.65, 0, 0, 0],
    [0, 0, .5, .25],
    [0, 0, 0, 0],
    [.4, 0, .7, 0],
  ];

  const windows = stories.map((y, story) => {
    const showBorder = !(facadeStyle === 1 && story === 0);

    return (
      // accentColor has to be part of the key to force a rerender of the windows when the accent color changes.
      // Otherwise, Safari doesn't update the window styles if the accentColor changes.
      <g className="story" transform={`translate(0, ${y})`} key={y + accentColor}>
        <Window
          width={windowBigWidth}
          height={windowHeight}
          bars={windowBars}
          x={outerWindowMarginX}
          blindsClosed={blinds[story][0]}
          showBorder={showBorder}
        />

        <Window
          width={windowSmallWidth}
          height={windowHeight}
          bars={windowBars}
          x={innerWindowMarginX}
          blindsClosed={blinds[story][1]}
          showBorder={showBorder}
        />

        <Window
          width={windowSmallWidth}
          height={windowHeight}
          bars={windowBars}
          x={houseWidth - windowSmallWidth - innerWindowMarginX}
          blindsClosed={blinds[story][2]}
          showBorder={showBorder}
        />

        <Window
          width={windowBigWidth}
          height={windowHeight}
          bars={windowBars}
          x={houseWidth - windowBigWidth - outerWindowMarginX}
          blindsClosed={blinds[story][3]}
          showBorder={showBorder}
        />
      </g>
    );
  });

  return <>{windows}</>;
}
