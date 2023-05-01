import React from 'react';
import PropTypes from 'prop-types';
import generateIcon from '../utils/generateIcon';

function CloudSnowfall({ color, strokeWidth, variant }) {
  const defaultIcon = () => (
    <g>
      <path
        d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12.001 15V22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9.00293 16.7314L15.0016 20.1948"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.999 16.7314L9.00031 20.1948"
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
        d="M12.001 14.25C12.4152 14.25 12.751 14.5858 12.751 15V17.1633L14.624 16.0819C14.9827 15.8748 15.4414 15.9977 15.6485 16.3564C15.8556 16.7152 15.7327 17.1739 15.374 17.381L13.501 18.4624L15.3766 19.5453C15.7354 19.7524 15.8583 20.2111 15.6512 20.5698C15.4441 20.9285 14.9854 21.0514 14.6266 20.8443L12.751 19.7614V22C12.751 22.4142 12.4152 22.75 12.001 22.75C11.5868 22.75 11.251 22.4142 11.251 22V19.7614L9.37531 20.8443C9.01659 21.0514 8.5579 20.9285 8.35079 20.5698C8.14368 20.2111 8.26659 19.7524 8.62531 19.5453L10.501 18.4624L8.62793 17.381C8.26921 17.1739 8.1463 16.7152 8.35341 16.3564C8.56052 15.9977 9.01921 15.8748 9.37793 16.0819L11.251 17.1633V15C11.251 14.5858 11.5868 14.25 12.001 14.25Z"
        fill={color}
      />
      <path
        d="M7.56405 18.462C6.73518 17.7748 6.49747 16.5703 7.05395 15.6064C7.61051 14.6425 8.77269 14.2461 9.78242 14.6206C9.96277 13.5586 10.8872 12.75 12.0006 12.75C13.1139 12.75 14.0383 13.5586 14.2187 14.6206C15.2284 14.2461 16.3906 14.6425 16.9472 15.6064C17.5036 16.5703 17.2659 17.7748 16.4371 18.462L16 19L16.8885 18.969C19.7611 18.6713 22 16.2705 22 13.3529C22 10.8811 20.393 8.78024 18.1551 8.01498C17.8371 5.19371 15.4159 3 12.4762 3C9.32028 3 6.7619 5.52827 6.7619 8.64706C6.7619 9.33687 6.88706 9.9978 7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 17.1038 3.91878 19 6.28571 19H7.09281H8L7.56405 18.462Z"
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

export default generateIcon(CloudSnowfall);

CloudSnowfall.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
};

CloudSnowfall.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  variant: 'regular',
};
