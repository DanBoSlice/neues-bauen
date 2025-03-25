import React from 'react';
import './GuestbookHouse.css';
import './styles/colors.css';
import './styles/bases.css';
import './styles/doors.css';
import './styles/facades.css';
import './styles/patterns.css';
import './styles/roofs.css';
import './styles/staircase-window.css';
import './styles/windows.css';
import Door from './Door';
import Facade0 from './facades/Facade0';
import Facade1 from './facades/Facade1';
import Facade2 from './facades/Facade2';
import GuestbookHouseWindows from './GuestbookHouseWindows';

export interface GuestbookHouseProps {
  facadeStyle: number;
  facadeColor: number;
  accentColor: number;
  doorStyle: number;
}

export default function GuestbookHouse(props: GuestbookHouseProps) {
  const classes = [
    'house',
    'facade-style-' + props.facadeStyle,
    'facade-color-' + props.facadeColor,
    'accent-color-' + props.accentColor,
  ].join(' ');

  const houseWidth = 260;
  const houseHeight = 360;

  const doorWidth = 46;
  const doorHeight = 61;

  const getFacade = () => {
    switch (props.facadeStyle) {
      case 0: return (
        <Facade0
          houseWidth={houseWidth}
          houseHeight={houseHeight}
        />
      );
      case 1: return (
        <Facade1
          houseWidth={houseWidth}
          houseHeight={houseHeight}
        />
      );
      case 2: return (
        <Facade2
          houseWidth={houseWidth}
          houseHeight={houseHeight}
        />
      );
    }
  }

  return (
    <svg
      version="1.2" xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${houseWidth} ${houseHeight}`}
      width={houseWidth}
      height={houseHeight}
      className={classes}
    >
      {getFacade()}

      <GuestbookHouseWindows
        houseWidth={houseWidth}
        facadeStyle={props.facadeStyle}
        accentColor={props.accentColor}
      />

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
