precision mediump float;
varying vec2 pos;

void main() {
    vec3 circle = vec3(0.5,0.5,0.3);
    float d = length(pos - circle.xy) - circle.z;
    d = smoothstep(0.0,0.01,d);
    gl_FragColor = vec4(d, d, d, 1.0);
}