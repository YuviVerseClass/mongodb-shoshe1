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
  // TODO
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
