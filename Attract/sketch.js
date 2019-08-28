var creatures = [];

function setup() {
  createCanvas(800,600);
  for (var i = 0; i < 50; i++) {
    creatures.push( new CreatureThatAttracts(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < creatures.length; i++) {
    // visit every other creature and see if we need to attract
    for (var j = i+1; j < creatures.length; j++) {
      creatures[i].attract( creatures[j] );
    }

    // display the creature
    creatures[i].moveAndDisplay();
  }
}

class CreatureThatAttracts {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.noiseOffsetX = random(0,1000);
    this.noiseOffsetY = random(0,1000);
    this.attractionZoneSize = 150;
  }

  moveAndDisplay() {
    this.x += map( noise(this.noiseOffsetX), 0, 1, -2, 2);
    this.y += map( noise(this.noiseOffsetY), 0, 1, -2, 2);
    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.01;

    // draw the creature
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 10, 10);

    // draw the 'attraction zone' for the creature
    noFill();
    stroke(0,255,0);
    ellipse(this.x, this.y, this.attractionZoneSize, this.attractionZoneSize);
  }

  attract(otherCreature) {
    // see how far away we are from the other creatures
    var d = dist(this.x, this.y, otherCreature.x, otherCreature.y);
    // are we within the atraction zone?
    if (d < this.attractionZoneSize) {
      // move toward this creature a little bit
      var dX = otherCreature.x - this.x;
      var dY = otherCreature.y - this.y;

      // move 5% of the way to the new creature
      this.x += dX * 0.05;
      this.y += dY * 0.05;
    }
  }


}
