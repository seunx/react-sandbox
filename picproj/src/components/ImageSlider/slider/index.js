import React from 'react';
import SlideIndex from '../slideIndex';

export default ({ images, index, end }) => {
	if (images === undefined || null) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<div className="img-a">
					<img
						className="img-slide"
						src={`https://june30thparty.s3.amazonaws.com/${images.Key}`}
						alt={images.LastModified}
					/>
				</div>
				<SlideIndex index={index} end={end} />
			</div>
		);
	}
};
