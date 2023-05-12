import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function UserBlockRounded({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5" />
        <circle cx="17" cy="18" r="4" stroke="#1C274C" strokeWidth="1.5" />
        <path d="M20 15L14 21" stroke="#1C274C" strokeWidth="1.5" />
        <path
          d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359"
          stroke="#1C274C"
          strokeWidth="1.5"
        />
      </svg>
    </g>
  );

  const filledIcon = () => (
    <g>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="6" r="4" fill="#1C274C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 15.75C16.7574 15.75 15.75 16.7574 15.75 18C15.75 18.3473 15.8287 18.6763 15.9693 18.97L18.9701 15.9693C18.6763 15.8287 18.3474 15.75 18 15.75ZM20.0307 17.0299L17.0299 20.0307C17.3236 20.1713 17.6526 20.25 18 20.25C19.2426 20.25 20.25 19.2426 20.25 18C20.25 17.6526 20.1713 17.3237 20.0307 17.0299ZM14.25 18C14.25 15.9289 15.9289 14.25 18 14.25C20.0711 14.25 21.75 15.9289 21.75 18C21.75 20.0711 20.0711 21.75 18 21.75C15.9289 21.75 14.25 20.0711 14.25 18Z"
          fill="#1C274C"
        />
        <path
          d="M15.3267 13.4807C13.7841 14.3951 12.75 16.0768 12.75 18C12.75 19.0693 13.0697 20.0639 13.6187 20.8935C13.0991 20.9638 12.5572 21.001 12 21.001C8.13401 21.001 5 19.2101 5 17.001C5 14.7918 8.13401 13.001 12 13.001C13.2041 13.001 14.3372 13.1747 15.3267 13.4807Z"
          fill="#1C274C"
        />
      </svg>
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

export default generateIcon(UserBlockRounded);

UserBlockRounded.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

UserBlockRounded.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
