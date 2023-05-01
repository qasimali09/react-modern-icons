import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function SquareDoubleAltArrowDown({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 8.5L12 11.5L15 8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5L12 15.5L15 12.5"
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
        d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.46967 7.96967C8.17678 8.26256 8.17678 8.73744 8.46967 9.03033L11.4697 12.0303C11.7626 12.3232 12.2374 12.3232 12.5303 12.0303L15.5303 9.03033C15.8232 8.73744 15.8232 8.26256 15.5303 7.96967C15.2374 7.67678 14.7626 7.67678 14.4697 7.96967L12 10.4393L9.53033 7.96967C9.23744 7.67678 8.76256 7.67678 8.46967 7.96967ZM8.46967 11.9697C8.17678 12.2626 8.17678 12.7374 8.46967 13.0303L11.4697 16.0303C11.7626 16.3232 12.2374 16.3232 12.5303 16.0303L15.5303 13.0303C15.8232 12.7374 15.8232 12.2626 15.5303 11.9697C15.2374 11.6768 14.7626 11.6768 14.4697 11.9697L12 14.4393L9.53033 11.9697C9.23744 11.6768 8.76256 11.6768 8.46967 11.9697Z"
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

export default generateIcon(SquareDoubleAltArrowDown);

SquareDoubleAltArrowDown.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

SquareDoubleAltArrowDown.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
