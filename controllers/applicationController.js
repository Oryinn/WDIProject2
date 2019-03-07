const Accessory = require("../Models/Accessory.js")
const Apparel = require("../Models/Apparel.js")

const applicationController = {
    index: (req, res) => {
        // res.send('test, connected')
        Apparel.find({isSold: false}).then(apparel => {
        Accessory.find({isSold: false}).then(accessory => {
            res.render('index', {apparel, accessory})
        })
    })
    }
}

module.exports = applicationController