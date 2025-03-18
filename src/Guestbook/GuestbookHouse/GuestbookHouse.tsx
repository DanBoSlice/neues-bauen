import React from 'react';
import './GuestbookHouse.css';
import './facades.css';
import { ReactComponent as Svg } from '../guestbook.svg';

export interface GuestbookHouseProps {
  facade: number;
}

export default function GuestbookHouse(props: GuestbookHouseProps) {
  const classes = [
    'facade-' + props.facade,
  ].join(' ');

  return (
    <div className="house">
      <Svg className={classes}/>
    </div>
  );
}
