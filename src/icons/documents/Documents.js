import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function Documents({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 13H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 9H15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 17H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M1.75 10.0004V14.0004C1.75 16.8288 1.75 18.243 2.62868 19.1217C2.84602 19.339 3.09612 19.5026 3.39228 19.6257C3.38556 19.5812 3.37922 19.5366 3.37321 19.492C3.24986 18.5745 3.24992 17.4288 3.25 16.099L3.25 8.0003L3.25 7.90155V7.90155C3.24992 6.57182 3.24986 5.4261 3.37321 4.50861C3.37921 4.46399 3.38555 4.41944 3.39226 4.375C3.09611 4.49812 2.84601 4.6617 2.62868 4.87903C1.75 5.75771 1.75 7.17192 1.75 10.0004Z"
        fill={color}
      />
      <path
        d="M21.75 10.0004V14.0004C21.75 16.8288 21.75 18.243 20.8713 19.1217C20.654 19.339 20.4039 19.5026 20.1077 19.6257C20.1144 19.5812 20.1208 19.5366 20.1268 19.492C20.2501 18.5745 20.2501 17.4288 20.25 16.099V7.90156C20.2501 6.57183 20.2501 5.4261 20.1268 4.50861C20.1208 4.46399 20.1144 4.41944 20.1077 4.375C20.4039 4.49812 20.654 4.6617 20.8713 4.87903C21.75 5.75771 21.75 7.17192 21.75 10.0004Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.62868 2.87868C4.75 3.75736 4.75 5.17157 4.75 8V16C4.75 18.8284 4.75 20.2426 5.62868 21.1213C6.50736 22 7.92157 22 10.75 22H12.75C15.5784 22 16.9926 22 17.8713 21.1213C18.75 20.2426 18.75 18.8284 18.75 16V8C18.75 5.17157 18.75 3.75736 17.8713 2.87868C16.9926 2 15.5784 2 12.75 2H10.75C7.92157 2 6.50736 2 5.62868 2.87868ZM8 17C8 16.5858 8.33579 16.25 8.75 16.25H11.75C12.1642 16.25 12.5 16.5858 12.5 17C12.5 17.4142 12.1642 17.75 11.75 17.75H8.75C8.33579 17.75 8 17.4142 8 17ZM8.75 12.25C8.33579 12.25 8 12.5858 8 13C8 13.4142 8.33579 13.75 8.75 13.75H14.75C15.1642 13.75 15.5 13.4142 15.5 13C15.5 12.5858 15.1642 12.25 14.75 12.25H8.75ZM8 9C8 8.58579 8.33579 8.25 8.75 8.25H14.75C15.1642 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.1642 9.75 14.75 9.75H8.75C8.33579 9.75 8 9.41421 8 9Z"
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

export default generateIcon(Documents);

Documents.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

Documents.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
