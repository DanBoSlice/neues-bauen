import React from 'react';
import './GuestbookHouse.css';
import './styles/colors.css';
import './styles/bases.css';
import './styles/doors.css';
import './styles/facades.css';
import './styles/roofs.css';
import './styles/windows.css';
import Window from './Window';
import Facade from './Facade';
import StaircaseWindow from './StaircaseWindow';
import Door from './Door';

export interface GuestbookHouseProps {
  accentColor: number;
  base: number;
  facade: number;
}

export default function GuestbookHouse(props: GuestbookHouseProps) {
  const classes = [
    'house',
    'accent-color-' + props.accentColor,
    'base-' + props.base,
    'facade-' + props.facade,
  ].join(' ');

  const houseWidth = 260;
  const houseHeight = 360;

  const doorWidth = 40;
  const doorHeight = 70;

  const staircaseWidth = 24;
  const staircaseHeight = 204;
  const staircaseY = 60;

  const stories = [270, 205, 140, 75];
  const smallBaseHeight = 21;
  const bigBaseHeight = 95;
  const windowBars = 3;

  const windowBigWidth = 30;
  const windowSmallWidth = 24;
  const windowHeight = 32;

  const outerWindowMarginX = 14;
  const innerWindowMarginX = 63;

  const roofHeight = 55;

  const blinds = [
    [.65, 0, 0, 0],
    [0, 0, .5, .25],
    [0, 0, 0, 0],
    [.4, 0, .7, 0],
  ];

  return (
    <svg
      version="1.2" xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${houseWidth} ${houseHeight}`}
      width={houseWidth}
      height={houseHeight}
      className={classes}
    >
      <Facade
        houseWidth={houseWidth}
        houseHeight={houseHeight}
        roofHeight={roofHeight}
        baseHeight={props.base === 1 ? smallBaseHeight : bigBaseHeight}
      />

      {stories.map((y, story) => {
        const showBorder = props.base !== 0 || story !== 0;

        return (
          // accentColor has to be part of the key to force a rerender of the windows when the accent color changes.
          // Otherwise, Safari doesn't update the window styles if the accentColor changes.
          <g className="story" transform={`translate(0, ${y})`} key={y + props.accentColor}>
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
      })}

      <StaircaseWindow
        width={staircaseWidth}
        height={staircaseHeight}
        x={(houseWidth - staircaseWidth) / 2}
        y={staircaseY}
      />

      <Door
        width={doorWidth}
        height={doorHeight}
        x={(houseWidth - doorWidth) / 2}
        y={houseHeight - doorHeight}
      />
    </svg>
  );
}
