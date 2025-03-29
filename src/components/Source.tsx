export interface SourceProps {
  num: number;
  link: string;
}

export default function Source({ num, link }: SourceProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">[{num}]</a>
  );
}
