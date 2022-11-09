const express = require('express');
const personLevelController = require('../controllers/personLevelController')

const router = express.Router();

/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World! From the router.');
})

/* Person Level Routes */
// All records
router.get('/personLevel', personLevelController.getRecord);

// Specific record
router.get('/personLevel/:id', personLevelController.getRecord);
router.post('/personLevel/:id', personLevelController.addRecord);
router.put('/personLevel/:id', personLevelController.updateRecord);
router.delete('/personLevel/:id', personLevelController.deleteRecord);

module.exports = router;