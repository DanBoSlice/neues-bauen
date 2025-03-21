import React from 'react';
import './GuestbookHouse.css';
import './styles/colors.css';
import './styles/bases.css';
import './styles/doors.css';
import './styles/facades.css';
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

  const houseWidth = 273;
  const houseHeight = 350;

  const doorWidth = 42;
  const doorHeight = 70;

  const stories = [260, 190, 120, 50];
  const smallBaseHeight = 28;
  const bigBaseHeight = 95;
  const windowBars = 3;

  const windowBigWidth = 32;
  const windowSmallWidth = 25;
  const windowHeight = 40;

  const outerWindowMarginX = 14;
  const innerWindowMarginX = 63;

  const roofHeight = 30;

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

        <rect
          className="door"
          x={(houseWidth - doorWidth) / 2}
          y={houseHeight - doorHeight}
          width={doorWidth}
          height={doorHeight}
        />

        {stories.map(y => (
          <g className="story" transform={`translate(0, ${y})`} key={y}>
            <use href="#window-big" x={outerWindowMarginX}/>
            <use href="#window-small" x={innerWindowMarginX}/>

            <use href="#window-small" x={houseWidth - windowSmallWidth - innerWindowMarginX}/>
            <use href="#window-big" x={houseWidth - windowBigWidth - outerWindowMarginX}/>
          </g>
        ))}
      </svg>
    </div>
  );
}
