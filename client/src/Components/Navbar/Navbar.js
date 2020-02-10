import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import img1 from '../../images/Group 33.svg';
import img2 from '../../images/user.svg';
import './Navbar.css';

class Navbar extends Component {
	logout = (e) => {
		e.preventDefault();
		// localStorage.removeItem('usertoken');
		this.props.logoutUser();
		this.props.history.push('/login');
	};
	render() {
		const {isAuthenticated} = this.props.auth;
		const string = window.location.href;
		let tenary = (function tenary() {
			if (string.includes('login')) {
				return <ul className='navbar-nav ml-auto' />;
			} else if (string.includes('register')) {
				return <ul className='navbar-nav ml-auto' />;
			} else {
				return (
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item m-auto'>
							<Link className='nav-link mx-2' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item m-auto'>
							<Link className='nav-link mx-2' to='/contact'>
								Contact us
							</Link>
						</li>
						<li className='nav-item m-auto'>
							<Link
								className='nav-link px-4 mx-3'
								to='/login'
								style={{border: '1px solid #4299E1', color: '#4299E1', borderRadius: '5px'}}
							>
								Login
							</Link>
						</li>
					</ul>
				);
			}
		})();
		let navToggle = (function toggle() {
			if (string.includes('login')) {
				return '';
			} else if (string.includes('register')) {
				return '';
			} else {
				return <span className='navbar-toggler-icon' />;
			}
		})();
		const userLink = (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item active m-auto'>
					<Link className='nav-link' to='/user'>
						Attendance
					</Link>
				</li>
				<li className='nav-item m-auto'>
					<Link className='nav-link' to='/leaveList'>
						Leave
					</Link>
				</li>
				<li className='nav-item m-auto'>
					<Link className='nav-link' to='/admin'>
						Admin
					</Link>
				</li>
				<li className='nav-item m-auto'>
					<a href='/' style={{color: '#4299E1'}} className='nav-link btn px-4' onClick={this.logout}>
						Logout
						<img className='' src={img2} alt='user img' style={{width: '25px', marginRight: '5px'}} />
					</a>
				</li>
			</ul>
		);
		return (
			<div>
				<nav style={{color: '#fff'}} className='container navbar navbar-expand-lg navbar-light'>
					<Link className='navbar-brand' to='/'>
						<img src={img1} alt='logo' style={{height: '40px', width: '150px'}} />
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						id='toggle'
						data-toggle='collapse'
						data-target='#navbar1'
						aria-controls='navbar1'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						{isAuthenticated ? <span className='navbar-toggler-icon' /> : navToggle}
					</button>
					<div className='collapse navbar-collapse' id='navbar1'>
						{isAuthenticated ? userLink : tenary}
					</div>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes = {
	logoutUser : PropTypes.func.isRequired,
	auth       : PropTypes.object.isRequired,
	errors     : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));
