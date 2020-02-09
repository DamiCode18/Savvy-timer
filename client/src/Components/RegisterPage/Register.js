import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './Register.css';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

class Register extends Component {
	state = {
		firstname : '',
		lastname  : '',
		email     : '',
		password  : '',
		errors    : {}
	};
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/user');
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
	}
	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			firstname : this.state.firstname,
			lastname  : this.state.lastname,
			email     : this.state.email,
			password  : this.state.password
		};

		this.props.registerUser(newUser, this.props.history);
	};

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value.toLowerCase()});
	};
	render() {
		const {errors} = this.state;
		return (
			<div className='register mt-2'>
				<div className='row mx-auto'>
					<div className='col-md-5 col-sm-12 text-center mt-5'>
						<h1 style={{color: '#0d3859', fontWeight: 'bolder'}}>Create an account</h1>
					</div>
					<div className='width p-5 m-auto col-md-7 col-sm-12'>
						<div className='mb-4'>
							<h3 style={{textAlign: 'center', color: '#0d3859'}}>Register</h3>
						</div>
						<form noValidate onSubmit={this.onSubmit} className='form'>
							<div className='form-row'>
								<div className='form-group col-md-6 my-1'>
									<label htmlFor='firstname'>Firstname</label>
									<input
										type='text'
										id='firstname'
										name='firstname'
										className={classnames('form-control mb-2', {'is-invalid': errors.firstname})}
										placeholder='Dammy'
										value={this.state.firstname}
										onChange={this.onChange}
									/>
									{errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
								</div>
								<div className='form-group col-md-6 my-1'>
									<label htmlFor='lastname'>Lastname</label>
									<input
										type='text'
										id='lastname'
										name='lastname'
										className={classnames('form-control mb-2', {'is-invalid': errors.lastname})}
										placeholder='Johnson'
										value={this.state.lastname}
										onChange={this.onChange}
									/>
									{errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
								</div>
							</div>

							<div className='form-group my-1'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									id='email'
									name='email'
									className={classnames('form-control mb-2', {'is-invalid': errors.email})}
									placeholder='damilare@techsavvyng.com'
									value={this.state.email}
									onChange={this.onChange}
								/>
								{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
							</div>
							<div className='form-group'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									id='password'
									name='password'
									className={classnames('form-control mb-4', {'is-invalid': errors.password})}
									placeholder='*************'
									value={this.state.password}
									onChange={this.onChange}
								/>
								{errors.password && <div className='invalid-feedback'>{errors.password}</div>}
							</div>
							<button
								style={{
									borderRadius: '50px',
									padding: '10px',
									width: '100%',
									background: '#4299E1',
									color: '#fff'
								}}
								type='submit'
								className='btn btn-info'
							>
								Register
							</button>
							<div className='mt-2'>
								<p>
									Already Have an Account!<Link className='ml-1' to='/login'>
										Login
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
Register.propTypes = {
	registerUser : PropTypes.func.isRequired,
	auth         : PropTypes.object.isRequired,
	errors       : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
