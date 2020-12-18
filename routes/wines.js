const router = require('express').Router()
const winesCtrl = require('../controllers/wines')
const wine = require('../models/wine')

router.get('/', isLoggedIn, winesCtrl.index)
router.get('/new', isLoggedIn, winesCtrl.new)
router.post('/', isLoggedIn, winesCtrl.create)
router.post('/search', isLoggedIn, winesCtrl.search)
router.get('/:id', isLoggedIn, winesCtrl.show)
router.post('/:id/winelist', isLoggedIn, winesCtrl.addToWineList)
router.delete('/:id/winelist', isLoggedIn, winesCtrl.removeFromWineList)






function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router