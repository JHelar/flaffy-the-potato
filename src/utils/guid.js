"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid = function () {
    function hex(s, b) {
        return s +
            (b >>> 4).toString(16) + // high nibble
            (b & 15).toString(16); // low nibble
    }
    var r = crypto.getRandomValues(new Uint8Array(16));
    r[6] = r[6] >>> 4 | 64; // Set type 4: 0100
    r[8] = r[8] >>> 3 | 128; // Set variant: 100
    return r.slice(0, 4).reduce(hex, '') +
        r.slice(4, 6).reduce(hex, '-') +
        r.slice(6, 8).reduce(hex, '-') +
        r.slice(8, 10).reduce(hex, '-') +
        r.slice(10, 16).reduce(hex, '-');
};
exports.default = guid;
//# sourceMappingURL=guid.js.map