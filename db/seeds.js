const mongoose = require("./connection.js")
//const User = require("../models/User.js")
const Apparel = require("../Models/Apparel.js")
const Accessory = require("../Models/Accessory.js")


// User.deleteMany().then(() => {
//     return Apparel.deleteMany()
// }).then(() => {
//     return Accessories.deleteMany()
// })
// const Xander = new User({
//     name: "Xander",
//     email: "Xvanderlip@gmail.com",
//     password: "xv123",
// })

const Tshirt = new Apparel({
    name: "Supreme Shirt",
    type: "Tee",
    size: "Medium",
    boughtPrice: 5.00,
    listPrice: 10.00,
    imgLink: "https://i.imgur.com/vOU4AZb.jpg",
    // boughtDate: {
    //     type: Date,
    //     default: Date.now()
    // },
    notes: "It's a t-shirt"
})

const Belt = new Accessory({
    name: "Belt",
    type: "Belt",
    boughtPrice: 10.00,
    listPrice: 15.00,
    imgLink: "https://www.crossbreedholsters.com/pub/media/catalog/product/cache/1/image/768x550/e9c3970ab036de70892d86c6d221abfe/c/r/crossoverbelt_flatblack_black_1536x1100.png",
    notes: "its a belt"
})

Apparel.remove({})
.then(() => Tshirt.save())
.then(() => console.log("Seeded"))
.then(()=> mongoose.connection.close())
.catch(err => console.log(err, "error!"))
Accessory.remove({})
.then(() => Belt.save())
.then(() => console.log("Seeded"))
.then(()=> mongoose.connection.close())
.catch(err => console.log(err, "error!"))