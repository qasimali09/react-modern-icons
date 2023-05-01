import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function CloudSun2({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M14.381 11.0272C14.9767 10.8191 15.6178 10.7059 16.2857 10.7059C16.9404 10.7059 17.5693 10.8147 18.1551 11.015M7.11616 13.6089C6.8475 13.5567 6.56983 13.5294 6.28571 13.5294C3.91878 13.5294 2 15.4256 2 17.7647C2 20.1038 3.91878 22 6.28571 22H16.2857C19.4416 22 22 19.4717 22 16.3529C22 13.8811 20.393 11.7802 18.1551 11.015M7.11616 13.6089C6.88706 12.9978 6.7619 12.3369 6.7619 11.6471C6.7619 8.52827 9.32028 6 12.4762 6C15.4159 6 17.8371 8.19371 18.1551 11.015M7.11616 13.6089C7.68058 13.7184 8.20528 13.9374 8.66667 14.2426"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.3962 5.31753 10.6015 6.5 11.1632M8 4.5C8.74362 4.5 9.43308 4.73191 10 5.12734M8 4.5C7.25638 4.5 6.56692 4.73191 6 5.12734M8 4.5C8.95365 4.5 9.81822 4.88141 10.4495 5.5M8 4.5C7.04635 4.5 6.18178 4.88141 5.55051 5.5M8 4.5C9.27316 4.5 10.3876 5.17979 11 6.19621"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M7.5 2V2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2.5 7.5L2 7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11.3887 3.61133L11.1726 3.82739"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3.82727 11.1729L3.61121 11.3889"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3.82727 3.82715L3.61121 3.61109"
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
        d="M7.5 1.25C7.91421 1.25 8.25 1.58579 8.25 2V2.5C8.25 2.91421 7.91421 3.25 7.5 3.25C7.08579 3.25 6.75 2.91421 6.75 2.5V2C6.75 1.58579 7.08579 1.25 7.5 1.25ZM3.08086 3.08059C3.37375 2.78769 3.84862 2.78769 4.14152 3.08059L4.35758 3.29665C4.65047 3.58954 4.65047 4.06441 4.35758 4.35731C4.06468 4.6502 3.58981 4.6502 3.29692 4.35731L3.08086 4.14125C2.78796 3.84835 2.78796 3.37348 3.08086 3.08059ZM11.919 3.08073C12.2119 3.37362 12.2119 3.8485 11.919 4.14139L11.7029 4.35745C11.41 4.65034 10.9352 4.65034 10.6423 4.35745C10.3494 4.06456 10.3494 3.58968 10.6423 3.29679L10.8583 3.08073C11.1512 2.78784 11.6261 2.78784 11.919 3.08073ZM1.25 7.5C1.25 7.08579 1.58579 6.75 2 6.75H2.5C2.91421 6.75 3.25 7.08579 3.25 7.5C3.25 7.91421 2.91421 8.25 2.5 8.25H2C1.58579 8.25 1.25 7.91421 1.25 7.5ZM4.35758 10.6427C4.65047 10.9356 4.65047 11.4105 4.35758 11.7034L4.14152 11.9194C3.84862 12.2123 3.37375 12.2123 3.08086 11.9194C2.78796 11.6265 2.78796 11.1516 3.08086 10.8588L3.29692 10.6427C3.58981 10.3498 4.06468 10.3498 4.35758 10.6427Z"
        fill={color}
      />
      <path
        d="M16.2857 22C19.4416 22 22 19.4717 22 16.3529C22 13.8811 20.393 11.7802 18.1551 11.015C17.8371 8.19371 15.4159 6 12.4762 6C9.32028 6 6.7619 8.52827 6.7619 11.6471C6.7619 12.3369 6.88706 12.9978 7.11616 13.6089C6.8475 13.5567 6.56983 13.5294 6.28571 13.5294C3.91878 13.5294 2 15.4256 2 17.7647C2 20.1038 3.91878 22 6.28571 22H16.2857Z"
        fill={color}
      />
      <path
        d="M9.81079 5.00423C9.28249 4.68421 8.66276 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 8.89287 4.83433 9.70764 5.38464 10.326C5.84363 7.88877 7.54928 5.89586 9.81079 5.00423Z"
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

export default generateIcon(CloudSun2);

CloudSun2.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

CloudSun2.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
