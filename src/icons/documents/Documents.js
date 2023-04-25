import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function Documents({ color, strokeWidth, varient }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M4 7C4 4.17157 4 2.75736 4.87868 1.87868C5.75736 1 7.17157 1 10 1H12C14.8284 1 16.2426 1 17.1213 1.87868C18 2.75736 18 4.17157 18 7V15C18 17.8284 18 19.2426 17.1213 20.1213C16.2426 21 14.8284 21 12 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M4 3.07617C3.02491 3.17208 2.36857 3.38885 1.87868 3.87873C1 4.75741 1 6.17163 1 9.00005V13.0001C1 15.8285 1 17.2427 1.87868 18.1214C2.36857 18.6113 3.02491 18.828 4 18.9239"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M18 3.07617C18.9751 3.17208 19.6314 3.38885 20.1213 3.87873C21 4.75741 21 6.17163 21 9.00005V13.0001C21 15.8285 21 17.2427 20.1213 18.1214C19.6314 18.6113 18.9751 18.828 18 18.9239"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 12H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 8H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 16H11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M0.75 8.00035V12.0004C0.75 14.8288 0.75 16.243 1.62868 17.1217C1.84602 17.339 2.09612 17.5026 2.39228 17.6257C2.38556 17.5812 2.37922 17.5366 2.37321 17.492C2.24986 16.5745 2.24992 15.4288 2.25 14.099L2.25 6.0003L2.25 5.90155V5.90155C2.24992 4.57182 2.24986 3.4261 2.37321 2.50861C2.37921 2.46399 2.38555 2.41944 2.39226 2.375C2.09611 2.49812 1.84601 2.6617 1.62868 2.87903C0.75 3.75771 0.75 5.17192 0.75 8.00035Z"
        fill={color}
      />
      <path
        d="M20.75 8.00035V12.0004C20.75 14.8288 20.75 16.243 19.8713 17.1217C19.654 17.339 19.4039 17.5026 19.1077 17.6257C19.1144 17.5812 19.1208 17.5366 19.1268 17.492C19.2501 16.5745 19.2501 15.4288 19.25 14.099V5.90156C19.2501 4.57183 19.2501 3.4261 19.1268 2.50861C19.1208 2.46399 19.1144 2.41944 19.1077 2.375C19.4039 2.49812 19.654 2.6617 19.8713 2.87903C20.75 3.75771 20.75 5.17192 20.75 8.00035Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.62868 0.87868C3.75 1.75736 3.75 3.17157 3.75 6V14C3.75 16.8284 3.75 18.2426 4.62868 19.1213C5.50736 20 6.92157 20 9.75 20H11.75C14.5784 20 15.9926 20 16.8713 19.1213C17.75 18.2426 17.75 16.8284 17.75 14V6C17.75 3.17157 17.75 1.75736 16.8713 0.87868C15.9926 0 14.5784 0 11.75 0H9.75C6.92157 0 5.50736 0 4.62868 0.87868ZM7 15C7 14.5858 7.33579 14.25 7.75 14.25H10.75C11.1642 14.25 11.5 14.5858 11.5 15C11.5 15.4142 11.1642 15.75 10.75 15.75H7.75C7.33579 15.75 7 15.4142 7 15ZM7.75 10.25C7.33579 10.25 7 10.5858 7 11C7 11.4142 7.33579 11.75 7.75 11.75H13.75C14.1642 11.75 14.5 11.4142 14.5 11C14.5 10.5858 14.1642 10.25 13.75 10.25H7.75ZM7 7C7 6.58579 7.33579 6.25 7.75 6.25H13.75C14.1642 6.25 14.5 6.58579 14.5 7C14.5 7.41421 14.1642 7.75 13.75 7.75H7.75C7.33579 7.75 7 7.41421 7 7Z"
        fill={color}
      />
    </g>
  );

  const duotoneIcon = () => (
    <g>
      <path
        d="M4 7C4 4.17157 4 2.75736 4.87868 1.87868C5.75736 1 7.17157 1 10 1H12C14.8284 1 16.2426 1 17.1213 1.87868C18 2.75736 18 4.17157 18 7V15C18 17.8284 18 19.2426 17.1213 20.1213C16.2426 21 14.8284 21 12 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        opacity="0.5"
        d="M4 3.07617C3.02491 3.17208 2.36857 3.38885 1.87868 3.87873C1 4.75741 1 6.17163 1 9.00005V13.0001C1 15.8285 1 17.2427 1.87868 18.1214C2.36857 18.6113 3.02491 18.828 4 18.9239"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        opacity="0.5"
        d="M18 3.07617C18.9751 3.17208 19.6314 3.38885 20.1213 3.87873C21 4.75741 21 6.17163 21 9.00005V13.0001C21 15.8285 21 17.2427 20.1213 18.1214C19.6314 18.6113 18.9751 18.828 18 18.9239"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        opacity="0.7"
        d="M8 12H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 8H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M8 16H11"
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

export default generateIcon(Documents);

Documents.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
};

Documents.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular',
};
