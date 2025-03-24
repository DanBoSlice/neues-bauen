import './WindowImage.css';

export interface WindowImageProps {
  src: string;
  label?: string;
  source?: string;
}

export default function WindowImage({ src, label, source }: WindowImageProps) {
  // todo: randomly add flowers?

  return (
    <div>
      <div className="window-image">
        <img src={src} alt={label} />

        <div className="sprosse"></div>
        <div className="sprosse"></div>
        <div className="sprosse"></div>
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
