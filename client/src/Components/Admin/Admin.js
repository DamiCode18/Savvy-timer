import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import Moment from 'react-moment';
class DataList extends Component {
	state = {
		datas    : [],
		isLoaded : false
	};
	componentDidMount() {
		axios
			.get('/profile/datas')
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
		var {datas, isLoaded} = this.state;
		if (!isLoaded) {
			return (
				<div>
					<Loader />
				</div>
			);
		} else {
			return (
				<div className='container-fluid text-center'>
					<h3>User Attendance Details</h3>
					<div className='row'>
						<table className='table table-dark'>
							<thead className='thead-light'>
								<tr>
									<th>Name</th>
									<th>Date</th>
									<th>Time In</th>
									<th>Time Out</th>
								</tr>
							</thead>
							<tbody>
								{datas.map((data) => {
									return (
										<tr key={data._id}>
											<td>{data.user.firstname + ' ' + data.user.lastname}</td>
											<td>
												<Moment format='YYYY-MM-DD'>{data.date}</Moment>
											</td>
											<td>
												<Moment format='h:mm:ss a'>{data.signIn}</Moment>
											</td>
											<td>
												<Moment format='h:mm:ss a'>{data.signOut}</Moment>
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

export default DataList;
