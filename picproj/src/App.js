import React from 'react';
import ImageSlider from './components/ImageSlider';

const images = [
	{
		originalImage: `images/1.png`,
		alt: 1
	},
	{
		originalImage: `images/2.jpg`,
		alt: 2
	},
	{
		originalImage: `images/3.png`,
		alt: 3
	},
	{
		originalImage: `images/4.jpg`,
		alt: 4
	},
	{
		originalImage: `images/5.jpg`,
		alt: 5
	}
];

function App() {
	return (
		<div>
			<ImageSlider images={images} />
		</div>
	);
}

export default App;
