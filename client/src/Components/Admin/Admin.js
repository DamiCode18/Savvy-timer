import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';

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
				console.log(this.state.datas);
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
				<div className='container-fluid'>
					<h3>User Attendance Details</h3>
					<table className='table table-dark'>
						<thead className='thead-light'>
							<tr>
								<th>Name</th>
								<th>Date</th>
								<th>Time In</th>
								<th>Time Out</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{datas.map((data) => {
								return (
									<tr>
										<td>
											<p key={data._id}>{data.user.firstname}</p>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			);
		}
	}
}

export default DataList;
