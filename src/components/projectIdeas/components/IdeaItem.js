import React from 'react';
import ProjectAside from '../../projectAside/ProjectAside';
import todo from '../ideasTest';

const IdeaItem = ({name, id}) => {
	const todoHandler = (event) => {
		console.log(event.currentTarget.id);
		const id = event.currentTarget.id;
		let todoObj = todo.find(item => item.id === +id ? item.title : null);
		console.log(todoObj);
		return <ProjectAside todo={todoObj} />
	}

	return (
		<li 
			id={id} 
			className="projectIdeas__item"
			onClick={(event) => todoHandler(event)}
		>
			{name}
		</li>
	);
};

export default IdeaItem;
