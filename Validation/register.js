const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};
	data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
	data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	let subString = 'techsavvyng.com';

	if (!Validator.isLength(data.firstname, {min: 4, max: 15})) {
		errors.firstname = 'Firstname must be between 4 and 15 characters';
	}
	if (Validator.isEmpty(data.firstname)) {
		errors.firstname = 'Firstname is required';
	}
	if (!Validator.isLength(data.lastname, {min: 4, max: 15})) {
		errors.lastname = 'Lastname must be between 4 and 15 characters';
	}
	if (Validator.isEmpty(data.lastname)) {
		errors.lastname = 'Lastname is required';
	}
	if (!(Validator.isEmail(data.email) && data.email.split('@')[1] === subString)) {
		errors.email = 'Invalid Email';
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email is required';
	}
	if (!Validator.isLength(data.password, {min: 8, max: 20})) {
		errors.password = 'Password must be at least 8 characters';
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password is required';
	}

	return {
		errors,
		isValid : isEmpty(errors)
	};
};
