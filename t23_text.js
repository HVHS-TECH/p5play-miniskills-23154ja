/*******************************************************/
// P5.play: t23_text
// Desplay text
// Written by Jacob
/*******************************************************/
	

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);
	
	
	}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('white');


    text("Hello World", 50, 50);

    var name = "Mr Bob";

    text("Hello "+name, 50, 100);


    var timer = Math.floor(millis()/1000);

    textSize(100);

    fill("green");

    text(timer, windowWidth/2, windowHeight/2);
    
    fill("black");
    textSize(12);
    
}


/*******************************************************/
//  END OF APP
/*******************************************************/