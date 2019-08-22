class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i <= 10; i++) {
      line(100 * i, 0, 100 * i, HEIGHT);
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i)
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.col -= 1;
  }

  moveDown() {
    this.col += 1;
  }
  moveLeft() {
    this.row -= 1;
  }
  moveRight() {
    this.row += 1;
  }
  draw() {
    image(img, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, 100, 100);
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.col = Math.random() * 10;
    this.row = Math.random() * 10;
  }
  drawTreasure() {
    image(treasure, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, 100, 100);
  }
}