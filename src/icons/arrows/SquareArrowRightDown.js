import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function Cloud({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M9 9L15 15M15 15L15 10.5M15 15L10.5 15"
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
        d="M20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447ZM14.8284 15.5784C15.2426 15.5784 15.5784 15.2426 15.5784 14.8284L15.5784 10.5858C15.5784 10.1716 15.2426 9.83579 14.8284 9.83578C14.4142 9.83579 14.0784 10.1716 14.0784 10.5858L14.0784 13.0178L9.7019 8.64124C9.40901 8.34835 8.93414 8.34835 8.64124 8.64124C8.34835 8.93414 8.34835 9.40901 8.64124 9.7019L13.0178 14.0784H10.5858C10.1716 14.0784 9.83579 14.4142 9.83579 14.8284C9.83579 15.2426 10.1716 15.5784 10.5858 15.5784L14.8284 15.5784Z"
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

export default generateIcon(Cloud);

Cloud.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

Cloud.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
