const express = require('express');
const router = express.Router();

const taskRoute = require('../controllers/task.controller');

//get all tasks
router.get('/', taskRoute.getAllTasks);

//get task by id
router.get('/:taskid', taskRoute.getTaskById);

//create new task
router.post('/', taskRoute.postNewTask);

//update task by id
router.put('/:id', taskRoute.putTaskById);

//delete task by id
router.delete('/:id', taskRoute.deleteTask);

module.exports = router;