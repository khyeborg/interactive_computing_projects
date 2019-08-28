// position, size & rotation of each planet
var sunX, sunY;
var mercuryAngle, venusAngle, earthAngle;

function setup() {
  createCanvas(500,500);
  
  // set the starting values for each planet
  sunX = 250;
  sunY = 250;
  mercuryAngle = 0;
  venusAngle = 0;
  earthAngle = 0;
}

function draw() {
  background(0);
  
  // draw the sun
  fill(255, 230, 0);
  ellipse(sunX, sunY, 50, 50);
  
  // draw mercury in the right spot
  push();
  fill(255,0,0);
  translate(sunX, sunY);
  rotate(radians(mercuryAngle));
  ellipse(0, 50, 10, 10);
  pop();
  
  // draw venus in the right spot
  push();
  fill(0,255,0);
  translate(sunX, sunY);
  rotate(radians(venusAngle));
  ellipse(0, 100, 20, 20);
  pop();
  
  // draw earth in the right spot
  push();
  fill(0,0,255);
  translate(sunX, sunY);
  rotate(radians(earthAngle));
  ellipse(0, 150, 25, 25);
  pop();

  // update angles of each planet
  mercuryAngle += 5;
  venusAngle += 3;
  earthAngle += 1;
  
  
}