const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const LeaveSchema = new Schema({
	Fullname : {
		type     : String,
		required : true
	},
	Reason   : {
		type     : String,
		required : true
	},
	From     : {
		type     : String,
		required : true
	},
	To       : {
		type     : String,
		required : true
	},
	Status   : {
		type : String
	}
});

module.exports = Leave = mongoose.model('Leave', LeaveSchema);
