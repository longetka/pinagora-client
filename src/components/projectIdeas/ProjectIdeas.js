import React from 'react';
import SortFolderButton from '../buttons/sortFolderButton/SortFolderButton';
import IdeaItem from './components/IdeaItem';
import idea from './ideasTest';

const ProjectIdeas = () => {
	const ideasRender = idea.map((value) => {
		return (
			<IdeaItem 
				name={value.title} 
				id={value.id}
			/>
		);
	});

	return (
		<div className="projectIdeas">
			<div className="projectIdeas__head">
				<h1 className="projectIdeas__title">Идеи</h1>
				<SortFolderButton />
			</div>
			
			<div className="projectIdeas__ideas">
				<ul className="projectIdeas__list">
					{ideasRender}
				</ul>
			</div>
		</div>
	);
};

export default ProjectIdeas;