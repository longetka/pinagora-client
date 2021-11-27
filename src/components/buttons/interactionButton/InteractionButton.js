import React from 'react';

const InteractionButton = (props) => {
	return (
		<button className="interactionButton">
			<img className="interactionButton__img" src={props.img} alt={props.name} />
			<p className="interactionButton__name">{props.name}</p>
		</button>
	)
};

export default InteractionButton;