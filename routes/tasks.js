const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  editTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
