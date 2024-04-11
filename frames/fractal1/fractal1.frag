precision mediump float;

uniform float millis;
uniform vec2 iResolution;

varying vec2 pos;

float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12454.1,78345.2))) * 43758.5);
}

vec2 random2(in vec2 st) {
    return vec2(random(st), random(st));    
}

vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos(6.28318 * (c*t + d));
}

float iterate(vec2 p) {

    vec2 z = vec2(0), c = p;

    for(float i = 0.; i < 64.; i++) {
        z = mat2(z, -z.y, z.x) * z + c;
        if(dot(z, z) > 32.*32.) break;
    }
   float i = 63.;

    return i - log(log(dot(z, z)) / log(32.)) / log(2.);  
}

void main() {
    vec2 R = iResolution.xy;

    vec3 col = vec3(0);
    for(float i=0.; i < 4.; i++) {

        vec2 uv = (gl_FragCoord.xy + random2(R+i) - R) / R.y ;

        float sn = iterate(uv) / 64.;   

        col += pal(fract(2.*sn + 0.5), vec3(.5), vec3(0.5), 
                   vec3(1.0,1.0,1.0), vec3(.0, .10, .2));
    }

    
    
    gl_FragColor = vec4(col / 1.3, 1.0);
}