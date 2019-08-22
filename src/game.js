class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    createCanvas(1000, 1000);
    background("yellow");
    //Create Line Y-Achse
    line(100, 0, 100, 1000);
    line(200, 0, 200, 1000);
    line(300, 0, 300, 1000);
    line(400, 0, 400, 1000);
    line(500, 0, 500, 1000);
    line(600, 0, 600, 1000);
    line(700, 0, 700, 1000);
    line(800, 0, 800, 1000);
    line(900, 0, 900, 1000);
    //Create Line X-Achse
    line(0, 100, 1000, 100);
    line(0, 200, 1000, 200);
    line(0, 300, 1000, 300);
    line(0, 400, 1000, 400);
    line(0, 500, 1000, 500);
    line(0, 600, 1000, 600);
    line(0, 700, 1000, 700);
    line(0, 800, 1000, 800);
    line(0, 900, 1000, 900);
  }
}

class Player {
  constructor(col, row, num) {
    this.col = col;
    this.row = row;
    this.img;
    this.num = num;
  }

  moveUp() {
    this.row--;
  }

  moveDown() {
    this.row++;
  }

  moveLeft() {
    this.col--;
  }

  moveRight() {
    this.col++;
  }

  keys() {
    if (this.num === 1) {
      if (keyCode === 65) {
        this.moveLeft();
      } else if (keyCode === 68) {
        this.moveRight();
      } else if (keyCode === 87) {
        this.moveUp();
      } else if (keyCode === 83) {
        this.moveDown();
      }
    }
    if (this.num === 2) {
      if (keyCode === 37) {
        this.moveLeft();
      } else if (keyCode === 39) {
        this.moveRight();
      } else if (keyCode === 38) {
        this.moveUp();
      } else if (keyCode === 40) {
        this.moveDown();
      }
    }
    //   if (keyCode === 37) {
    //     this.moveLeft()
    //   } else if (keyCode === 39) {
    //     this.moveRight()
    //   } else if (keyCode === 38) {
    //     this.moveUp()
    //   } else if (keyCode === 40) {
    //     this.moveDown()
    //   }
    // } else if (this.num === 2) {
  }
  // }

  preload() {
    if (this.num === 1) {
      this.img = loadImage("/assets/character-down.png");
    }
    if (this.num === 2) {
      this.img = loadImage("/assets/character-left.png");
    }
  }

  draw() {
    // if (num === 1) {
    image(this.img, this.col * 100, this.row * 100, 99, 99);
    // } else if (num === 2) {
    //   image(this.img, 1000, 1000, 99, 99)
    // }
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.img;
  }

  preload() {
    this.img = loadImage("/assets/treasure.png");
  }

  drawTreasure() {
    image(this.img, this.col * 100, this.row * 100, 100, 100);
  }
}
/* 
class Player2 {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.img;
  }

  moveUp() {
    this.row--;
  }

  moveDown() {
    this.row++;
  }

  moveLeft() {
    this.col--;
  }

  moveRight() {
    this.col++;
  }

  keys() {
    // if (this.num === 1) {
    //   if (keyCode === 37) {
    //     this.moveLeft()
    //   } else if (keyCode === 39) {
    //     this.moveRight()
    //   } else if (keyCode === 38) {
    //     this.moveUp()
    //   } else if (keyCode === 40) {
    //     this.moveDown()
    //   }
    // } else if (this.num === 2) {
    // if (this.num === 1) {
    if (keyCode === 37) {
      this.moveLeft();
    } else if (keyCode === 39) {
      this.moveRight();
    } else if (keyCode === 38) {
      this.moveUp();
    } else if (keyCode === 40) {
      this.moveDown();
    }
  }
  // }

  preload() {
    this.img = loadImage("/assets/character-left.png");
  }

  draw() {
    // if (num === 1) {
    image(this.img, this.col * 100, this.row * 100, 99, 99);
    // } else if (num === 2) {
    //   image(this.img, 1000, 1000, 99, 99)
    // }
  }
}
 */
