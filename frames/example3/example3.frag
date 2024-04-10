precision mediump float;

uniform float millis;
uniform vec2 iResolution;

varying vec2 pos;

void main() {
    vec3 colRed = vec3(1.0, 0.0, 0.0);

    vec2 uv = (gl_FragCoord.xy * 1.0 - iResolution.xy) / iResolution.y;
    float d = length(uv);
    d -= 0.5;
    d = sin(d*8. + millis/1000.)/8.; // Adding time here, millis/1000 is 1 second
    d = abs(d);
    d = smoothstep(0.0, 0.1, d);

    d = 0.01 / d;
    
    colRed *= d;

    gl_FragColor = vec4(colRed, 1.0);
}