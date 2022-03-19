import React from 'react';

const User = ({image, firstName='', lastName=''}) => {

	return (
		<div className="user">
			<div className="user__avatar">
                <img src={image} alt='User Avatar' />
            </div>
			<p className="user__description">
				{firstName + " " + lastName}
			</p>
		</div>
	);
};

export default User;
