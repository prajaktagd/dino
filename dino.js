class Dino {
  #score;
  #length;
  #posOfTrees;

  constructor() {
    this.#score = 0;
    this.#length = 50;
    this.#posOfTrees = [];
  }

  drawRoad() {
    const road = Array(this.#length - 1).fill('_').concat('🦖');
    this.#posOfTrees.forEach((pos) => {
      road[pos] = '🌵';
    });
    console.log(road.join(''));
  }

  walk() {
    this.#posOfTrees.forEach((_, index) => {
      this.#posOfTrees[index] += 1;
    });
    if (this.#posOfTrees.includes(50)) {
      this.#posOfTrees.pop();
    }
    this.#score += 1;
    console.log(this.#score);
    this.drawRoad();
  }

  addTree() {
    this.#posOfTrees.unshift(0);
    if (this.#posOfTrees.includes(50)) {
      this.#posOfTrees.pop();
    }
  }

  jump() {
    this.#posOfTrees.forEach((_, index) => {
      this.#posOfTrees[index] += 1;
    });
    this.#score += 10;
    console.log(this.#score);
    this.drawRoad();
  }

  stopGame() {
    console.log(this.#score);
    console.log('Game Over!');
    process.exit();
  }
}

exports.Dino = Dino;
