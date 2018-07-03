const vsSource = `
attribute vec2 aVertexPosition;
uniform vec2 uResolution;

void main() {
    vec2 zeroToOne = aVertexPosition / uResolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;
 
    gl_Position = vec4(clipSpace, 0, 1);
}
`;

const fsSource = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec4 uColor;

void main() {
gl_FragColor = uColor;
}`

export {
    vsSource,
    fsSource
}