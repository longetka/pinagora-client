import React from 'react'

const Button = (props) => {
	return (
		<div className="button__container">
			<button className="button" type={props.btnType}>{props.btnName}</button>
		</div>
	)
}

export default Button;