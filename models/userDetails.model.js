const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema(
	{
		signIn  : {type: Date, required: true},
		signOut : {type: Date, required: true},
		leave   : {type: Date, required: true}
	},
	{
		timestamps : true
	}
);

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);
module.exports = UserDetails;
