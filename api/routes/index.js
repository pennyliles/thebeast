const express = require('express');
const router = express.Router();

/* Controllers */
const personLevelController = require("../controllers/personLevelController")

/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World!');
})

/* Person Level Routes */
router.get('/person_level', (req, res) => {
    res.send('Person Level works')
});
// Get record
router.get('/person_level/:id', personLevelController.getRecord);
// Add record
router.post('/person_level/:id', personLevelController.addRecord);
// Update record
router.patch('/person_level/:id', personLevelController.updateRecord);
// Delete record
router.delete('/person_level/:id', personLevelController.deleteRecord);


module.exports = router;