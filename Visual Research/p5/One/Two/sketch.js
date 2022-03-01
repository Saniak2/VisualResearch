let img3;
let img4;
function preload() {
  img3 = loadImage('Erechtheion.png');
  img4 = loadImage('HotelSoubise.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 0, 0);
  img3.resize(windowWidth/4,windowHeight/4);
  image(img3, windowWidth/10, windowHeight/10);
  img4.resize(windowWidth/4,windowHeight/4);
  image(img4, windowWidth/10  + 100, windowHeight/10 + 200);
}
