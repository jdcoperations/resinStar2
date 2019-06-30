import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<header className="sticky">
		{/*<nav>
			<ul className="main-nav">
				<li> <a className="selected" href="index.js">About</a></li>
				<li> <a href="gallery.js">Gallery</a></li>
		*/}		{/*<li> <a href="resin_2.html">Resin</a></li>
				<li> <a href="stone_2.html">Stone</a></li> */}
		{/*}		<li className="rhs-nav"><a onClick={() => {document.location.href = "/contact.js";}}> Contact</a></li>
			</ul>
		</nav>*/}
		<div className="main-nav heading">Welcome to Resin Star!</div>
	</header>
	)
}

export default Navigation;