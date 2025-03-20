import React from 'react';
import './GuestbookEntry.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import Streetsign from '../../Streetsign';
import DoorbellSign from '../../DoorbellSign';

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
        <DoorbellSign>Daniel</DoorbellSign>
      </div>
    </div>
  );
}
