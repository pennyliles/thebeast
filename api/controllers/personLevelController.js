const express = require('express');
const personLevelServices = require('../services/personLevelServices');

async function getRecord(req, res) {
    var id = req.params.id;
    try {
        var result = await personLevelServices.getRecordFromDB(id);
        if (result) {
            res.status(200).jsonp(result);
        }
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

async function addRecord(req, res) {
    var body = req.body;
    try {
        var exists = await personLevelServices.addRecordToDB(body);
        if (exists) {
            res.status(200).json({ sucess: true, msg: 'Record already exists' });
        } else {
            res.status(200).json({ sucess: true, msg: 'Record added.' });
        }
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500).json({ sucess: false, msg: 'Failed to add record.' });
    }
}

async function updateRecord(req, res) {

}

async function deleteRecord(req, res) {
    var id = req.params.id;
    try {
        var status = await personLevelServices.deleteRecordFromDB(id);
        if (status) {
            res.status(200).json({ sucess: true, msg: 'Record deleted' });
        } else {
            res.status(200).json({ sucess: true, msg: 'Record not found or deleted.' });
        }
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}


module.exports = {
    getRecord,
    addRecord,
    updateRecord,
    deleteRecord
};