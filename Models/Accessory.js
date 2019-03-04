const mongoose = require("../db/connection.js")
const Schema = mongoose.Schema

const Accessory = new Schema({
    name: String,
    type: String,
    boughtPrice: Number,
    listPrice: Number,
    imgLink: String,
    boughtDate: {
        type: Date,
        default: Date.now()
    },
    notes: String
})

module.exports = mongoose.model("Accessory", Accessory)