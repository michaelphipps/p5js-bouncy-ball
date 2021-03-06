var bouncesound;

function preload(){
  bounceSound = loadSound('bounce.mp3');
}

function setup() {
  createCanvas(500, 600);

  bounceSound.setVolume(1); 
  bounceSound.amp(1); 
  bounceSound.playMode("restart");
  masterVolume(1);

  ampviz = new Ampviz();

  ball = new Ball();

  // Sine wave to represent volume of a second sound
/*
  carrier = new p5.Oscillator('sine');
  carrier.amp(0.25);
  carrier.freq(220);
  carrier.start();
*/
}

function draw() {
  background(0);

  ball.edges();
  ball.update();  

  ampviz.update();
  ampviz.show();

  ball.show();  
}
