import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// const Admin = () => {
// 	return (
// 		<div className='container-fluid'>
// 			<table className='table table-dark'>
// 				<thead>
// 					<tr>
// 						<th scope='col'>S/n</th>
// 						<th scope='col'>Name</th>
// 						<th scope='col'>Position</th>
// 						<th scope='col'>Time In</th>
// 						<th scope='col'>Time Out</th>
// 						<th scope='col'>Leave Status</th>
// 						<th scope='col'>Actions</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<th scope='row'>1</th>
// 						<td>Mark</td>
// 						<td>Frontend Dev</td>
// 						<td>08:00</td>
// 						<td>04:00</td>
// 						<td>Pending</td>
// 						<td />
// 					</tr>
// 					<tr>
// 						<th scope='row'>2</th>
// 						<td>John</td>
// 						<td>Marketer</td>
// 						<td>18:00</td>
// 						<td>04:00</td>
// 						<td>Pending</td>
// 						<td />
// 					</tr>
// 					<tr>
// 						<th scope='row'>3</th>
// 						<td>Kaz</td>
// 						<td>Writer</td>
// 						<td>09:00</td>
// 						<td>04:00</td>
// 						<td>Approved</td>
// 						<td />
// 					</tr>
// 					<tr>
// 						<th scope='row'>4</th>
// 						<td>Native</td>
// 						<td>Coder</td>
// 						<td>09:00</td>
// 						<td>05:00</td>
// 						<td>Approved</td>
// 						<td />
// 					</tr>
// 					<tr>
// 						<th scope='row'>5</th>
// 						<td>Flutter</td>
// 						<td>Lang</td>
// 						<td>09:00</td>
// 						<td>04:00</td>
// 						<td>Pending</td>
// 						<td />
// 					</tr>
// 					<tr>
// 						<th scope='row'>6</th>
// 						<td>Jasper</td>
// 						<td>Mobile Dev</td>
// 						<td>09:00</td>
// 						<td>05:00</td>
// 						<td>Rejected</td>
// 						<td />
// 					</tr>
// 					<tr>
// 						<th scope='row'>7</th>
// 						<td>Mike</td>
// 						<td>Dev</td>
// 						<td>09:00</td>
// 						<td>04:00</td>
// 						<td>Approved</td>
// 						<td />
// 					</tr>
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };
// export default Admin;

const UserDetails = (props) => {
	return (
		<tr>
			<td>{props.datas.user.firstname}</td>
			<td>{props.datas.time_in}</td>
			<td>{props.datas.time_out}</td>
			<td>{props.datas.date.substring(0, 10)}</td>
		</tr>
	);
};
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
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					<h3>Logged Exercises</h3>
					<table className='table'>
						<thead className='thead-light'>
							<tr>
								<th>Name</th>
								<th>Date</th>
								<th>Position</th>
								<th>Time In</th>
								<th>Time Out</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td />
								<td />
							</tr>
						</tbody>
					</table>
				</div>
			);
		}
	}
}

export default DataList;
