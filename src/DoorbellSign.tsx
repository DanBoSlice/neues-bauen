import './DoorbellSign.css';
import { PropsWithChildren } from 'react';

export default function DoorbellSign({ children }: PropsWithChildren) {
  return (
    <div className="doorbell-sign">
      {children}
    </div>
  );
}
