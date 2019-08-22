const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
  player.preload();
  treasure.preload();
  treasure.setRandomPosition();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  player.move();
}
