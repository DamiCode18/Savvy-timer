import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import './Leave.css';
function Approve() {
	document.getElementById('pend').textContent = 'Approved!';
}
function Reject() {
	document.getElementById('pend').textContent = 'Rejected!';
}

class LeaveList extends Component {
	state = {
		datas    : [],
		isLoaded : false
	};
	componentDidMount() {
		axios
			.get('/leave/datas')
			.then((response) => {
				this.setState({
					datas    : response.data,
					isLoaded : true
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const {datas, isLoaded} = this.state;
		if (!isLoaded) {
			return (
				<div>
					<Loader />
				</div>
			);
		} else {
			return (
				<div className='container-fluid text-center leave'>
					<h3>Leave Request Lists</h3>
					<div className='row'>
						<table className='table table-dark'>
							<thead className='thead-light'>
								<tr>
									<th>Name</th>
									<th>Reason</th>
									<th>From</th>
									<th>To</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{datas.map((data) => {
									return (
										<tr key={data._id}>
											<td>{data.Fullname}</td>
											<td>{data.Reason}</td>
											<td>{data.From}</td>
											<td>{data.To}</td>
											<td id='pend'>
												<p>Pending</p>
											</td>
											<td>
												<input
													className='btn btn-primary m-1 px-3'
													type='button'
													value='Approve'
													onClick={Approve}
													style={{borderRadius: '50px'}}
												/>
												<input
													style={{borderRadius: '50px'}}
													className='btn btn-danger px-3'
													type='button'
													value='Reject'
													onClick={Reject}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			);
		}
	}
}

export default LeaveList;
