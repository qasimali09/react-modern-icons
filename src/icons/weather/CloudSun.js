import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function CloudSun({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68058 11.7184 8.20528 11.9374 8.66667 12.2426"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11.0004 4C10.0882 2.78555 8.63582 2 7 2C4.23858 2 2 4.23858 2 7C2 9.05032 3.2341 10.8124 5 11.584"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
        fill={color}
      />
      <path
        d="M9.9395 2.9549C9.11445 2.35431 8.0986 2 7 2C4.23858 2 2 4.23858 2 7C2 8.45451 2.62107 9.76396 3.61248 10.6776C4.12743 10.4112 4.68736 10.2195 5.27727 10.1165C5.26708 9.9612 5.2619 9.80468 5.2619 9.64706C5.2619 6.57385 7.21349 3.96993 9.9395 2.9549Z"
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

export default generateIcon(CloudSun);

CloudSun.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

CloudSun.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
