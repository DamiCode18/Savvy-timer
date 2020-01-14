import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import './Login.css';
import {Link} from 'react-router-dom';
import img1 from '../../images/index.jpeg';
import classnames from 'classnames';

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
			<div className='login text-center mt-2'>
				<div className='img-thumbnail m-auto width p-5 text-center'>
					<div className='pb-3'>
						<img src={img1} alt='img' style={{width: '100px', height: '100px'}} />
					</div>
					<form noValidate onSubmit={this.onSubmit}>
						<div className='m-4 form-group'>
							<input
								value={this.state.email}
								type='email'
								id='email'
								name='email'
								className={classnames('form-control', {'is-invalid': errors.email})}
								placeholder='Email'
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
							className='btn btn-primary'
						>
							Login
						</button>
						<div className='mt-2'>
							<p>
								You Don't Have an Account Yet?<Link className='ml-1' to='/register'>
									Register
								</Link>
							</p>
						</div>
					</form>
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
