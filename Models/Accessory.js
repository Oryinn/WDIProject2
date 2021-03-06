const mongoose = require("../db/connection.js")
const Schema = mongoose.Schema

const Accessory = new Schema({
    name: String,
    type: String,
    boughtPrice: Number,
    listPrice: Number,
    imgLink: String,
    boughtDate: Date,
    notes: String,
    isSold: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Accessory", Accessory)