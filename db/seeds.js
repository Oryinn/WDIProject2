const mongoose = require("./connection.js")
const User = require("../Models/User.js")
const Apparel = require("../Models/Apparel.js")
const Accessory = require("../Models/Accessory.js")



const Xander = new User({
    name: "Xander",
    email: "Xvanderlip@gmail.com",
    password: "xv123",
})


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

User.remove({})
.then(() => Xander.save())
.then(() => console.log("Users seeded"))
.then(() => mongoose.connection.close())
.catch(err => console.log(err, "error on user!"))
Apparel.remove({})
.then(() => Tshirt.save())
.then(() => console.log("Apparel Seeded"))
.then(()=> mongoose.connection.close())
.catch(err => console.log(err, "error on apparel!"))
Accessory.remove({})
.then(() => Belt.save())
.then(() => console.log("Accessories Seeded"))
.then(()=> mongoose.connection.close())
.catch(err => console.log(err, "error on accessories!"))