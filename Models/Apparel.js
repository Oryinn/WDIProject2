const mongoose = require("../db/connection.js")
const Schema = mongoose.Schema

const Apparel = new Schema({
    name: String,
    type: String,
    size: String,
    boughtPrice: Number,
    listPrice: Number,
    imgLink: String,
    boughtDate: Date,
    notes: String
})


module.exports = mongoose.model("Apparel", Apparel)