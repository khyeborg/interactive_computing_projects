// our "cursor" object (class defined below)
var theCursor;

function setup() {
  createCanvas(500, 500);

  // create an instance of our cursor object
  theCursor = new RotatingBox();
}

function draw() {
  background(0);

  // ask our cursor to display itself
  theCursor.display();
}

// our rotating box class
class RotatingBox {

  constructor() {
    // the box needs to know its current angle
    this.angle = 0;

    // the box needs to know its current size
    this.mySize = 10;

    // the box needs to know by how much it should grow / shrink
    this.mySizeChange = 1;
  }

  // the box needs to know how to draw itself
  display() {

    // temporarily change the drawing state of the canvas
    push();

    // move the origin point to the mouse's current position
    translate(mouseX, mouseY);

    // rotate based on our current rotation
    rotate(radians(this.angle));

    // draw a rectangle here of the appropriate size
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.mySize, this.mySize);

    // draw four "tiny" rectangles
    rect(0, -this.mySize, this.mySize/2, this.mySize/2);
    rect(this.mySize, 0, this.mySize/2, this.mySize/2);
    rect(0, this.mySize, this.mySize/2, this.mySize/2);
    rect(-this.mySize, 0, this.mySize/2, this.mySize/2);

    // restore the drawing state
    pop();

    // update our angle and size
    this.angle+=1;
    this.mySize += this.mySizeChange;

    // see if we should switch from growing or shrinking
    if (this.mySize > 50 || this.mySize < 10) {
      this.mySizeChange *= -1;
    }
  }
}
