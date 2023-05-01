import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function CloudWaterdrop({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15 19.0837C15 20.6946 13.6569 22.0004 12 22.0004C10.3431 22.0004 9 20.6946 9 19.0837C9 18.1718 9.96143 16.9838 10.7958 16.1245C11.4626 15.4377 12.5374 15.4377 13.2042 16.1245C14.0386 16.9838 15 18.1718 15 19.0837Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M15 19.0837C15 20.6946 13.6569 22.0004 12 22.0004C10.3431 22.0004 9 20.6946 9 19.0837C9 18.1718 9.96143 16.9838 10.7958 16.1245C11.4626 15.4377 12.5374 15.4377 13.2042 16.1245C14.0386 16.9838 15 18.1718 15 19.0837Z"
        fill={color}
      />
      <path
        d="M9.71957 15.0796C9.27101 15.5416 8.75215 16.1278 8.33587 16.7539C7.96447 17.3126 7.52758 18.1162 7.50125 19H6.28571C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.4013 19.5559 18.8855 16.4986 18.9962C16.4712 18.1139 16.035 17.3118 15.6641 16.7539C15.2479 16.1278 14.729 15.5416 14.2804 15.0796C13.0244 13.786 10.9756 13.786 9.71957 15.0796Z"
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

export default generateIcon(CloudWaterdrop);

CloudWaterdrop.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

CloudWaterdrop.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
