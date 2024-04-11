precision mediump float;

uniform float millis;
uniform vec2 iResolution;

varying vec2 pos;

vec3 pal( in float t)
{
    vec3 a = vec3(0.11, 0.76, 0.45);
    vec3 b = vec3(0.0, 1.0, 1.0);
    vec3 c = vec3(.78, .43, .98);
    vec3 d = vec3(0.1, 0.1, 0.28);
    return a + b*cos( 6.28318*(c*t+d) );
}

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

    vec2 coord = uv;
    coord = uv * rotation(millis/1000.);

    float r = 0.25;
    float rf = 0.50;

    float d = sdStar5(coord, 0.75, 0.5);

    vec3 col = pal(d);

    d = sin(d*4. + millis/500.)/4.; // Adding time here, millis/1000 is 1 second

    d = smoothstep(0.0,0.1,d);

    col *= d;

    gl_FragColor = vec4(col, 1.0);

}