import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function Temperature({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 14.7636 16.6954 13.2152 15.4386 12.2072C15.1749 11.9957 15 11.6857 15 11.3477V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.3477C9 11.6857 8.82505 11.9957 8.56141 12.2072C7.30465 13.2152 6.5 14.7636 6.5 16.5C6.5 19.5376 8.96243 22 12 22Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.4998 16.5C14.4998 17.8807 13.3805 19 11.9998 19C10.619 19 9.49976 17.8807 9.49976 16.5C9.49976 15.1193 10.619 14 11.9998 14C13.3805 14 14.4998 15.1193 14.4998 16.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 14V5"
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
        d="M17.5 16.5C17.5 19.5376 15.0376 22 12 22C8.96243 22 6.5 19.5376 6.5 16.5C6.5 14.7636 7.30465 13.2152 8.56141 12.2072C8.82505 11.9957 9 11.6857 9 11.3477V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11.3477C15 11.6857 15.1749 11.9957 15.4386 12.2072C16.6954 13.2152 17.5 14.7636 17.5 16.5ZM12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V13.3804C12.75 13.8172 13.0473 14.1876 13.408 14.4339C14.0673 14.8841 14.5 15.6415 14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.6415 9.93273 14.8841 10.592 14.4339C10.9527 14.1876 11.25 13.8172 11.25 13.3804V5C11.25 4.58579 11.5858 4.25 12 4.25Z"
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

export default generateIcon(Temperature);

Temperature.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

Temperature.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
