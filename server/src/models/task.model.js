var dbConn = require('../config/db.config');

var taskModel = function (item) {
    this.taskid = item.taskid;
    this.task = item.task;
}

//get all tasks
taskModel.getAllTasks = (result) => {
    dbConn.query('SELECT * FROM task', (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

//get task by id
taskModel.getTaskById = (taskid, result) => {
    dbConn.query('SELECT * FROM task WHERE taskid=?', taskid, (err, res) => {
        if (err) {
            console.log('Error while fetching a task by id', err);
            result(null, err);
        } else {
            console.log('Specific task fetched successfully');
            result(null, res);
        }
    })
}

//create new task
taskModel.postNewTask = (user_input, result) => {
    dbConn.query('INSERT INTO task SET ?', user_input, (err, res) => {
        if (err) {
            console.log('Error while creating a task');
            result(null, err);
        } else {
            console.log('Task created successfully');
            result(null, res);
        }
    })
}

//update task by id
taskModel.putTaskById = (taskid, user_input, result) => {
    dbConn.query("UPDATE task SET task=? WHERE taskid=?", [user_input.task, taskid],
        (err, res) => {
            if (err) {
                console.log('Error while updating a task');
                result(null, err);
            } else {
                console.log('Task updated successfully');
                result(null, res);
            }
        })
}

//delete task by id
taskModel.deleteTask = (taskid, result) => {
    dbConn.query('DELETE FROM task WHERE taskid=?', [taskid], (err, res) => {
        if (err) {
            console.log('Error while deleting a task');
            result(null, err);
        } else {
            console.log('Task deleted successfully');
            result(null, res);
        }
    })
}

module.exports = taskModel;