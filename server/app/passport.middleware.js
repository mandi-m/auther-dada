const passport = require('passport');
const User = require('../api/users/user.model');
const router = require('express').Router();

router.use(passport.initialize());
router.use(passport.session()); //wrapping around session store ==> run deserializeUser

passport.serializeUser(function (user, done) {
  done(null, user.id); // takes just user.id => session store associated with THIS session
});

passport.deserializeUser(function (id, done) { // we get what we serialized === the user.id
  User.findById(id)
  .then(user => done(null, user)) // attaches req.user as what you send in. req.user === THIS user instance
  .catch(done);
});

module.exports = router;
