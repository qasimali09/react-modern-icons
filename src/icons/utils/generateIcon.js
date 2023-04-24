/* eslint-disable no-nested-ternary */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const generateIcon = (PathsGroup) => {
  function Icon({ color, size, varient, className, style, title, ...rest }) {
    const strokeWidth =
      varient === 'light' ? '1' : varient === 'bold' ? '2' : '1.5';
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        width={size}
        height={size}
        aria-label={title || undefined}
        {...(style ? { style } : {})}
        {...(className ? { className } : {})}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <PathsGroup color={color} strokeWidth={strokeWidth} varient={varient} />
      </svg>
    );
  }

  Icon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
    title: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    className: PropTypes.string,
  };

  Icon.defaultProps = {
    color: 'currentColor',
    size: '1em',
    title: null,
    varient: 'regular',
    style: {},
    className: '',
  };

  const MemoIcon = memo(Icon);

  return MemoIcon;
};

export default generateIcon;
