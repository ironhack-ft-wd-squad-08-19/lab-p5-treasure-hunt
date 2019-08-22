class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background("white");
    //For (var BEGIN; END; INTERVAL){
    //DO SOMETHING }
    for (var x = 0; x < width + 1; x += width / 10) {
      for (var y = 0; y < height + 1; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
}

class Player {
  constructor(col = 0, row = 0) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 100;
  }
  moveDown() {
    this.row += 100;
  }
  moveRight() {
    this.col += 100;
  }
  moveLeft() {
    this.col -= 100;
  }

  draw() {
    image(viDown, this.col, this.row, 100, 100);
  }
}

class Treasure {
  constructor(col, row) {
    this.col;
    this.row;
    // this.col = col;
    // this.row = row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    console.log(col);
  }

  draw() {
    // this.setRandomPosition();
    image(crystal, this.col * 100, this.row * 100, 100, 100);
  }
}

// function drawTreasure() {
//   setRandomPosition();
// }
