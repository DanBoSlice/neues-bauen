import React, { useState } from 'react';
import './GuestbookForm.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import { Link } from 'react-router-dom';
import Stamp from '../../Stamp';

export default function GuestbookForm() {
  const [base, setBase] = useState(2);
  const [facade, setFacade] = useState(1);

  return (
    <div className="wrapper">
      <h1>Sign the Guestbook</h1>

      <div className="form-content">
        <Stamp>
          <GuestbookHouse
            base={base}
            facade={facade}
          />
        </Stamp>

        <div className="options-form">
          <div>
            <h3>Facade</h3>

            <div className="options">
              <div className="facade-1 option" onClick={() => setFacade(1)}></div>
              <div className="facade-2 option" onClick={() => setFacade(2)}></div>
            </div>
          </div>

          <div>
            <h3>Base</h3>

            <div className="options">
              <div className="facade-1 option" onClick={() => setBase(1)}></div>
              <div className="facade-2 option" onClick={() => setBase(2)}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="input-form">
        <div>
          <label htmlFor="guestbook-name">Your name</label>
          <input type="text" id="guestbook-name"/>
        </div>

        <div>
          <label htmlFor="guestbook-message">Your message</label>
          <textarea id="guestbook-message"></textarea>
        </div>

        <button>
          Submit your house and message
        </button>

        <Link to="/guestbook">
          Cancel
        </Link>
      </div>
    </div>
  );
}
