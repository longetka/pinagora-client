import React from 'react';

const InfoCardField = (props) => {
	return (
		<div className="infoCardField">
			<p className="infoCardField__label">{props.label}</p>
			<p className="infoCardField__data">{props.data}</p>
		</div>
	);
};

export default InfoCardField;