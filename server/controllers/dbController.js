const Task = require('../models/Task');

async function getTasks(req, res) {

  try{
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

async function addTask(req, res) {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function toggleTask(req, res) {
  // TODO
}

async function deleteTask(req, res) {
  try{
    const delete_task = await Task.findByIdAndDelete(req.params.id);
    if (!delete_task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
