class Dinosaur {
  #name;
  #position;

  constructor(name, positionOnRoad) {
    this.#name = name;
    this.#position = { x: positionOnRoad, y: 0 };
  }

  isObstacleClose(obstaclePos) {
    return this.#position.x === obstaclePos;
  }

  jump() {
    this.#position.y = 1;
  }
}

exports.Dinosaur = Dinosaur;
