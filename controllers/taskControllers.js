const taskList = require("../sampleData.js");

const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("getAll tasks");
};

const populateDB = async (req, res) => {
  await Task.create(taskList);
  res.status(200).json({ message: "db populated succesfully" });
};
const createTask = (req, res) => {};

const getTask = (req, res) => {};

const updateTask = (req, res) => {};

const deleteTask = (req, res) => {};

module.exports = {
  populateDB,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
