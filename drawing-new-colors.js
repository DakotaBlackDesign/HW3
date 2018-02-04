function setup() { 
  createCanvas(400, 400);
  background(255)
  noStroke()
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill('#CC2904');
  } else if (key == 'G') {
    fill('#3DCC4D');
  } else if (key == 'B') {
    fill('#3CA6CC');
  } else if (key == 'Y') {
    fill('#FFD227');
  } else if (key == 'O') {
    fill('#FF8E2B');
  } else if (key == 'P') {
    fill('#530E7F');
  }
}
