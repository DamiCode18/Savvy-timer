import React, {Component} from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import img1 from '../../images/login.png';
import img2 from '../../images/admin.png';
import img3 from '../../images/signup.png';
import img4 from '../../images/campusM-Attendance-integrated-into-campusM-large.png';
import Features from '../Features/Features';

class Home extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/user');
		}
	}
	render() {
		return (
			<div className='home'>
				<div className='hdisplay text-center'>
					<img className='homeImg' src={img4} alt='img' />
				</div>
				<Features />
				<div className='interest p-2 m-3'>
					<h3 className='title'>Interesting Factors About SavvyTimer</h3>
					<p>
						"SavvyTimer is Great platform for time management in offices for effective tracking of employees
						record at work!"
					</p>
					<input type='button' className='btn btn-info' value='Read More...' />
				</div>
				<div className='container'>
					<h2 className='title text-center m-3'>Screenshot</h2>
					<img className='p-5 img-thumbnail col-lg-4 col-sm-6' src={img1} alt='img' />
					<img className='p-5 img-thumbnail col-lg-4 col-sm-6' src={img2} alt='img' />
					<img className='p-5 img-thumbnail col-lg-4 col-sm-6' src={img3} alt='img' />
				</div>
				<div className='footer p-2 mt-3'>
					<div>
						<h6>Our Services</h6>
						<h6>Login</h6>
						<h6>Signup</h6>
					</div>
					<div className='ml-auto'>SavvyTimer &copy; 2019</div>
				</div>
			</div>
		);
	}
}
Home.propTypes = {
	auth   : PropTypes.object.isRequired,
	errors : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});
export default connect(mapStateToProps)(withRouter(Home));
