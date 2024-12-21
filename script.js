//Move the froggie with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let froggie, daisy;
let score =0;
let speed = 2;
let lives = 5;
/* PRELOAD LOADS FILES */
function preload(){
  froggie = loadImage('assets/froggie.png');
  froggieEats = loadImage('assets/frog_eating.png');
  flower = loadImage('assets/flower.png');
  backdrop = loadImage('assets/bgr1.png');
  heart = loadImage('assets/heart.png');
  startScreen = loadImage('assets/startIMG.png');
}
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
//resize
  froggie.resize(60,80);
  flower.resize(25,25);
  froggieEats.resize(60,80);
  heart.resize(15,15);
  //Create froggie 
  froggie = new Sprite(froggie,200,340,"k" );

  //Create falling object
  daisy = new Sprite(flower, 100,0);
  daisy.vel.y = 2;

  //show lives
  h1 = new Sprite(heart,300,12, "n");
  h2 = new Sprite(heart,320,12, "n");
  h3 = new Sprite(heart,340,12, "n");
  h4 = new Sprite(heart,360,12, "n");
  h5 = new Sprite(heart,380,12, "n");

  eating= loadAni('assets/frog_eating.png');
  
   eating.frameDelay = 4;
}

/* DRAW LOOP REPEATS */
function draw() {
    background(backdrop);
  // Draw directions to screen
  fill("white");
  textSize(13);
  text("Little froggie \neats daisies,\n guide him\n with LEFT and RIGHT\n arrow keys.", 10, 35, "n");
  

  //daisy reaches bottom, moves back to random position on top
   if (daisy.y>= height) {
  daisy.y =0;
     daisy.x = random(5,395);
     daisy.vel.y = random(1,5);
     lives = lives -1;
   }
 
  //move froggie
  if (kb.pressing("left")) {
    froggie.vel.x = -4;
  } else if (kb.pressing("right")) {
    froggie.vel.x = 4;
  } else {
    froggie.vel.x = 0; 
  }
   //stop froggie at edges of screen
  if (froggie.pos.x < 30) {
    froggie.pos.x =30;
  } else if (froggie.pos.x > 370) {
    froggie.pos.x =370;
  }
  //if falling object collides froggie, move back to random position at top
  if (daisy.collides(froggie)) {
    daisy.y =0;
     daisy.x = random(10,390);
     daisy.vel.y = (speed);
    daisy.direction = "down";
    score = score+1;
    
  }  
  //display score
  fill("white");
  textSize(20);
  stroke(5);
  text ("SCORE = "+ score,10,10, "n");
  
  if (daisy.y>=250) {
    froggie.visible=(false);
   animation(eating,froggie.x,340);
  } else 
    froggie.visible=(true);
  if (score>=10) {
   daisy.vel.y = (speed+1);
  }

  if (score>=20)  {
    daisy.vel.y = (speed+2);
  }
  if (score>=30)  {
    daisy.vel.y = (speed+3);
  }
  if (score>=40)  {
    daisy.vel.y = (speed+4);
  }
  if (lives<=4) {
    h1.visible=(false);
  }
  if (lives<=3) {
    h2.visible=(false);
  }
  if (lives<=2) {
    h3.visible=(false);
  }
  if (lives<=1) {
    h4.visible=(false);
  }
  if (lives<=0) {
    h5.visible=(false);
    daisy.pos = {x:-100,y:-100};
    daisy.vel.y =0;
    froggie.pos ={x:-50,y:-50};
  gameOver()
    }
    
  

 
  
}
function gameOver() {
  background(backdrop);
  fill("black");
  stroke(5);
  textSize(20);
  text("Froggie is sad.\nYou lost.\nScore = " + score ,250,180);

}





  