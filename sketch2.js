var capture;

function setup() {
  createCanvas(675,475);
  capture=createCapture(VIDEO);
  capture.size(300,200);
  capture.hide();
}

function draw() {
  background(255,255,0);
  //top row
  image(capture,25,25,300,200);
  image(capture,350,25,300,200);
  //bottom row
	image(capture,25,250,300,200);
  image(capture,350,250,300,200);
  filter(BLUR, 1);
}
