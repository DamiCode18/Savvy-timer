const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Profile model
const Profile = require('../models/profile.model');

//Load User model
const User = require('../models/user.model');

//@route 	GET routes/profile/test
//@desc 	Test profile route
//@access 	public
router.get('/test', (req, res) => res.json({msg: 'profile works'}));

//@route 	GET routes/profile
//@desc 	Get current user profile
//@access 	private

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
	const errors = {};
	Profile.findOne({user: req.user.id})
		.then((profile) => {
			if (!profile) {
				errors.noprofile = 'There is no profile for this user';
				return res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch((err) => res.status(404).json(err));
});
router.route('/add').post((req, res) => {
	const newDetails = new Details({
		signIn  : req.body.signIn,
		signOut : req.body.signOut,
		leave   : req.body.leave
	});
	newDetails.save().then(() => res.json('Details Saved!')).catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
