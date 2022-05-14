const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  endurance: {
    type: String,
    min: 0,
    max: 10,
  },
  img: {
    type: String,
  },
  speed: {
    type: String,
    min: 0,
    max: 10,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
