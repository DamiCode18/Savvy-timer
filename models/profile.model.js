const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
	user    : {
		type : Schema.Types.ObjectId,
		ref  : 'users'
	},
	signIn  : {
		type : Date
	},
	signOut : {
		type : Date
	},
	date    : {
		type : Date
	}
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
