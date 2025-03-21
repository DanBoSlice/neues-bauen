import './WindowImage.css';

export interface WindowImageProps {
  src: string;
}

export default function WindowImage({ src }: WindowImageProps) {
  // todo: randomly add flowers?

  return (
    <div className="window-image">
      <img src={src} alt="" />

      <div className="sprosse"></div>
      <div className="sprosse"></div>
      <div className="sprosse"></div>
    </div>
  );
}
