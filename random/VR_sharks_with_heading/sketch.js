var world;

// our sharks
var theSharks = [];

function setup() {
  // no canvas needed
  noCanvas();

  // construct the A-Frame world
  // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
  world = new World('VRScene');

  // create 10 sharks
  for (var i = 0; i < 50; i++) {
    theSharks.push(new Shark());
  }
}

function draw() {

  // move our sharks
  for (var i = 0; i < theSharks.length; i++) {
    theSharks[i].move();
  }
}

class Shark {

  constructor() {
    // build a container for this shark
    this.container = new Container3D({
      x: random(-50, 50),
      y: random(-50, 50),
      z: random(-50, 50),
      rotationY: random(360),
    });
    world.add(this.container);

    // next add a shark to our container
    this.shark = new DAE({
      x: 0,
      y: 0,
      z: 0,
      asset: 'shark'
    });
    this.container.addChild(this.shark);

    // add in a little "sensor" in front of the shark we will have the shark
    // constantly move toward this sensor
    // (give this box an opacity of 0.0 if you want to hide it)
    this.sensor = new Box({
      x: 0,
      y: 0,
      z: 5,
      opacity: 0.2
    });
    this.container.addChild(this.sensor);

    // perlin noise offset
    this.noiseOffset = random(1000);
  }

  // have the shark move
  move() {

    // sway a little with perlin noise
    var swayAmount = map(noise(this.noiseOffset), 0, 1, -1, 1);
    this.container.spinY(swayAmount);
    //console.log(swayAmount);
    this.noiseOffset += 0.01;

    // distance to move
    var d = 0.05;

    // move forward a little bit (this code uses some math that I wrote for the 'moveUserForward' function)

    // compute the world position of our sensor (not the local position inside of our container)
    var vectorHUD = new THREE.Vector3();
    vectorHUD.setFromMatrixPosition(this.sensor.tag.object3D.matrixWorld);

    // now compute how far off we are from this position
    var xDiff = vectorHUD.x - this.container.getX();
    var yDiff = vectorHUD.y - this.container.getY();
    var zDiff = vectorHUD.z - this.container.getZ();
    console.log(zDiff);

    // nudge the container toward this position
    this.container.nudge(xDiff * d, yDiff * d, zDiff * d);
  }

}
