import React from 'react';

const TodoAside = (props) => {
	// const itemsRender = props.todo.forEach(item => {
	// 	return (
	// 		<li className="todoAside__item">
	// 			{item}		
	// 		</li>
	// 	)
	// });

	return (
		<div className="todoAside">
			<h3 className="todoAside__title">
				{props.title}
			</h3>
			<ul className="todoAside__list">
				
			</ul>
		</div>
	);
};

export default TodoAside;