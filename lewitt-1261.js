function setup(){
  createCanvas(800,800)
	background(0)
	stroke(255)
  noFill()
  var a=0
for(var i = 0; i < 1500; i=i+2.5) {
  var size = i + (sin(a)) * -5
  ellipse(width/2,height/2, size, size)
	a = a + 0.11
  }
for( i = 0; i < 50000; i++) {
	ellipse(random(width),random(height),0.5,1)
  stroke(0)
	ellipse(random(width),random(height),1,0.5)
}
}
