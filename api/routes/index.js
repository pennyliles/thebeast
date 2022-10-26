const express = require('express')
const patientsController = require("../controllers/patientsController")

const router = express.Router()

/* Home Page */
router.get('/', (req, res) => {
    res.send('Hello World! From the router.')
})

/* Patients Routes */
router.get('/patients/:id', patientsController.getRecord)
router.post('/patients/:id', patientsController.addRecord)
router.put('/patients/:id', patientsController.updateRecord)
router.delete('/patients/:id', patientsController.deleteRecord)

/* Admin Routes */

module.exports = router;