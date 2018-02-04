function setup() { 
  createCanvas(400, 400);
  background(255)
  noStroke()
  fill(0)
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {// red
    fill('#CC2904');
  } else if (key == 'G') {//green
    fill('#3DCC4D');
  } else if (key == 'B') {//blue
    fill('#3CA6CC');
  } else if (key == 'Y') {//yellow
    fill('#FFD227');
  } else if (key == 'O') {//orange
    fill('#FF8E2B');
  } else if (key == 'P') {//purple
    fill('#530E7F');
  } else if (key == 'X') {//black
    fill(0);
  } else if (key == 'Z') {//white or Eraser
    fill(255);
  }
 if (key == '1'){
   diameter = 10
 	} else if (key == '2') {
    diameter = 20
 	} else if (key == '3') {
    diameter = 30
  }
}
