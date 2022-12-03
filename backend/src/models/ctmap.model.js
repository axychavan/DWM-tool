var dbConn = require('../config/db.config');

var ctmapModel = function (item) {
    this.mapid = item.mapid;
    this.cl_name = item.cl_name;
    this.task = item.task;
}

//get all ctmaps
ctmapModel.getAllCtmaps = (result) => {
    dbConn.query('SELECT * FROM ctmap', (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

//get ctmap by id
ctmapModel.getCtmapById = (mapid, result) => {
    dbConn.query('SELECT * FROM ctmap WHERE mapid=?', mapid, (err, res) => {
        if (err) {
            console.log('Error while fetching a map by id', err);
            result(null, err);
        } else {
            console.log('Specific map fetched successfully');
            result(null, res);
        }
    })
}

//create new ctmap
ctmapModel.postNewCtmap = (user_input, result) => {
    dbConn.query('INSERT INTO ctmap SET ?', user_input, (err, res) => {
        if (err) {
            console.log('Error while creating a ctmap');
            result(null, err);
        } else {
            console.log('Ctmap created successfully');
            result(null, res);
        }
    })
}

//update ctmap by id
ctmapModel.putCtmapById = (mapid, user_input, result) => {
    dbConn.query("UPDATE ctmap SET cl_name=?, task=? WHERE mapid=?", [user_input.cl_name, user_input.task, mapid],
        (err, res) => {
            if (err) {
                console.log('Error while updating a ctmap');
                result(null, err);
            } else {
                console.log('Ctmap updated successfully');
                result(null, res);
            }
        })
}

//delete ctmap by id
ctmapModel.deleteCtmap = (mapid, result) => {
    dbConn.query('DELETE FROM ctmap WHERE mapid=?', [mapid], (err, res) => {
        if (err) {
            console.log('Error while deleting a ctmap');
            result(null, err);
        } else {
            console.log('Ctmap deleted successfully');
            result(null, res);
        }
    })
}

module.exports = ctmapModel;