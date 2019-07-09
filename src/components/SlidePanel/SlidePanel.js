import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SlidePanel.css';
import lorem from '../../images/img1-opt.jpg';
import pen from '../../images/img2-opt.jpg';
import bowl from '../../images/img3-opt.jpg';
import ele from '../../images/img4-opt.jpg';
import img5 from '../../images/img5-opt.jpg';
import img6 from '../../images/img6-opt.jpg';
import img7 from '../../images/img7-opt.jpg';


var Carousel = require('react-responsive-carousel').Carousel;

const SlidePanel = () => {
	return (
		
		<div className="biggy">
			<div className="zone container">
			<Carousel width={400} showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} dynamicHeight={true} showIndicators={false} centerMode={false} >
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
				<div class="mySlides fade">
					<img src={img5} alt="an "/>
					<p className="legend">Legend 4</p>
				</div>
				<div class="mySlides fade">
					<img src={img6} alt="an "/>
					<p className="legend">Legend 4</p>
				</div>
				<div class="mySlides fade">
					<img src={img7} alt="an "/>
					<p className="legend">Legend 4</p>
				</div>
				
			</Carousel>	
			</div>
			<showSlides />
		</div>
		
	)
}

export default SlidePanel;