/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by Jacob
/*******************************************************/
	

	
function preload() {

  
}


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	
	cnv = new Canvas(windowWidth, windowHeight)
	//for (let i = 0; i < 23; i++) {
	//	
	//	var block = new Sprite(i*80 + 40, 40, 50, 50);
 	// 	block.color = color(255, 0, 0); // Red color

	//}


	}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
 allSprites.remove();

	for (let i = 0; i < 11; i++) {

		

		for (let j = 0; j<21; j++) {
			
			let spriteColor = color(255*(mouseX/windowWidth), 12.75*j, 25.5*i)
			
		var block = new Sprite(j*80 + 40, i*80 + 40, 50, 50);
 	 	block.color = spriteColor; // Red color

		}


	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/