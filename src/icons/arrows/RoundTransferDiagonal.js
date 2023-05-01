import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function RoundTransferDiagonal({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6.50006 4L13.8785 12V7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3784 19.8779L9.87842 11.9995V16.4995"
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
        d="M12 22C6.47715 22 2 17.5228 2 12C2 8.87638 3.43217 6.08725 5.67568 4.25345L13.3284 12.5099C13.5381 12.7362 13.865 12.811 14.1523 12.6983C14.4395 12.5857 14.6284 12.3086 14.6284 12.0001V7.50011C14.6284 7.0859 14.2926 6.75011 13.8784 6.75011C13.4642 6.75011 13.1284 7.0859 13.1284 7.50011V10.0876L6.91715 3.38628C8.40658 2.50549 10.1443 2 12 2C17.5228 2 22 6.47715 22 12C22 15.1255 20.5661 17.9162 18.3202 19.7499L10.4207 11.4818C10.209 11.2603 9.88379 11.1898 9.59934 11.3038C9.31488 11.4179 9.12843 11.6935 9.12843 12V16.5C9.12843 16.9142 9.46422 17.25 9.87843 17.25C10.2926 17.25 10.6284 16.9142 10.6284 16.5V13.8706L17.0752 20.6182C15.5875 21.4962 13.8526 22 12 22Z"
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

export default generateIcon(RoundTransferDiagonal);

RoundTransferDiagonal.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

RoundTransferDiagonal.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
