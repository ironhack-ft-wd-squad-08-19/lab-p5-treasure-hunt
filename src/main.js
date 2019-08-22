const game = new Game();
const player1 = new Player(0, 0);
const treasure1 = new Treasure();

function preload() {
  player1.preload();
  treasure1.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear()
  game.drawGrid();
  player1.draw();
  treasure1.drawTreasure();

}

function moveLeftRight() {

  if (keyCode === 37) {
    player1.row -= 1;
  } else if (keyCode === 39) {
    player1.row += 1;
  }

}

function moveUpDown() {
  if (keyCode === 38) {
    // UP_ARROW
    player1.column -= 1;
  } else if (keyCode === 40) {
    // DOWN_ARROW
    player1.column += 1;
  }
}


function keyPressed() {
  moveUpDown();
  moveLeftRight();
}