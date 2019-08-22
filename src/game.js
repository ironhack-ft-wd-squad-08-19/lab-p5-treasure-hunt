class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    let PosLine = 0;

    for (let i = 0; i <= 10; i++) {
      line(PosLine, 0, PosLine, 500);
      line(0, PosLine, 500, PosLine);
      PosLine += 50;
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.arrHistory = [];
  }

  moveUp() {
    this.col -= 50;
  }

  moveDown() {
    this.col += 50;
  }

  moveLeft() {
    this.row -= 50;
  }

  moveRight() {
    this.row += 50;
  }

  movement() {
    if (keyCode === 38) {
      // UP_ARROW
      this.moveUp();
      this.draw(imgUp);
    } else if (keyCode === 40) {
      // DOWN_ARROW
      this.moveDown();
      this.draw(imgDown);
    } else if (keyCode === 39) {
      //RIGHT_ARROW
      this.moveRight();
      this.draw(imgRight);
    } else if (keyCode === 37) {
      //LEFT_ARROW
      this.moveLeft();
      this.draw(imgLeft);
    }
  }

  draw(imagePl) {
    // clear();
    let im = imagePl;

    let tempArr = [this.row, this.col];
    this.arrHistory.push(tempArr);
    this.arrHistory.forEach((arr, i) => {
      // if (i !== this.arrHistory.length - 1) {
      fill("red");
      square(arr[0], arr[1], 50);
      // } else {
      // fill("white");
      // square(arr[0], arr[1], 50);
      // }
    });
    image(im, this.row, this.col, 50, 50);
    // if (this.arrHistory.length < 2) {
    //   image(imgDown, this.row, this.col, 50, 50);
    // }
  }

  keyPressed() {
    this.movement();
  }
}

class Player2 extends Player {
  constructor(col, row) {
    super(col, row);
  }
  movement() {
    if (keyCode === 87) {
      // UP_ARROW
      this.moveUp();
      this.draw(imgUp);
    } else if (keyCode === 83) {
      // DOWN_ARROW
      this.moveDown();
      this.draw(imgDown);
    } else if (keyCode === 68) {
      //RIGHT_ARROW
      this.moveRight();
      this.draw(imgRight);
    } else if (keyCode === 65) {
      //LEFT_ARROW
      this.moveLeft();
      this.draw(imgLeft);
    }
  }
}
