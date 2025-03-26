import { Link } from 'react-router-dom';
import GuestbookEntry from './GuestbookEntry/GuestbookEntry';
import React, { useEffect, useRef } from 'react';
import Masonry from 'react-responsive-masonry';
import './Guestbook.css';
import GuestbookHousePatterns from './GuestbookHouse/GuestbookHousePatterns';
import { useGuestbook } from './GuestbookContext';

export default function Guestbook() {
  const { entries, loading, error, fetchEntries } = useGuestbook();
  const hasFetched = useRef(false);

  useEffect(() => {
    // To prevent it being called twice in React dev mode
    if (!hasFetched.current) {
      fetchEntries();
      hasFetched.current = true;
    }
  }, []);

  const hasPublished = false;

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

      {loading && 'Loading entries ...'}
      {error && `Couldn't load guestbook entries. Please try again later.`}

      <GuestbookHousePatterns/>

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
