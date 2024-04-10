precision mediump float;

uniform float millis;

varying vec2 pos;

void main() {
    float c = (sin(pos.x * 16. + millis/1000.) + 1.)/ 2.;
    gl_FragColor = vec4(c, 0.5, 1.0, 1.0);
}