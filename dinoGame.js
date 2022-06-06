class DinoGame {
  #score;
  #road;
  #dino;

  constructor(road, dino) {
    this.#road = road;
    this.#dino = dino;
    this.#score = 0;
  }

  updateScore(points) {
    this.#score += points;
  }

  addTree() {
    this.#road.addObstacleAt(0);
  }

  draw(char) {
    console.clear();
    let sky = '';
    if (char === '🌵') {
      sky = Array(50).fill(' ').join('') + '🦖';
    }
    console.log(this.#score);
    console.log(sky);
    const road = this.#road.generateRoad();
    console.log(road + char);
  }

  moveRoad() {
    this.#road.moveObstacles();
    const pos = this.#road.getLastObstacle();
    if (this.#dino.isObstacleClose(pos)) {
      this.#dino.jump();
      this.#road.removeLastObstacle();
      this.updateScore(10);
      this.draw('🌵');
      return;
    }
    this.updateScore(1);
    this.draw('🦖');
  }
}

exports.DinoGame = DinoGame;
