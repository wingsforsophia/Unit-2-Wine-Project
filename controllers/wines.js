const Wine = require('../models/wine')

module.exports = {
    new: newWine,
    create
}

function newWine(req, res) {
    res.render('wines/new', {
        title: "Add New Wine", 
        user: req.user
    })
}

function create (req, res) {
Wine.create(req.body)
    .then(() => {
        res.render('wines/show', {
            title: "Wine Details",
            user: req.user,

        })
        console.log(wine)
    })
    
}