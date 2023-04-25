import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function DocumentsMinimalistic({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M4 7C4 4.17157 4 2.75736 4.87868 1.87868C5.75736 1 7.17157 1 10 1H12C14.8284 1 16.2426 1 17.1213 1.87868C18 2.75736 18 4.17157 18 7V15C18 17.8284 18 19.2426 17.1213 20.1213C16.2426 21 14.8284 21 12 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 12H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 8H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 16H11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M1 18V4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M21 18V4"
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
        d="M9.75 0H11.75C14.5784 0 15.9926 0 16.8713 0.87868C17.75 1.75736 17.75 3.17157 17.75 6V14C17.75 16.8284 17.75 18.2426 16.8713 19.1213C15.9926 20 14.5784 20 11.75 20H9.75C6.92157 20 5.50736 20 4.62868 19.1213C3.75 18.2426 3.75 16.8284 3.75 14V6C3.75 3.17157 3.75 1.75736 4.62868 0.87868C5.50736 0 6.92157 0 9.75 0ZM7 11C7 10.5858 7.33579 10.25 7.75 10.25H13.75C14.1642 10.25 14.5 10.5858 14.5 11C14.5 11.4142 14.1642 11.75 13.75 11.75H7.75C7.33579 11.75 7 11.4142 7 11ZM7 7C7 6.58579 7.33579 6.25 7.75 6.25H13.75C14.1642 6.25 14.5 6.58579 14.5 7C14.5 7.41421 14.1642 7.75 13.75 7.75H7.75C7.33579 7.75 7 7.41421 7 7ZM7 15C7 14.5858 7.33579 14.25 7.75 14.25H10.75C11.1642 14.25 11.5 14.5858 11.5 15C11.5 15.4142 11.1642 15.75 10.75 15.75H7.75C7.33579 15.75 7 15.4142 7 15Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 2.25C1.16421 2.25 1.5 2.58579 1.5 3V17C1.5 17.4142 1.16421 17.75 0.75 17.75C0.335786 17.75 0 17.4142 0 17V3C0 2.58579 0.335786 2.25 0.75 2.25Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.75 2.25C21.1642 2.25 21.5 2.58579 21.5 3V17C21.5 17.4142 21.1642 17.75 20.75 17.75C20.3358 17.75 20 17.4142 20 17V3C20 2.58579 20.3358 2.25 20.75 2.25Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        d="M4 7C4 4.17157 4 2.75736 4.87868 1.87868C5.75736 1 7.17157 1 10 1H12C14.8284 1 16.2426 1 17.1213 1.87868C18 2.75736 18 4.17157 18 7V15C18 17.8284 18 19.2426 17.1213 20.1213C16.2426 21 14.8284 21 12 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        opacity="0.7"
        d="M8 12H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 8H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M8 16H11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M1 18V4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M21 18V4"
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

export default generateIcon(DocumentsMinimalistic);

DocumentsMinimalistic.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

DocumentsMinimalistic.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
