const User = require('../Models/User')
const Apparel = require("../Models/Apparel.js")
const Accessory = require("../Models/Accessory.js")

const userController = {
    index: (req, res) => {
<<<<<<< HEAD
        // res.send('test, connected')
        Apparel.find().then(apparel => {
        Accessory.find().then(accessory => {
            res.render('admin/index', {apparel, accessory})
        })
    })
=======
        if (req.isAuthenticated()) {
          res.render('admin/index')
        } else {
          res.redirect('/')
        }
      }
>>>>>>> 309cbe31e58f0b894c43009f585e737359cf4c7d
    }
    


module.exports = userController
