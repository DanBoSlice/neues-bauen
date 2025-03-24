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

      {label && (<><br/>{label}</>)}
      {source && (<><br/>(Source: {source})</>)}
    </div>
  );
}
