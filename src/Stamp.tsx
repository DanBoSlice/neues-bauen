import { PropsWithChildren } from 'react';
import './Stamp.css';

export default function Stamp({ children }: PropsWithChildren) {
  return (
    <div className="stamp">
      <div className="stamp-inner">
        <div className="stamp-motif">
          {children}
        </div>
      </div>
    </div>
  );
}
