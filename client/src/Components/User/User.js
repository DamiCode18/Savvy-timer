import React, {Component} from 'react';
import img1 from '../../images/calendar (1) 1.svg';
import './User.css';
import axios from 'axios';
import {connect} from 'react-redux';

let timerVar, timeDisp, btn, b, d;
class User extends Component {
	state = {
		Fullname : '',
		Reason   : '',
		From     : '',
		To       : ''
	};

	signInTime = () => {
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
		let totalSeconds = 0;
		function countTimer() {
			++totalSeconds;
			let hour = Math.floor(totalSeconds / 3600);
			let minute = Math.floor((totalSeconds - hour * 3600) / 60);
			let seconds = totalSeconds - (hour * 3600 + minute * 60);
			if (hour < 10) hour = '0' + hour;
			if (minute < 10) minute = '0' + minute;
			if (seconds < 10) seconds = '0' + seconds;
			timeDisp = 'Work Time => ' + hour + ':' + minute + ':' + seconds;
			document.getElementById('timer').textContent = timeDisp;
		}
	};
	signOutTime = () => {
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
	};

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			Fullname : this.state.Fullname,
			Reason   : this.state.Reason,
			From     : this.state.From,
			To       : this.state.To
		};
		axios.post('leave', userData).then((res) => res.data).catch((err) => {
			console.log(err);
		});
	};

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};
	render() {
		const {auth} = this.props;
		const name = auth.user.firstname;
		const dispName = name.charAt(0).toUpperCase() + name.slice(1);
		return (
			<div className='userSection container'>
				<div className='row'>
					<div className='container col-lg-6 col-md-6 col-sm-12'>
						<h3 className='pt-5' style={{color: '#0d3859', fontWeight: 'bolder'}}>
							Welcome back {dispName},
						</h3>
						<button
							className='btn not-allowed'
							onClick={this.signInTime}
							id='si'
							style={{color: '#4299E1', fontWeight: 'bolder', border: '1px solid #4299E1'}}
						>
							Punch in for today
						</button>
						<div className='card' style={{height: '160px', width: '250px', marginTop: '60px'}}>
							<div className='row' style={{margin: '0px'}}>
								<div
									style={{borderRadius: '3px', width: '50px', height: '60px', background: '#4299E1'}}
								>
									<p
										className='mb-0'
										style={{
											color      : '#fff',
											fontWeight : '500',
											padding    : '1px',
											fontSize   : '.8em',
											textAlign  : 'center'
										}}
									>
										Feb 14th 2019
									</p>
								</div>
								<div className='m-auto'>
									<p style={{color: '#0d3859', marginTop: '20px'}}>Work time</p>
									<div
										id='timer'
										className=''
										style={{
											color      : '#0d3859',
											fontWeight : 'bold',
											textAlign  : 'center',
											marginTop  : '-20px'
										}}
									>
										00:00
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='m-auto text-center col-lg-6 col-md-6 col-sm-12'>
						<img src={img1} alt='img' style={{width: '120px', height: '120px'}} />
						{/* <button
									className='btn btn-danger mx-auto bbb not-allowed'
									onClick={this.signOutTime}
									id='so'
									style={{color: 'white'}}
								>
									SignOut
								</button> */}
						{/* <div className='text-center'>
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
												<form noValidate onSubmit={this.onSubmit}>
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
													<input
														type='submit'
														className='btn btn-primary'
														value='Submit Request'
														data-dismiss='modal'
														onClick={this.onSubmit}
													/>
												</form>
											</div>
										</div>
									</div>
								</div> */}
						<div className='m-5 text-center'>
							<p id='plog' />
							<p id='date' />
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
