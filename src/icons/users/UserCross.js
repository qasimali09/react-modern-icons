import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function UserCross({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5" />
        <path
          d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5"
          stroke="#1C274C"
          strokeWidth="1.5"
        />
        <circle cx="18" cy="16" r="4" stroke="#1C274C" strokeWidth="1.5" />
        <path
          d="M16.6665 14.6667L19.3332 17.3333M19.3335 14.6667L16.6668 17.3333"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM15.3569 16.532C15.1291 16.3042 14.7598 16.3042 14.532 16.532C14.3042 16.7598 14.3042 17.1291 14.532 17.3569L15.675 18.5L14.532 19.6431C14.3042 19.8709 14.3042 20.2402 14.532 20.468C14.7598 20.6958 15.1291 20.6958 15.3569 20.468L16.5 19.325L17.6431 20.468C17.8709 20.6958 18.2402 20.6958 18.468 20.468C18.6958 20.2402 18.6958 19.8709 18.468 19.6431L17.325 18.5L18.468 17.3569C18.6958 17.1291 18.6958 16.7598 18.468 16.532C18.2402 16.3042 17.8709 16.3042 17.6431 16.532L16.5 17.675L15.3569 16.532Z"
          fill="#1C274C"
        />
        <path
          d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
          fill="#1C274C"
        />
        <path
          d="M15.6782 13.5028C15.2051 13.5085 14.7642 13.5258 14.3799 13.5774C13.737 13.6639 13.0334 13.8705 12.4519 14.4519C11.8705 15.0333 11.6639 15.737 11.5775 16.3799C11.4998 16.9576 11.4999 17.6635 11.5 18.414V18.586C11.4999 19.3365 11.4998 20.0424 11.5775 20.6201C11.6381 21.0712 11.7579 21.5522 12.0249 22C12.0166 22 12.0083 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C13.3262 13 14.577 13.1815 15.6782 13.5028Z"
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

export default generateIcon(UserCross);

UserCross.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

UserCross.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
