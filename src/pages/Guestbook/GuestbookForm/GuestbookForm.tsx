import React, { useEffect, useState } from 'react';
import './GuestbookForm.css';
import GuestbookHouse from '../GuestbookHouse/GuestbookHouse';
import { Link, useNavigate } from 'react-router-dom';
import Stamp from '../../../components/Stamp';
import { CreateEntryDto } from '@api/dtos/create-entry.dto';
import GuestbookHousePatterns from '../GuestbookHouse/GuestbookHousePatterns';
import GuestbookFormOption from './GuestbookFormOption';

export default function GuestbookForm() {
  const [facadeStyle, setFacadeStyle] = useState(0);
  const [facadeColor, setFacadeColor] = useState(0);
  const [accentColor, setAccentColor] = useState(0);
  const [doorStyle, setDoorStyle] = useState(0);

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [messageError, setMessageError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const navigate = useNavigate()

  const messageMaxLength = 255;
  const nameMaxLength = 30;

  const facadeStyles = 3;
  const facadeColors = 5;
  const accentColors = 4;
  const doorStyles = 4;

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const selectRandom = () => {
    const oldState = `${facadeStyle}${facadeColor}${accentColor}`;

    const newFacadeStyle = randomIntFromInterval(0, facadeStyles - 1);
    setFacadeStyle(newFacadeStyle);

    const newFacadeColor = randomIntFromInterval(0, facadeColors - 1);
    setFacadeColor(newFacadeColor);

    const newAccentColor = randomIntFromInterval(0, accentColors - 1);
    setAccentColor(newAccentColor);

    const newDoorStyle = randomIntFromInterval(0, doorStyles - 1);
    setDoorStyle(newDoorStyle);

    const newState = `${newFacadeStyle}${newFacadeColor}${newAccentColor}${newDoorStyle}`;
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

  const handleSubmit = async (event: React.FormEvent) => {
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
      setApiError(false);

      try {
        const dto: CreateEntryDto = {
          name,
          message,
          houseStyle: {
            facadeStyle: facadeStyle,
            facadeColor: facadeColor,
            accentColor: accentColor,
            doorStyle: doorStyle,
          },
        };

        const response = await fetch('/api/createEntry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dto),
        });

        if (!response.ok) {
          throw new Error(`Failed to submit entry: ${response.statusText}`);
        }

        navigate('/guestbook');
      } catch (err) {
        setApiError(true);
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="intro">
        <h1>Sign the Guestbook</h1>
      </div>

      <div className="form-content">
        <Stamp>
          <GuestbookHousePatterns/>
          <GuestbookHouse
            accentColor={accentColor}
            facadeStyle={facadeStyle}
            facadeColor={facadeColor}
            doorStyle={doorStyle}
          />
        </Stamp>

        <div className="options-form">
          {/*<button onClick={selectRandom} disabled={isLoading}>*/}
          {/*  Random*/}
          {/*</button>*/}

          <div>
            <h3>Facade Style</h3>

            <div className="options">
              {[...Array(facadeStyles)].map((_, i) => (
                <GuestbookFormOption
                  key={i}
                  option="facade-style"
                  value={i}
                  isActive={facadeStyle === i}
                  disabled={isLoading}
                  onClick={() => setFacadeStyle(i)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3>Facade Color</h3>

            <div className="options">
              {[...Array(facadeColors)].map((_, i) => (
                <GuestbookFormOption
                  key={i}
                  option="facade-color"
                  value={i}
                  isActive={facadeColor === i}
                  disabled={isLoading}
                  onClick={() => setFacadeColor(i)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3>Accent Color</h3>

            <div className="options">
              {[...Array(accentColors)].map((_, i) => (
                <GuestbookFormOption
                  key={i}
                  option="accent-color"
                  value={i}
                  isActive={accentColor === i}
                  disabled={isLoading}
                  onClick={() => setAccentColor(i)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3>Door Style</h3>

            <div className="options">
              {[...Array(doorStyles)].map((_, i) => (
                <GuestbookFormOption
                  key={i}
                  option="door-style"
                  value={i}
                  isActive={doorStyle === i}
                  disabled={isLoading}
                  onClick={() => setDoorStyle(i)}
                />
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
            className="message message-input"
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
            className="author author-input"
            autoComplete="off"
            maxLength={nameMaxLength}
            value={name}
            disabled={isLoading}
            onChange={(e) => handleNameUpdate(e.target.value)}
          />
          {nameError && <div className="validation-message">{nameError}</div>}
        </div>

        {apiError && <div className="validation-message">Something went wrong. Please try again later.</div>}

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
