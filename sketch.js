function setup() {
  createCanvas(800, 600);
}

var value = 0;
var x = 25;
var y = 25;

function draw() {
  background(255);
  fill(value);
  rect(x, y, 50, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 50;
    console.log(x,y);
  } else if (keyCode === RIGHT_ARROW) {
    x += 50;
    console.log(x,y);
  } else if (keyCode === UP_ARROW) {
    y -= 50;
    console.log(x,y);
  } else if (keyCode === DOWN_ARROW) {
    y += 50;
    console.log(x,y);
  }
}
