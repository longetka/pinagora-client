import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const PhotoFrame = () => {
	const [renderImages, setImages] = useState([]);
	axios.get('https://api.unsplash.com/photos/?client_id=Gr64YT66tcRHyjmPVjALjtjvB6-6q91Qkey8a8gePW0')
		.then((value) => {
			const images = value.data;
			setImages(images.map((img, index) => {
				return (
					<img className="photoFrame__img" src={img.urls.small} alt={img.alt_description} key={index}/>
				)
			}))
		})
		.catch(e => e.message)

	return (
		<div className="photoFrame">
			{renderImages}
		</div>
	);
};

export default PhotoFrame;