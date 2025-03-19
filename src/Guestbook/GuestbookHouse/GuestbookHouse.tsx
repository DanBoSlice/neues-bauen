import React from 'react';
import './GuestbookHouse.css';
import './bases.css';
import './facades.css';
import './windows.css';
import { ReactComponent as Svg } from './house.svg';

export interface GuestbookHouseProps {
  base: number;
  facade: number;
}

export default function GuestbookHouse(props: GuestbookHouseProps) {
  const classes = [
    'base-' + props.base,
    'facade-' + props.facade,
  ].join(' ');

  return (
    <div className="house">
      <Svg className={classes}/>
    </div>
  );
}
