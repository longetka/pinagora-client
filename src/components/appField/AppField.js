import React from 'react';
import AppButton from '../buttons/appButton/AppButton';
import buttonsData from './buttonsData';

const AppField = () => {
	const buttons = buttonsData.map((value, index) => {
		return (
			<AppButton 
				key={index}
				url={value.url}
				img={value.img}
				btnName={value.name}
			/>
		)
	})	
	return (
		<div className="appField">
			{buttons}
		</div>
	)
};

export default AppField;