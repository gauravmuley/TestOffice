"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chkTick = exports.TreatWiseFeesCo = exports.TotalFeesCo = exports.createfeerg = exports.createUsr = exports.loginText = exports.mnuOptSelect = exports.loginStatus = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginStatus = _react["default"].createContext(false);

exports.loginStatus = loginStatus;

var mnuOptSelect = _react["default"].createContext(0);

exports.mnuOptSelect = mnuOptSelect;

var loginText = _react["default"].createContext('Login');

exports.loginText = loginText;

var createUsr = _react["default"].createContext(false);

exports.createUsr = createUsr;

var createfeerg = _react["default"].createContext(false);

exports.createfeerg = createfeerg;

var TotalFeesCo = _react["default"].createContext(false);

exports.TotalFeesCo = TotalFeesCo;

var TreatWiseFeesCo = _react["default"].createContext(false);

exports.TreatWiseFeesCo = TreatWiseFeesCo;

var chkTick = _react["default"].createContext(false);

exports.chkTick = chkTick;