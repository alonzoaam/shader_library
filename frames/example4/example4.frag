precision mediump float;

uniform float millis;
uniform vec2 iResolution;

varying vec2 pos;

float sdStar5(in vec2 p, in float r, in float rf) {
    vec2 k1 = vec2(0.809016994375, -0.587785252292);
    vec2 k2 = vec2(-k1.x, k1.y);
    p.x = abs(p.x);

    p -= 2.0*max(dot(k1, p), 0.0)*k1;
    p -= 2.0*max(dot(k2, p), 0.0)*k2;
    p.x = abs(p.x);
    p.y -= r;
    vec2 ba = rf*vec2(-k1.y, k1.x) - vec2(0,1);
    float h = clamp( dot(p,ba)/dot(ba,ba), 0.0, r);
    return length(p-ba*h) * sign(p.y*ba.x-p.x*ba.y);
}

mat2 rotation(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 1.0 - iResolution.xy) / iResolution.y;

    vec3 col = vec3(1.0, 0.0, 0.0);

    vec2 coord = uv;
    coord = uv * rotation(millis/1000.);

    float r = 0.25;
    float rf = 0.50;

    float d = sdStar5(coord, 0.25, 0.50);

    d = sin(d*5. + millis/1000.)/5.; // Adding time here, millis/1000 is 1 second

    d = smoothstep(0.0,0.1,d);

    gl_FragColor = vec4(d, d, d, 1.0);

}