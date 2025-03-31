import './WindowImage.css';
import React, { PropsWithChildren } from 'react';

export interface WindowImageProps extends PropsWithChildren{
  label?: string;
  source?: React.ReactNode;
}

export default function WindowImage({ children, label, source }: WindowImageProps) {
  return (
    <div>
      <div className="window-frame">
        <div className="window-image">
          {children}
        </div>
      </div>

      {(label || source) && (
        <p className="image-label">
          {label}
          {source && (<div className="source">{source}</div>)}
        </p>
      )}
    </div>
  );
}
