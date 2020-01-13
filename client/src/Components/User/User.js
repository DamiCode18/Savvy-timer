import React, {Component} from 'react';
import img1 from '../../images/business-people-laptops-mobile-phones-600w-1298298010.jpg';
import './User.css';

function signOutTime() {
	var d = Date();
	var a = d.toString();
	console.log(`User Signed Out at =>  ${a}`);
	var b = 'SignOut Successful!';
	document.getElementById('plog').innerHTML = b;
	document.getElementById('date').innerHTML = a;
	var btn = document.getElementById('so');
	btn.disabled = true;
	var btn = document.getElementById('si');
	btn.disabled = false;
}
function signInTime() {
	var d = Date();
	var a = d.toString();
	console.log(`User Signed In at =>  ${a}`);
	var b = 'SignIn Successful!';
	document.getElementById('plog').innerHTML = b;
	document.getElementById('date').innerHTML = a;
	var btn = document.getElementById('si');
	btn.disabled = true;
	var btn = document.getElementById('so');
	btn.disabled = false;
	btn.classList.add('not-allowed');

	var timerVar = setInterval(countTimer, 1000);
	var totalSeconds = 0;
	function countTimer() {
		++totalSeconds;
		var hour = Math.floor(totalSeconds / 3600);
		var minute = Math.floor((totalSeconds - hour * 3600) / 60);
		var seconds = totalSeconds - (hour * 3600 + minute * 60);
		if (hour < 10) hour = '0' + hour;
		if (minute < 10) minute = '0' + minute;
		if (seconds < 10) seconds = '0' + seconds;
		document.getElementById('timer').innerHTML = 'Work Time => ' + hour + ':' + minute + ':' + seconds;
	}
}
function LeaveTime() {
	var d = Date();
	var a = d.toString();
	console.log(`User Request For Leave at =>  ${a}`);
	var b = 'Successfully Request For Leave!';
	document.getElementById('plog').innerHTML = b;
	document.getElementById('date').innerHTML = a;
}

class User extends Component {
	onSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<div className='userSection'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-12'>
						<img className='userImg' src={img1} alt='img' />
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12'>
						<div className='user card'>
							<h3 className='p-3'>Welcome</h3>
							<div className='card-body'>
								<div id='timer' className='p-3' />

								<button
									className='btn mx-5 bbb not-allowed'
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
															className='form-control'
															type='text'
															placeholder='Full Name'
															required
														/>
													</div>
													<div className='form-group'>
														<input
															className='form-control'
															type='text'
															placeholder='Department'
															required
														/>
													</div>
													<div className='form-group'>
														<input
															className='form-control'
															type='text'
															placeholder='Reason For Leave'
															required
														/>
													</div>
													<div className='form-group'>
														<input
															className='form-control'
															type='text'
															placeholder='Duration'
															required
														/>
													</div>
													<input
														type='submit'
														className='btn btn-primary'
														value='Submit Request'
														onClick={LeaveTime}
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

export default User;
