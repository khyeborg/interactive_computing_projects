function setup() {
  createCanvas(500, 500);
  
  // store the current state of the canvas - this includes the origin position and
  // rotation as well as drawing controls (fill, stroke, etc)
  push();
  
  // next, move the origin point to the center of the screen
  // 0,0 from now on is in the middle of the screen
  translate(width/2, height/2);
  
  // ask p5 to rotate the entire canvas 45 degrees
  rotate( radians(45) );
  
  // draw a rectangle here, making sure to draw from the center point
  rectMode(CENTER);
  rect(0,0,100,100);
  
  // restore the canvas - this moves the origin point back to where it was
  // before we called "push" (top left side of the screen) - rotation information
  // and any drawing controls invoked after the call to push() are restored as well
  pop();
}

function draw() {
  
}