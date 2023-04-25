import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function Document({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H11C14.7712 1 16.6569 1 17.8284 2.17157C19 3.34315 19 5.22876 19 9V13C19 16.7712 19 18.6569 17.8284 19.8284C16.6569 21 14.7712 21 11 21H9C5.22876 21 3.34315 21 2.17157 19.8284C1 18.6569 1 16.7712 1 13V9Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M6 9H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 13H11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.17157 1.17157C0 2.34315 0 4.22876 0 8V12C0 15.7712 0 17.6569 1.17157 18.8284C2.34315 20 4.22876 20 8 20H10C13.7712 20 15.6569 20 16.8284 18.8284C18 17.6569 18 15.7712 18 12V8C18 4.22876 18 2.34315 16.8284 1.17157C15.6569 0 13.7712 0 10 0H8C4.22876 0 2.34315 0 1.17157 1.17157ZM5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75H13C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25H5ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H10C10.4142 12.75 10.75 12.4142 10.75 12C10.75 11.5858 10.4142 11.25 10 11.25H5Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        opacity="0.5"
        d="M1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H11C14.7712 1 16.6569 1 17.8284 2.17157C19 3.34315 19 5.22876 19 9V13C19 16.7712 19 18.6569 17.8284 19.8284C16.6569 21 14.7712 21 11 21H9C5.22876 21 3.34315 21 2.17157 19.8284C1 18.6569 1 16.7712 1 13V9Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M6 9H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 13H11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  switch (varient) {
    case 'light':
      return defaultIcon();
    case 'regular':
      return defaultIcon();
    case 'bold':
      return defaultIcon();
    case 'filled':
      return filledIcon();
    case 'duotone':
      return duotoneIcon();
    default:
      return defaultIcon();
  }
}

export default generateIcon(Document);

Document.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

Document.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
