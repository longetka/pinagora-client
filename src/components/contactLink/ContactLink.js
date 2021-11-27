import React from 'react';

const ContactLink = (props) => {
	return (
		<div className="contactLink">
			<img 
				className="contactLink__avatar" 
				src={props.avatar} 
				alt=""
				width="90px"
				height="90px"
			/>
			<div className="contactLink__name">
				<p className="font-secondary">{props.name}</p>
			</div>
		</div>
	)
};

export default ContactLink;