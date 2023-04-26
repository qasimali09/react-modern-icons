import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function DocumentsMinimalistic({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 13H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 9H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 17H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 19V5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M22 19V5"
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
        d="M10.75 2H12.75C15.5784 2 16.9926 2 17.8713 2.87868C18.75 3.75736 18.75 5.17157 18.75 8V16C18.75 18.8284 18.75 20.2426 17.8713 21.1213C16.9926 22 15.5784 22 12.75 22H10.75C7.92157 22 6.50736 22 5.62868 21.1213C4.75 20.2426 4.75 18.8284 4.75 16V8C4.75 5.17157 4.75 3.75736 5.62868 2.87868C6.50736 2 7.92157 2 10.75 2ZM8 13C8 12.5858 8.33579 12.25 8.75 12.25H14.75C15.1642 12.25 15.5 12.5858 15.5 13C15.5 13.4142 15.1642 13.75 14.75 13.75H8.75C8.33579 13.75 8 13.4142 8 13ZM8 9C8 8.58579 8.33579 8.25 8.75 8.25H14.75C15.1642 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.1642 9.75 14.75 9.75H8.75C8.33579 9.75 8 9.41421 8 9ZM8 17C8 16.5858 8.33579 16.25 8.75 16.25H11.75C12.1642 16.25 12.5 16.5858 12.5 17C12.5 17.4142 12.1642 17.75 11.75 17.75H8.75C8.33579 17.75 8 17.4142 8 17Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 4.25C2.16421 4.25 2.5 4.58579 2.5 5V19C2.5 19.4142 2.16421 19.75 1.75 19.75C1.33579 19.75 1 19.4142 1 19V5C1 4.58579 1.33579 4.25 1.75 4.25Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.75 4.25C22.1642 4.25 22.5 4.58579 22.5 5V19C22.5 19.4142 22.1642 19.75 21.75 19.75C21.3358 19.75 21 19.4142 21 19V5C21 4.58579 21.3358 4.25 21.75 4.25Z"
        fill={color}
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
    default:
      return defaultIcon();
  }
}

export default generateIcon(DocumentsMinimalistic);

DocumentsMinimalistic.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

DocumentsMinimalistic.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
