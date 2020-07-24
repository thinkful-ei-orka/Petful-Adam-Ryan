/* eslint-disable quotes */
"use strict";

const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    return people.display();
  },

  enqueue(person) {
    people.enqueue(person);
    return `You've been added to the list!`;
  },

  dequeue() {
    people.dequeue();
  },
};
