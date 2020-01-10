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
				<div className='col-md-4 col-sm-4'>
					<div className='card'>
						<img src={img1} alt='img' />
						<p className='m-auto'>
							<b>Timer</b>
						</p>
						<p>
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
							simply because it is pain...
						</p>
					</div>
				</div>
				<div className='col-md-4 col-sm-4'>
					<div className='card'>
						<img src={img2} alt='img' />
						<p className='m-auto'>
							<b>Watch</b>
						</p>
						<p>
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
							simply because it is pain...
						</p>
					</div>
				</div>
				<div className='col-md-4 col-sm-4'>
					<div className='card'>
						<img src={img3} alt='img' />
						<p className='m-auto'>
							<b>Clock</b>
						</p>
						<p>
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
							simply because it is pain...
						</p>
					</div>
				</div>
				<div className='col-md-4 col-sm-4'>
					<div className='card'>
						<img src={img4} alt='img' />
						<p className='m-auto'>
							<b>Code</b>
						</p>
						<p>
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
							simply because it is pain...
						</p>
					</div>
				</div>
				<div className='col-md-4 col-sm-4'>
					<div className='card'>
						<img src={img5} alt='img' />
						<p className='m-auto'>
							<b>Leave</b>
						</p>
						<p>
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
							simply because it is pain...
						</p>
					</div>
				</div>
				<div className='col-md-4 col-sm-4'>
					<div className='card'>
						<img src={img6} alt='img' />
						<p className='m-auto'>
							<b>Stopwatch</b>
						</p>
						<p>
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
							simply because it is pain...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Features;
