import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function DocumentMedicine({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H11C14.7712 1 16.6569 1 17.8284 2.17157C19 3.34315 19 5.22876 19 9V13C19 16.7712 19 18.6569 17.8284 19.8284C16.6569 21 14.7712 21 11 21H9C5.22876 21 3.34315 21 2.17157 19.8284C1 18.6569 1 16.7712 1 13V9Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M10 5L10 7M10 7L10 9M10 7H7.99998M10 7L12 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 13H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 17H13"
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
        d="M1.17157 1.17157C0 2.34315 0 4.22876 0 8V12C0 15.7712 0 17.6569 1.17157 18.8284C2.34315 20 4.22876 20 8 20H10C13.7712 20 15.6569 20 16.8284 18.8284C18 17.6569 18 15.7712 18 12V8C18 4.22876 18 2.34315 16.8284 1.17157C15.6569 0 13.7712 0 10 0H8C4.22876 0 2.34315 0 1.17157 1.17157ZM9.74998 4C9.74998 3.58579 9.4142 3.25 8.99998 3.25C8.58577 3.25 8.24998 3.58579 8.24998 4V5.25H6.99997C6.58575 5.25 6.24997 5.58579 6.24997 6C6.24997 6.41421 6.58575 6.75 6.99997 6.75H8.24998L8.24998 8C8.24998 8.41421 8.58577 8.75 8.99998 8.75C9.4142 8.75 9.74998 8.41421 9.74998 8L9.74998 6.75L11 6.75C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25H9.74998V4ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H13C13.4142 12.75 13.75 12.4142 13.75 12C13.75 11.5858 13.4142 11.25 13 11.25H5ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H12C12.4142 16.75 12.75 16.4142 12.75 16C12.75 15.5858 12.4142 15.25 12 15.25H6Z"
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
        d="M10 5L10 7M10 7L10 9M10 7H7.99998M10 7L12 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 13H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 17H13"
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

export default generateIcon(DocumentMedicine);

DocumentMedicine.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

DocumentMedicine.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
