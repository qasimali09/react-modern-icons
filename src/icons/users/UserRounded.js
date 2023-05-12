import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function UserRounded({ color, strokeWidth, variant }) {
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
        <ellipse
          cx="12"
          cy="17"
          rx="7"
          ry="4"
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
        <ellipse cx="12" cy="17" rx="7" ry="4" fill="#1C274C" />
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

export default generateIcon(UserRounded);

UserRounded.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

UserRounded.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
