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
            <p>Build your own 1920s house and leave a message!</p>

            <Link to="form">Sign guestbook</Link>

            <br/>
            <br/>

            <GuestbookEntry/>
          </>
        )}/>
        <Route path="form" element={<GuestbookForm/>}/>
      </Routes>
    </>
  );
}
