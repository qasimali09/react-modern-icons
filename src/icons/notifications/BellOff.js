import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function BellOff({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M16.7491 8.70957V8.00497C16.7491 4.13623 13.7274 1 10 1C6.27256 1 3.25087 4.13623 3.25087 8.00497V8.70957C3.25087 9.55516 3.00972 10.3818 2.5578 11.0854L1.45036 12.8095C0.438823 14.3843 1.21105 16.5249 2.97036 17.0229C7.57274 18.3257 12.4273 18.3257 17.0296 17.0229C18.789 16.5249 19.5612 14.3843 18.5496 12.8095L17.4422 11.0854C16.9903 10.3818 16.7491 9.55516 16.7491 8.70957Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 8H12L8 12H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 18C6.15503 19.7478 7.92246 21 10 21C12.0775 21 13.845 19.7478 14.5 18"
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
        d="M15.7491 7V7.7041C15.7491 8.54909 15.9903 9.37517 16.4422 10.0782L17.5496 11.8012C18.5612 13.3749 17.789 15.5139 16.0296 16.0116C11.4273 17.3134 6.57274 17.3134 1.97036 16.0116C0.211046 15.5139 -0.561176 13.3749 0.450359 11.8012L1.5578 10.0782C2.00972 9.37517 2.25087 8.54909 2.25087 7.7041V7C2.25087 3.13401 5.27256 0 9 0C12.7274 0 15.7491 3.13401 15.7491 7ZM7.07169 7.75C6.67233 7.75 6.34857 7.41421 6.34857 7C6.34857 6.58578 6.67233 6.25 7.07169 6.25H10.9283C11.2208 6.25 11.4845 6.43273 11.5964 6.71299C11.7083 6.99324 11.6465 7.31583 11.4397 7.53033L8.81746 10.25H10.9283C11.3277 10.25 11.6515 10.5858 11.6515 11C11.6515 11.4142 11.3277 11.75 10.9283 11.75H7.07169C6.77922 11.75 6.51554 11.5673 6.40362 11.287C6.29169 11.0068 6.35356 10.6842 6.56037 10.4697L9.18257 7.75H7.07169Z"
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
        d="M8 8H12L8 12H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M5.5 18C6.15503 19.7478 7.92246 21 10 21C12.0775 21 13.845 19.7478 14.5 18"
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

export default generateIcon(BellOff);

BellOff.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

BellOff.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
