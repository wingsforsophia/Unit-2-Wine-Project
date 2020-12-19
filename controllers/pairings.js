const User = require("../models/user");
const Wine = require("../models/wine")

module.exports = {
   new: newPairing
 }

 function newPairing (req, res) {
  res.render('wines/addPairing', {
      title: "Add New Pairing",
      user: req.user
        })
 }