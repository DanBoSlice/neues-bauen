import { Link, useLocation } from 'react-router-dom';
import './ExampleHouse.css';
import React from 'react';
import exampleHouse from './Roofs/mixed-roof.jpg';

export default function ExampleHouse() {
  const width = 722;
  const height = 520;

  const ElementLink = ({ x, y, link, title }: any) => {
    const to = '/design-elements/' + link;

    const location = useLocation();
    const isActive = to === location.pathname;

    return (
      <Link to={to} title={title}>
        <circle cx={x} cy={y} r={10} className={'element-link' + (isActive ? ' active' : '')}/>
      </Link>
    );
  };

  return (
    <svg
      version="1.2" xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <image href={exampleHouse} width={'100%'}/>

      <ElementLink x={width * .6} y={height * .144} link="roofs" title="Roofs"/>
      <ElementLink x={width * .445} y={height * .478} link="facades" title="Facades"/>
      <ElementLink x={width * .6} y={height * .68} link="windows" title="Windows"/>
      <ElementLink x={width * .238} y={height * .376} link="ornamentation" title="Ornamentation"/>
      <ElementLink x={width * .73} y={height * .9} link="interiors" title="Interiors"/>
      <ElementLink x={width * .443} y={height * .89} link="materials" title="Materials"/>
      <ElementLink x={width * .55} y={height * .95} link="urban-planning" title="City Planning"/>
    </svg>
  );
}
