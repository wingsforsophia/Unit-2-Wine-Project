const User = require("../models/user");
const Wine = require("../models/wine")

module.exports = {
    index
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/index", { title: "User Index", user: req.user, users });
    });
  }