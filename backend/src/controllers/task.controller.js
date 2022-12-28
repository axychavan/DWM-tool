const taskController = require('../models/task.model');

//get all tasks
exports.getAllTasks = (req, res) => {
    taskController.getAllTasks((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Array', records);
        res.send(records)
    })
}

//get task by id
exports.getTaskById = (req, res) => {
    //console.log('getting record by id');
    taskController.getTaskById(req.params.taskid, (err, record) => {
        if (err)
            res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create new task
exports.postNewTask = (req, res) => {
    const user_input = new taskController(req.body);
    console.log('user_input : ', user_input);

    taskController.postNewTask(user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ taskid: records.insertId, message: 'Task created successfully' })
    })
}

//update task by id
exports.putTaskById = (req, res) => {
    const user_input = new taskController(req.body);
    console.log('user_input : ', user_input);

    taskController.putTaskById(req.params.id, user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Task updated successfully' })
    })
}

//delete task by id
exports.deleteTask = (req, res) => {
    taskController.deleteTask(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Task deleted successfully' });
    })
}