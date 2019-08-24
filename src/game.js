class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let x = 0; x <= 500; x += 50) {
      line(x, 0, x, 500);
    }

    for (let y = 0; y <= 500; y += 50) {
      line(0, y, 500, y);
    }
  }

  treasureFound() {
    if (player.col === treasure.col && player.row === treasure.row) {
      treasure.setRandomPosition();
      treasure.flag = 0;
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    if (this.row > 0) this.row -= 50;
  }

  moveDown() {
    if (this.row < 450) this.row += 50;
  }

  moveLeft() {
    if (this.col > 0) this.col -= 50;
  }

  moveRight() {
    if (this.col < 450) this.col += 50;
  }

  preload() {
    this.img = loadImage("../assets/character-down.png");
  }
  draw() {
    // this.row1 = this.row * 50;
    // this.col1 = this.col * 50;
    image(this.img, this.col, this.row, 50, 50);
  }

  keyPressed() {
    if (keyCode === UP_ARROW) this.moveUp();
    if (keyCode === DOWN_ARROW) this.moveDown();
    if (keyCode === LEFT_ARROW) this.moveLeft();
    if (keyCode === RIGHT_ARROW) this.moveRight();
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 50;
    this.row = Math.floor(Math.random() * 10) * 50;
    console.log(this.col);
    console.log(this.row);
  }

  drawTreasure() {
    // if (frameCount % 300 === 0) {
    //   this.setRandomPosition();
    // }
    if (this.flag === 0) {
      this.flag = 1;
      this.frameold = frameCount;
    }

    if (frameCount === this.frameold + 240) {
      this.setRandomPosition();
      this.flag = 0;
    }

    image(this.trsimg, this.col, this.row, 50, 50);
  }

  preload() {
    this.trsimg = loadImage("../assets/treasure.png");
  }
}
