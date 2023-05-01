import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function RoundTransferVertical({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M10 7L10 17L7 13.5625"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17L14 7L17 10.4375"
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.75 17L14.75 9L16.4349 10.9307C16.7073 11.2427 17.1811 11.2749 17.4931 11.0026C17.8052 10.7302 17.8374 10.2564 17.5651 9.94435L14.5651 6.50685C14.3595 6.2713 14.0294 6.18798 13.7367 6.29775C13.4439 6.40753 13.25 6.68737 13.25 7L13.25 17C13.25 17.4142 13.5858 17.75 14 17.75C14.4142 17.75 14.75 17.4142 14.75 17ZM6.50685 12.9974C6.81893 12.7251 7.29271 12.7573 7.56507 13.0693L9.25 15V7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7V17C10.75 17.3126 10.5561 17.5925 10.2633 17.7022C9.97061 17.812 9.6405 17.7287 9.43493 17.4932L6.43493 14.0557C6.16257 13.7436 6.19477 13.2698 6.50685 12.9974Z"
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

export default generateIcon(RoundTransferVertical);

RoundTransferVertical.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

RoundTransferVertical.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
