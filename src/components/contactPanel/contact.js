import React from 'react';
import './contact.css';

const Contact = () => {
	return (
		<div className="mainZone grid-wrapper">
			<div className="box full" id="box1">
				<h2>Contact:</h2>
				Please complete the form below and I will reply to you as soon as possible:
				<form method="GET">
					<div className="form">
						<div className="formPadding">
							<input type="text" name="FirstNameField" placeholder="First Name"/>
						</div>
						<div className="formRight">
							<textarea row="8" type="text" placeholder="Your message..."></textarea>
						</div>
						<div className="formPadding">
							<input type="text" name="SurnameField" placeholder="Surname"/>
						</div>
						<div className="formPadding">
							<input type="email" name="EmailField" placeholder="Email Address"/>
						</div>
						<div className="formPadding">
							<input type="tel" name="PhoneField" placeholder="Phone Number"/>
						</div>
						
						<div className="full formPadding">
							<button type="button" onclick="alert('form will be submitted...')">Submit</button>
						</div>
					</div>
				</form>
			</div>

			
		</div>
	)

}

export default Contact;