const Accessory = require("../Models/Accessory.js")

const accessoryController = {
    index: (req, res) => {
        Accessory.find().then((accessory => {
                res.render('accessory/index',{accessory})
            })
        )},
    show: (req, res) => {
        let {accessoryId} = req.params
        Accessory.findById(req.params.accessoryId).then(accessory => {
            res.render('accessory/show', {accessory, accessoryId})
        })
    },
    new: (req, res) => {
        res.render('accessory/new')
    },
    create: (req, res) => {
        Accessory.create({
            name:req.body.name,
            type:req.body.type,
            boughtPrice:req.body.boughtPrice,
            listPrice:req.body.listPrice,
            imgLink:req.body.imgLink,
            notes:req.body.notes
        
        }).then(() => {
            res.redirect('/accessory')
        })
    },
    edit: (req, res) => {
        Accessory.findById(req.params.accessoryId)
        .then(accessory => {
            res.render('accessory/edit', {
                accessory,

            })
        })
    },
    update: (req, res) => {
        Accessory.findByIdAndUpdate(req.params.accessoryId, req.body, {new: true}).then(()=> {
            res.redirect(`/accessory/${req.params.accessoryId}`)
        })
    },
    delete: (req, res) => {
        Accessory.findByIdAndDelete(req.params.accessoryId).then(() => {
            console.log(`Deleted Accessory with the id of ${req.params.accessoryId}`)
            res.redirect('/')
        })
    }
}
module.exports = accessoryController