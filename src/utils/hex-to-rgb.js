"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
exports.default = hexToRgb;
//# sourceMappingURL=hex-to-rgb.js.map