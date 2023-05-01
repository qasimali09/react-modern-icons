import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function SquareDoubleAltArrowLeft({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M15.5 9L12.5 12L15.5 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 9L8.5 12L11.5 15"
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
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM16.0303 9.53033C16.3232 9.23744 16.3232 8.76256 16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967L11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303C16.3232 15.2374 16.3232 14.7626 16.0303 14.4697L13.5607 12L16.0303 9.53033ZM12.0303 8.46967C12.3232 8.76256 12.3232 9.23744 12.0303 9.53033L9.56066 12L12.0303 14.4697C12.3232 14.7626 12.3232 15.2374 12.0303 15.5303C11.7374 15.8232 11.2626 15.8232 10.9697 15.5303L7.96967 12.5303C7.67678 12.2374 7.67678 11.7626 7.96967 11.4697L10.9697 8.46967C11.2626 8.17678 11.7374 8.17678 12.0303 8.46967Z"
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

export default generateIcon(SquareDoubleAltArrowLeft);

SquareDoubleAltArrowLeft.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

SquareDoubleAltArrowLeft.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
