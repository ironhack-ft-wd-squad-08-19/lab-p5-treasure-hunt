class Game {
  constructor() {

  }

  drawGrid() {
    for (let x = 0, y = 0; x <= HEIGHT, y <= WIDTH; x += SQUARE_SIDE, y += SQUARE_SIDE) {
      stroke(1);
      strokeWeight(1);
      line(x, 0, x, HEIGHT);
      line(0, y, WIDTH, y);


    }
  }
}