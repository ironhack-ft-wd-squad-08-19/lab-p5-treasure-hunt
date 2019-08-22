const game = new Game();
const player = new Player(0, 0, 1);
const treasure = new Treasure(9, 9);
const player2 = new Player(0, 0, 2);

function preload() {
  player.preload();
  treasure.preload();
  player2.preload();
}

// function setup() {
//   let canvas = createCanvas(WIDTH, HEIGHT);
//   canvas.parent("canvas");
//   //img = loadImage('assets/character-down.png');
//   // 1. Background image
//   // Top-left corner of the img is at (0, 0)
//   // Width and height are the img's original width and height, 100 x 100
//   image(img, 0, 0);
//   // 2. Top right image
//   // Top-left corner of destination rectangle is at (50, 0)
//   // Destination rectangle width and height are 40 x 20
//   // The next parameters are relative to the source image:
//   // - Starting at position (50, 50) on the source image, capture a 50 x 50
//   // subsection
//   // - Draw this subsection to fill the dimensions of the destination rectangle
//   // image(img, 50, 0, 40, 20, 50, 50, 50, 50);
// }

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
  player2.draw();
  // player2.draw()
}

function keyPressed() {
  player.keys();
  player2.keys();
}
// player.moveDown();
// player.moveDown();
// player.moveRight();
// // player.moveRight();
// player.draw();
console.log(player);
