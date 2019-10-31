const router = require('express').Router();
let User = require('../models/register.model');

router.route('/').get((req, res) => {
	User.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	const password = req.body.password;
	const newUser = new User({firstname: firstname, lastname: lastname, email: email, password: password});
	newUser.save().then(() => res.json('User added!')).catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
