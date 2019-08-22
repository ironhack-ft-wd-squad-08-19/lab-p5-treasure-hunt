class Game {
  constructor() {

  }

  drawGrid() {
    for (var x = 0; x <= HEIGHT; x += SQUARE_SIDE) {
      for (var y = 0; y <= WIDTH; y += SQUARE_SIDE) {
        stroke(1);
        strokeWeight(1);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }



}


class Player {
  constructor(row, col) {
    this.row = row;
    this.column = col;
    // this.icon;
  }


  moveUp() {
    this.column -= 1;

    console.log(`the player is ${this.row} ${this.column}`);
  };
  moveDown() {
    this.column += 1;
    console.log(`the player is ${this.row} ${this.column}`);
  };
  moveLeft() {
    this.row -= 1;
    console.log(`the player is ${this.row} ${this.column}`)
  };
  moveRight() {
    this.row += 1;
    console.log(`the player is ${this.row} ${this.column}`)
  };

  preload() {
    // this.imgL = loadImage('../assets/character-left.png');
    // this.imgR = loadImage('../assets/character-right.png');
    // this.imgU = loadImage('../assets/character-up.png');
    this.img = loadImage('assets/character-down.png');
    this.icon = this.img;
  }

  draw() {
    image(this.icon, this.row * SQUARE_SIDE, this.column * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
    // image(this.imgR, this.row, this.colum, width / 10, height / 10);
    // image(this.imgU, this.row, this.colum, width / 10, height / 10);
    // image(this.icon, this.row, this.colum, SQUARE_SIDE, SQUARE_SIDE);

    // fill('red')
    // rect(this.column * SQUARE_SIDE, this.row * SQUARE_SIDE, 100, 100)



  }
}

class Treasure {

  setRandomPosition() {
    this.col = Math.floor(math.random() * 10);
    this.row = Math.floor(math.random() * 10);

  }
  preload() {
    this.img = loadImage("../assets/treasure.png");
    this.treasure = this.img
  }

  drawTreasure() {
    image(this.treasure, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)
  };

}