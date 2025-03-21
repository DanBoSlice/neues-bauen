import { Link } from 'react-router-dom';
import GuestbookEntry from './GuestbookEntry/GuestbookEntry';
import React from 'react';
import Masonry from 'react-responsive-masonry';
import './Guestbook.css';

export default function Guestbook() {
  return (
    <div className="guestbook">
      <h1>Guestbook</h1>
      <div className="intro">
        <p>
          I hope you enjoyed your visit! If you did, feel free to build your own 1920s house
          and leave a message in the guestbook.
        </p>

        <Link to="form">
          <button>Sign guestbook</button>
        </Link>
      </div>

      <hr />

      <Masonry columnsCount={2} gutter={'1em'}>
        <GuestbookEntry
          message="1Great website! Lorem ipsum dolor sit amet. Lorem ipsum. Dolor sit amet consetetur."
          author="Daniel"
        />
        <GuestbookEntry
          message="2Great website!"
          author="Daniel"
        />
        <GuestbookEntry
          message="3Great website!"
          author="Daniel"
        />
        <GuestbookEntry
          message="4Great website! Lorem ipsum dolor sit amet."
          author="Daniel"
        />
      </Masonry>
    </div>
  )
};
