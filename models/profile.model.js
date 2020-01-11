const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const profileSchema = new Schema({
	user    : {
		type : Schema.Types.ObjectId,
		ref  : 'users'
	},
	signIn  : {
		type     : Date,
		required : true
	},
	signOut : {
		type     : Date,
		required : true
	},
	leave   : [
		{
			Fullname      : {
				type     : String,
				required : true
			},
			Department    : {
				type     : String,
				required : true
			},
			Reason        : {
				type     : String,
				required : true
			},
			Duration_From : {
				type     : Date,
				required : true
			},
			Duration_To   : {
				type     : Date,
				required : true
			}
		}
	]
});

module.exports = UserDetails = mongoose.model('UserDetails', profileSchema);
