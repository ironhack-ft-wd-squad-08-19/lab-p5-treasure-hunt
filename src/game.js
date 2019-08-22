let playerImgDown, playerImgUp, playerImgRight, playerImgLeft;
let treasureImg;
let playerImg;

function preload() {
  playerImg = loadImage('../assets/character-down.png')
  playerImgDown = loadImage('../assets/character-down.png');
  playerImgUp = loadImage('../assets/character-up.png');
  playerImgRight = loadImage('../assets/character-right.png');
  playerImgLeft = loadImage('../assets/character-left.png');
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
  constructor(row, col, playerNb) {
    this.row = row;
    this.col = col;
    this.score = 0;
    this.playerNb = playerNb;
  }
  moveUp() {
    if (this.row > 0) this.row -= 1;
    playerImg = playerImgUp;
  }
  moveDown() {
    if (this.row < 9) this.row += 1;
    playerImg = playerImgDown;
  }
  moveLeft() {
    if (this.col > 0) this.col -= 1;
    playerImg = playerImgLeft;
  }
  moveRight() {
    if (this.col < 9) this.col += 1;
    playerImg = playerImgRight;
  }

  draw() {
    image(playerImg, (this.col * 100) + 20, (this.row * 100) + 20, 60, 60);
  }

  checkWin() {
    if (this.col === treasure.col && this.row === treasure.row) {
      this.score++;
      console.log(this.playerNb, "scores:", this.score);
      if (this.playerNb === 1) scoreDisplay1.innerHTML = this.score;
      if (this.playerNb === 2) scoreDisplay2.innerHTML = this.score;
      treasure.setRandomPosition();
    }
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
  player1.checkWin();

  switch (keyCode) {
    case 65:
      player2.moveLeft();
      break;
    case 68:
      player2.moveRight();
      break;
    case 87:
      player2.moveUp();
      break;
    case 83:
      player2.moveDown();
      break;
    default:
      console.log("DAMN!");
  }
  player2.checkWin();
}

//test

let treasure = new Treasure(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
let player1 = new Player(0, 0, 1);
let player2 = new Player(9, 9, 2);

let scoreDisplay1 = document.querySelector('#score-display1');
let scoreDisplay2 = document.querySelector('#score-display2');