const mongoose = require("../db/connection.js")
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const User = new Schema({
    local: {
    name: String,
    email: String,
    password: String,
    }
})

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
  }

module.exports = mongoose.model("User", User)