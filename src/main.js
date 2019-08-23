const game = new Game();
let img1;
let img2;
let img3;
let img4;
let img5;
function preload()
{
  treasure.preload()
  player1.preload();
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  if (keyIsPressed){
    moveUpDown();
    moveLeftRight();
  }
}
function draw() {
  frameRate(24)
  clear();
  game.drawGrid();
  
  treasure.draw(); 
  player1.draw();
  if(player1.row===treasure.row && player1.column===treasure.column){
    treasure.setRandomPosition();
  }
  console.log(player1.column, player1.row, treasure.column, treasure.row);

 
}
 class Player{
  constructor(column,row){
    this.row=row;
    this.column=column;
    this.img;
  }
  preload()
{
   img3=loadImage("/assets/character-down.png");
   img4=loadImage("/assets/character-up.png");
   img1= loadImage("/assets/character-left.png");
   img2=loadImage("/assets/character-right.png");
   this.img=img1
}
  draw(){
    
    image(this.img,this.row,this.column,width/10,height/10)
  }
  moveUp(){
    this.row+=SQUARE_SIDE;
    this.img=img2;
    if(this.row>SQUARE_SIDE*9){
      this.row-=SQUARE_SIDE;

    }
  }
  moveDown(){
   this.row-=SQUARE_SIDE;
    this.img=img1;
    if(this.row<0){
      this.row+=SQUARE_SIDE;

    }
  }
  moveLeft(){
     this.column+=SQUARE_SIDE;
     this.img=img3
     if(this.column>SQUARE_SIDE*9){
      this.column-=SQUARE_SIDE;

    }
  }
  moveRight(){
     this.column-=SQUARE_SIDE;
     this.img=img4;
     if(this.column<0){
      this.column+=SQUARE_SIDE;

    }
  }
  
  
}
class Treasure{
  constructor(row,column){
    this.row=row;
    this.column=column;
  }
  preload(){
    img5=loadImage("/assets/treasure.png");

  }
  setRandomPosition(){
    this.row=Math.floor(Math.random()*9)*SQUARE_SIDE;
    this.column=Math.floor(Math.random()*9)*SQUARE_SIDE;
  }
  draw(){
    image(img5,this.row,this.column,width/10,height/10);
  }
}


const treasure= new Treasure(SQUARE_SIDE,SQUARE_SIDE);
const player1= new Player(0,0);
function moveUpDown() { // this controls using the keyboard
  if (keyCode === 38) { // 38 here is the up arrow
      player1.moveRight();
  } else if (keyCode === 40) { // 40 here is the down arrow
      player1.moveLeft();
  }
}
function moveLeftRight() {
  if (keyCode === 37) {
      player1.moveDown();
  } else if (keyCode === 39) {
      player1.moveUp();
  }
}
function keyPressed(){
  moveLeftRight();
  moveUpDown()  
}
if(player1.row===treasure.row && player1.column===treasure.column){
  treasure.setRandomPosition();
}

// player1.moveRight();
// player1.draw();
console.log(player1.column, player1.row);
