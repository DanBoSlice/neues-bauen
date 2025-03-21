import { Link } from 'react-router-dom';
import GuestbookEntry from './GuestbookEntry/GuestbookEntry';
import React, { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import './Guestbook.css';
import { GuestbookEntryDto } from './api/guestbook-entry.dto';

export default function Guestbook() {
  const [hasPublished] = useState(false);

  const entries: GuestbookEntryDto[] = [
    {
      id: '1',
      author: 'Daniel',
      message: 'Great website! Lorem ipsum dolor sit amet. Lorem ipsum. Dolor sit amet consetetur.',
    },
    {
      id: '2',
      author: 'Danbos',
      message: 'Nice website!',
    },
    {
      id: '3',
      author: 'Dan Bao',
      message: 'Great website!',
    },
    {
      id: '4',
      author: 'Daniel',
      message: 'Great website! Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <div className="guestbook">
      <h1>Guestbook</h1>

      {!hasPublished && (
        <div className="intro">
          <p>
            I hope you enjoyed your visit! If you did, feel free to build your own 1920s house
            and leave a message in the guestbook.
          </p>

          <Link to="form">
            <button>Sign guestbook</button>
          </Link>
        </div>
      )}

      {hasPublished && (
        <div className="intro">
          Your house and message were added to the guestbook!
        </div>
      )}

      <hr/>

      <Masonry columnsCount={2} gutter={'1em'}>
        {entries.map((entry) => (
          <GuestbookEntry
            key={entry.id}
            entry={entry}
          />
        ))}
      </Masonry>
    </div>
  )
};
