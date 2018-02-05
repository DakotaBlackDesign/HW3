// function must be called be in draw()
// must be run in http://p5js.zamfi.net/ will not work in rudy

function dblackpatch(x,y){
  w = 100 
  h = 100
  fill(255)
  stroke(255)
  rect(x,y,w,h)
	xpoints = []
  ypoints = []
	colorMode(HSB,255)
	frameRate(24)
  strokeWeight(0.01);
  noFill();
	stroke((128 + 128 * sin(millis() / 5000)),255,(128 + 128 * sin(millis() /1000)));	//color fader
	
	var i = 0;
	var x1 = x;
	var y1 = y;
	var x2 = x;
	var y2 = y;
	for( i = x; i <= x+w; i = i + 10){
    x1 = x+w/2;
  	y1 = y
    x2 = i 
    y2 = y+h
    line(x1,y1,x2,y2);
		append(xpoints,i);	
  }
	
	for( i = y; i <= y+h; i = i + 10){
    x1 = x
  	y1 = y+w/2;
    x2 = x+h 
    y2 = i
    line(x1,y1,x2,y2);
    append(ypoints,i);
  }
	for( i = x; i <= x+w; i = i + 10){
    x1 = x+w/2;
  	y1 = y+h
    x2 = i 
    y2 = y
    line(x1,y1,x2,y2);
  }
	for( i = y; i <= y+h; i = i + 10){
    x1 = x+w
  	y1 = y+h/2;
    x2 = x 
    y2 = i
    line(x1,y1,x2,y2);
  }
	num = xpoints.length
	for(i = 0;i<num; i++){	
		line(x,y+h,xpoints[i],y)
		line(x,y+h,x+w,ypoints[i])
		line(x,y,xpoints[i],y+h)
		line(x,y,x+w,ypoints[i])
		line(x+w,y+h,xpoints[i],y)
		line(x+w,y+h,x,ypoints[i])
		line(x+w,y,x,ypoints[i])
		line(x+w,y,xpoints[i],y+h)
	}
}





