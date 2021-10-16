import React from 'react';

const Input = (props) => {
	return (
		<div className="input__container">
			<label className="input__label" htmlFor={props.id}>
				<img src={props.icon} alt={props.iconAltName} />
			</label>
			<input className="input" type={props.inputType} id={props.id} name={props.id} placeholder={props.placeholder}/>
		</div>
	)
}

export default Input;