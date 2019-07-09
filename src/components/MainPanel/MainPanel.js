import React from 'react';
import './MainPanel.css';
import loremphoto from '../../images/img11-opt.jpg';
import pen from '../../images/img10-opt.jpg';

const MainPanel = () => {
	return (
		<div className="mainZone grid-wrapper">
			<div className="box big" id="box1">
				<h2>About me:</h2>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
			<div className="box small" id="box2">
				<img src={loremphoto} alt="workshop " title="In the Workshop"/>
			</div>
			<div className="box small" id="box3">
				<img src={pen} alt="workshop " title="In the Workshop"/>
			</div>
			<div className="box big" id="box4">
				<h2>Resin:</h2>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
			
		</div>
	)
}

export default MainPanel;