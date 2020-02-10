import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import './Login.css';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import logImg from '../../images/man-wear-watches-that-are-connected-their-mobile-devices_10045-380.jpg';

class Login extends Component {
	state = {
		email    : '',
		password : '',
		errors   : {}
	};

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/user');
		}
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/user');
		}
		if (nextProps.errors) {
			this.setState({
				errors : nextProps.errors
			});
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email    : this.state.email,
			password : this.state.password
		};
		this.props.loginUser(userData);
	};

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value.toLowerCase()});
	};
	render() {
		const {errors} = this.state;
		return (
			<div className=''>
				<div className='row mx-auto'>
					<div className='col-md-5 col-sm-12 text-center mt-5'>
						<h1 style={{color: '#0d3859', fontWeight: 'bolder'}}>Welcome back,</h1>
						<p style={{color: '#0d3859', fontWeight: '500'}}>Login to continue</p>
						{/* <img src={logImg} alt='img' className='logImg' /> */}
					</div>
					<div className='width p-5 m-auto col-md-7 col-sm-12'>
						<form className='form' noValidate onSubmit={this.onSubmit}>
							<div className='form-group mb-4'>
								<label htmlFor='email'>Email</label>
								<input
									value={this.state.email}
									type='email'
									id='email'
									name='email'
									className={classnames('form-control', {'is-invalid': errors.email})}
									placeholder='damilare@techsavvyng.com'
									onChange={this.onChange}
								/>
								{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
							</div>
							<div className='form-group mb-4'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									id='password'
									name='password'
									className={classnames('form-control', {'is-invalid': errors.password})}
									placeholder='**********'
									value={this.state.password}
									onChange={this.onChange}
								/>
								{errors.password && <div className='invalid-feedback'>{errors.password}</div>}
							</div>
							<button
								style={{
									borderRadius : '3px',
									padding      : '10px',
									width        : '100%',
									background   : '#4299E1',
									color        : '#fff',
									marginTop    : '15px'
								}}
								type='submit'
								className='btn'
							>
								Login
							</button>
							<div className='mt-2'>
								<p>
									You Don't Have an Account Yet?<Link className='ml-1' to='/register'>
										Create one now
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser : PropTypes.func.isRequired,
	auth      : PropTypes.object.isRequired,
	errors    : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);
