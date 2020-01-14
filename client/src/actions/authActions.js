import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {GET_ERRORS, SET_CURRENT_USER} from './types';

//Register User

export const registerUser = (userData, history) => (dispatch) => {
	axios.post('/users/register', userData).then((res) => history.push('/login')).catch((err) =>
		dispatch({
			type    : GET_ERRORS,
			payload : err.response.data
		})
	);
};

//Login - Get user token

export const loginUser = (userData) => (dispatch) => {
	axios
		.post('/users/login', userData)
		.then((res) => {
			// Save to localStorage
			const {token} = res.data;
			// set token to  LS
			localStorage.setItem('jwtToken', token);
			//set token to Auth Header
			setAuthToken(token);
			//Decode token to get user Data
			let decoded = jwt_decode(token);
			//Set current user
			dispatch(setCurrentUser(decoded));
			console.log(decoded);
		})
		.catch((err) =>
			dispatch({
				type    : GET_ERRORS,
				payload : err.response.data
			})
		);
};

// Set logged in user

export const setCurrentUser = (decoded) => {
	return {
		type    : SET_CURRENT_USER,
		payload : decoded
	};
};

//Log users out

export const logoutUser = () => (dispatch) => {
	//Remove token from localStorage
	localStorage.removeItem('jwtToken');
	//Remove auth header for future requests
	setAuthToken(false);
	//set current user to {} which will also set isAuthenticate to false
	dispatch(setCurrentUser({}));
};
