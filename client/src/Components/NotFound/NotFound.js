import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';
// import notFound from '../../images/notfound.png';
const NotFound = () => {
	return (
		<div className='container-fluid notfound'>
			{/* <img src={notFound} alt='notfound' /> */}
			<Link to='/'>
				<input type='button' className='btn btn-danger ntf' value='Return to Homepage' />
			</Link>
		</div>
	);
};
export default NotFound;
