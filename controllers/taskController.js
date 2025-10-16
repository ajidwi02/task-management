const pool = require("../config/db");

exports.createTask = async (req, res) => {
  const { title, description, status, deadline } = req.body;
  const userId = req.user.userId;

  if (!title) {
    return res
      .status(400)
      .json({ message: "The task title must be filled in." });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO tasks (user_id, title, description, status, deadline) VALUES (?, ?, ?, ?, ?)",
      [userId, title, description, status || "To Do", deadline || null]
    );
    res
      .status(200)
      .json({ message: "Task successfully created", taskId: result.insertId });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server",
      error: error.message,
    });
  }
};

exports.getAllMyTasks = async (req, res) => {
  const userId = req.user.userId;

  try {
    const [tasks] = await pool.query(
      "SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server",
      error: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, status, deadline } = req.body;
  const taskId = req.params.id;
  const userId = req.user.userId;

  try {
    const [result] = await pool.query(
      "UPDATE tasks SET title = ?, description = ?, status = ?, deadline = ? WHERE task_id = ? AND user_id = ?",
      [title, description, status, deadline, taskId, userId]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or you do not have access rights" });
    }

    res.status(200).json({ message: "Task successfully updated" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server",
      error: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.userId;

  try {
    const [result] = await pool.query(
      "DELETE FROM tasks WHERE task_id = ? AND user_id = ?",
      [taskId, userId]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or you do not have access rights" });
    }

    res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server",
      error: error.message,
    });
  }
};
