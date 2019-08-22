class Game {
  drawGrid() {
    for (var x = 0; x < WIDTH + 1; x += WIDTH / 10) {
		  for (var y = 0; y < HEIGHT + 1; y += HEIGHT / 10) {
			  strokeWeight(1);
			  line(x, 0, x, HEIGHT);
			  line(0, y, WIDTH, y);
		  }
	  }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.playerImg;
  }

  move() {
    if (keyCode === 38) {
      this.moveUp();
    } else if (keyCode === 40) {
      this.moveDown();
    } else if (keyCode === 39) {
      this.moveRight();
    } else if (keyCode === 37) {
      this.moveLeft();
    }
  }

  moveUp() {
    this.row -= SQUARE_SIDE;
    this.playerImg = loadImage('../assets/character-up.png');
  }

  moveDown() {
    this.row += SQUARE_SIDE;
    this.playerImg = loadImage('../assets/character-down.png');
  }

  moveRight() {
    this.col += SQUARE_SIDE;
    this.playerImg = loadImage('../assets/character-right.png');
  }

  moveLeft() {
    this.col -= SQUARE_SIDE;
    this.playerImg = loadImage('../assets/character-left.png');
  }

  preload() {
    this.playerImg = loadImage('../assets/character-down.png');
  }

  draw() {
    image(this.playerImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Treasure {

  constructor() {
    this.col;
    this.row;
  }
  
  preload() {
    this.treasureImg = loadImage('../assets/treasure.png');
  }

  setRandomPosition() {
    const colPosition = (Math.round((Math.random() * WIDTH)/ SQUARE_SIDE) * SQUARE_SIDE);
    const rowPosition = (Math.round((Math.random() * WIDTH)/ SQUARE_SIDE) * SQUARE_SIDE);
    this.col = rowPosition; 
    this.row = colPosition; 
  }

  drawTreasure() {
    image(this.treasureImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}