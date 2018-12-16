"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vsSource = "\nattribute vec2 aVertexPosition;\nuniform vec2 uResolution;\n\nvoid main() {\n    vec2 zeroToOne = aVertexPosition / uResolution;\n    vec2 zeroToTwo = zeroToOne * 2.0;\n    vec2 clipSpace = zeroToTwo - 1.0;\n    vec2 upsidedown = clipSpace * vec2(1.0, -1.0);\n\n    gl_Position = vec4(upsidedown, 0, 1);\n}\n";
exports.vsSource = vsSource;
var fsSource = "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec4 uColor;\n\nvoid main() {\ngl_FragColor = uColor;\n}";
exports.fsSource = fsSource;
//# sourceMappingURL=shaders.js.map