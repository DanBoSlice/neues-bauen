import React from 'react';
import './GuestbookEntry.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import Streetsign from '../../Streetsign';

export default function GuestbookEntry() {
  return (
    <div className="entry">
      <GuestbookHouse
        base={1}
        facade={1}
      />

      <div className="message">
        Very nice website!
      </div>

      <div className="author">
        <Streetsign>danbos.de</Streetsign>
      </div>
    </div>
  );
}
