/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by Jacob
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	width = random(300,600);
	height = random(300,600);

	spriteX= random(50,150);
	spriteY=  random(50,150);

	spriteWidth = spriteX/2
	spriteHeight = spriteY/2

cnv = new Canvas(width, height);

red = new Sprite(spriteWidth, spriteHeight ,spriteX, spriteY);
red.color = 'red';

green = new Sprite( width-spriteWidth, spriteHeight ,spriteX, spriteY);
green.color = 'green';

blue = new Sprite( width-spriteWidth, height-spriteHeight , spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite( spriteWidth, height-spriteHeight , spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite( width/2, height/2 , spriteX, spriteY);
purple.color = 'purple';
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('cyan'); 
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/