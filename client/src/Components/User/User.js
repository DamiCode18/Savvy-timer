import React, {Component} from 'react';
import img1 from '../../images/business-people-laptops-mobile-phones-600w-1298298010.jpg';
import './User.css';
import axios from 'axios';
import {connect} from 'react-redux';

let timerVar, timeDisp, btn, b, d;
function signOutTime() {
	d = Date().toString();
	b = 'SignOut Successful!';
	document.getElementById('plog').textContent = b;
	document.getElementById('date').textContent = d;
	btn = document.getElementById('so');
	btn.disabled = true;
	btn = document.getElementById('si');
	btn.disabled = false;
	axios
		.post('profile', {signOut: new Date(), date: new Date()})
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			return error;
		});
	clearTimeout(timerVar);
	timeDisp = 'Work Time => Closed!!!';
	document.getElementById('timer').textContent = timeDisp;
}
function signInTime() {
	d = Date().toString();
	b = 'SignIn Successful!';
	document.getElementById('plog').textContent = b;
	document.getElementById('date').textContent = d;
	btn = document.getElementById('si');
	btn.disabled = true;
	btn = document.getElementById('so');
	btn.disabled = false;
	btn.classList.add('not-allowed');
	axios
		.post('profile', {signIn: new Date(), date: new Date()})
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			return error;
		});
	timerVar = setInterval(countTimer, 1000);
	var totalSeconds = 0;
	function countTimer() {
		++totalSeconds;
		var hour = Math.floor(totalSeconds / 3600);
		var minute = Math.floor((totalSeconds - hour * 3600) / 60);
		var seconds = totalSeconds - (hour * 3600 + minute * 60);
		if (hour < 10) hour = '0' + hour;
		if (minute < 10) minute = '0' + minute;
		if (seconds < 10) seconds = '0' + seconds;
		timeDisp = 'Work Time => ' + hour + ':' + minute + ':' + seconds;
		document.getElementById('timer').textContent = timeDisp;
	}
}
function LeaveTime() {
	d = Date().toString();
	b = 'Leave Request Submitted!';
	document.getElementById('plog').textContent = b;
	document.getElementById('date').textContent = d;
}

class User extends Component {
	state = {
		Fullname : '',
		Reason   : '',
		From     : '',
		To       : '',
		Status   : 'Pending'
	};
	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			Fullname : this.state.Fullname,
			Reason   : this.state.Reason,
			From     : this.state.From,
			To       : this.state.To,
			Status   : this.state.Status
		};
		axios.post('leave', userData).then((res) => console.log(res.data));
		console.log(userData);
	};

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};
	render() {
		const {auth} = this.props;
		const name = auth.user.firstname;
		const dispName = name.charAt(0).toUpperCase() + name.slice(1);
		return (
			<div className='userSection container-fluid'>
				<div className='row'>
					<div className='container text-center col-lg-6 col-md-6 col-sm-12'>
						<img className='userImg' src={img1} alt='img' />
					</div>
					<div className='mt-4 col-lg-6 col-md-6 col-sm-12'>
						<div className='user card'>
							<h3 className='pt-5 px-3'>Welcome {dispName}</h3>
							<div className='card-body'>
								<div id='timer' className='p-3' />
								<button
									className='btn bbb not-allowed'
									onClick={signInTime}
									id='si'
									style={{background: 'green', color: 'white'}}
								>
									SignIn
								</button>
								<button
									className='btn btn-danger mx-auto bbb not-allowed'
									onClick={signOutTime}
									id='so'
									style={{color: 'white'}}
								>
									SignOut
								</button>
								<div className='text-center'>
									<button
										className='btn mt-5 btn-outline-info bbb'
										data-toggle='modal'
										data-target='#exampleModal'
									>
										Leave
									</button>
								</div>
								<div
									className='modal fade'
									id='exampleModal'
									tabIndex='-1'
									role='dialog'
									aria-labelledby='exampleModalLabel'
									aria-hidden='true'
								>
									<div className='modal-dialog' role='document'>
										<div className='modal-content'>
											<div className='modal-header'>
												<h5 className='modal-title' id='exampleModalLabel'>
													Request For Leave
												</h5>
												<button
													type='button'
													className='close'
													data-dismiss='modal'
													aria-label='Close'
												>
													<span aria-hidden='true'>&times;</span>
												</button>
											</div>
											<div className='modal-body'>
												<form onSubmit={this.onSubmit}>
													<div className='form-group'>
														<input
															value={this.state.Fullname}
															className='form-control'
															type='text'
															placeholder='Full Name'
															required
															name='Fullname'
															onChange={this.onChange}
														/>
													</div>
													<div className='form-group'>
														<input
															value={this.state.Reason}
															className='form-control'
															type='text'
															placeholder='Reason For Leave'
															required
															name='Reason'
															onChange={this.onChange}
														/>
													</div>
													<div className='form-group'>
														<input
															value={this.state.From}
															className='form-control'
															type='text'
															placeholder='From'
															required
															name='From'
															onChange={this.onChange}
														/>
													</div>
													<div className='form-group'>
														<input
															value={this.state.To}
															className='form-control'
															type='text'
															placeholder='To'
															required
															name='To'
															onChange={this.onChange}
														/>
													</div>
													<div className='form-group'>
														<input
															value={this.state.Status}
															className='form-control not-allowed'
															type='text'
															placeholder='Status'
															required
															name='Status'
															readOnly
														/>
													</div>
													<input
														type='submit'
														className='btn btn-primary'
														value='Submit Request'
														onClick={LeaveTime}
														data-dismiss='modal'
													/>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className='m-5 text-center'>
									<p id='plog' />
									<p id='date' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth : state.auth
});

export default connect(mapStateToProps)(User);
