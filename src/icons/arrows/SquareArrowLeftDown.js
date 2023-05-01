import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function SquareArrowLeftDown({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M15 9L9 15M9 15L9 10.5M9 15L13.5 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.17157 15.5784C8.75736 15.5784 8.42157 15.2426 8.42157 14.8284L8.42157 10.5858C8.42157 10.1716 8.75736 9.83578 9.17157 9.83578C9.58579 9.83578 9.92157 10.1716 9.92157 10.5858L9.92157 13.0178L14.2981 8.64124C14.591 8.34835 15.0659 8.34835 15.3588 8.64124C15.6517 8.93414 15.6517 9.40901 15.3588 9.7019L10.9822 14.0784H13.4142C13.8284 14.0784 14.1642 14.4142 14.1642 14.8284C14.1642 15.2426 13.8284 15.5784 13.4142 15.5784L9.17157 15.5784Z"
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

export default generateIcon(SquareArrowLeftDown);

SquareArrowLeftDown.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

SquareArrowLeftDown.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
