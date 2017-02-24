'use strict';

var router = require('express').Router();
// is this person authorized to go into this route
	//if needs to be admin - check admin? Yeah - goo otherwise go away
router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/auth', require('./auth'));

module.exports = router;
