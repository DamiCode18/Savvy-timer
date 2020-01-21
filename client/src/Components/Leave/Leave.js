import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import Moment from 'react-moment';

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
				console.log(this.state.datas);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		var {isLoaded} = this.state;
		if (!isLoaded) {
			return (
				<div>
					<Loader />
				</div>
			);
		} else {
			return (
				<div className='container-fluid text-center'>
					<h3>Leave Request Lists</h3>
					<div className='row'>
						<table className='table table-dark'>
							<thead className='thead-light'>
								<tr>
									<th>Name</th>
									<th>Reason</th>
									<th>From</th>
									<th>To</th>
								</tr>
							</thead>
							<tbody>
								{/* {datas.map((data) => {
									return (
										<tr key={data._id}>
											<td />
											<td />
											<td />
										</tr>
									);
								})} */}
							</tbody>
						</table>
					</div>
				</div>
			);
		}
	}
}

export default LeaveList;
