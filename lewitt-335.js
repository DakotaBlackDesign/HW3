function setup() { 
  createCanvas(600, 400);
	background(0)
	stroke(255)
	fill(0)
	rectMode(CENTER)
	squarex = width/4
	squarey = height/2
	circlex = width * 3/4
	circley = height/2
	size = 240
	
for(var i = 10; i < width; i = i+10){
	line(i,0,i,height)
}

rect(squarex,squarey,size,size);
ellipse(circlex,circley,size,size);
	
for(i = height/2 - size/2 +10; i < height/2 + size/2; i = i+10){
	var y = i
	x = sqrt(sq(size/2) - sq(y-circley)) + circlex 
	x1 =  circlex - (x - circlex)
	line(x,y,x1,y)
	line(squarex-size/2,y,squarex+size/2,y)
}
}
// y = sqrt(sq(size/2))- sq(x-circlex)) + circley
// x = sqrt(sq(size/2) - sq(y-circley)) + circlex 
