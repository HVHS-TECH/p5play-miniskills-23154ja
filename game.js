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
	frameRate(60);
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);
	//world.gravity.y = 10;


	drawWalls();


	ball = new Sprite(width/2, height/2, 50, 'd');

	ball.color = 'cyan';

	ball.vel.x = 0;

	ball.vel.y = 0;

	ball.bounciness = 0;
	//bounciness < 1 removes momentum from the system, bounciness > 1 adds momentum to the system, bounciness = 1 conserves momentum

	ball.friction = 0;

	ball.drag = 0;

	ball.image = (imgFace);

	imgFace.resize(50, 50);

	
	
	}
	
function drawWalls() {



	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');

	wallLH.color = 'black';

	wallLH.bounciness = 0;
	wallLH.friction = 0;
	wallLH.drag = 0;




	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');

	wallRH.color = 'green';

	wallRH.bounciness = 0;
	wallRH.friction = 0;
	wallRH.drag = 0;




	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');

	wallTop.color = 'blue';

	wallTop.bounciness = 0;
	wallTop.friction = 0;
	wallTop.drag = 0;






	wallBottom = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');

	wallBottom.color = 'red';

	wallBottom.bounciness = 0;
	wallBottom.friction = 0;
	wallBottom.drag = 0;
	//wallBot = new Sprite(x, y, w, h, 'k');

}

let state = notStarted;
let startTimer = 3;
let frame = 0;
let score = 0;
let speedPercent;
/*******************************************************/
// draw()
/*******************************************************/
function draw() {



	background(imgBG);  

	fill('white');

	textSize(50);

	text('score: '+score,windowWidth/100,windowHeight/15);

	text('click to start',windowWidth/3, windowHeight/2);
	


	if (state==started) { 
	runFrame();
	}


	}

	function runFrame() {
		let x = mouseX-ball.x;



	let y = mouseY-ball.y;

	
	frame++;


speedPercent = 0.000435*frame**0.511+0.05

	ball.moveTowards(ball.x-x,ball.y-y, speedPercent);


	score = floor(frame/60);
	console.log(frame);
	console.log(speedPercent);
	
	}

/*******************************************************/
//  END OF APP
/*******************************************************/