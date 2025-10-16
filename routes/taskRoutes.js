const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllMyTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createTask).get(protect, getAllMyTasks);
router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
