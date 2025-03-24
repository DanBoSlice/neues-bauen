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
import StaircaseWindows from './StaircaseWindow0';
import Door from './Door';
import StaircaseWindow1 from './StaircaseWindow1';

export interface GuestbookHouseProps {
  facadeStyle: number;
  facadeColor: number;
  accentColor: number;
  doorStyle: number;
}

export default function GuestbookHouse(props: GuestbookHouseProps) {
  const classes = [
    'house',
    'accent-color-' + props.accentColor,
    'facade-color-' + props.facadeColor,
  ].join(' ');

  const houseWidth = 260;
  const houseHeight = 360;

  const doorWidth = 40;
  const doorHeight = 61;

  const stories = [270, 205, 140, 75];
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
        facadeStyle={props.facadeStyle}
        facadeColor={props.facadeColor}
      />

      {stories.map((y, story) => {
        const showBorder = !(props.facadeStyle === 1 && story === 0);

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

      {props.facadeStyle === 0 && (
        <StaircaseWindows
          height={houseHeight - roofHeight - doorHeight}
          houseWidth={houseWidth}
          roofHeight={roofHeight}
        />
      )}
      {props.facadeStyle === 1 && (
        <StaircaseWindow1 houseWidth={houseWidth}/>
      )}

      <Door
        width={doorWidth}
        height={doorHeight}
        x={(houseWidth - doorWidth) / 2}
        y={houseHeight - doorHeight}
        doorStyle={props.doorStyle}
      />
    </svg>
  );
}
