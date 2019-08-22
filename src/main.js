const game = new Game();
// let imgUp;
// let imgDown;
// let imgRight;
// let imgLeft;
// let imgTreasure;

function preload() {
  //player.preload()
}

function setup() {
  let canvas = createCanvas(HEIGHT, WIDTH);
  player.preload();
  treasure.preload();
  canvas.parent("canvas");
}

const player = new Player(3, 4);
const treasure= new Treasure();

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  } else if (keyCode === UP_ARROW) {
    player.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  }
}
