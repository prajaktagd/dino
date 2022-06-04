class DinoGame {
  #score;
  #road;

  constructor(road) {
    this.#road = road;
    this.#score = 0;
  }

  updateScore(points) {
    this.#score += points;
  }

  draw() {
    console.log(this.#score, '\n');
    const road = this.#road.generateRoad();
    console.log(road + '🦖');
  }

  walk() {
    this.#road.moveObstacles();
    this.updateScore(1);
    this.draw();
  }
}

exports.DinoGame = DinoGame;

// jump() {
//   this.#posOfTrees.forEach((_, index) => {
//     this.#posOfTrees[index] += 1;
//   });
//   this.#score += 10;
//   console.log(this.#score);
//   this.drawRoad();
// }

// stopGame() {
//   console.log(this.#score);
//   console.log('Game Over!');
//   process.exit();
// }
