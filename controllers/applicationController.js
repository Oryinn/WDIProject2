const {Accessory} = require("../models/Accessory.js")
const {Apparel} = require("../Models/Accessory")

const applicationController = {
    index: (req, res) => {
        Apparel.find().then(apparel => {
        Accessory.find().then(accessory => {
            res.render('index', {apparel, accessory})
        })
    })
    }
}

module.exports = applicationController