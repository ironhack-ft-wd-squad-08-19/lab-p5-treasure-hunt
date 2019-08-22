let img, img1, img2, img3, img4;
function preload() {
  img = loadImage('assets/character-down.png');
  img1 = loadImage('assets/character-left.png');
  img3 = loadImage('assets/character-up.png');
  img4 = loadImage('assets/treasure.png');
  img2 = loadImage('assets/character-right.png');
}
const game = new Game();
const player = new Player(0,0);
const treasure=new Treasure();
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player.setup();
}
function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}
function keyPressed() {
  console.log("keyPressed");
  if (keyCode === 38) {
    player.moveUp();
  } else if (keyCode === 40) {
    player.moveDown();
  } else if (keyCode === 37) {
    player.moveLeft();
  } else if (keyCode === 39) {
    player.moveRight();
  }
}
