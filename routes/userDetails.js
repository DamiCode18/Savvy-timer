const router = require('express').Router();
let Details = require('../models/userDetails.model');

router.route('/').get((req, res) => {
	Details.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const signIn = req.body.signIn;
	const signOut = req.body.signOut;
	const leave = req.body.leave;
	const newDetails = new Details({signIn: signIn, signOut: signOut, leave: leave});
	newDetails.save().then(() => res.json('Details Saved!')).catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
