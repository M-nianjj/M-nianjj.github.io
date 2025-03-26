"use strict";

var _lib = _interopRequireDefault(require("./lib"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* global hexo */

hexo.extend.filter.register("before_exit", _lib.default);