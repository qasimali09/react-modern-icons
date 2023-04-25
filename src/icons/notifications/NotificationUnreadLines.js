import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function NotificationUnreadLines({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M21 9.5V11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1H12.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="18" cy="4" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6 13H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 16.5H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M20 3C20 4.65685 18.6569 6 17 6C15.3431 6 14 4.65685 14 3C14 1.34315 15.3431 0 17 0C18.6569 0 20 1.34315 20 3Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.46447 18.5355C2.92893 20 5.28595 20 10 20C14.714 20 17.0711 20 18.5355 18.5355C20 17.0711 20 14.714 20 10C20 8.60124 20 7.40999 19.9617 6.38802C19.1703 7.08042 18.1342 7.5 17 7.5C14.5147 7.5 12.5 5.48528 12.5 3C12.5 1.86584 12.9196 0.829672 13.612 0.0382589C12.59 5.58794e-08 11.3988 0 10 0C5.28595 0 2.92893 0 1.46447 1.46447C0 2.92893 0 5.28595 0 10C0 14.714 0 17.0711 1.46447 18.5355ZM4.25 15.5C4.25 15.0858 4.58579 14.75 5 14.75H11C11.4142 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 11.4142 16.25 11 16.25H5C4.58579 16.25 4.25 15.9142 4.25 15.5Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        opacity="0.5"
        d="M21 9.5V11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1H12.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="18" cy="4" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6 13H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 16.5H12"
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

export default generateIcon(NotificationUnreadLines);

NotificationUnreadLines.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

NotificationUnreadLines.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
