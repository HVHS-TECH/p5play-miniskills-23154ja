/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by Jacob
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;


	drawWalls();


	ball_1 = new Sprite(width/2, height/2, 50, 'd');

	ball_1.color = 'cyan';

	ball_1.vel.x = 7;

	ball_1.vel.y = -10;

	ball_1.bounciness = 1;
	//bounciness < 1 removes momentum from the system, bounciness > 1 adds momentum to the system, bounciness = 1 conserves momentum

	ball_1.friction = 0;

	ball_1.drag = 0;
	}
	
function drawWalls() {



	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');

	wallLH.color = 'black';


	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');

	wallRH.color = 'green';


	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');

	wallTop.color = 'blue';



	wallBottom = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');

	wallBottom.color = 'red';


	//wallBot = new Sprite(x, y, w, h, 'k');

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