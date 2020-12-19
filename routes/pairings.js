const router = require("express").Router();
const reviewsCtrl = require("../controllers/reviews");





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router