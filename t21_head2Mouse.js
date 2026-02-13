/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by Jacob
/*******************************************************/
	

	
function preload() {

  imgBG   = loadImage('../assets/images/space.jpg');

  imgFace = loadImage('../assets/images/face.png');

}


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;


	drawWalls();


	ball = new Sprite(width/2, height/2, 50, 'd');

	ball.color = 'cyan';

	ball.vel.x = 7;

	ball.vel.y = -10;

	ball.bounciness = 0;
	//bounciness < 1 removes momentum from the system, bounciness > 1 adds momentum to the system, bounciness = 1 conserves momentum

	ball.friction = 0;

	ball.drag = 0;

	ball.image = (imgFace);

	imgFace.resize(50, 50);

	
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

	// Register a callback:

	// if any alien in alienGroup collides with ball, call func2Call

	alienGroup.collides(ball, kill);


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

function kill( _ssss, _ball) {
	//kill
	_ssss.remove();


	_ball.physics = 'k';
	_ball.physics = 'd';
// ask why this makes a difference

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);  

	//ball.moveTowards(mouseX, mouseY, 0.01);



	let x = mouseX-ball.x;



	let y = mouseY-ball.y;



	ball.moveTowards(ball.x-x,ball.y-y, 0.05);

	
}

/*******************************************************/
//  END OF APP
/*******************************************************/