const router = require('express').Router()
const winesCtrl = require('../controllers/wines')

router.get('/', isLoggedIn, winesCtrl.index)
router.get('/new', isLoggedIn, winesCtrl.new)
router.post('/', isLoggedIn, winesCtrl.create)





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router