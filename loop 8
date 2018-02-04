function setup() { 
  createCanvas(400, 400);
	colorMode(HSB,255);
	size=5;
	size2=5;
	size3=5;
	size4=5;
}
	 
	var rate = 0.07;
	var x = 0;
	var y = 0;
	

function draw() { 
  background(255);
	stroke(128 + 128 * sin(millis() / 1000),255,255);
	var targetx = mouseX;
	var targety = mouseY;
	x = targetx*rate + x*(1-rate); 
	y = targety*rate + y*(1-rate);
	noFill();
	ellipse(x,y,size,size);
	size = size + 5;
	if (size > 100){
		ellipse(x,y,size2,size2);
		size2 = size2 +5;
	}	
	if (size > 200){
		ellipse(x,y,size3,size3);
		size3 = size3 +5;
	}	
	if (size > 300){
		ellipse(x,y,size4,size4);
		size4 = size4 +5;
	}	
	if (size >= 800){
		size = 5;
	}	
	if (size2 >= 700){
		size2 = 5;
	}	
	if (size3 >= 600){
		size3 = 5;
	}	
	if (size4 >= 500){
		size4 = 5;
	}	
	fill(128 + 128 * sin(millis() / 1000),255,255);
	ellipse(x, y, (20 * sin(millis() / 100))*(3 * sin(millis() / 100)), 15*(3 * sin(millis() / 100)));
}
