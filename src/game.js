class Game {
  // Iteration 1
  // Draw the grid
  // https://p5js.org/reference/#/p5/line
  drawGrid() {
    line(0, 0, 0, 1000)
    line(100, 0, 100, 1000)
    line(200, 0, 200, 1000)
    line(300, 0, 300, 1000)
    line(400, 0, 400, 1000)
    line(500, 0, 500, 1000)
    line(600, 0, 600, 1000)
    line(700, 0, 700, 1000)
    line(800, 0, 800, 1000)
    line(900, 0, 900, 1000)
    line(1000, 0, 1000, 1000)

    line(0, 0, 1000, 0)
    line(0, 100, 1000, 100)
    line(0, 200, 1000, 200)
    line(0, 300, 1000, 300)
    line(0, 400, 1000, 400)
    line(0, 500, 1000, 500)
    line(0, 600, 1000, 600)
    line(0, 700, 1000, 700)
    line(0, 800, 1000, 800)
    line(0, 900, 1000, 900)
    line(0, 1000, 1000, 1000)
  }
}



//Iteration 2
//Create Player

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.dir = "DOWN"
  }

  preload() {
    this.playerDownImg = loadImage("../assets/character-down.png");
    this.playerUpImg = loadImage("../assets/character-up.png");
    this.playerLeftImg = loadImage("../assets/character-left.png");
    this.playerRightImg = loadImage("../assets/character-right.png");

    this.player2DownImg = loadImage("../assets/character2-down.png");
    this.player2UpImg = loadImage("../assets/character2-up.png");
    this.player2LeftImg = loadImage("../assets/character2-left.png");
    this.player2RightImg = loadImage("../assets/character2-right.png");


  }
  moveUp() {
    this.dir = "UP";
    this.row -= 100;
  };

  moveDown() {
    this.dir = "DOWN";
    this.row += 100;
  };

  moveLeft() {
    this.dir = "LEFT";
    this.col -= 100;
  };

  moveRight() {
    this.dir = "RIGHT";
    this.col += 100;
  };

  draw() {
    if (this.dir === "DOWN") image(this.playerDownImg, this.col, this.row, 100, 100);
    if (this.dir === "UP") image(this.playerUpImg, this.col, this.row, 100, 100);
    if (this.dir === "LEFT") image(this.playerLeftImg, this.col, this.row, 100, 100);
    if (this.dir === "RIGHT") image(this.playerRightImg, this.col, this.row, 100, 100);
  };

  drawTwo() {
    if (this.dir === "DOWN") image(this.player2DownImg, this.col, this.row, 100, 100);
    if (this.dir === "UP") image(this.player2UpImg, this.col, this.row, 100, 100);
    if (this.dir === "LEFT") image(this.player2LeftImg, this.col, this.row, 100, 100);
    if (this.dir === "RIGHT") image(this.player2RightImg, this.col, this.row, 100, 100);
  };

}



class Treasure {
  constructor(col, row) {
    this.col = 0;
    this.row = 0;
  }

  preload() {
    this.treasureImg = loadImage("../assets/treasure.png");
  };

  draw() {
    image(this.treasureImg, this.col, this.row, 100, 100);
  };

  setRandomPosition() {
    this.col = (Math.floor(Math.random() * 10)) * 100;
    this.row = (Math.floor(Math.random() * 10)) * 100;
  };
}