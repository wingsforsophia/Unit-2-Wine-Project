const User = require("../models/user");
const Wine = require("../models/wine")

module.exports = {
   create 
}

function create (req, res) {
  Wine.findById(req.params.id)
  .then((wine) => {
      wine.reviews.push(req.body)
      wine.save()
      .then(() => {
          res.redirect(`/wines/${req.params.id}`)
      })
  })  
}