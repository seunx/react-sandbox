import React from 'react';
import ImageSlider from './components/ImageSlider';
import axios from 'axios';

class App extends React.Component {
	state = { images: [] };
	getImages = () => {
		axios
			.get('http://localhost:3300/api/pictures')
			.then(res => {
				this.setState({ images: res.data.Contents });
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return <ImageSlider images={this.state.images} />;
	}

	componentDidMount() {
		this.getImages();
	}
}

export default App;
