const express = require('express'),
	router = express.Router(),
	User = require('../models/user.model'),
	bcrypt = require('bcryptjs'),
	jwt = require('jsonwebtoken'),
	keys = require('../config/keys'),
	passport = require('passport');

// passport = require('passport'),
// localStrategy = require('passport-local'),
// passportLocalMongoose = require('passport-local-mongoose');

router.get('/', (req, res) => {
	User.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error: ' + err));
});

// Register routes and authentication

router.post('/register', (req, res) => {
	User.findOne({
		email : req.body.email
	}).then((user) => {
		if (user) {
			return res.status(400).json({email: 'Email already exist'});
		} else {
			const newUser = new User({
				firstname : req.body.firstname,
				lastname  : req.body.lastname,
				email     : req.body.email,
				password  : req.body.password
			});
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) {
						throw err;
					}
					newUser.password = hash;
					newUser.save().then((user) => res.json(user)).catch((err) => res.status(400).json('Error: ' + err));
					console.log('user added');
				});
			});
		}
	});
});

// Login Routes and Authentication

router.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({email}).then((user) => {
		if (!user) {
			res.status(404).json({email: 'user not found'});
		}

		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// User matched
				const payload = {id: user.id, name: user.name}; //Create JWT Payload

				// Sign Token
				jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
					res.json({
						success : true,
						token   : 'Bearer' + token
					});
				});
			} else {
				return res.status(400).json({password: 'password incorrect'});
			}
		});
	});
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
	res.json({
		msg : 'success'
	});
});
module.exports = router;
