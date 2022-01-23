import React from 'react';
import TodoAside from './todoAside/TodoAside';

const ProjectAside = (props) => {
	return (
		<aside className="projectAside">
			<div className="projectAside__todo">
				<TodoAside title={props.title} todo={props.todo} />	
			</div>
			<div className="projectAside__notes">
				{props.notes}
			</div>
		</aside>
	);
};

export default ProjectAside;