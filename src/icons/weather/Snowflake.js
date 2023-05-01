import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function Snowflake({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3.33978 7.00042L6.80389 9.00042M6.80389 9.00042L17.1962 15.0004M6.80389 9.00042L5.70581 4.90234M6.80389 9.00042L2.70581 10.0985M17.1962 15.0004L20.6603 17.0004M17.1962 15.0004L21.2943 13.9023M17.1962 15.0004L18.2943 19.0985"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20.6602 7.00042L17.1961 9.00042M17.1961 9.00042L6.80376 15.0004M17.1961 9.00042L18.2941 4.90234M17.1961 9.00042L21.2941 10.0985M6.80376 15.0004L3.33966 17.0004M6.80376 15.0004L2.70569 13.9023M6.80376 15.0004L5.70569 19.0985"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3.33978 7.00042L6.80389 9.00042M6.80389 9.00042L17.1962 15.0004M6.80389 9.00042L5.70581 4.90234M6.80389 9.00042L2.70581 10.0985M17.1962 15.0004L20.6603 17.0004M17.1962 15.0004L21.2943 13.9023M17.1962 15.0004L18.2943 19.0985"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20.6602 7.00042L17.1961 9.00042M17.1961 9.00042L6.80376 15.0004M17.1961 9.00042L18.2941 4.90234M17.1961 9.00042L21.2941 10.0985M6.80376 15.0004L3.33966 17.0004M6.80376 15.0004L2.70569 13.9023M6.80376 15.0004L5.70569 19.0985"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
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

export default generateIcon(Snowflake);

Snowflake.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

Snowflake.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
