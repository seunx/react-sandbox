import React from 'react';
import ImageSlider from './components/ImageSlider';

const images = [
	{
		originalImage: `https://testpicproj.s3.us-east-2.amazonaws.com/1.png`,
		alt: 1
	},
	{
		originalImage: `https://testpicproj.s3.us-east-2.amazonaws.com/2.jpg`,
		alt: 2
	},
	{
		originalImage: `https://testpicproj.s3.us-east-2.amazonaws.com/3.png`,
		alt: 3
	},
	{
		originalImage: `https://testpicproj.s3.us-east-2.amazonaws.com/4.jpg`,
		alt: 4
	},
	{
		originalImage: `https://testpicproj.s3.us-east-2.amazonaws.com/5.jpg`,
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
