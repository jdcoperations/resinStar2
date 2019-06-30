import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SlidePanel.css';
import lorem from './images/lorem-photo.jpg';
import pen from './images/pen.jpg';
import bowl from './images/bowl.jpg';
import ele from './images/ele.jpeg';

var Carousel = require('react-responsive-carousel').Carousel;

const SlidePanel = () => {
	return (
		
		<div className="biggy">
			<div className="zone container">
			<Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} dynamicHeight={true} centerMode={false} >
				<div className="mySlides fade">
					<img src={lorem} alt="an "/>
					<p className="legend">Legend 1</p>
				</div>
				<div className="mySlides fade">
					<img src={pen} alt="an "/>
					<p className="legend">Legend 2</p>
				</div>
				<div className="mySlides fade">
				    <img src={bowl} alt="an "/>
				    <p className="legend">Legend 3</p>
				</div>
				<div class="mySlides fade">
					<img src={ele} alt="an "/>
					<p className="legend">Legend 4</p>
				</div>
			</Carousel>	
			</div>
			<showSlides />
		</div>
		
	)
}

export default SlidePanel;