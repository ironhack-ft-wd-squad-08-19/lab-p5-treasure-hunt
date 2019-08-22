const game = new Game();
const player = new Player(0, 0);
const playerTwo = new Player(900, 900);
const treasure = new Treasure();
treasure.setRandomPosition();
let playerImg, playerDownImg, playerUpImg, playerLeftImg, playerRightImg, treasureImg;
let pointsOne = 0;
let pointsTwo = 0;

function preload() {
  player.preload()
  playerTwo.preload()
  treasure.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}


function draw() {
  clear();
  game.drawGrid();
  player.draw();
  playerTwo.drawTwo();
  treasure.draw();
  score();
}


function score() {

  if (player.col === treasure.col && player.row === treasure.row) {
    pointsOne += 1;
    treasure.setRandomPosition();
  };
  document.querySelector(".player-one").innerHTML = `Player One: ${pointsOne} points`

  if (playerTwo.col === treasure.col && playerTwo.row === treasure.row) {
    pointsTwo += 1;
    treasure.setRandomPosition();
  };
  document.querySelector(".player-two").innerHTML = `Player Two: ${pointsTwo} points`

}


//Iteration 4 - Move the
function keyPressed() {
  clear();

  //PLAYER ONE
  if (keyCode === 38) { //Arrow Up
    player.moveUp();
  } else if (keyCode === 40) { // 40 Arrow down
    player.moveDown();
  } else if (keyCode === 39) { // 39 Arrow right
    player.moveRight();
  } else if (keyCode === 37) { //37 Arrow left
    player.moveLeft();

    //PLAYER TWO
  } else if (keyCode === 87) { //W
    playerTwo.moveUp();
  } else if (keyCode === 83) { // S
    playerTwo.moveDown();
  } else if (keyCode === 68) { // D
    playerTwo.moveRight();
  } else if (keyCode === 65) { // A
    playerTwo.moveLeft();
  }
}