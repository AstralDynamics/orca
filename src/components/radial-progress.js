import React from 'react';
import { primary } from '../constants/styles';

export function createStyles(color) {
  return {
    color: color,
    clipRule: 'nonzero',
    display: 'inline',
    overflow: 'visible',
    visiblity: 'visible',
    opacity: 1,
    isolation: 'auto',
    mixBlendMode: 'normal',
    colorInterpolation: 'sRGB',
    colorInterpolationFilters: 'linearRGB',
    solidColor: color,
    solidOpacity: 1,
    fill: color,
    fillOpacity:1,
    fillRule: 'nonzero',
    stroke: 'none',
    colorRendering: 'auto',
    imageRendering: 'auto',
    shapeRendering: 'auto',
    textRendering: 'auto',
    enableBackground: 'accumulate'
  };
};

export function SVG({ children }) {
  return (
    <svg
       style={{ height: '100%' }}
       xmlns="http://www.w3.org/2000/svg"
       version="1.1"
       id="svg8621"
       viewBox="0 0 80 80">
      {children}
    </svg>
  );
}

export function Four({ number, color }) {
  const style = createStyles(color);
  return (
    <SVG>
      <g
         transform="translate(-1.5064354,-970.85577)"
         id="layer1">
        {number >= 1 ?
          <path
             transform="translate(1.5064354,970.85577)"
             id="path9576"
             d="M 79.912109 37.5 A 40 40 0 0 0 42.5 0.125 L 42.5 37.5 L 79.912109 37.5 z "
             style={style} />
          : null}
        {number >= 2 ?
          <path
             transform="translate(1.5064354,970.85577)"
             id="path9574"
             d="M 42.5 79.912109 A 40 40 0 0 0 79.875 42.5 L 42.5 42.5 L 42.5 79.912109 z "
             style={style} />
          : null}
        {number >= 3 ?
          <path
             transform="translate(1.5064354,970.85577)"
             id="path9572"
             d="M 0.087890625 42.5 A 40 40 0 0 0 37.5 79.875 L 37.5 42.5 L 0.087890625 42.5 z "
             style={style} />
          : null}
        {number >= 4 ?
          <path
             transform="translate(1.5064354,970.85577)"
             id="path9570"
             d="M 37.5 0.087890625 A 40 40 0 0 0 0.125 37.5 L 37.5 37.5 L 37.5 0.087890625 z "
             style={style} />
          : null}
      </g>
    </SVG>
  )
}

export function Three({ number, color }) {
  const style = createStyles(color);
  return (
    <SVG>
      <g
         id="layer1"
         transform="translate(-1.5064354,-970.85577)">
        {number >= 1 ?
          <path
             style={style}
             d="M 75.78125 57.771484 A 40 40 0 0 0 80 40 A 40 40 0 0 0 42.5 0.125 L 42.5 38.556641 L 75.78125 57.771484 z "
             transform="translate(1.5064354,970.85577)" />
          : null}
        {number >= 2 ?
          <path
             style={style}
             d="M 6.6992188 62.113281 A 40 40 0 0 0 40 80 A 40 40 0 0 0 73.302734 62.113281 L 40 42.886719 L 6.6992188 62.113281 z "
             transform="translate(1.5064354,970.85577)" />
          : null}
        {number >= 3 ?
          <path
             style={style}
             d="M 37.5 0.087890625 A 40 40 0 0 0 0 40 A 40 40 0 0 0 4.1914062 57.787109 L 37.5 38.556641 L 37.5 0.087890625 z "
             transform="translate(1.5064354,970.85577)" />
          : null}
      </g>
    </SVG>
  )
}

export function Two({ number, color }) {
  const style = createStyles(color);
  return (
    <SVG>
      <g
         transform="translate(-1.5064354,-970.85577)"
         id="layer1">
        {number >= 1 ?
          <path
             transform="translate(1.5064354,970.85577)"
             id="path9389"
             d="M 42.5 79.912109 A 40 40 0 0 0 80 40 A 40 40 0 0 0 42.5 0.125 L 42.5 79.912109 z "
             style={style} />
          : null}
        {number >= 2 ?
          <path
             transform="translate(1.5064354,970.85577)"
             id="path9387"
             d="M 37.5 0.087890625 A 40 40 0 0 0 0 40 A 40 40 0 0 0 37.5 79.875 L 37.5 0.087890625 z "
             style={style} />
          : null}
      </g>
    </SVG>
  )
}

export function One({ number, color }) {
  const style = createStyles(color);
  return (
    <SVG>
      <g
         id="layer1"
         transform="translate(-1.5064354,-970.85577)">
        {number >= 1 ?
          <circle
             r="40"
             cy="40"
             cx="40"
             id="path14256"
             style={style} />
          : null}
      </g>
    </SVG>
  )
}

export default function RadialProgress({ number, limit, color }) {
  switch(limit) {
    case 0:
      return null;
    case 1:
      return <One number={number} color={color} />;
    case 2:
      return <Two number={number} color={color} />;
    case 3:
      return <Three number={number} color={color} />;
    default:
      return <Four number={number} color={color} />;
  }
}

RadialProgress.defaultProps = {
  number: 3,
  color: primary
};


