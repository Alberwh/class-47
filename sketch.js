var bg,bg2,form,system,code,security;
var score=0;
var form,player,game
var gameState = 0,playerCount 
var database
var playerCount = 0
function preload() {
  bg = loadImage("bg.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight-200);
  database = firebase.database()
 
  //form = new Form()
  //form.screen0()
  game = new Game()
  game.getState()
  game.start()
 
}

function draw() {
  if (playerCount >1){
    game . update(1)
  }
  if (gameState> 1){
    clear()
    game.start()
  }
  /*
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
 drawSprites()

    */
}