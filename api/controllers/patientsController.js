const express = require('express')
const patientsServices = require('../services/patientsServices')

async function getRecord(req, res) {
    const id = req.params.id
    try {
        const result = await getRecordFromDB(id)
        res.sendStatus(201)
        return result
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}

async function addRecord(req, res) {

}

async function updateRecord(req, res) {

}

async function deleteRecord(req, res) {

}


module.exports = {
    getRecord,
    addRecord,
    updateRecord,
    deleteRecord
}