const User = require("../models/user");
const Wine = require("../models/wine")

module.exports = {
   new: newPairing,
   create,
   index
 }

 function newPairing (req, res) {
  Wine.findById(req.params.id)
  .then((wine) => {
    res.render('wines/addPairing', {
        title: "Add New Pairing",
        user: req.user,
        wine
          })

  }) 
 }

 function create (req, res) {
  Wine.findById(req.params.id)
  .then((wine) => {
    wine.pairings.push(req.body)
    wine.save()
    .then(() => {
      res.redirect(`/wines/${req.params.id}`)
    }) 
   })
 }

 function index (req, res) {
   Wine.findById(req.params.id)
   .then((wine) => {
    res.render('wines/pairingsIndex', {
      title: "All Pairings",
      user: req.user,
      pairings: wine.pairings
    })     
   })
 }


