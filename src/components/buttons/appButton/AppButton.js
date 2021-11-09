import React from 'react';
import { Link } from 'react-router-dom';

const AppButton = (props) => {

	return (
		<div className="appButton__container">
			<Link className="appButton" to={props.url}>
				<img className="appButton__image" src={props.img} alt={props.btnName} />
				<p className="appButton__name">{props.btnName}</p>
			</Link>
		</div>
	);
};

export default AppButton;