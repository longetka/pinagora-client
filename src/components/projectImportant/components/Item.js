import React from 'react';

const Item = (props) => {
	return (
		<li key={props.index} className="projectImportant__item">
			{props.name}
		</li>
	);
};

export default Item;