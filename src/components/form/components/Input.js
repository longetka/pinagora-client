import React from 'react';

const Input = (props) => {
	return (
		<div className="input__container">
			<input className="input" type={props.inputType} name={props.name} placeholder={props.placeholder}/>
		</div>
	)
}

export default Input;