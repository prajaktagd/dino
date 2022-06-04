const { DinoGame } = require('./dinoGame.js');
const { Road } = require('./road.js');
const { EventEmitter } = require('events');

const randomInt = (number) => Math.floor(Math.random() * number);

const getEvents = () => {
  return Array(9).fill('walk').concat('obstacle');
};

const main = () => {
  const eventEmitter = new EventEmitter();
  const road = new Road(50);
  road.addObstacleAt(0);
  const dino = new DinoGame(road);
  eventEmitter.addListener('walk', () => dino.walk());

  const events = getEvents();
  setInterval(() => {
    console.clear();
    const event = events[randomInt(events.length)];
    eventEmitter.emit(event);
  }, 62.5);
};

main();
