const router = require('express').Router();
let Details = require('../models/userDetails.model');

router.get('/', (req, res) => {
	Details.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error: ' + err));
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
