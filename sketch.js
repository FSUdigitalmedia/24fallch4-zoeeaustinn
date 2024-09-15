let theFont;
let textSizeValue = 72;
let colorR = 0, colorG = 0, colorB = 255;
let yPos; 
let ySpeed = 5;
let bouncing = false;
let displayText = "hello" ;
let img; 




function preload(){
    theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf" );
    img = loadImage("assets/static-assets-upload5379841554699838318.webp");
}


function setup() {
  createCanvas(400, 400);
  textFont(theFont);
  textAlign(CENTER, CENTER);
  yPos = height / 2;


 
}

function draw() {
  background(255);

if (bouncing){
  yPos += ySpeed;


  if (yPos > height - 50 || yPos <50){
    ySpeed *= -1;

  }
}


  //text color & size 
  fill(colorR, colorG, colorB);
  textSize(textSizeValue);

  // text displayed
text(displayText, width/2, yPos);

// draw the image at mouse 
image(img, mouseX, mouseY, 80, 60)
}

function keyPressed() {
  // space key increases text size and changes color
  if (key === ' '){

    displayText = "increase!";

    //increase size by 10
    textSizeValue +=10;
    if (textSizeValue >150){

      //resets size
      textSizeValue = 72;
    }

    // change colors when space is pressed
    colorR = random(0, 255);
    colorG = random(0, 255);
    colorB = random (0, 255);
  }

  //stops bouncing when s is pressed
  if (key === 's' || key ==='s'){
    bouncing = false;

    displayText = "Stop!"
  }
  // increase speed with up arrow key 
  if (keyCode === UP_ARROW) {
    ySpeed+= 5;
  }

  // decrease speed with down arrow key
  if (keyCode === DOWN_ARROW) {
    ySpeed -=5;


    if (yspeed <1) {
      ySpeed = 1;
    }
  }
}


function mousePressed(){

  //starts bouncing when mouse is pressed 
  bouncing = true;

  //change text to shrink
  displayText = "shrink!";

  textSizeValue -=10;

  if (textSizeValue <10) {
    textSizeValue =10;
  }
}