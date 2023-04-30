/* eslint-disable no-nested-ternary */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const generateIcon = (PathsGroup) => {
  function Icon({ color, size, variant, className, style, title, ...rest }) {
    const strokeWidth =
      variant === 'light' ? '1' : variant === 'bold' ? '2' : '1.5';
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        aria-label={title || undefined}
        {...(style ? { style } : {})}
        {...(className ? { className } : {})}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <PathsGroup color={color} strokeWidth={strokeWidth} variant={variant} />
      </svg>
    );
  }

  Icon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(['light', 'regular', 'bold', 'filled']),
    title: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    className: PropTypes.string,
  };

  Icon.defaultProps = {
    color: 'currentColor',
    size: '1em',
    title: null,
    variant: 'regular',
    style: {},
    className: '',
  };

  const MemoIcon = memo(Icon);

  return MemoIcon;
};

export default generateIcon;
