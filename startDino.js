const { EventEmitter } = require('events');
const { DinoGame } = require('./dinoGame.js');
const { Road } = require('./road.js');
const { Dinosaur } = require('./dinosaur.js');

const randomInt = (number) => Math.floor(Math.random() * number);

const getEvents = () => {
  return Array(14).fill('move-road').concat('obstacle');
};

const main = () => {
  const eventEmitter = new EventEmitter();
  const length = 50;
  const road = new Road(length);
  const dino = new Dinosaur('Pichi', length);
  const game = new DinoGame(road, dino);

  eventEmitter.addListener('move-road', () => game.moveRoad());
  eventEmitter.addListener('obstacle', () => game.addTree());

  const events = getEvents();
  setInterval(() => {
    const event = events[randomInt(events.length)];
    eventEmitter.emit(event);
  }, 100);
};

main();
