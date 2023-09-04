const express = require("express");

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");
const { get } = require("mongoose");

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:id", getTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);
module.exports = router;
