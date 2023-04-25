import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function NotificationRemove({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M21 9.5V11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1H12.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M21 1L16 5.99998M16 0.99998L21 5.99996"
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
        d="M15.5 9C13.3787 9 12.318 9 11.659 8.34099C11 7.68198 11 6.62132 11 4.5C11 2.37868 11 1.31802 11.659 0.65901C12.318 0 13.3787 0 15.5 0C17.6213 0 18.682 0 19.341 0.65901C20 1.31802 20 2.37868 20 4.5C20 6.62132 20 7.68198 19.341 8.34099C18.682 9 17.6213 9 15.5 9ZM12.9697 1.96967C13.2626 1.67678 13.7374 1.67678 14.0303 1.96967L15.5 3.43934L16.9697 1.96967C17.2626 1.67678 17.7374 1.67678 18.0303 1.96967C18.3232 2.26256 18.3232 2.73744 18.0303 3.03033L16.5607 4.5L18.0303 5.96967C18.3232 6.26256 18.3232 6.73744 18.0303 7.03033C17.7374 7.32322 17.2626 7.32322 16.9697 7.03033L15.5 5.56066L14.0303 7.03033C13.7374 7.32322 13.2626 7.32322 12.9697 7.03033C12.6768 6.73744 12.6768 6.26256 12.9697 5.96967L14.4393 4.5L12.9697 3.03033C12.6768 2.73744 12.6768 2.26256 12.9697 1.96967Z"
        fill={color}
      />
      <path
        d="M10 20C5.28595 20 2.92893 20 1.46447 18.5355C0 17.0711 0 14.714 0 10C0 5.28595 0 2.92893 1.46447 1.46447C2.92893 0 5.28595 0 10 0L10.2578 9.17912e-06C9.85341 0.566505 9.6799 1.2054 9.59575 1.83127C9.49982 2.54482 9.4999 3.4264 9.49999 4.40759V4.59241C9.4999 5.5736 9.49982 6.45518 9.59575 7.16873C9.70049 7.94777 9.94369 8.74699 10.5983 9.40165C11.253 10.0563 12.0522 10.2995 12.8313 10.4042C13.5448 10.5002 14.4264 10.5001 15.4076 10.5H15.5924C16.5736 10.5001 17.4552 10.5002 18.1687 10.4042C18.7946 10.3201 19.4335 10.1466 20 9.74215L20 10C20 14.714 20 17.0711 18.5355 18.5355C17.0711 20 14.714 20 10 20Z"
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
      <path
        d="M21 1L16 5.99998M16 0.99998L21 5.99996"
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

export default generateIcon(NotificationRemove);

NotificationRemove.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

NotificationRemove.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
