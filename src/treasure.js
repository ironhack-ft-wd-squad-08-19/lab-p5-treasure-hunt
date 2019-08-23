class Treasure {

    constructor(col, row) {
        this.col = col
        this.row = row

    }
   setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);

}


    preload() {
        this.treasureimg = loadImage("../assets/treasure.png");
    }
    drawTreasure() {
        image(this.treasureimg, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)
    };


}