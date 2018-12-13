var img1;

function preload(){
  soundFormats('mp3');
  mySound = loadSound('heartbeat.mp3');
  img1=loadImage("ekg.jpg");
}

function setup() {
  createCanvas(1100,700);
  mySound.setVolume(0.3);
  mySound.play();
  mySound.loop()
  noCursor();
}

function draw() {
  imageMode(CORNER)
  image(img1,0,0);
}