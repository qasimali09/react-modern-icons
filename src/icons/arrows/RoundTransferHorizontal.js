import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function RoundTransferHorizontal({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M17 10L7 10L10.4375 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14L17 14L13.5625 17"
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7 14.75L15 14.75L13.0693 16.4349C12.7573 16.7073 12.7251 17.1811 12.9974 17.4931C13.2698 17.8052 13.7436 17.8374 14.0557 17.5651L17.4932 14.5651C17.7287 14.3595 17.812 14.0294 17.7022 13.7367C17.5925 13.4439 17.3126 13.25 17 13.25L7 13.25C6.58579 13.25 6.25 13.5858 6.25 14C6.25 14.4142 6.58579 14.75 7 14.75ZM11.0026 6.50685C11.2749 6.81893 11.2427 7.29271 10.9307 7.56507L9 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H7C6.68737 10.75 6.40753 10.5561 6.29775 10.2633C6.18798 9.97061 6.2713 9.6405 6.50685 9.43493L9.94435 6.43493C10.2564 6.16257 10.7302 6.19477 11.0026 6.50685Z"
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

export default generateIcon(RoundTransferHorizontal);

RoundTransferHorizontal.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

RoundTransferHorizontal.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
