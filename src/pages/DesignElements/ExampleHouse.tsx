import { Link, useLocation } from 'react-router-dom';
import './ExampleHouse.css';
import React from 'react';
import BrickPattern from '../../components/BrickPattern';

export default function ExampleHouse() {
  const width = 400;
  const height = 500;

  const skyHeight = 20;
  const roofHeight = 10;
  const houseHeight = 374;
  const staircaseWidth = 100;
  const baseY = skyHeight + houseHeight;
  const baseHeight = 31;
  const doorWidth = 50;
  const doorHeight = 90;

  const grassXCenterOffsetTop = 40;
  const grassXCenterOffsetBottom = 80;
  const grassStartY = baseY + baseHeight + 5;
  const grassEndY = height;

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
      <defs>
        <BrickPattern brickWidth={11} brickHeight={5}/>
      </defs>

      <rect
        fill="white"
        width={width}
        height={height}
      />

      <rect
        className="example-house-facade"
        width={width}
        height={houseHeight}
        y={skyHeight}
      />

      <rect
        className="staircase"
        width={staircaseWidth}
        height={houseHeight}
        x={(width - staircaseWidth) / 2}
        y={skyHeight}
      />

      <rect
        className="roof"
        width={width}
        height={roofHeight}
        y={skyHeight}
      />
      <rect
        fill="url(#brickPattern)"
        width={20}
        height={skyHeight}
        x={73}
      />

      <rect
        fill="url(#brickPattern)"
        width={width}
        height={baseHeight}
        y={baseY}
      />

      <rect
        className="door"
        width={doorWidth}
        height={doorHeight}
        x={(width - doorWidth) / 2}
        y={baseY + baseHeight - doorHeight}
      ></rect>

      <polygon
        points={`0,${grassStartY} ${width / 2 - grassXCenterOffsetTop},${grassStartY} ${width / 2 - grassXCenterOffsetBottom},${grassEndY} 0,${grassEndY}`}
        className="grass"
      />
      <polygon
        points={`${width / 2 + grassXCenterOffsetTop},${grassStartY} ${width},${grassStartY} ${width},${grassEndY} ${width / 2 + grassXCenterOffsetBottom},${grassEndY}`}
        className="grass"
      />

      <ElementLink x={width / 2} y={skyHeight + roofHeight / 2} link="roofs" title="Roofs"/>
      <ElementLink x={(width + staircaseWidth) / 2 + (width - staircaseWidth) / 4} y={120} link="facades" title="Facades"/>
      {/*<ElementLink x={(width - staircaseWidth) / 4} y={170} link="windows" title="Windows"/>*/}
      {/*<ElementLink x={260} y={250} link="ornamentation" title="Ornamentation"/>*/}
      {/*<ElementLink x={width / 2} y={baseY + baseHeight - doorHeight / 2} link="interiors" title="Interiors"/>*/}
      {/*<ElementLink x={340} y={baseY + baseHeight / 2} link="materials" title="Materials"/>*/}
      <ElementLink x={85} y={grassStartY + (grassEndY - grassStartY) / 2} link="urban-planning" title="City Planning"/>
    </svg>
  );
}
