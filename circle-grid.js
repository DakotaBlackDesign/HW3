function setup() {
  createCanvas(400, 400);
  background(0)
}	

function draw(){
for ( var i = 20 ; i < width; i = i + 20){ // find row centers 
  var rowCenter = i;
  for ( var x = 20 ; x < width; x = x + 20){ //find column centers
    var y = rowCenter;
    ellipse(x,y,15,15); //create ellipses  
  }
 }
}
