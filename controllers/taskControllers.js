const taskList = require("../sampleData.js");

const Task = require("../models/task");

const populateDB = async (req, res) => {
  try {
    await Task.create(taskList);
    res.status(200).json({ message: "db populated succesfully" });
  } catch (error) {
    res.status(500).json({ meesage: error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({}); //all tasks
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ meesage: error });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json({ message: "data added successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ name: `Task ${taskID}` });

    if (!task) {
      res.status(404).json({ message: `no task with id ${taskID}` });
      return;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate(
      { name: `Task ${taskID}` },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      res.status(404).json({ message: `no task with id ${taskID}` });
      return;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ name: `Task ${taskID}` });

    if (!task) {
      res.status(404).json({ message: `no task with id ${taskID}` });
      return;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  populateDB,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
