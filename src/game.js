class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let i = 0; i <= HEIGHT; i += HEIGHT / 10) {
      strokeWeight(1);
      stroke(51);
      line(0, i, HEIGHT, i);
      line(i, 0, i, HEIGHT);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.x = col * SQUARE_SIDE;
    this.y = row * SQUARE_SIDE;
  }

  moveUp() {
    image(this.imgUp, this.x, this.y, 100, 100);
    this.row -= 1;
    this.y = this.row * SQUARE_SIDE;
   
  }

  moveDown() {
    this.row += 1;
    this.y = this.row * SQUARE_SIDE;
    image(this.imgDown, this.x, this.y, 100, 100);
  }

  moveLeft() {
    this.col -= 1;
    this.x = this.col * SQUARE_SIDE;
    image(this.imgLeft, this.x, this.y, 100, 100);
  }

  moveRight() {
    this.col += 1;
    this.x = this.col * SQUARE_SIDE;
    image(this.imgRight, this.x, this.y, 100, 100);
  }
  preload() {
    this.imgUp = loadImage("../assets/character-up.png");
    this.imgDown = loadImage("../assets/character-down.png");
    this.imgRight = loadImage("../assets/character-right.png");
    this.imgLeft = loadImage("../assets/character-left.png");
  
  }
  draw() {
    image(this.imgDown, this.x, this.y, 100, 100);
    // fill('red')
    // rect(this.col, this.row, 100,100)
  }
}


class Treasure {
  constructor() {
   

    this.col = Math.floor(Math.random() * 9);
    this.row = Math.floor(Math.random() * 9);

  }

  preload() {
    this.imgTreasure = loadImage("../assets/treasure.png");
  }

  drawTreasure() {
 
    image(this.imgTreasure, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, 100, 100);
  }
}


