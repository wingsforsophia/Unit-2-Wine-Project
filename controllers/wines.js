const Wine = require('../models/wine')

module.exports = {
    new: newWine,
    create,
    index,
    search,
    show,
    addToWineList,
    removeFromWineList,
    edit,
    update,
    addToFavorites,
    removeFromFavorites,
    myWines,
    showFavorites
}

function newWine(req, res) {

    res.render('wines/new', {
        title: "Add New Wine",
        user: req.user,
        })
}

function create(req, res) {
    Wine.create(req.body)
        .then(() => {
            res.redirect('/wines')
        })
    // .catch((err) => {
    //     console.log(err)
    //     })
}

function index(req, res) {
    Wine.find({})
        .then((wines) => {
            res.render('wines/index', {
                title: "All Wines",
                user: req.user,
                wines
            })
        })
}

function search(req, res) {
    Wine.find(`${req.body.query}`)
        .then((result) => {
            console.log(result)
            res.render('wines/index', {
                title: "All Wines",
                user: req.user,
                result
            })
        })
}

function show(req, res) {
    Wine.findById(req.params.id)
        .then((wine) => {
            Wine.findOne({_id: wine.id})
            .populate('favoritedBy')
            .then((wine) => {
                res.render(`wines/show`, {
                    title: "Details",
                    user: req.user,
                    wine,
                    favoritedBy: wine.favoritedBy,
                    wineId: wine._id,
                    reviews: wine.reviews

            })
            })
        })

}

function addToWineList(req, res) {
    req.user.wineList.push(req.body)
    req.user.save()
        .then(() => {
            res.redirect(`/wines/${req.params.id}`)
        })
}

function removeFromWineList(req, res) {
    let idx = req.user.wineList.findIndex((w) => w._id === req.params.id)
    req.user.wineList.splice(idx, 1)
    req.user.save()
        .then(() => {
            res.redirect(`/wines/${req.params.id}`)
        })
}

function edit(req, res) {
    Wine.findById(req.params.id)
        .then((wine) => {
            res.render('wines/edit', {
                title: "Edit Wine",
                user: req.user,
                wine
            })
        })
}

function update(req, res) {
    Wine.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/wines/${req.params.id}`)

        })
}

function addToFavorites(req, res) {
    Wine.findById(req.params.id)
        .then((wine) => {
            wine.favoritedBy.push(req.user._id)
            wine.save()
                .then(() => {
                    res.redirect(`/wines/${req.params.id}`)
                })
        })

}

function removeFromFavorites(req, res) {
    Wine.findById(req.params.id)
        .then((wine) => {
            let idx = wine.favoritedBy.indexOf(req.user._id)
            wine.favoritedBy.splice(idx, 1)
            wine.save()
            .then(() => {
                res.redirect(`/wines/${req.params.id}`)
            })
        })
}

function myWines (req, res) {
    Wine.find({favoritedBy: req.user._id})
    .then((wines) => {
        res.render('wines/mywines', {
            title: "Wines I've Tried",
            user: req.user,
            wines
        })
    })
}

function showFavorites (req, res) {
    Wine.find({ favoritedBy: req.user._id })
    .then((wines) => {
        res.render('users/myfavorites', {
            title: "My Favorites",
            user: req.user,
            wines   
        })
    })
}    