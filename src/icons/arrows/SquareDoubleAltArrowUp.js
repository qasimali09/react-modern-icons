import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function SquareDoubleAltArrowUp({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 15.5L12 12.5L15 15.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.5L12 8.5L15 11.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM8.46967 10.9697C8.17678 11.2626 8.17678 11.7374 8.46967 12.0303C8.76256 12.3232 9.23744 12.3232 9.53033 12.0303L12 9.56066L14.4697 12.0303C14.7626 12.3232 15.2374 12.3232 15.5303 12.0303C15.8232 11.7374 15.8232 11.2626 15.5303 10.9697L12.5303 7.96967C12.2374 7.67678 11.7626 7.67678 11.4697 7.96967L8.46967 10.9697ZM8.46967 16.0303C8.17678 15.7374 8.17678 15.2626 8.46967 14.9697L11.4697 11.9697C11.7626 11.6768 12.2374 11.6768 12.5303 11.9697L15.5303 14.9697C15.8232 15.2626 15.8232 15.7374 15.5303 16.0303C15.2374 16.3232 14.7626 16.3232 14.4697 16.0303L12 13.5607L9.53033 16.0303C9.23744 16.3232 8.76256 16.3232 8.46967 16.0303Z"
        fill={color}
      />
    </g>
  );

  switch (variant) {
    case 'light':
      return defaultIcon();
    case 'regular':
      return defaultIcon();
    case 'bold':
      return defaultIcon();
    case 'filled':
      return filledIcon();
    default:
      return defaultIcon();
  }
}

export default generateIcon(SquareDoubleAltArrowUp);

SquareDoubleAltArrowUp.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

SquareDoubleAltArrowUp.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
