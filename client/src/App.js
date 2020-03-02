import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Hompage/Home';
import Login from './Components/Loginpage/Login';
import Register from './Components/RegisterPage/Register';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import Leave from './Components/Leave/Leave';
import NotFound from './Components/NotFound/NotFound';

//Hide all console logs
console.log = function() {};

//Check for token
if (localStorage.jwtToken) {
	//Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	//Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	//set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	//Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		//Logout User
		store.dispatch(logoutUser());
		//Clear current profile

		//Redirect to login
		window.location.href = '/login';
	}
}

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Provider store={store}>
					<Router>
						<Navbar />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/login' exact component={Login} />
							<Route path='/register' exact component={Register} />
							<Route path='/user' exact component={User} />
							<Route path='/admin' exact component={Admin} />
							<Route path='/leaveList' exact component={Leave} />
							<Route path='*' component={NotFound} />
						</Switch>
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
