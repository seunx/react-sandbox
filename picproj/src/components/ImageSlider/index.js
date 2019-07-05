import React from 'react';
import Slider from './slider';
import Buttons from './buttons';
import './index.css';

export default function index(props) {
	return (
		<div>
			<Slider images={props.images} />
			<Buttons />
		</div>
	);
}
