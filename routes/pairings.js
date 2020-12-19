const router = require("express").Router();
const pairingsCtrl = require("../controllers/pairings");


router.get('/:id/pairings/new', isLoggedIn, pairingsCtrl.new)
router.post('/:id/pairings', isLoggedIn, pairingsCtrl.create)
router.get('/:id/pairings', isLoggedIn, pairingsCtrl.index)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router