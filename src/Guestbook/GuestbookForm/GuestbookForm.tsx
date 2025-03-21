import React, { useEffect, useState } from 'react';
import './GuestbookForm.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import { Link } from 'react-router-dom';
import Stamp from '../../Stamp';

export default function GuestbookForm() {
  const [accentColor, setAccentColor] = useState(1);
  const [base, setBase] = useState(0);
  const [facade, setFacade] = useState(0);

  const accentColors = 2;
  const bases = 2;
  const facades = 2;

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const selectRandom = () => {
    setAccentColor(randomIntFromInterval(0, accentColors - 1));
    setBase(randomIntFromInterval(0, bases - 1));
    setFacade(randomIntFromInterval(0, facades - 1));
  };

  useEffect(() => {
    selectRandom();
  }, []);

  return (
    <div className="wrapper">
      <h1>Sign the Guestbook</h1>

      <div className="form-content">
        <Stamp>
          <GuestbookHouse
            accentColor={accentColor}
            base={base}
            facade={facade}
          />
        </Stamp>

        <div className="options-form">
          <button onClick={selectRandom}>Random</button>

          <div>
            <h3>Accent Color</h3>

            <div className="options">
              {[...Array(facades)].map((_, i) => (
                <div
                  key={i}
                  className={`accent-color-${i} option`}
                  onClick={() => setAccentColor(i)}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3>Facade</h3>

            <div className="options">
              {[...Array(facades)].map((_, i) => (
                <div
                  key={i}
                  className={`facade-${i} option`}
                  onClick={() => setFacade(i)}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3>Base</h3>

            <div className="options">
              {[...Array(facades)].map((_, i) => (
                <div
                  key={i}
                  className={`facade-${i} option`}
                  onClick={() => setBase(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="input-form">
        <div className="message-input">
          <div className="label">
            <label htmlFor="guestbook-message">Your message</label>
          </div>
          <textarea id="guestbook-message" className="message" rows={3}></textarea>
        </div>

        <div>
          <div className="label">
            <label htmlFor="guestbook-name">Your name</label>
          </div>
          <input type="text" id="guestbook-name" className="author" autoComplete="off"/>
        </div>

        <button>
          Submit
        </button>

        <Link to="/guestbook">
          Cancel
        </Link>
      </div>
    </div>
  );
}
