class Road {
  #length;
  #obstacles;

  constructor(length) {
    this.#length = length;
    this.#obstacles = [];
  }

  moveObstacles() {
    this.#obstacles.forEach((_, index) => {
      this.#obstacles[index] += 1;
    });
  }

  removeLastObstacle() {
    this.#obstacles.pop();
  }

  getLastObstacle() {
    return this.#obstacles[this.#obstacles.length - 1];
  }

  isObstacleAtEnd() {
    const lastIndex = this.#obstacles.length - 1;
    return this.#obstacles[lastIndex] === this.#length;
  }

  addObstacleAt(position) {
    this.#obstacles.unshift(position);
  }

  generateRoad() {
    const road = Array(this.#length).fill('_');
    this.#obstacles.forEach((pos) => {
      road[pos] = '🌵';
    });
    return road.join('');
  }
}

exports.Road = Road;
