import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function ArchiveDown({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 7L12 16M12 16L15 12.6667M12 16L9 12.6667"
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
        d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
        fill={color}
      />
      <path
        d="M20.0689 8.49993C20.2101 8.49999 20.3551 8.50005 20.5 8.49805V12.9999C20.5 16.7711 20.5 18.6568 19.3284 19.8283C18.1569 20.9999 16.2712 20.9999 12.5 20.9999H11.5C7.72876 20.9999 5.84315 20.9999 4.67157 19.8283C3.5 18.6568 3.5 16.7711 3.5 12.9999V8.49805C3.64488 8.50005 3.78999 8.49999 3.93114 8.49993L11.25 8.49992L11.25 15.0454L9.55748 13.1648C9.28038 12.8569 8.80617 12.832 8.49828 13.1091C8.1904 13.3862 8.16544 13.8604 8.44254 14.1683L11.4425 17.5016C11.5848 17.6596 11.7874 17.7499 12 17.7499C12.2126 17.7499 12.4152 17.6596 12.5575 17.5016L15.5575 14.1683C15.8346 13.8604 15.8096 13.3862 15.5017 13.1091C15.1938 12.832 14.7196 12.8569 14.4425 13.1648L12.75 15.0454L12.75 8.49992L20.0689 8.49993Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        opacity="0.5"
        d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 7L12 16M12 16L15 12.6667M12 16L9 12.6667"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
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

export default generateIcon(ArchiveDown);

ArchiveDown.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

ArchiveDown.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
