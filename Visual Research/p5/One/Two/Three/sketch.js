let img5;
function preload() {
  img5 = loadImage('RoyalBotanicGarden.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img5.resize(windowWidth/4,windowHeight/4);
  image(img5, windowWidth/5, windowHeight/10);
}
