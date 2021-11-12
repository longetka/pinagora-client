import React from 'react';
import apps from '../appField/buttonsData';
import AppButton from '../buttons/appButton/AppButton';

const NavAppField = () => {
	const appsData = apps.map((value, index) => {
		return (
			<AppButton 
				key={index}
				url={value.url}
				img={value.img}
				btnName={value.name}
			/>
		)
	});

	return (
		<div className="navAppField">
			{appsData}
		</div>
	)
};

export default NavAppField;