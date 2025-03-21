import React from 'react';
import './GuestbookHouse.css';
import './styles/colors.css';
import './styles/bases.css';
import './styles/doors.css';
import './styles/facades.css';
import './styles/roofs.css';
import './styles/windows.css';

export interface GuestbookHouseProps {
  accentColor: number;
  base: number;
  facade: number;
}

export default function GuestbookHouse(props: GuestbookHouseProps) {
  const classes = [
    'accent-color-' + props.accentColor,
    'base-' + props.base,
    'facade-' + props.facade,
  ].join(' ');

  const houseWidth = 260;
  const houseHeight = 360;

  const doorWidth = 40;
  const doorHeight = 70;

  const staircaseWidth = 28;
  const staircaseHeight = 180;
  const staircaseWindowBars = 20;
  const staircaseY = 84;

  const stories = [270, 205, 140, 75];
  const smallBaseHeight = 28;
  const bigBaseHeight = 95;
  const windowBars = 3;

  const windowBigWidth = 30;
  const windowSmallWidth = 24;
  const windowHeight = 32;

  const outerWindowMarginX = 14;
  const innerWindowMarginX = 63;

  const roofHeight = 55;

  return (
    <div className="house">
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg"
           viewBox={`0 0 ${houseWidth} ${houseHeight}`}
           width={houseWidth}
           height={houseHeight}
           className={classes}>
        <defs>
          <symbol id="window-big" overflow="visible">
            <rect
              className="window-frame"
              width={windowBigWidth}
              height={windowHeight}
            />
            <rect
              className="window"
              width={windowBigWidth}
              height={windowHeight}
            />
            <path
              d={`M${windowBigWidth / 2},0 L${windowBigWidth / 2},${windowHeight}`}
              className="window-center-bar"
            />
            {[...Array(windowBars)]
              .map((_, i) => (i + 1) * windowHeight / (windowBars + 1))
              .map((y) => (
                <path
                  key={y}
                  d={`M0,${y} L${windowBigWidth},${y}`}
                  className="window-cross-bar"
                />
              ))}
          </symbol>

          <symbol id="window-small" overflow="visible">
            <rect
              className="window-frame"
              width={windowSmallWidth}
              height={windowHeight}
            />
            <rect
              className="window"
              width={windowSmallWidth}
              height={windowHeight}
            />
            <path
              d={`M${windowSmallWidth / 2},0 L${windowSmallWidth / 2},${windowHeight}`}
              className="window-center-bar"
            />
            {[...Array(windowBars)]
              .map((_, i) => (i + 1) * windowHeight / (windowBars + 1))
              .map((y) => (
                <path
                  key={y}
                  d={`M0,${y} L${windowSmallWidth},${y}`}
                  className="window-cross-bar"
                />
              ))}
          </symbol>

          <symbol id="staircase" overflow="visible">
            <rect
              className="window"
              width={staircaseWidth}
              height={staircaseHeight}
            />
            {[...Array(staircaseWindowBars)]
              .map((_, i) => (i + 1) * staircaseHeight / (staircaseWindowBars + 1))
              .map((y) => (
                <path
                  key={y}
                  d={`M0,${y} L${staircaseWidth},${y}`}
                  className="window-cross-bar"
                />
              ))}
          </symbol>
        </defs>

        <rect
          className="facade"
          x="0"
          y="0"
          width={houseWidth}
          height={houseHeight}
        />

        <rect
          className="small-base"
          x="0"
          y={houseHeight - smallBaseHeight}
          width={houseWidth}
          height={smallBaseHeight}
        />

        <rect
          className="large-base"
          x="0"
          y={houseHeight - bigBaseHeight}
          width={houseWidth}
          height={bigBaseHeight}
        />

        <rect
          className="roof"
          x="0"
          y="0"
          width={houseWidth}
          height={roofHeight}
        />

        {stories.map(y => (
          // accentColor has to be part of the key to force a rerender of the windows when the accent color changes.
          // Otherwise, Safari doesn't update the window styles if the accentColor changes.
          <g className="story" transform={`translate(0, ${y})`} key={y + props.accentColor}>
            <use href="#window-big" x={outerWindowMarginX}/>
            <use href="#window-small" x={innerWindowMarginX}/>

            <use href="#window-small" x={houseWidth - windowSmallWidth - innerWindowMarginX}/>
            <use href="#window-big" x={houseWidth - windowBigWidth - outerWindowMarginX}/>
          </g>
        ))}

        <use
          href="#staircase"
          x={(houseWidth - staircaseWidth) / 2}
          y={staircaseY}
        />

        <rect
          className="door"
          x={(houseWidth - doorWidth) / 2}
          y={houseHeight - doorHeight}
          width={doorWidth}
          height={doorHeight}
        />
      </svg>
    </div>
  );
}
