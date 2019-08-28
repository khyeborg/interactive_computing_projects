var rangeData = 100;
var radioData = "ellipse";

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  
  strokeWeight(5);
  fill(255,0,0);
}

function draw() {
  background(235);
  
  // grab the text box data and paint it to the screen
  var textBoxData = select('#textBox').value();
  text(textBoxData, 20, 20);

  // grab the data in the text area box and paint it to the screen
  var textAreaData = select('#textArea').value();
  text(textAreaData, 20, 40);

  // draw ellipses
  if (radioData == "ellipse") {
    ellipse(400, 400, rangeData, rangeData);
  }
  else {
    rect(400, 400, rangeData, rangeData);
  }
}

function changeColor() {
  fill(random(255));
}

function updateRange(clickedRange) {
  // grab the range data as an integer
  rangeData = int(clickedRange.value);
}

function updateRadio(clickedRadio) {
  // grab the value of the clicked radio button (as a String)
  radioData = clickedRadio.value;
}

function updateSelect(clickedMenu) {
  // grab the data from the menu
  var menuData = clickedMenu.value;
  
  // evaluate the user's choice
  if (menuData == "red") {
    fill(255,0,0);
  }
  else if (menuData == "green") {
    fill(0,255,0);
  }
  else if (menuData == "blue") {
    fill(0,0,255);
  }
}