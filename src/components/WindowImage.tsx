import './WindowImage.css';
import { PropsWithChildren } from 'react';

export interface WindowImageProps extends PropsWithChildren{
  label?: string;
  source?: string;
}

export default function WindowImage({ children, label, source }: WindowImageProps) {
  // todo: randomly add flowers?

  return (
    <div>
      <div className="window-image">
        {children}

        {/*<div className="sprosse"></div>*/}
        {/*<div className="sprosse"></div>*/}
        {/*<div className="sprosse"></div>*/}
      </div>

      {(label || source) && (
        <div className="image-label">
          {label}
          {source && (<><br/><small>{source}</small></>)}
        </div>
      )}
    </div>
  );
}
