const router = require('express').Router()
const winesCtrl = require('../controllers/wines')

router.get('/new', isLoggedIn, winesCtrl.new)





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router