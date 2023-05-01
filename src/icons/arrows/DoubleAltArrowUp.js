import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function DoubleAltArrowUp({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M19 13L12 7L5 13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17L12 11L5 17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.43057 13.4881C4.70014 13.8026 5.17361 13.839 5.48811 13.5694L12 7.98781L18.5119 13.5694C18.8264 13.839 19.2999 13.8026 19.5695 13.4881C19.839 13.1736 19.8026 12.7001 19.4881 12.4306L12.4881 6.43056C12.2072 6.18981 11.7928 6.18981 11.5119 6.43056L4.51192 12.4306C4.19743 12.7001 4.161 13.1736 4.43057 13.4881Z"
        fill={color}
      />
      <path
        d="M5.00005 17.75C4.68619 17.75 4.40553 17.5546 4.29664 17.2602C4.18774 16.9658 4.27366 16.6348 4.51196 16.4306L11.512 10.4306C11.7928 10.1898 12.2073 10.1898 12.4881 10.4306L19.4881 16.4306C19.7264 16.6348 19.8124 16.9658 19.7035 17.2602C19.5946 17.5546 19.3139 17.75 19 17.75H5.00005Z"
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

export default generateIcon(DoubleAltArrowUp);

DoubleAltArrowUp.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

DoubleAltArrowUp.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
