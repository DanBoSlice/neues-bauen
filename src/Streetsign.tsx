import './Streetsign.css';
import { PropsWithChildren } from 'react';

export default function Streetsign({ children }: PropsWithChildren) {
  return (
    <div className="street-sign">
      <div className="border">
        {children}

        <div className="corner"></div>
        <div className="corner"></div>
        <div className="corner"></div>
        <div className="corner"></div>
      </div>
    </div>
  );
}
