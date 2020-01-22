const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Profile model
const Leave = require('../models/leave.model');

router.get('/', (req, res) => {
	Leave.find()
		.then((leaves) => {
			res.json(leaves);
		})
		.catch((err) => res.status(400).json(err));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
	const Fullname = req.body.Fullname;
	const Reason = req.body.Reason;
	const From = req.body.From;
	const To = req.body.To;
	const Status = req.body.Status;

	const newLeave = new Leave({
		Fullname,
		Reason,
		From,
		To,
		Status
	});

	newLeave
		.save()
		.then((leave) => res.json(leave + 'Leave request added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
