import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function BellBing({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M16.7491 8.70957V8.00497C16.7491 4.13623 13.7274 1 10 1C6.27256 1 3.25087 4.13623 3.25087 8.00497V8.70957C3.25087 9.55516 3.00972 10.3818 2.5578 11.0854L1.45036 12.8095C0.438823 14.3843 1.21105 16.5249 2.97036 17.0229C7.57274 18.3257 12.4273 18.3257 17.0296 17.0229C18.789 16.5249 19.5612 14.3843 18.5496 12.8095L17.4422 11.0854C16.9903 10.3818 16.7491 9.55516 16.7491 8.70957Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M5.5 18C6.15503 19.7478 7.92246 21 10 21C12.0775 21 13.845 19.7478 14.5 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10 5V9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M5.35179 18.2418C6.19288 19.311 7.51418 20 9 20C10.4858 20 11.8071 19.311 12.6482 18.2418C10.2264 18.57 7.77357 18.57 5.35179 18.2418Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7491 7.7041V7C15.7491 3.13401 12.7274 0 9 0C5.27256 0 2.25087 3.13401 2.25087 7V7.7041C2.25087 8.54909 2.00972 9.37517 1.5578 10.0782L0.450359 11.8012C-0.561177 13.3749 0.211046 15.5139 1.97036 16.0116C6.57274 17.3134 11.4273 17.3134 16.0296 16.0116C17.789 15.5139 18.5612 13.3749 17.5496 11.8012L16.4422 10.0782C15.9903 9.37517 15.7491 8.54909 15.7491 7.7041ZM9 3.25C9.41421 3.25 9.75 3.58579 9.75 4V8C9.75 8.41421 9.41421 8.75 9 8.75C8.58579 8.75 8.25 8.41421 8.25 8V4C8.25 3.58579 8.58579 3.25 9 3.25Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        d="M16.7491 8.70957V8.00497C16.7491 4.13623 13.7274 1 10 1C6.27256 1 3.25087 4.13623 3.25087 8.00497V8.70957C3.25087 9.55516 3.00972 10.3818 2.5578 11.0854L1.45036 12.8095C0.438823 14.3843 1.21105 16.5249 2.97036 17.0229C7.57274 18.3257 12.4273 18.3257 17.0296 17.0229C18.789 16.5249 19.5612 14.3843 18.5496 12.8095L17.4422 11.0854C16.9903 10.3818 16.7491 9.55516 16.7491 8.70957Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        opacity="0.5"
        d="M5.5 18C6.15503 19.7478 7.92246 21 10 21C12.0775 21 13.845 19.7478 14.5 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M10 5V9"
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

export default generateIcon(BellBing);

BellBing.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

BellBing.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
