const game = new Game();
const player = new Player(0, 1);
let img;
let treasure;
const treasureBox = new Treasure(0, 0);


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  img = loadImage(`assets/character-down.png`)
  treasureBox.setRandomPosition();
  treasure = loadImage(`assets/treasure.png`)

}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasureBox.drawTreasure();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  } else if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  }
}