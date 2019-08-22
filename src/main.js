const game = new Game();

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");
  img = loadImage("/assets/character-down.png");
  img2 = loadImage("/assets/treasure.png");
  // img2.resize(50, 50);

  // line(0, 500, 0, 500);
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  drawPlayer() {
    image(img, this.col, this.row, 50, 50);
  }

  playerMove() {
    if (keyCode === UP_ARROW) {
      this.row -= 50;
      img = loadImage("/assets/character-up.png");
    }

    if (keyCode === DOWN_ARROW) {
      this.row += 50;
      img = loadImage("/assets/character-down.png");
    }

    if (keyCode === LEFT_ARROW) {
      this.col -= 50;
      img = loadImage("/assets/character-left.png");
    }

    if (keyCode === RIGHT_ARROW) {
      this.col += 50;
      img = loadImage("/assets/character-right.png");
    }
  }
}

function keyPressed() {
  player.playerMove();

  // treasure.drawTreasure();
}

const player = new Player(100, 100);

class Treasure {
  constructor() {
    this.col;
    this.row;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 50;
    this.row = Math.floor(Math.random() * 10) * 50;
  }
  drawTreasure() {
    if (player.col === treasure.col && player.row === treasure.row) {
      image(img2, this.col, this.row, 50, 50);
    }
  }
}

const treasure = new Treasure();
treasure.setRandomPosition();
