/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by Jacob
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 3.5;
	world.gravity.x = 3.5;


	rect1 = new Sprite(400, 200, 50, 50, 's');

	rect1.color = 'green';

	rect1.vel.x = 5;


	circ1 = new Sprite(100, 200, 20, 'd');

	circ1.color = 'blue';

	circ1.vel.x = 9;


	circ2 = new Sprite(400, 100, 20, 'k');

	circ2.vel.y = 3;

	circ2.vel.x = 0.7;

	circ2.color = 'blue';



	rect2 = new Sprite(350, 400, 50, 50, 'n');

	rect2.color = 'green';


	
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/