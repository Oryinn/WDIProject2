const User = require('../Models/User')
const Apparel = require("../Models/Apparel.js")
const Accessory = require("../Models/Accessory.js")

const userController = {
  index: (req, res) => {
    if (req.isAuthenticated()) {
      Apparel.find({isSold: true}).then(apparel => {
        Accessory.find({isSold: true}).then(accessory => {
          res.render('admin/index', {apparel, accessory})
        })
      })
     } else {
      res.redirect('/')
    }
  }
}



module.exports = userController
