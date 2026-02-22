/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by Jacob
/*******************************************************/
	

	
function preload() {

  imgBG   = loadImage('../assets/images/space.jpg');

  imgFace = loadImage('../assets/images/face.png');

}
// drawloop variables

let state = 'notStarted';
let timerTime;
let frame = 0;
let score = 0;
let speedPercent;


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	frameRate(60);
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);




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

	
		drawWalls();

	}
	
function drawWalls() {

	walls = new Group();

	walls.collides(ball, hitWall);


	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');

	wallLH.color = 'black';

	wallLH.bounciness = 0;
	wallLH.friction = 0;
	wallLH.drag = 0;
	walls.add(wallLH);



	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');

	wallRH.color = 'black';

	wallRH.bounciness = 0;
	wallRH.friction = 0;
	wallRH.drag = 0;
	walls.add(wallRH);




	wallTop = new Sprite(windowWidth/2, 75, windowWidth, 8, 'k');

	wallTop.color = 'grey';

	wallTop.bounciness = 0;
	wallTop.friction = 0;
	wallTop.drag = 0;
	walls.add(wallTop);




	wallBottom = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');

	wallBottom.color = 'black';

	wallBottom.bounciness = 0;
	wallBottom.friction = 0;
	wallBottom.drag = 0;
	walls.add(wallBottom);



}

function hitWall( _ssss, _ball) {
	
	state = 'hitWall';
	ball.vel.x=0;
	ball.vel.y=0;

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {



	background(imgBG);  


	fill('black');

	rect(0, 0, windowWidth, 75);

	fill('white');

	textSize(50);

	text('score: '+score,windowWidth/100,windowHeight/14);
	


	if (state=="notStarted") {

		text('click to start',windowWidth/5, windowHeight/2);

		if (mouse.pressing()) {

			state = 'intermition';

			timerTime = millis() + 3000;

		}
	}


	if (state=='intermition') {

		if (timerTime <= millis()) {

			state = 'started';
		}

		text(Math.ceil((timerTime-millis())/1000), windowWidth/3, windowHeight/2)

	}	


	if (state=='started') { 
		runFrame();
		
	}


console.log(state);
	}

	function runFrame() {
		let x = mouseX-ball.x;



		let y = mouseY-ball.y;

	
	frame++;


	speedPercent = 0.000435*frame**0.511+0.05

	ball.moveTowards(ball.x-x,ball.y-y, speedPercent);


	score = floor(frame/6);
	
	}

/*******************************************************/
//  END OF APP
/*******************************************************/