import React from 'react';
import Slider from './slider';
import Buttons from './buttons';
import './index.css';
export default class index extends React.Component {
	state = { currentImage: 0 };

	handleKeyDown = e => {
		if (e.keyCode === 39) {
			this.nextSlide();
		} else if (e.keyCode === 37) {
			this.prevSlide();
		} else {
			return;
		}
	};
	prevSlide = () => {
		const { currentImage } = this.state;
		const lastImage = this.props.images.length - 1;
		const resetImage = currentImage === 0;
		const counter = resetImage ? lastImage : currentImage - 1;
		this.setState({ currentImage: counter });
	};
	nextSlide = () => {
		const { currentImage } = this.state;
		const lastImage = this.props.images.length - 1;
		const resetImage = currentImage === lastImage;
		const counter = resetImage ? 0 : currentImage + 1;

		this.setState({ currentImage: counter });
	};
	render() {
		return (
			<div className="carousel">
				<Buttons direction="left" symbol="&#9664;" btnClick={this.prevSlide} />
				<Slider
					images={this.props.images[this.state.currentImage]}
					index={this.state.currentImage + 1}
					end={this.props.images.length}
				/>
				<Buttons direction="right" symbol="&#9654;" btnClick={this.nextSlide} />
			</div>
		);
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}
}
