class Player {
    constructor(row, col) {
        this.row = row;
        this.column = col;
        this.direction = "down"
        this.score = 0;
        this.count = 0;
    }


    moveUp() {
        this.direction = "up"
        this.column -= 1;
        // this.count ++;
        console.log(`the player is ${this.row} ${this.column}`);
    };
    moveDown() {
        this.direction = "down"
        this.column += 1;
        //  this.count++;
        console.log(`the player is ${this.row} ${this.column}`);
    };
    moveLeft() {
        this.direction = "left"
        this.row -= 1;
        // this.count++;
        console.log(`the player is ${this.row} ${this.column}`);
    };
    moveRight() {
        this.direction = "right"
        this.row += 1;
        // this.count++;
        console.log(`the player is ${this.row} ${this.column}`);
    };

    preload() {
        this.imgL = loadImage('../assets/character-left.png');
        this.imgR = loadImage('../assets/character-right.png');
        this.imgU = loadImage('../assets/character-up.png');
        this.imgD = loadImage('../assets/character-down.png');

    }

    draw() {
        if (this.direction === "left") image(this.imgL, this.row * SQUARE_SIDE, this.column * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
        if (this.direction === "right") image(this.imgR, this.row * SQUARE_SIDE, this.column * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
        if (this.direction === "up") image(this.imgU, this.row * SQUARE_SIDE, this.column * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
        if (this.direction === "down") image(this.imgD, this.row * SQUARE_SIDE, this.column * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);

        // fill('red')
        // rect(this.column * SQUARE_SIDE, this.row * SQUARE_SIDE, 100, 100)
    }

    gainTreasure() {
        this.score += 1000;
    }
}