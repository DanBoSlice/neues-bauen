import React, { useEffect, useState } from 'react';
import './GuestbookForm.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import { Link } from 'react-router-dom';
import Stamp from '../../../components/Stamp';
import { CreateEntryDto } from '../api/create-entry.dto';

export default function GuestbookForm() {
  const [accentColor, setAccentColor] = useState(1);
  const [base, setBase] = useState(0);
  const [facade, setFacade] = useState(0);

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [messageError, setMessageError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const messageMaxLength = 255;
  const nameMaxLength = 30;

  const accentColors = 2;
  const bases = 2;
  const facades = 4;

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const selectRandom = () => {
    const oldState = `${accentColor}${base}${facade}`;

    const newAccountColor = randomIntFromInterval(0, accentColors - 1);
    setAccentColor(newAccountColor);

    const newBase = randomIntFromInterval(0, bases - 1);
    setBase(newBase);

    const newFacade = randomIntFromInterval(0, facades - 1);
    setFacade(newFacade);

    const newState = `${newAccountColor}${newBase}${newFacade}`;
    if (oldState === newState) {
      selectRandom();
    }
  };

  useEffect(() => {
    selectRandom();
  }, []);

  const handleMessageUpdate = (message: string) => {
    setMessage(message.substring(0, messageMaxLength));
    setMessageError('');
  };

  const handleNameUpdate = (name: string) => {
    setName(name.substring(0, nameMaxLength));
    setNameError('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;

    if (message.trim().length < 5) {
      setMessageError('Message must be at least 5 characters long.');
      isValid = false;
    } else {
      setMessageError('');
    }

    if (name.trim().length < 3) {
      setNameError('Name must be at least 3 characters long.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (isValid) {
      setLoading(true);

      const dto: CreateEntryDto = {
        name,
        message,
        facade,
      };

      console.log(dto);
    }
  };

  return (
    <div>
      <div className="intro">
        <h1>Sign the Guestbook</h1>
      </div>

      <div className="form-content">
        <Stamp>
          <GuestbookHouse
            accentColor={accentColor}
            base={base}
            facade={facade}
          />
        </Stamp>

        <div className="options-form">
          <button onClick={selectRandom} disabled={isLoading}>
            Random
          </button>

          <div>
            <h3>Accent Color</h3>

            <div className="options">
              {[...Array(facades)].map((_, i) => (
                <div
                  key={i}
                  className={`accent-color-${i} option`}
                  onClick={() => !isLoading && setAccentColor(i)}
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
                  onClick={() => !isLoading && setFacade(i)}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3>Base</h3>

            <div className="options">
              {[...Array(bases)].map((_, i) => (
                <div
                  key={i}
                  className={`facade-${i} option`}
                  onClick={() => !isLoading && setBase(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <div className="message-input">
          <div className="label">
            <label htmlFor="guestbook-message">Your message</label>
          </div>
          <textarea
            id="guestbook-message"
            className="message"
            rows={3}
            maxLength={messageMaxLength}
            value={message}
            disabled={isLoading}
            onChange={(e) => handleMessageUpdate(e.target.value)}
          ></textarea>
          {messageError && <div className="validation-message">{messageError}</div>}
        </div>

        <div>
          <div className="label">
            <label htmlFor="guestbook-name">Your name</label>
          </div>
          <input
            type="text"
            id="guestbook-name"
            className="author"
            autoComplete="off"
            maxLength={nameMaxLength}
            value={name}
            disabled={isLoading}
            onChange={(e) => handleNameUpdate(e.target.value)}
          />
          {nameError && <div className="validation-message">{nameError}</div>}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading ...' : 'Submit'}
        </button>

        <p className="cancel">
          <Link to="/guestbook">
            Cancel
          </Link>
        </p>
      </form>
    </div>
  );
}
