import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function CloudBolt({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M6.28571 18C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887M14.381 7.02721C14.9767 6.81911 15.6178 6.70588 16.2857 6.70588C16.9404 6.70588 17.5693 6.81468 18.1551 7.01498M7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498M7.11616 9.60887C7.68059 9.71839 8.20528 9.9374 8.66667 10.2426M18.1551 7.01498C20.393 7.78024 22 9.88113 22 12.3529C22 15.0599 20.0726 17.3221 17.5 17.8722"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9.62607 17.4534L10.7744 15.8998C11.5166 14.8955 11.8878 14.3934 12.234 14.4995C12.5803 14.6056 12.5803 15.2215 12.5803 16.4532V16.5694C12.5803 17.0136 12.5803 17.2358 12.7222 17.3751L12.7297 17.3823C12.8748 17.5187 13.106 17.5187 13.5683 17.5187C14.4004 17.5187 14.8165 17.5187 14.9571 17.771C14.9594 17.7752 14.9617 17.7794 14.9639 17.7837C15.0966 18.0399 14.8557 18.3659 14.3739 19.0177L13.2256 20.5713C12.4833 21.5756 12.1122 22.0777 11.7659 21.9716C11.4197 21.8655 11.4197 21.2496 11.4197 20.0179L11.4197 19.9018C11.4197 19.4575 11.4197 19.2354 11.2778 19.096L11.2703 19.0888C11.1252 18.9524 10.894 18.9524 10.4317 18.9524C9.59958 18.9524 9.18354 18.9524 9.04294 18.7001C9.04061 18.6959 9.03835 18.6917 9.03615 18.6874C8.90342 18.4312 9.1443 18.1053 9.62607 17.4534Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );

  const filledIcon = () => (
    <g>
      <path
        d="M9.62607 17.4647L10.7744 15.91C11.5166 14.905 11.8878 14.4025 12.234 14.5087C12.5803 14.6149 12.5803 15.2312 12.5803 16.4638V16.58C12.5803 17.0246 12.5803 17.2469 12.7222 17.3863L12.7297 17.3935C12.8748 17.53 13.106 17.53 13.5683 17.53C14.4004 17.53 14.8165 17.53 14.9571 17.7825C14.9594 17.7867 14.9617 17.7909 14.9639 17.7952C15.0966 18.0516 14.8557 18.3778 14.3739 19.0301L13.2256 20.5848C12.4833 21.5897 12.1122 22.0922 11.7659 21.986C11.4197 21.8798 11.4197 21.2635 11.4197 20.0309L11.4197 19.9148C11.4197 19.4702 11.4197 19.2479 11.2778 19.1085L11.2703 19.1012C11.1252 18.9648 10.894 18.9648 10.4317 18.9648C9.59958 18.9648 9.18354 18.9648 9.04294 18.7122C9.04061 18.708 9.03835 18.7038 9.03615 18.6996C8.90342 18.4431 9.1443 18.117 9.62607 17.4647Z"
        fill={color}
      />
      <path
        d="M7.57755 18.0112C7.6367 17.8041 7.71731 17.6363 7.77668 17.5248C7.93435 17.2285 8.17537 16.9027 8.37785 16.629L9.6185 14.9492C9.94501 14.5069 10.2737 14.0616 10.5718 13.7516C10.7896 13.5251 11.5685 12.7345 12.6735 13.0733C13.8116 13.4224 13.9817 14.5527 14.0235 14.8632C14.0684 15.1965 14.0779 15.6082 14.0798 16.0315C14.3047 16.0358 14.5305 16.0469 14.7297 16.0748C15.0643 16.1216 15.8367 16.2783 16.2673 17.0517C16.2771 17.0692 16.2866 17.0869 16.2957 17.1046C16.4608 17.4236 16.5105 17.7318 16.5 18.0073C19.5566 17.8959 22 15.4102 22 12.3602C22 9.88664 20.393 7.78428 18.1551 7.01849C17.8371 4.19524 15.4159 2 12.4762 2C9.32028 2 6.7619 4.53004 6.7619 7.65101C6.7619 8.3413 6.88706 9.00269 7.11616 9.61419C6.8475 9.56202 6.56983 9.53468 6.28571 9.53468C3.91878 9.53468 2 11.4322 2 13.7729C2 16.1137 3.91878 18.0112 6.28571 18.0112H7.57755Z"
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

export default generateIcon(CloudBolt);

CloudBolt.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

CloudBolt.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
