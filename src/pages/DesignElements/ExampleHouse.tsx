import { Link } from 'react-router-dom';

export default function ExampleHouse() {
  const width = 400;
  const height = 500;

  const ElementLink = ({ x, y, link, title }: any) => (
    <Link to={'/design-elements/' + link} title={title}>
      <circle cx={x} cy={y} r={10} className="element-link"/>
    </Link>
  );

  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg"
         viewBox={`0 0 ${width} ${height}`}
         width={width}
         height={height}>
      <rect width={width} height={height} fill="white"/>

      <ElementLink x={width / 2} y={30} link="roofs" title="Roofs"/>
      <ElementLink x={260} y={120} link="facades" title="Facades"/>
      <ElementLink x={100} y={170} link="windows" title="Windows"/>
      <ElementLink x={350} y={250} link="ornamentation" title="Ornamentation"/>
      <ElementLink x={width / 2} y={420} link="interiors" title="Interiors"/>
      <ElementLink x={340} y={430} link="materials" title="Materials"/>
      <ElementLink x={50} y={480} link="city-planning" title="City Planning"/>
    </svg>
  );
}
