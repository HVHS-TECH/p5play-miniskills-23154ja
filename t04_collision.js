/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
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


	rect1 = new Sprite(400, 220, 50, 50, 's');

	rect1.color = 'green';

	rect1.vel.x = 5;


	circ1 = new Sprite(100, 170, 20, 'd');

	circ1.color = 'blue';

	circ1.vel.x = 9;

	circ1.bounciness = 1;

	circ1.friction = 0;

	circ1.drag = 1;




	circ2 = new Sprite(400, 100, 20, 'k');

	circ2.vel.y = 3;

	circ2.vel.x = 0.7;

	circ2.color = 'blue';



	rect2 = new Sprite(350, 500, 50, 50, 'n');

	rect2.color = 'green';


	platform1 = new Sprite(500, 600, 300, 5, 'k');

	platform1.rotation = -15;



	platform2 = new Sprite(250, 400, 5, 300, 'k');

	platform2.rotation = -2;


	platform3 = new Sprite(1000, 500, 5, 350, 'k');

	platform3.rotation = 60;
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