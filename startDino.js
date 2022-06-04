const { Dino } = require('./dino.js');
const { EventEmitter } = require('events');

const randomInt = (number) => Math.floor(Math.random() * number);

const getEvents = () => {
  return Array(9).fill('walk').concat('obstacle');
};

const main = () => {
  const eventEmitter = new EventEmitter();
  const dino = new Dino();
  eventEmitter.addListener('walk', () => dino.walk());
  eventEmitter.addListener('obstacle', () => dino.addTree());
  eventEmitter.addListener('tree-is-close', () => dino.jump());
  // eventEmitter.addListener('hit-cactus', () => dino.stopGame());

  const events = getEvents();
  setInterval(() => {
    console.clear();
    const event = events[randomInt(events.length)];
    eventEmitter.emit(event);
  }, 100);
};

main();
