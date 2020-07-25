/* eslint-disable quotes */
"use strict";

const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");
const petsService = require("./pets.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(petsService.get());
});

router.delete("/", json, (req, res) => {
  console.log(req.body)
  res.status(202).json(petsService.dequeue(req.body.type));
});

module.exports = router;
