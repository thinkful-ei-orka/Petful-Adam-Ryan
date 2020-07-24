/* eslint-disable quotes */
"use strict";

const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    return { cat: pets.cats.peek(), dog: pets.dogs.peek() };
  },

  dequeue(type) {
    pets[type].dequeue();
  },
};
