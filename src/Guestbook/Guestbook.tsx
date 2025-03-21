import React from 'react';
import './Guestbook.css';
import GuestbookEntry from './GuestbookEntry/GuestbookEntry';
import { Link, Route, Routes } from 'react-router-dom';
import GuestbookForm from './GuestbookForm/GuestbookForm';

export default function Guestbook() {
  return (
    <>
      <Routes>
        <Route path="/" element={(
          <>
            <h1>Guestbook</h1>
            <div className="intro">
              <p>
                I hope you enjoyed your visit! If you did, feel free to build your own 1920s house
                and leave a message for the guestbook.
              </p>

              <Link to="form">Sign guestbook</Link>
            </div>

            <hr />

            <div className="entries">
              <GuestbookEntry
                message="Great website!"
                author="Daniel"
              />
            </div>
          </>
        )}/>
        <Route path="form" element={<GuestbookForm/>}/>
      </Routes>
    </>
  );
}
