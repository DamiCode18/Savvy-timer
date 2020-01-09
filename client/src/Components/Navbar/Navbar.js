import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import img1 from '../../images/logo.png';
import img2 from '../../images/avatar.jpeg';

class Navbar extends Component {
	logout = (e) => {
		e.preventDefault();
		// localStorage.removeItem('usertoken');
		this.props.logoutUser();
		this.props.history.push('/login');
	};
	render() {
		const {isAuthenticated} = this.props.auth;
		const LoginRegLink = (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item active'>
					<Link className='nav-link' to='/'>
						{/* <span className='iconify' data-icon='fa-facebook' /> */}
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/About'>
						{/* <span className='iconify' data-icon='fa-facebook' /> */}
						About
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/login'>
						{/* <span className='iconify' data-icon='fa-facebook' /> */}
						Login
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/register'>
						Register
					</Link>
				</li>
			</ul>
		);
		const userLink = (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item active'>
					<Link className='nav-link' to='/'>
						{/* <span className='iconify' data-icon='fa-facebook' /> */}
						Home
					</Link>
				</li>
				<li className='nav-item active'>
					<Link className='nav-link' to='/user'>
						{/* <span className='iconify' data-icon='fa-facebook' /> */}
						Profile
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						style={{borderRadius: '50px', width: '100px'}}
						className='nav-link btn btn-outline-primary px-4'
						to='/admin'
					>
						Admin
					</Link>
				</li>
				<li className='nav-item'>
					<a href='/' style={{color: '#fff'}} className='nav-link btn btn-info px-4' onClick={this.logout}>
						<img
							className='rounded-circle'
							src={img2}
							alt='user img'
							style={{width: '25px', marginRight: '5px'}}
						/>
						Logout
					</a>
				</li>
			</ul>
		);
		return (
			<div>
				<nav style={{color: '#fff'}} className='container navbar navbar-expand-lg navbar-light'>
					<Link className='navbar-brand' to='/'>
						<img src={img1} alt='logo' style={{height: '40px', width: '40px'}} />
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbar1'
						aria-controls='navbar1'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbar1'>
						<ul className='navbar-nav' />
						{isAuthenticated ? userLink : LoginRegLink}
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
