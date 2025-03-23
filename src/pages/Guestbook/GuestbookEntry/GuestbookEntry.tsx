import React from 'react';
import './GuestbookEntry.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import Stamp from '../../../components/Stamp';
import { GuestbookEntryDto } from '@api/dtos/guestbook-entry.dto';

export interface GuestbookEntryProps {
  entry: GuestbookEntryDto;
}

export default function GuestbookEntry({ entry }: GuestbookEntryProps) {
  return (
    <div className="entry">
      <Stamp>
        <GuestbookHouse
          facadeStyle={entry.houseStyle.facadeStyle}
          facadeColor={entry.houseStyle.facadeColor}
          accentColor={entry.houseStyle.accentColor}
        />
      </Stamp>

      <div className="message">
        <p>
          {entry.message}
        </p>

        <div className="author" title={entry.author}>
          {entry.author}
        </div>
      </div>
    </div>
  );
}
