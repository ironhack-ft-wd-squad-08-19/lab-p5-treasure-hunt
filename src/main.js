const game = new Game();
let player = new Player(0, 0);
let treasure = new Treasure(0, 0);

function preload() {
  player.preload();
  treasure.preload();
}

function keyPressed() {
  player.keyPressed();
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  game.treasureFound();
  treasure.drawTreasure();
}
