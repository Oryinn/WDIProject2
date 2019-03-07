const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/applicationController')
const userController = require('../controllers/userController.js')
const accessoryController = require('../controllers/accessoryController.js')
const apparelController = require('../controllers/apparelController.js')
const authController = require('../controllers/authController.js')

//Application router
router.get('/', applicationController.index)

//Inventory routers
router.get('/apparel', apparelController.index)
router.get('/apparel/new', apparelController.new)
router.post('/apparel', apparelController.create)
router.get('/apparel/:apparelId', apparelController.show)
router.get('/apparel/:apparelId/edit', apparelController.edit)
router.put('/apparel/:apparelId', apparelController.update)
router.delete('/apparel/:apparelId', apparelController.delete)

router.get('/accessory', accessoryController.index)
router.get('/accessory/new', accessoryController.new)
router.post('/accessory', accessoryController.create)
router.get('/accessory/:accessoryId', accessoryController.show)
router.get('/accessory/:accessoryId/edit', accessoryController.edit)
router.put('/accessory/:accessoryId', accessoryController.update)
router.delete('/accessory/:accessoryId', accessoryController.delete)

//User routers
router.get('/admin', userController.index)
router.get('/signup', authController.signUp)
router.post('/signup', authController.createUser)
router.get('/login', authController.logIn)
router.post('/login', authController.checkUser)
router.get('/logout', authController.logOut)

module.exports = router