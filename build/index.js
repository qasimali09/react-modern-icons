'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded = ["color", "size", "varient", "className", "style", "title"];
var generateIcon = function generateIcon(PathsGroup) {
  function Icon(_ref) {
    var color = _ref.color,
      size = _ref.size,
      varient = _ref.varient,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);
    var strokeWidth = varient === 'light' ? '1' : varient === 'bold' ? '2' : '1.5';
    return /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 22 22",
      width: size,
      height: size,
      "aria-label": title || undefined
    }, style ? {
      style: style
    } : {}, className ? {
      className: className
    } : {}, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement(PathsGroup, {
      color: color,
      strokeWidth: strokeWidth,
      varient: varient
    }));
  }
  Icon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone']),
    title: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    className: PropTypes.string
  };
  Icon.defaultProps = {
    color: 'currentColor',
    size: '1em',
    title: null,
    varient: 'regular',
    style: {},
    className: ''
  };
  var MemoIcon = /*#__PURE__*/React.memo(Icon);
  return MemoIcon;
};

function NotificationUnread(_ref) {
  var color = _ref.color,
    strokeWidth = _ref.strokeWidth,
    varient = _ref.varient;
  var defaultIcon = function defaultIcon() {
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M21 9.5V11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1H12.5",
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "4",
      r: "3",
      stroke: color,
      strokeWidth: strokeWidth
    }));
  };
  var filledIcon = function filledIcon() {
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M10 20C5.28595 20 2.92893 20 1.46447 18.5355C0 17.0711 0 14.714 0 10C0 5.28595 0 2.92893 1.46447 1.46447C2.92893 0 5.28595 0 10 0C11.3988 0 12.59 5.58794e-08 13.612 0.0382589C12.9196 0.829672 12.5 1.86584 12.5 3C12.5 5.48528 14.5147 7.5 17 7.5C18.1342 7.5 19.1703 7.08042 19.9617 6.38802C20 7.40999 20 8.60124 20 10C20 14.714 20 17.0711 18.5355 18.5355C17.0711 20 14.714 20 10 20Z",
      fill: color
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 3C20 4.65685 18.6569 6 17 6C15.3431 6 14 4.65685 14 3C14 1.34315 15.3431 0 17 0C18.6569 0 20 1.34315 20 3Z",
      fill: color
    }));
  };
  var duotoneIcon = function duotoneIcon() {
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      opacity: "0.5",
      d: "M21 9.5V11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1H12.5",
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "4",
      r: "3",
      stroke: color,
      strokeWidth: strokeWidth
    }));
  };
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
var NotificationUnread$1 = generateIcon(NotificationUnread);
NotificationUnread.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  varient: PropTypes.oneOf(['light', 'regular', 'bold', 'filled', 'duotone'])
};
NotificationUnread.defaultProps = {
  color: 'currentColor',
  strokeWidth: '1.5px',
  varient: 'regular'
};

exports.NotificationUnread = NotificationUnread$1;
