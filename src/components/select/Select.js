import React from 'react';
import OptionButton from '../buttons/optionButton/OptionButton';

const Select = (props) => {
	const renderInputs = props.inputs.map((value, index) => {
		return (
			<OptionButton 
                key={index} 
                name={value.name} 
                value={value.value} 
            />
		);
	});

	return (
		<div className="select">
			{renderInputs}
		</div>
	);
};

export default Select;
