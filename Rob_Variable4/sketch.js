var circle = { //this is the variable for the circle
  x:0, // this is the location of the circle
  y:200,
  diameter: 50 //this is the size of the circle
};

var r = 23; // this is the variable for the colors
var g = 160;
var b = 135;
function setup() {
  createCanvas(600, 400); // this is the canvas size
}

function draw() { 
  background(r, g, b); //this is the background color
  fill(250, 200, 200); //this is the color of the circle
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x = circle.x + 1; //this makes the circle move across the screen
}
