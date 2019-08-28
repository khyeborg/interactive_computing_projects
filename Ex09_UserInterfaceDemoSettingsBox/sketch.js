// keep track of our settings
var colors = "rgb";
var shape = "ellipse";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (colors == "rgb") {
    fill(random(255), random(255), random(255));
  }
  else {
    fill(random(255));
  }
  if (shape == "ellipse") {
    ellipse(random(25, width-25), random(25, height-25), 25, 25);
  }
  else {
    rect(random(25, width-25), random(25, height-25), 25, 25);
  }
}

function processRequest() {
  // erase the background
  background(255);
  
  // get form values
  colors = select('#colors').value();
  shape = select('#shapes').value();
}

function toggleSettings() {
  // get the current display value of our settings window
  var currentDisplay = select("#settings").style('display');
  
  if (currentDisplay == "block") {
    select("#settings").style('display', 'none');
  }
  else {
    select("#settings").style('display', 'block');
  }
}
