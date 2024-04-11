/* var s = function( p ) { // p could be any variable name
    var x = 100; 
    var y = 100;
    p.setup = function() {
      p.createCanvas(400, 200);
    };
  
    p.draw = function() {
      p.background(0);
      p.fill(255);
      p.rect(x,y,50,50);
    };
  };
  var myp5 = new p5(s, 'c1');
  
  // Sketch Two
  var t = function( p ) { 
    var x = 100.0; 
    var y = 100; 
    var speed = 2.5; 
    p.setup = function() {
      p.createCanvas(400, 200);
    };
  
    p.draw = function() {
      p.background(100);
      p.fill(1);
      x += speed; 
      if(x > p.width){
        x = 0; 
      }
      p.ellipse(x,y,50,50);
  
    };
  };
  var myp5 = new p5(t, 'c2'); */

  // Sketch 1
  var sketch1 = function ( sketch ) {
    var x = 100.0;
    var y = 100.0;
    let exampleShader;
    
    sketch.preload = () => {
        exampleShader = sketch.loadShader('frames/example1/example1.vert', 'frames/example1/example1.frag');
    }

    sketch.setup = () => {
        sketch.createCanvas(600, 600, sketch.WEBGL);

        sketch.shader(exampleShader);

        sketch.noStroke();
    }

    sketch.draw = () => {
        exampleShader.setUniform("millis", sketch.millis());
        sketch.background(220);
        sketch.fill(200);
        sketch.rect(x,y,100,100);
    }
  }

  var myp5 = new p5(sketch1, 's1');

  // Sketch 2
  var sketch2 = function ( sketch ) {
    var x = 100.0;
    var y = 100.0;
    let exampleShader;
    
    sketch.preload = () => {
        exampleShader = sketch.loadShader('frames/example2/example2.vert', 'frames/example2/example2.frag');
    }

    sketch.setup = () => {
        sketch.createCanvas(600, 600, sketch.WEBGL);

        sketch.shader(exampleShader);

        sketch.noStroke();
    }

    sketch.draw = () => {
        exampleShader.setUniform("millis", sketch.millis());
        sketch.background(220);
        sketch.fill(200);
        sketch.rect(x,y,100,100);
    }
  }

  var myp5 = new p5(sketch2, 's2');


  // Sketch 3
  var sketch3 = function ( sketch ) {
    var x = 100.0;
    var y = 100.0;
    let exampleShader;
    
    sketch.preload = () => {
        exampleShader = sketch.loadShader('frames/example3/example3.vert', 'frames/example3/example3.frag');
    }

    sketch.setup = () => {
        sketch.createCanvas(600, 600, sketch.WEBGL);
        sketch.shader(exampleShader);
        sketch.noStroke();
    }

    sketch.draw = () => {
        exampleShader.setUniform("millis", sketch.millis());
        exampleShader.setUniform("iResolution", [sketch.width,sketch.height]);
        sketch.background(220);
        sketch.fill(100);
        sketch.rect(x,y,100,100);
    }
  }
  var myp5 = new p5(sketch3, 's3');



  // Sketch 4
  var sketch4 = function ( sketch ) {
    var x = 100.0;
    var y = 100.0;
    let exampleShader;
    
    sketch.preload = () => {
        exampleShader = sketch.loadShader('frames/example4/example4.vert', 'frames/example4/example4.frag');
    }

    sketch.setup = () => {
        sketch.createCanvas(600, 600, sketch.WEBGL);
        sketch.shader(exampleShader);
        sketch.noStroke();
    }

    sketch.draw = () => {
        exampleShader.setUniform("millis", sketch.millis());
        exampleShader.setUniform("iResolution", [sketch.width,sketch.height]);
        sketch.background(220);
        sketch.fill(100);
        sketch.rect(x,y,100,100);
    }
  }
  var myp5 = new p5(sketch4, 's4');

var sketch5 = function ( sketch ) {
    var x = 100.0;
    var y = 100.0;
    let exampleShader;

    sketch.preload = () => {
        exampleShader = sketch.loadShader('frames/fractal1/fractal1.vert', 'frames/fractal1/fractal1.frag');
    }

    sketch.setup = () => {
        sketch.createCanvas(600,600,sketch.WEBGL);
        sketch.shader(exampleShader);
        sketch.noStroke();
    }

    sketch.draw = () => {
        exampleShader.setUniform("millis", sketch.millis());
        exampleShader.setUniform("iResolution", [sketch.width,sketch.height]);
        sketch.background(220);
        sketch.fill(100);
        sketch.rect(x,y,100,100);
    }
}
var myp5 = new p5(sketch5, 's5');

/*var sketch6 = function ( sketch ) {
    var x = 100.0;
    var y = 100.0;
    let exampleShader;

    sketch.preload = () => {
        exampleShader = sketch.loadShader('frames/fractal2/fractal2.vert', 'frames/fractal2/fractal2.frag');
    }

    sketch.setup = () => {
        sketch.createCanvas(600,600,sketch.WEBGL);
        sketch.shader(exampleShader);
        sketch.noStroke();
    }

    sketch.draw = () => {
        exampleShader.setUniform("millis", sketch.millis());
        exampleShader.setUniform("iResolution", [sketch.width,sketch.height]);
        sketch.background(220);
        sketch.fill(100);
        sketch.rect(x,y,100,100);
    }
}
var myp5 = new p5(sketch6, 's6');*/