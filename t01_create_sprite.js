/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by Jacob
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);

	rect = new Sprite(200, 200, 50, 50, 'd');

	rect.color = 'green';

	circ = new Sprite(100, 100, 20, 'd');

	circ.color = 'blue';
}
	//git config --global user.name "23154ja"
	//git config --global user.email 23154ja@hvhs.school.nz

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/