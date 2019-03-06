const User = require('../Models/User')
const Apparel = require("../Models/Apparel.js")
const Accessory = require("../Models/Accessory.js")

const userController = {
    index: (req, res) => {
        if (req.isAuthenticated()) {
          res.render('admin/index')
        } else {
          res.redirect('/')
        }
      }
    }
    


module.exports = userController
