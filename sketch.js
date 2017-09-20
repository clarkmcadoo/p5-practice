function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(255,0,0);
  } else {
    fill(150, 150, 0);
  }
  ellipse(mouseX, mouseY, 10, 10);
}
