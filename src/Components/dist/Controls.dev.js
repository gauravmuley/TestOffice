"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Controls/Input"));

var _RadioGroup = _interopRequireDefault(require("./Controls/RadioGroup"));

var _CheckBox = _interopRequireDefault(require("./Controls/CheckBox"));

var _AppMenu = _interopRequireDefault(require("./AppMenu"));

var _Button = _interopRequireDefault(require("./Controls/Button"));

var _MultiCheckBox = _interopRequireDefault(require("./Controls/MultiCheckBox"));

var _Select = _interopRequireDefault(require("./Controls/Select"));

var _DatePicker = _interopRequireDefault(require("./Controls/DatePicker"));

var _SelectOne = _interopRequireDefault(require("./Controls/SelectOne"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Controls = {
  Input: _Input["default"],
  RadioGroup: _RadioGroup["default"],
  CheckBox: _CheckBox["default"],
  MultiCheckBox: _MultiCheckBox["default"],
  // AppBar,
  Button: _Button["default"],
  Select: _Select["default"],
  DatePicker: _DatePicker["default"],
  SelectOne: _SelectOne["default"]
};
var _default = Controls;
exports["default"] = _default;