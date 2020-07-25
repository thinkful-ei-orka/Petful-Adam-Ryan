/* eslint-disable quotes */
"use strict";

const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");
const { people } = require("../../store");
const peopleService = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(peopleService.get());
});

router.post("/", json, (req, res) => {
  res.status(201).json(peopleService.enqueue(req.body.name));
});

router.delete("/", (req, res) => {
  peopleService.dequeue();
  res.status(202).json('User removed');
});

module.exports = router;
