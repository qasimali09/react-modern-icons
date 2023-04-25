import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function ClipboardRemove({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M16 4C18.175 4.01211 19.3529 4.10856 20.1213 4.87694C21 5.75562 21 7.16983 21 9.99826V15.9983C21 18.8267 21 20.2409 20.1213 21.1196C19.2426 21.9983 17.8284 21.9983 15 21.9983H9C6.17157 21.9983 4.75736 21.9983 3.87868 21.1196C3 20.2409 3 18.8267 3 15.9983V9.99826C3 7.16983 3 5.75562 3.87868 4.87694C4.64706 4.10856 5.82497 4.01211 8 4"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.5 11L9.50004 16M9.50002 11L14.5 16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M9.5 2C8.67157 2 8 2.67157 8 3.5V4.5C8 5.32843 8.67157 6 9.5 6H14.5C15.3284 6 16 5.32843 16 4.5V3.5C16 2.67157 15.3284 2 14.5 2H9.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.87868 4.87694C4.44798 4.30764 5.24209 4.10719 6.5 4.03662V4.5C6.5 6.15685 7.84315 7.5 9.5 7.5H14.5C16.1569 7.5 17.5 6.15685 17.5 4.5V4.03662C18.7579 4.10719 19.552 4.30764 20.1213 4.87694C21 5.75562 21 7.16983 21 9.99826V15.9983C21 18.8267 21 20.2409 20.1213 21.1196C19.2426 21.9983 17.8284 21.9983 15 21.9983H9C6.17157 21.9983 4.75736 21.9983 3.87868 21.1196C3 20.2409 3 18.8267 3 15.9983V9.99826C3 7.16983 3 5.75562 3.87868 4.87694ZM12 13.4394L10.0303 11.4697C9.73744 11.1768 9.26256 11.1768 8.96967 11.4697C8.67678 11.7626 8.67678 12.2374 8.96967 12.5303L10.9394 14.5L8.96969 16.4697C8.6768 16.7626 8.6768 17.2374 8.96969 17.5303C9.26258 17.8232 9.73746 17.8232 10.0304 17.5303L12 15.5607L13.9696 17.5303C14.2625 17.8232 14.7374 17.8232 15.0303 17.5303C15.3232 17.2374 15.3232 16.7625 15.0303 16.4697L13.0607 14.5L15.0303 12.5303C15.3232 12.2375 15.3232 11.7626 15.0303 11.4697C14.7374 11.1768 14.2626 11.1768 13.9697 11.4697L12 13.4394Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        opacity="0.5"
        d="M16 4C18.175 4.01211 19.3529 4.10856 20.1213 4.87694C21 5.75562 21 7.16983 21 9.99826V15.9983C21 18.8267 21 20.2409 20.1213 21.1196C19.2426 21.9983 17.8284 21.9983 15 21.9983H9C6.17157 21.9983 4.75736 21.9983 3.87868 21.1196C3 20.2409 3 18.8267 3 15.9983V9.99826C3 7.16983 3 5.75562 3.87868 4.87694C4.64706 4.10856 5.82497 4.01211 8 4"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.5 11L9.50004 16M9.50002 11L14.5 16"
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

export default generateIcon(ClipboardRemove);

ClipboardRemove.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

ClipboardRemove.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
