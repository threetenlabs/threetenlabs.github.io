import React from 'react';

const Game = ({ color = '#161F31', ...rest }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 512 512"
    {...rest}>
    <title>{'ionicons-v5-g'}</title>
    <path
      d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88 26 9 49.25-9.61 71.27-37 25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16 41.02-14.01 40.44-79.13 21.43-165.04Z"
      stroke={color}
      style={{
        fill: 'none',
        strokeMiterlimit: 10,
        strokeWidth: 16,
      }}
    />
    <circle fill={color} stroke={color} cx={292} cy={224} r={20} />
    <path
      stroke={color}
      fill={color}
      d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Z"
    />
    <circle fill={color} stroke={color} cx={336} cy={180} r={20} />
    <circle fill={color} stroke={color} cx={380} cy={224} r={20} />
    <path
      d="M160 176v96M208 224h-96"
      stroke={color}
      fill={color}
      style={{
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 32,
      }}
    />
  </svg>
);

export default Game;
