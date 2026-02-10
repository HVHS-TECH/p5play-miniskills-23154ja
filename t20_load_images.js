/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by Jacob
/*******************************************************/
	
function preload() {

  imgBG   = loadImage('../assets/images/space.jpg');

  imgFace = loadImage('../assets/images/face.png');

}
// ask what's calling the func
// figured it out, preload is a spicifc func that preloads


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth, windowHeight);



	ball_1 = new Sprite(width/2, height/2, 50, 'd');

	ball_1.bounciness = 1;

	ball_1.friction   = 0;

	ball_1.image = (imgFace);

	imgFace.resize(50, 50);
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	background(imgBG); 

}

/*******************************************************/
//  END OF APP
/*******************************************************/