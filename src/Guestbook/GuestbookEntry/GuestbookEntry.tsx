import React from 'react';
import './GuestbookEntry.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import Stamp from '../../Stamp';

export interface GuestbookEntryProps {
  message: string;
  author: string;
}

export default function GuestbookEntry({ message, author }: GuestbookEntryProps) {
  return (
    <div className="entry">
      <Stamp>
        <GuestbookHouse
          base={1}
          facade={1}
        />
      </Stamp>

      <div className="message">
        <p>
          {message}
        </p>

        <div className="author" title={author}>
          {author}
        </div>
      </div>
    </div>
  );
}
