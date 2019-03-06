const User = require('../Models/User')

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
