import './WindowImage.css';

export interface WindowImageProps {
  src: string;
  label?: string;
}

export default function WindowImage({ src, label }: WindowImageProps) {
  // todo: randomly add flowers?

  return (
    <div>
      <div className="window-image">
        <img src={src} alt="" />

        <div className="sprosse"></div>
        <div className="sprosse"></div>
        <div className="sprosse"></div>
      </div>

      {label && (<><br/>{label}</>)}
    </div>
  );
}
