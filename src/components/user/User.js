import React from 'react';

const User = (props) => {

	return (
		<div className="user">
			<div className="user__avatar"></div>
			<p className="user__description">
				{props.firstName + " " + props.lastName}
			</p>
		</div>
	);
};

export default User;