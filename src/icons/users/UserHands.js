import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function UserHands({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 13H16M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13M8 13C6.28928 13 4.84936 14.2804 4.64948 15.9795L4 21.5M16 13C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5" />
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
        <path
          d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
          fill="#1C274C"
        />
        <path
          d="M8.00007 12.25C5.90904 12.25 4.149 13.8151 3.90469 15.8918L3.25521 21.4124C3.20681 21.8237 3.50106 22.1965 3.91244 22.2449C4.32382 22.2933 4.69654 21.999 4.74494 21.5876L5.39441 16.0671C5.51949 15.0039 6.26894 14.1515 7.25007 13.859L7.25007 18.052C7.25004 18.9505 7.25002 19.6997 7.32998 20.2945C7.41439 20.9223 7.60006 21.4891 8.05553 21.9445C8.511 22.4 9.0778 22.5857 9.70559 22.6701C10.3004 22.7501 11.0496 22.75 11.948 22.75H12.0521C12.9505 22.75 13.6998 22.7501 14.2946 22.6701C14.9223 22.5857 15.4891 22.4 15.9446 21.9445C16.4001 21.4891 16.5858 20.9223 16.6702 20.2945C16.7501 19.6997 16.7501 18.9505 16.7501 18.052L16.7501 13.859C17.7312 14.1515 18.4807 15.0039 18.6057 16.0671L19.2552 21.5876C19.3036 21.999 19.6763 22.2933 20.0877 22.2449C20.4991 22.1965 20.7933 21.8237 20.7449 21.4124L20.0955 15.8918C19.8511 13.8151 18.0911 12.25 16.0001 12.25H8.00007Z"
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

export default generateIcon(UserHands);

UserHands.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

UserHands.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
