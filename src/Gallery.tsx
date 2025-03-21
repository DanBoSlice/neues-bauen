import { PropsWithChildren } from 'react';
import './Gallery.css';

export default function Gallery({ children }: PropsWithChildren) {
  return (
    <div className="gallery">
      {children}
    </div>
  );
}
