import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './Register.css';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import img1 from '../../images/index5.png';

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
		this.setState({[e.target.name]: e.target.value});
	};
	render() {
		const {errors} = this.state;
		return (
			<div className='register text-center mt-2'>
				<div className='img-thumbnail width p-5 text-center m-auto'>
					<div className='mb-4'>
						<img src={img1} alt='img' style={{width: '100px', height: '100px'}} />
					</div>
					<form noValidate onSubmit={this.onSubmit}>
						<div className='m-4 form-group'>
							<input
								type='text'
								id='firstname'
								name='firstname'
								className={classnames('form-control', {'is-invalid': errors.firstname})}
								placeholder='Firstname'
								value={this.state.firstname}
								onChange={this.onChange}
							/>
							{errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
						</div>
						<div className='m-4 form-group'>
							<input
								type='text'
								id='lastname'
								name='lastname'
								className={classnames('form-control', {'is-invalid': errors.lastname})}
								placeholder='Lastname'
								value={this.state.lastname}
								onChange={this.onChange}
							/>
							{errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
						</div>
						<div className='m-4 form-group'>
							<input
								type='email'
								id='email'
								name='email'
								className={classnames('form-control', {'is-invalid': errors.email})}
								placeholder='Email'
								value={this.state.email}
								onChange={this.onChange}
							/>
							{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
						</div>
						<div className='m-4 form-group'>
							<input
								type='password'
								id='password'
								name='password'
								className={classnames('form-control', {'is-invalid': errors.password})}
								placeholder='Password'
								value={this.state.password}
								onChange={this.onChange}
							/>
							{errors.password && <div className='invalid-feedback'>{errors.password}</div>}
						</div>
						<button
							style={{borderRadius: '50px', padding: '10px', width: '200px'}}
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
