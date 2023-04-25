import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function DocumentText({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H11C14.7712 1 16.6569 1 17.8284 2.17157C19 3.34315 19 5.22876 19 9V13C19 16.7712 19 18.6569 17.8284 19.8284C16.6569 21 14.7712 21 11 21H9C5.22876 21 3.34315 21 2.17157 19.8284C1 18.6569 1 16.7712 1 13V9Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M6 11H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 7H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 15H11"
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
        d="M1.17157 1.17157C0 2.34315 0 4.22876 0 8V12C0 15.7712 0 17.6569 1.17157 18.8284C2.34315 20 4.22876 20 8 20H10C13.7712 20 15.6569 20 16.8284 18.8284C18 17.6569 18 15.7712 18 12V8C18 4.22876 18 2.34315 16.8284 1.17157C15.6569 0 13.7712 0 10 0H8C4.22876 0 2.34315 0 1.17157 1.17157ZM4.25 6C4.25 5.58579 4.58579 5.25 5 5.25H13C13.4142 5.25 13.75 5.58579 13.75 6C13.75 6.41421 13.4142 6.75 13 6.75H5C4.58579 6.75 4.25 6.41421 4.25 6ZM4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H13C13.4142 9.25 13.75 9.58579 13.75 10C13.75 10.4142 13.4142 10.75 13 10.75H5C4.58579 10.75 4.25 10.4142 4.25 10ZM5 13.25C4.58579 13.25 4.25 13.5858 4.25 14C4.25 14.4142 4.58579 14.75 5 14.75H10C10.4142 14.75 10.75 14.4142 10.75 14C10.75 13.5858 10.4142 13.25 10 13.25H5Z"
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
        d="M6 11H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 7H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 15H11"
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

export default generateIcon(DocumentText);

DocumentText.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

DocumentText.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
