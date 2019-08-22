const game = new Game();

const player = new Player(0, 0);

const player2 = new Player2(450, 450);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  imgDown = loadImage("assets/character-down.png");
  imgUp = loadImage("assets/character-up.png");
  imgLeft = loadImage("assets/character-left.png");
  imgRight = loadImage("assets/character-right.png");

  player.moveDown();
  player.moveDown();
  player.moveRight();
  player2.moveUp();
  // player.draw(imgDown);
  console.log(player.col, player.row);
  console.log(player2.col, player2.row);
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  player2.draw();
  // clear();
  console.log(player.col, player.row);
  console.log(player2.col, player2.row);
}

function keyPressed() {
  player.keyPressed();
  player2.keyPressed();
}
