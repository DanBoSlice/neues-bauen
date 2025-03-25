import { Link } from 'react-router-dom';
import GuestbookEntry from './GuestbookEntry/GuestbookEntry';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import './Guestbook.css';
import { GuestbookEntryDto } from '@api/dtos/guestbook-entry.dto';
import GuestbookHousePatterns from './GuestbookHouse/GuestbookHousePatterns';

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntryDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasPublished] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch('/api/getEntries');
        if (!response.ok) {
          throw new Error(`Error fetching guestbook entries: ${response.statusText}`);
        }
        const data: GuestbookEntryDto[] = await response.json();
        setEntries(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

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
