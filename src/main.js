const game = new Game();
const player1 = new Player(0, 0);
const player2 = new Player(9, 9);
const treasure1 = new Treasure(0, 0);

function preload() {
  player1.preload();
  treasure1.preload();
  player2.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear()
  game.drawGrid();
  player1.draw();
  player2.draw();
  treasure1.drawTreasure();

}

function move() {
  if (keyCode === 37 && player1.column  )
    player1.moveLeft();
  if (keyCode === 39 && player1.column < SQUARE_SIDE*9)
    player1.moveRight();
  if (keyCode === 38)
    player1.moveUp();
  if (keyCode === 40)
    player1.moveDown();

  if (player1.row === treasure1.row && player1.column === treasure1.col)
    treasure1.setRandomPosition();
  player1.gainTreasure()

}

function move02() {

  if (keyCode === 83)
    player2.moveLeft();
  if (keyCode === 70)
    player2.moveRight();
  if (keyCode === 69)
    player2.moveUp();
  if (keyCode === 68)
    player2.moveDown();

  if (player2.row === treasure1.row && player2.column === treasure1.col)
    treasure1.setRandomPosition();
  player2.gainTreasure()

}



// function switching() {
//   function keyPressed() {
//     move();
//   };
//   if (player1.count = 3) {
//     function keyPressed() {
//       move02();
//     };
//   }

// }
// function turnPlayer() {
//   if (player1.count % 3 === 0)
//     alert("turn: player 2");
//   if (player2.count % 3 === 0)
//     alert("turn: player 1");
// }


function keyPressed() {
  move();
  move02();
};