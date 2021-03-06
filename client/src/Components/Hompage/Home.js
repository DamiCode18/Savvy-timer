import React, {Component} from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import img1 from '../../images/loginpage.jpeg';
import img2 from '../../images/upage.jpeg';
import img3 from '../../images/registerpage.jpeg';
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
				<div className='interest p-2 my-3'>
					<h3 className='title'>Interesting Factors About SavvyTimer</h3>
					<p>
						"SavvyTimer is Great platform for time management in offices for effective tracking of employees
						record at work!"
					</p>
					<input
						type='button'
						className='btn py-2 px-4'
						value='Read More...'
						style={{color: '#4299E1', background: '#fff', borderRadius: '5px', border: '1px solid #fff'}}
					/>
				</div>
				<div className='container'>
					<h2 className='title text-center m-3'>Screenshot</h2>
					<img className='p-5 img-thumbnail col-lg-4 col-sm-6' src={img1} alt='img' style={{height: '400'}} />
					<img className='p-5 img-thumbnail col-lg-4 col-sm-6' src={img2} alt='img' style={{height: '400'}} />
					<img className='p-5 img-thumbnail col-lg-4 col-sm-6' src={img3} alt='img' style={{height: '400'}} />
				</div>
				<div className='footer p-2 mt-3'>
					<div>
						<p>Our Services</p>
						<p>Login</p>
						<p>Signup</p>
					</div>
					<div className='m-auto text-center'>SavvyTimer &copy; 2019</div>
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
