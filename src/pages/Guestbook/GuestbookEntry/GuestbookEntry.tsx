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
          accentColor={0}
          base={1}
          facade={1}
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
