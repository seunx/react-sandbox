import React from 'react';

export default props => {
	return (
		<>
			{props.images.map((image, i) => (
				<img
					className="img-carousel"
					key={i}
					src={require(`../../../${image.originalImage}`)}
					alt={image.alt}
				/>
			))}
		</>
	);
};
