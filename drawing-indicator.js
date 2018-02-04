function setup() { 
  createCanvas(400, 400);
  background(255)
  noStroke()
  fill(0)
} 

var diameter = 10;
var colors = (0) //variable to store color
function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
  ellipse(20,20,diameter) //indicator
}

function keyPressed() {
  print(key);
  if (key == 'R') {// red
    colors = '#CC2904'
    fill(colors);
  } else if (key == 'G') {//green
    colors = '#3DCC4D'
    fill(colors);
  } else if (key == 'B') {//blue
    colors = '#3CA6CC'
    fill(colors);
  } else if (key == 'Y') {//yellow
    colors = '#FFD227'
    fill(colors);
  } else if (key == 'O') {//orange
    colors = '#FF8E2B'
    fill(colors);
  } else if (key == 'P') {//purple
    colors = '#530E7F'
    fill(colors);
  } else if (key == 'X') {//black
    colors = 0
    fill(colors);
  } else if (key == 'Z') {//white or Eraser
    colors = 255
    fill(colors);
  }
 if (key == '1'){
   diameter = 10
   fill(255)
   ellipse(20,20,32) //reset indicator
   fill(colors)
 	} else if (key == '2') {
    diameter = 20
    fill(255)
    ellipse(20,20,32) //reset indicator
    fill(colors)
 	} else if (key == '3') {
    diameter = 30
  }
}
