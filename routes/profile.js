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
	User.findOne({user: req.user.id})
		.then((profile) => {
			if (!profile) {
				errors.noprofile = 'There is no profile for this user';
				return res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch((err) => res.status(404).json(err));
});

//@route 	POST routes/profile
//@desc 	Create new user profile
//@access 	private

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
	// const errors = {};
	// const profileFields = {signIn: req.body.signIn, signOut: req.body.signOut};
	// profileFields.user = req.user.id;
	// profileFields.signIn = req.body.signIn;
	// profileFields.signOut = req.body.signOut;

	// Profile.findOne({user: req.user.id})
	// 	.then((profile) => {
	// 		if (profile) {
	// 			//Update
	// 			Profile.findOneAndUpdate(
	// 				{signIn: req.body.id},
	// 				{$set: profileFields},
	// 				{new: true}
	// 			).then((profile) => res.json(profile));
	// 		} else {
	// 			//Create
	// 			new Profile(profileFields).save().then((profile) => res.json(profile));
	// 		}
	// 	})
	// 	.catch((err) => res.status(404).json(err));
	const newProf = new Profile({
		signIn  : req.body.signIn,
		signOut : req.body.signOut
	});
	newProf
		.save()
		.then((prof) => res.json('Registered! ' + prof))
		.catch((err) => res.status(400).json('Error: ' + err));
	console.log('SIGNIN added');
});

module.exports = router;
