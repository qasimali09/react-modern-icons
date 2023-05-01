import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function RoundSortVertical({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75"
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.5 7.25C14.7113 7.25 14.9128 7.33914 15.055 7.4955L17.555 10.2455C17.8336 10.552 17.811 11.0263 17.5045 11.305C17.198 11.5836 16.7237 11.561 16.445 11.2545L15.25 9.93996L15.25 16C15.25 16.4142 14.9142 16.75 14.5 16.75C14.0858 16.75 13.75 16.4142 13.75 16V9.93996L12.555 11.2545C12.2763 11.561 11.802 11.5836 11.4955 11.305C11.189 11.0263 11.1664 10.552 11.445 10.2455L13.945 7.4955C14.0872 7.33914 14.2887 7.25 14.5 7.25ZM9.5 7.25C9.91421 7.25 10.25 7.58579 10.25 8V14.06L11.445 12.7455C11.7237 12.439 12.198 12.4164 12.5045 12.695C12.811 12.9737 12.8336 13.448 12.555 13.7545L10.055 16.5045C9.91281 16.6609 9.71131 16.75 9.5 16.75C9.28869 16.75 9.08719 16.6609 8.94504 16.5045L6.44504 13.7545C6.16641 13.448 6.189 12.9737 6.49549 12.695C6.80199 12.4164 7.27632 12.439 7.55495 12.7455L8.75 14.06L8.75 8C8.75 7.58579 9.08579 7.25 9.5 7.25Z"
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

export default generateIcon(RoundSortVertical);

RoundSortVertical.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

RoundSortVertical.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
