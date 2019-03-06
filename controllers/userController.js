const User = require('../Models/User')
const Apparel = require("../Models/Apparel.js")
const Accessory = require("../Models/Accessory.js")

const userController = {
    index: (req, res) => {
        // res.send('test, connected')
        Apparel.find().then(apparel => {
        Accessory.find().then(accessory => {
            res.render('admin/index', {apparel, accessory})
        })
    })
    }
}

module.exports = userController
