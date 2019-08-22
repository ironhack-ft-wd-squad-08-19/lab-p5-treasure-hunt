const game = new Game();
const player = new Player();
const treasure = new Treasure();
// const treasure = new Treasure(
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10)
// );

let viDown, viUp, viLeft, viRight, crystal;
function preload() {
  viDown = loadImage("../assets/character-down.png");
  viUp = loadImage("../assets/character-up.png");
  viLeft = loadImage("../assets/character-left.png");
  viRight = loadImage("../assets/character-right.png");
  crystal = loadImage("../assets/treasure.png");
  treasure.setRandomPosition();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.draw();
  // if (keyIsPressed) {
  //   keyPressed();
  // }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    console.log("left");
    player.moveLeft();
  }
  if (keyCode === RIGHT_ARROW) {
    console.log("right");
    player.moveRight();
  }
  if (keyCode === UP_ARROW) {
    console.log("left");
    player.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    console.log("right");
    player.moveDown();
  }
}
