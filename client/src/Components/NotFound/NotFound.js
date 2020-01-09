import React from 'react';
import './NotFound.css';
// import notFound from '../../images/notfound.png';
const NotFound = () => {
	return (
		<div className='container-fluid notfound'>
			{/* <img src={notFound} alt='notfound' /> */}
			<button className='btn btn-danger ntf'>Return to Homepage</button>
		</div>
	);
};
export default NotFound;
