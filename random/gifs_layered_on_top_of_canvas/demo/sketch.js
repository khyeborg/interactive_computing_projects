var canvas;

function setup() {
  // set the background size of our canvas
  canvas = createCanvas(500, 500);
  background(0);
}

function draw() {
  for (var i = 0; i < movers.length; i++) {
    movers[i].move();
  }
}


var movers = [];
function mousePressed() {
  movers.push( new Mover(mouseX, mouseY) );
}


// construct new DOM elements for each GIF instead of rendering them onto the p5 canvas directly
class Mover {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.noiseOffsetX = random(0,1000);
    this.noiseOffsetY = random(1000,2000);
    this.image = createImg('test.gif');
    this.image.parent('#container');
    this.image.style('position', 'absolute');
    this.image.style('z-index', '10');
    this.image.style('top', this.y+'px');
    this.image.style('left', this.x+'px');
  }

  move() {
    console.log(this.x, this.y);
    this.x += map(noise(this.noiseOffsetX), 0, 1, -2, 2);
    this.y += map(noise(this.noiseOffsetY), 0, 1, -2, 2);
    this.noiseOffsetX+=0.01;
    this.noiseOffsetY+=0.01;
    this.image.style('top', this.y+'px');
    this.image.style('left', this.x+'px');
  }
}
