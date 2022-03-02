let img1;
let img2;
function preload() {
  img1 = loadImage('OvalPool.png');
  img2 = loadImage('Angelo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img1.resize(windowWidth/4,windowHeight/4);
  img2.resize(windowWidth/4,windowHeight/4);
  image(img2, windowWidth/10  + 100, windowHeight/10 + 200);
}

function draw() {
    image(img1, mouseX, mouseY);
}
