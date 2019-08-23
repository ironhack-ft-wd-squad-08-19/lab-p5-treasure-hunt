class Game {
  drawGrid() {
    for (let row = 0; row <= WIDTH; row +=SQUARE_SIDE) {
      stroke("black")
      line(0, row, WIDTH, row);
    }
    for (let columns = 0; columns <= WIDTH; columns +=SQUARE_SIDE) {
      line(columns, 0, columns, HEIGHT);
    }  
}
}