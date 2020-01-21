import React from 'react';
import Moment from 'react-moment';
const Table = (props) => {
	return (
		<div className='container-fluid text-center'>
			<h3>User Attendance Details</h3>
			<table className='table table-dark'>
				<thead className='thead-light'>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Time In</th>
					</tr>
				</thead>
				<tbody>
					{datas.map((data) => {
						return (
							<tr>
								<td>
									<p key={data._id}>{data.user.firstname + ' ' + data.user.lastname}</p>
								</td>
								<td>
									<p key={data._id}>
										<Moment format='YYYY-MM-DD'>{data.date}</Moment>
									</p>
								</td>
								<td>
									<p key={data._id}>
										<Moment format='h:mm:ss a'>{data.signIn}</Moment>
									</p>
								</td>
								{/* <td>
											<p key={data._id}>
												<Moment format='h:mm:ss a'>{data.signOut}</Moment>
											</p>
										</td> */}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
