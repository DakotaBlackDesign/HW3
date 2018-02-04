function setup() {
  createCanvas(400, 400);
  stroke(50)
  strokeWeight(1)
  rectMode(CENTER)
  noFill()
  for ( var i = 20 ; i < width; i = i + 50){ // find row centers 
    var rowCenter = i
    for ( var x = 20 ; x < width; x = x + 50){ //find column centers
      var y = rowCenter
      for( var a = 10; a < 50; a = a + 10){ // create rectangles
          var x1 = x
          var y1 = y
          var x2 = a
          var y2 = a 
          rect(x1,y1,x2,y2)
      }
  	}
 	}
}
