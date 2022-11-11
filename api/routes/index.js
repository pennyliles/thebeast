const express = require('express');
const router = express.Router();

/* Controllers */
const personLevelController = require("../controllers/personLevelController");
const closedController = require("../controllers/closedController");
const staffingController = require("../controllers/staffingController");
const jobDevController = require("../controllers/jobDevController");
const IPSLogController = require("../controllers/IPSLogController");

/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World!');
})

/* Person Level Routes */
router.get('/person_level', personLevelController.getAllRecords);
// Get record
router.get('/person_level/:id', personLevelController.getRecord);
// Add record
router.post('/person_level', personLevelController.addRecord);
// Update record
router.patch('/person_level/:id', personLevelController.updateRecord);
// Delete record
router.delete('/person_level/:id', personLevelController.deleteRecord);

/* Closed Routes */
router.get('/closed', closedController.getAllRecords);
router.get('/closed/:id', closedController.getRecord);
router.post('/closed', closedController.addRecord);
router.patch('/closed/:id', closedController.updateRecord);
router.delete('/closed/:id', closedController.deleteRecord);

/* Staffing Routes */
router.get('/staffing', staffingController.getAllRecords);
router.get('/staffing/:id', staffingController.getRecord);
router.post('/staffing', staffingController.addRecord);
router.patch('/staffing/:id', staffingController.updateRecord);
router.delete('/staffing/:id', staffingController.deleteRecord);

/* JobDev Routes */
router.get('/jobdev', jobDevController.getAllRecords);
router.get('/jobdev/:id', jobDevController.getRecord);
router.post('/jobdev', jobDevController.addRecord);
router.patch('/jobdev/:id', jobDevController.updateRecord);
router.delete('/jobdev/:id', jobDevController.deleteRecord);

/* IPSLog Routes */
router.get('/ipslog', IPSLogController.getAllRecords);
router.get('/ipslog/:id', IPSLogController.getRecord);
router.post('/ipslog', IPSLogController.addRecord);
router.patch('/ipslog/:id', IPSLogController.updateRecord);
router.delete('/ipslog/:id', IPSLogController.deleteRecord);


module.exports = router;