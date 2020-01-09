import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';
import notFound from '../../images/404-error-page-found_41910-364-removebg-preview.png';
import e404 from '../../images/404-error-page-templates.jpg';
const NotFound = () => {
	return (
		<div className='container-fluid notfound text-center'>
			<div className='err-page'>
				{/* <p>Oops...</p>
				<h1>404</h1>
				<h2>Not Found...</h2> */}
				<div>
					<img className='e404' src={e404} alt='' />
				</div>
				<img className='error' src={notFound} alt='notfound' />
			</div>

			<div>
				<Link to='/'>
					<input type='button' className='btn btn-primary ntf' value='Return to Homepage' />
				</Link>
			</div>
		</div>
	);
};
export default NotFound;
