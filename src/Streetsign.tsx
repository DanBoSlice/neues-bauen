import './Streetsign.css';
import { PropsWithChildren } from 'react';

export interface StreetsignProps extends PropsWithChildren {
  animated?: boolean;
}

export default function Streetsign({ children, animated }: StreetsignProps) {
  return (
    <div className={'street-sign' + (animated ? ' animated' : '')}>
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
