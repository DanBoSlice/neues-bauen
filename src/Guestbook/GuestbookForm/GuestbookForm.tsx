import React, { useState } from 'react';
import './GuestbookForm.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import { Link } from 'react-router-dom';

export default function GuestbookForm() {
  const [facade, setFacade] = useState(1);

  return (
    <div className="wrapper">
      <h2>Build your own 1920s house</h2>

      <div className="form-content">
        <GuestbookHouse
          facade={facade}
        />

        <div className="form">
          <div>
            <h3>Facade</h3>

            <div className="options">
              <div className="facade-1 option" onClick={() => setFacade(1)}></div>
              <div className="facade-2 option" onClick={() => setFacade(2)}></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <textarea></textarea>

        <button>
          Submit your house
        </button>

        <Link to="/guestbook">
          Cancel
        </Link>
      </div>
    </div>
  );
}
