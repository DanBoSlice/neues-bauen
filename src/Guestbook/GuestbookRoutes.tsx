import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GuestbookForm from './GuestbookForm/GuestbookForm';
import Guestbook from './Guestbook';

export default function GuestbookRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Guestbook/>}/>
      <Route path="form" element={<GuestbookForm/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}
