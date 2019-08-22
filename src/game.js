class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    let x = WIDTH; //x is width
    let y = HEIGHT; //y is height
    for (let i = 0; i <= x; i += x / 10) {
      for (let j = 0; j <= y; j += y / 10) {
        line(i, 0, i, y);
        line(0, j, x, j);
      }
    }
  }
}
class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= HEIGHT / 10;
    this.img=this.upIcon;
    // draw();
  }
  moveDown() {
    this.row += HEIGHT / 10;
    this.img = this.downIcon;
  }
  moveLeft() {
    this.col -= WIDTH / 10;
    this.img = this.leftIcon
  }
  moveRight() {
    this.col += WIDTH / 10;
    this.img=this.rightIcon;
  }
  setup() {
    this.downIcon = loadImage('assets/character-down.png');
    this.leftIcon = loadImage('assets/character-left.png');
    this.rightIcon = loadImage('assets/character-right.png');
    this.upIcon = loadImage('assets/character-up.png');
    this.img = this.downIcon
  }
  draw() {
    image(this.img, this.col, this.row, 100, 100);
  }
}
class Treasure {
  constructor() {
    this.col =Math.floor(Math.random() * 9) ;
    this.row =  Math.floor(Math.random() * 9);
    // this.img=loadImage('assets/treasure.png')
  }
 
   drawTreasure() {
    // image(this.img, this.col*100 , this.row*100 );
  } 
}
