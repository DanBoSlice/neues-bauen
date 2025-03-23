export interface RoofWindowProps {
  x: number;
  y: number;
}

export default function RoofWindow({ x, y }: RoofWindowProps) {
  const width = 10;
  const height = 10;

  return (
    <rect
      width={width}
      height={height}
      x={x - (width / 2)}
      y={y - (height / 2)}
      rx={2}
      ry={2}
    />
  );
}
