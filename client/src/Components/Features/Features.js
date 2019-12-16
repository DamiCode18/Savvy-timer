import React from 'react';
import './Features.css';
import img1 from '../../images/speed.png';
import img2 from '../../images/time (1).png';
import img3 from '../../images/logo.png';
import img4 from '../../images/time.png';
import img5 from '../../images/speed.png';
import img6 from '../../images/last-12-hours.png';

const Features = () => {
	return (
		<div className='container features m-auto text-center'>
			<h3 className='title mt-4'>Features</h3>
			<div className='row'>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img1} alt='img' />
						<p>TImer</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img2} alt='img' />
						<p>Watch</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img3} alt='img' />
						<p>Savvy</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img4} alt='img' />
						<p>Stopwatch</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img5} alt='img' />
						<p>Clock</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img6} alt='img' />
						<p>Time</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img1} alt='img' />
						<p>Leave</p>
					</div>
				</div>
				<div className='col-md-3 col-sm-4'>
					<div className='card'>
						<img src={img2} alt='img' />
						<p>Code</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Features;
