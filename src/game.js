let playerImg;
let treasureImg;

function preload() {
  playerImg = loadImage('../assets/character-down.png');
  treasureImg = loadImage('../assets/treasure.png');
}

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i <= 10; i++) {
      line((WIDTH / 10) * i, 0, (WIDTH / 10) * i, HEIGHT);
      line(0, (HEIGHT / 10) * i, WIDTH, (HEIGHT / 10) * i);
    }
  }
}

class Player {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    if (this.row > 0) this.row -= 1;
  }
  moveDown() {
    if (this.row < 9) this.row += 1;
  }
  moveLeft() {
    if (this.col > 0) this.col -= 1;
  }
  moveRight() {
    if (this.col < 9) this.col += 1;
  }

  draw() {
    image(playerImg, (this.col * 100) + 20, (this.row * 100) + 20, playerImg.width * 2, playerImg.height * 2);
  }

}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }

  drawTreasure() {
    image(treasureImg, (this.col * 100), (this.row * 100), treasureImg.width / 2, treasureImg.height / 2);
  }
}

function keyPressed() {

  switch (keyCode) {
    case LEFT_ARROW:
      player1.moveLeft();
      break;
    case RIGHT_ARROW:
      player1.moveRight();
      break;
    case UP_ARROW:
      player1.moveUp();
      break;
    case DOWN_ARROW:
      player1.moveDown();
      break;
    default:
      console.log("DAMN!");
  }
}

//test

let treasure = new Treasure(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
// treasure.setRandomPosition(9, 9);
let player1 = new Player(0, 0);