// Require express and create a router
const express = require('express');
const router = express.Router();
// Require your controller
const db = require('../controllers/dbController');
// const db = ...

// Wire each of the following routes to its controller method:
// GET    /tasks         => db.getTasks
// POST   /tasks         => db.addTask
// PATCH  /tasks/:id     => db.toggleTask
// DELETE /tasks/:id     => db.deleteTask

// Export the router