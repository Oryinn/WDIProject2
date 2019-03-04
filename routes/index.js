const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/applicationController')
//const userController = require('../controllers/userController.js')
//const accessoryController = require('../controllers/accessoryController.js')
// const apparelController = require('../controllers/apparelController.js')

//Application router
router.get('/', applicationController.index)

//User routes

module.exports = router