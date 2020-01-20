const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
	user    : {
		type : Schema.Types.ObjectId,
		ref  : 'users'
	},
	signIn  : {
		type : Object
	},
	signOut : {
		type : Object
	}
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
