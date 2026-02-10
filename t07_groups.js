/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
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

	
	aliens(25);

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

function aliens(n) {

	// Create a group for the aliens

	alienGroup = new Group();


	for (i = 0; i < n; i++) {

  alien = new Sprite(500,700,40,40, 'd');

  alien.vel.x = 8;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

  alien.drag = 0;


  alienGroup.add(alien);
}
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