import React from 'react';


const TaskCard = (props) => {
	const tasksListRender = props.tasks.map((value, index) => {
		return (
			<li className="taskCard__item" key={index}>
				{value}
			</li>
		);
	});

	return (
		<div className="taskCard">
			<h3 className="taskCard__title">{props.title}</h3>
			<div className="taskCard__listTask">
				<ol className="taskCard__list">
					{tasksListRender}
				</ol>
			</div>
		</div>
	);
};

export default TaskCard;