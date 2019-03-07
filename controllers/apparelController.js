const Apparel = require("../Models/Apparel.js")

const apparelController = {
    index: (req, res) => {
        Apparel.find({isSold: false}).then((apparel) => {
                res.render('apparel/index',{
                apparel:apparel
            })
            })
    },
    show: (req, res) => {
        let {apparelId} = req.params
        Apparel.findById(req.params.apparelId).then(apparel => {
            res.render('apparel/show', {apparel, apparelId})
        })
    },
    new: (req, res) => {
        res.render('apparel/new')
    },
    create: (req, res) => {
        Apparel.create({
            name:req.body.name,
            type:req.body.type,
            size:req.body.size,
            boughtPrice:req.body.boughtPrice,
            listPrice:req.body.listPrice,
            imgLink:req.body.imgLink,
            notes:req.body.notes
        
        }).then(() => {
            res.redirect('/apparel')
        })
    },
    edit: (req, res) => {
        Apparel.findById(req.params.apparelId)
        .then(apparel => {
            res.render('/apparel/edit', {
                apparel,

            })
        })
    },
    sold: (req, res) => {
        Apparel.findByIdAndUpdate(req.params.apparelId, req.body, {new: true}).then(() => {
            res.redirect(`/apparel`)
        })
    },
    update: (req, res) => {
        Apparel.findByIdAndUpdate(req.params.apparelId, req.body, {new: true}).then(()=> {
            res.redirect(`/apparel/${req.params.apparelId}`)
        })
    },
    delete: (req, res) => {
        Apparel.findByIdAndDelete(req.params.apparelId).then(() => {
            console.log(`Deleted Apparel with the id of ${req.params.apparelId}`)
            res.redirect('/')
        })
    }
}

module.exports = apparelController