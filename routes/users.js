const express = require('express'),
	router = express.Router(),
	User = require('../models/user.model'),
	bcrypt = require('bcryptjs'),
	jwt = require('jsonwebtoken'),
	keys = require('../config/keys'),
	passport = require('passport');

//Load Input Validations
const validateRegisterInput = require('../Validation/register');
const validateLoginInput = require('../Validation/login');

router.get('/', (req, res) => {
	User.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error: ' + err));
});

// Register routes and authentication

router.post('/register', (req, res) => {
	const {errors, isValid} = validateRegisterInput(req.body);

	//Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	User.findOne({
		email : req.body.email
	}).then((user) => {
		if (user) {
			errors.email = 'Email already exist';
			return res.status(400).json(errors);
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
					newUser
						.save()
						.then((user) => res.json({status: user.email + ' Registered!!'}))
						.catch((err) => res.status(400).json('Error: ' + err));
					console.log('user added');
				});
			});
		}
	});
});

// Login Routes and Authentication

router.post('/login', (req, res) => {
	const {errors, isValid} = validateLoginInput(req.body);

	//Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({email}).then((user) => {
		if (!user) {
			errors.email = 'User not found';
			res.status(404).json(errors);
		}

		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// User matched
				const payload = {id: user.id, firstname: user.firstname}; //Create JWT Payload

				// Sign Token
				jwt.sign(payload, keys.secretOrKey, {expiresIn: 120}, (err, token) => {
					res.json({
						success : true,
						token   : 'Bearer ' + token
					});
				});
			} else {
				errors.password = 'Incorrect password';
				return res.status(400).json(errors);
			}
		});
	});
});

router.get('/user', passport.authenticate('jwt', {session: false}), (req, res) => {
	res.json({
		id        : req.user.id,
		firstname : req.user.firstname,
		lastname  : req.user.lastname,
		email     : req.user.email
	});
});
module.exports = router;
